# KASKAD original exterior factory, Blender 4.5+/5.x. No external assets.
# Run: blender -b -t 8 --python factory.py -- --catalog catalog.json --out output --id K100-01
import argparse, json, math, sys
from pathlib import Path
import bpy
from mathutils import Vector
from math import sin, cos, pi
import random

p=argparse.ArgumentParser()
p.add_argument("--catalog", required=True)
p.add_argument("--out", required=True)
p.add_argument("--id", default="K100-01")
p.add_argument("--samples",type=int,default=32)
p.add_argument("--device",choices=["auto","CUDA","OPTIX","CPU"],default="auto")
p.add_argument("--width",type=int,default=1000)
p.add_argument("--assets",required=True)
p.add_argument("--layout",default=None)
args=p.parse_args(sys.argv[sys.argv.index("--")+1:])
models=json.loads(Path(args.catalog).read_text(encoding="utf-8-sig"))["models"]
layout=json.loads(Path(args.layout).read_text(encoding="utf-8-sig")) if args.layout else None
out=Path(args.out);out.mkdir(parents=True,exist_ok=True)
selected=[m for m in models if args.id=="all" or m["id"] in args.id.split(",")]
if not selected: raise ValueError("Unknown model ID")
def material(name,color,rough=.5,noise=0,metal=0):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
    nt=m.node_tree;bs=nt.nodes.get("Principled BSDF")
    bs.inputs["Base Color"].default_value=(*color,1)
    bs.inputs["Roughness"].default_value=rough
    bs.inputs["Metallic"].default_value=metal
    if noise:
        tex=nt.nodes.new("ShaderNodeTexNoise");tex.inputs["Scale"].default_value=65
        tex.inputs["Detail"].default_value=2
        bump=nt.nodes.new("ShaderNodeBump");bump.inputs["Strength"].default_value=noise
        bump.inputs["Distance"].default_value=.025
        nt.links.new(tex.outputs["Fac"],bump.inputs["Height"]);nt.links.new(bump.outputs["Normal"],bs.inputs["Normal"])
    return m
def brick_material(m):
    n=m.node_tree.nodes;l=m.node_tree.links;bs=n.get("Principled BSDF")
    geo=n.new("ShaderNodeNewGeometry")
    pos=n.new("ShaderNodeSeparateXYZ");l.new(geo.outputs["Position"],pos.inputs[0])
    norm=n.new("ShaderNodeSeparateXYZ");l.new(geo.outputs["Normal"],norm.inputs[0])
    ab=n.new("ShaderNodeMath");ab.operation="ABSOLUTE";l.new(norm.outputs["X"],ab.inputs[0])
    mix=n.new("ShaderNodeMixRGB");l.new(ab.outputs[0],mix.inputs[0]);l.new(pos.outputs["X"],mix.inputs[1]);l.new(pos.outputs["Y"],mix.inputs[2])
    uv=n.new("ShaderNodeCombineXYZ");l.new(mix.outputs[0],uv.inputs[0]);l.new(pos.outputs["Z"],uv.inputs[1])
    brick=n.new("ShaderNodeTexBrick");brick.offset=.5;brick.offset_frequency=2
    brick.inputs["Scale"].default_value=1
    brick.inputs["Brick Width"].default_value=.25;brick.inputs["Row Height"].default_value=.075
    brick.inputs["Mortar Size"].default_value=.006
    brick.inputs["Color1"].default_value=(.30,.10,.047,1);brick.inputs["Color2"].default_value=(.49,.20,.10,1)
    brick.inputs["Mortar"].default_value=(.38,.34,.27,1)
    l.new(uv.outputs[0],brick.inputs["Vector"]);l.new(brick.outputs["Color"],bs.inputs["Base Color"])
    bump=n.new("ShaderNodeBump");bump.invert=True;bump.inputs["Strength"].default_value=.38;bump.inputs["Distance"].default_value=.012
    l.new(brick.outputs["Fac"],bump.inputs["Height"]);l.new(bump.outputs["Normal"],bs.inputs["Normal"])
def photo_material(mat,asset,scale):
    root=Path(args.assets);nt=mat.node_tree;n=nt.nodes;l=nt.links;bs=n.get("Principled BSDF")
    uv=n.new("ShaderNodeTexCoord");mapping=n.new("ShaderNodeVectorMath");mapping.operation="SCALE";mapping.inputs[3].default_value=scale;l.new(uv.outputs["UV"],mapping.inputs[0])
    def tex(role,linear=False):
        t=n.new("ShaderNodeTexImage");t.image=bpy.data.images.load(str(root/(asset+"_"+role+".jpg")),check_existing=True)
        if linear:t.image.colorspace_settings.name="Non-Color"
        t.image.pack();l.new(mapping.outputs[0],t.inputs["Vector"]);return t
    c=tex("color");rough=tex("roughness",True);normal=tex("normal",True)
    l.new(c.outputs["Color"],bs.inputs["Base Color"]);l.new(rough.outputs["Color"],bs.inputs["Roughness"])
    nm=n.new("ShaderNodeNormalMap");nm.inputs["Strength"].default_value=.55;l.new(normal.outputs["Color"],nm.inputs["Color"]);l.new(nm.outputs["Normal"],bs.inputs["Normal"])
def world_uv(o):
    if o.type!="MESH":return
    me=o.data;uv=me.uv_layers.active or me.uv_layers.new(name="UVMap")
    for f in me.polygons:
        normal=f.normal;axis=max(range(3),key=lambda i:abs(normal[i]))
        for i in f.loop_indices:
            v=o.matrix_world@me.vertices[me.loops[i].vertex_index].co
            uv.data[i].uv=(v.y,v.z) if axis==0 else ((v.x,v.z) if axis==1 else (v.x,v.y))
def solid(name,verts,faces,mat):
    me=bpy.data.meshes.new(name);me.from_pydata(verts,[],faces);me.update()
    obj=bpy.data.objects.new(name,me);bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    # Consistent face orientation for closed wall and roof objects.
    import bmesh
    bm=bmesh.new();bm.from_mesh(me);bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(me);bm.free()
    return obj
def box(name,x,y,z,w,d,h,mat,bevel=0):
    if min(w,d,h)<1e-5:return None
    v=[(x+i*w,y+j*d,z+k*h) for k in (0,1) for j in (0,1) for i in (0,1)]
    o=solid(name,v,[(0,2,3,1),(4,5,7,6),(0,1,5,4),(1,3,7,5),(3,2,6,7),(2,0,4,6)],mat)
    if bevel:
        b=o.modifiers.new("Edge detail","BEVEL");b.width=bevel;b.segments=2
        o.modifiers.new("Normals","WEIGHTED_NORMAL")
    return o
def roof_panel(name,pts,mat,th=.12):
    o=solid(name,pts,[tuple(range(len(pts)))],mat)
    mod=o.modifiers.new("Roof thickness","SOLIDIFY");mod.thickness=th;mod.offset=0
    return o
def aim(o,target):o.rotation_euler=(Vector(target)-o.location).to_track_quat("-Z","Y").to_euler()
def build(m):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene=bpy.context.scene
    scene.unit_settings.system="METRIC"
    plan=layout if layout and layout["id"]==m["id"] else None
    facade=material("Facade plaster or brick tone",{"cream":(.72,.65,.54),"sand":(.58,.46,.32),"brick":(.33,.115,.068)}[m["facade"]],.8,.25)
    roof=material("Standing seam roof tone",(.055,.072,.082) if m["roofMat"]=="dark" else (.14,.17,.19),.42,.13,.3)
    dark=material("Anodized frame",(.045,.052,.05),.32,0,.4)
    glass=material("Architectural glazing",(.58,.68,.72),.12,0,0)
    gbs=glass.node_tree.nodes.get("Principled BSDF");gbs.inputs["Transmission Weight"].default_value=.62;gbs.inputs["IOR"].default_value=1.45
    interior=material("Interior warm plaster",(.70,.65,.56),.85)
    curtain=material("Linen interior curtain",(.56,.53,.47),.88,.12)
    entrydoor=material("Dark insulated entry door",(.09,.07,.05),.46,.10)
    pathstone=material("Paving stone",(.35,.34,.30),.85,.20)
    wood=material("Timber",(.32,.16,.065),.55,.15)
    foundation=material("Plinth",(.18,.18,.16),.85,.3)
    stone=material("Paving",(.48,.45,.39),.85,.2)
    grass=material("Garden",(.15,.23,.10),.95,.2)
    trim=material("Fascia",(.12,.13,.12),.55)
    photo_material(facade,"brick_wall_09" if m["facade"]=="brick" else "white_plaster_02",.5)
    pale=material("Warm limestone trim",(.67,.61,.51),.78,.12)
    metal=material("Roof seams",(.065,.085,.095),.42,0,.5)
    leaf=material("Leaves",(.10,.22,.055),.9,.15)
    leaf2=material("Leaves light",(.17,.31,.08),.9,.1)
    window_schedule=[];net_wall=0.0
    ident=m["id"]
    entry=m.get("entry","modern")
    wingmat=material("Wing natural warm plaster",(.53,.45,.34),.82,.18)
    gablemat=material("Gable warm timber",(.24,.12,.045),.65,.17)
    if ident=="K75-01":gablemat=wood
    pl=m["plinth"];height=m["storeyHeight"];th=.30
    b=m["main"];full=2 if m["levels"].startswith("2") else 1
    attic="attic" in m["levels"]
    blocks=[dict(b,use="living",floors=full,attic=attic)]+[dict(w,floors=1,attic=False) for w in m["wings"]]
    # Axis aligned shell with real cut-outs. Wall coordinates are measured along each facade.
    def wall(q,side,z0,H,openings,tag):
        nonlocal net_wall
        x,y,w,d=q["x"],q["z"],q["w"],q["d"]
        L=w if side in ("front","back") else d-2*th
        def part(n,u,z,du,dz,mat,depth=th,inset=0,bevel=0):
            if side=="front":return box(n,x+u,y+inset,z,du,depth,dz,mat,bevel)
            if side=="back":return box(n,x+u,y+d-inset-depth,z,du,depth,dz,mat,bevel)
            if side=="left":return box(n,x+inset,y+th+u,z,depth,du,dz,mat,bevel)
            return box(n,x+w-inset-depth,y+th+u,z,depth,du,dz,mat,bevel)
        valid=[]
        for u,z,ow,oh,kind in openings:
            if u>=.16 and u+ow<=L-.16 and z>=0 and z+oh<=H+.0001:
                if not any(max(u,a)<min(u+ow,a+aw)-1e-6 and max(z,c)<min(z+oh,c+ah)-1e-6 for a,c,aw,ah,k in valid):
                    valid.append((u,z,ow,oh,kind))
        if tag=="main" and side in m.get("openings",{}) and len(valid)!=len(openings):raise ValueError("Invalid specified opening: "+ident+" "+side)
        xs=sorted(set([0,L]+[v for u,z,ow,oh,k in valid for v in (u,u+ow)]))
        zs=sorted(set([0,H]+[v for u,z,ow,oh,k in valid for v in (z,z+oh)]))
        for a,c in zip(xs,xs[1:]):
            for low,hi in zip(zs,zs[1:]):
                if any(u<(a+c)/2<u+ow and z<(low+hi)/2<z+oh for u,z,ow,oh,k in valid):continue
                part(tag+" wall",a,z0+low,c-a,hi-low,wingmat if tag!="main" else facade)
                net_wall+=(c-a)*(hi-low)
        for u,z,ow,oh,kind in valid:
            window_schedule.append({"block":tag,"side":side,"kind":kind,"offset_m":u,"sill_m":z,"width_m":ow,"height_m":oh,"area_m2":round(ow*oh,3)})
            Z=z0+z;f=.065
            for a,c in [(u,u+f),(u+ow-f,u+ow)]:part("Jamb",a,Z,c-a,oh,dark,.13,.09)
            for a,c in [(Z,Z+f),(Z+oh-f,Z+oh)]:part("Head/sill",u+f,a,ow-2*f,c-a,dark,.13,.09)
            glazed=kind in ("window","patio")
            part("Glazing" if glazed else "Door panel",u+f,Z+f,ow-2*f,oh-2*f,glass if glazed else entrydoor,.025,.135)
            if glazed:
                # Slightly recessed interior linen strips create real depth behind glass.
                if kind=="window" and oh>1.0:
                    for off in (0,.12,ow-.30,ow-.18):
                        part("Linen curtain",u+.04+off,Z+.03,.075,oh-.06,curtain,.025,.31)
                if kind=="patio":
                    part("Door handle",u+ow*.5+.11,Z+.90,.025,.23,metal,.035,.08)
            elif kind=="door":
                part("Entry handle",u+ow-.23,Z+.88,.045,.30,metal,.045,.08)
            if glazed:
                for k in range(1, max(2,math.ceil(ow/1.30))):
                    part("Mullion",u+ow*k/max(2,math.ceil(ow/1.30))-.025,Z+f,.05,oh-2*f,dark,.10,.085)
                if kind=="window":part("Sill",u-.045,Z-.045,ow+.09,.045,stone,.29,-.06)
    def beam_between(name,a,b,width,mat):
        av,bv=Vector(a),Vector(b);delta=bv-av
        if delta.length<.001:return
        bpy.ops.mesh.primitive_cube_add(size=1,location=(av+bv)/2)
        o=bpy.context.object;o.name=name;o.dimensions=(width,width,delta.length)
        o.rotation_euler=delta.to_track_quat("Z","Y").to_euler()
        o.data.materials.append(mat)
    def detailed_roof(name,pts):
        roof_panel(name,pts,roof)
        p=[Vector(v) for v in pts];low=sorted(p,key=lambda v:v.z)[:2];high=sorted(p,key=lambda v:v.z)[2:]
        low.sort(key=lambda v:(v.y,v.x));high.sort(key=lambda v:(v.y,v.x))
        a,b=low;c,d=(high[0],high[-1])
        # Parallel standing seams clipped to the trapezoid/triangle.
        # The endpoint on a hip edge is interpolated at constant eave coordinate.
        axis=(b-a).normalized()
        L=(b-a).length
        uc=(c-a).dot(axis);ud=(d-a).dot(axis)
        if uc>ud:c,d=d,c;uc,ud=ud,uc
        for k in range(1,max(1,math.ceil(L/.52))):
            u=k*.52
            if u>=L-.08:break
            aa=a+axis*u
            if u<uc and uc>1e-6:bb=a.lerp(c,u/uc)
            elif u>ud and L-ud>1e-6:bb=b.lerp(d,(L-u)/(L-ud))
            elif ud-uc>1e-6:bb=c.lerp(d,(u-uc)/(ud-uc))
            else:bb=c.copy()
            aa.z+=.075;bb.z+=.075
            beam_between("Raised roof seam",aa,bb,.022,metal)
        aa=a.copy();bb=b.copy();aa.z-=.045;bb.z-=.045
        beam_between("Eave fascia",aa,bb,.13,trim)
    def gable_end(q,y,z,h,back):
        x,w=q["x"],q["w"];mid=x+w/2
        # Original gable wall, optional actual central attic opening.
        window=(1.8 if ident=="K75-04" else 1.1) if q["attic"] else 0
        def top(a):return z+h*(1-abs(a-mid)/(w/2))
        def prism(name,poly):
            a=[(u,y,v) for u,v in poly];b=[(u,y+(-th if back else th),v) for u,v in poly]
            n=len(a);faces=[tuple(range(n)),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
            solid(name,a+b,faces,gablemat if ident in ("K75-01","K75-02") else (wingmat if q["x"]>0 else facade))
        if window and h>1.9:
            a,c=mid-window/2,mid+window/2;low=z+.20;high=z+(1.78 if ident=="K75-04" else 1.38)
            prism("Gable left",[(x,z),(a,z),(a,top(a))])
            prism("Gable right",[(c,z),(x+w,z),(c,top(c))])
            prism("Gable below window",[(a,z),(c,z),(c,low),(a,low)])
            prism("Gable over window",[(a,high),(c,high),(c,top(c)),(mid,z+h),(a,top(a))])
            yy=y-.11 if back else y+.07
            box("Attic glass",a+.06,yy,low+.06,window-.12,.05,high-low-.12,glass)
            for xx in (a,c-.06):box("Attic jamb",xx,yy-.025,low,.06,.12,high-low,dark)
            for zz in (low,high-.06):box("Attic frame",a,yy-.025,zz,window,.12,.06,dark)
            window_schedule.append({"block":"main attic","side":"back" if back else "front","kind":"window","width_m":window,"height_m":high-low,"area_m2":round(window*(high-low),3)})
        else:prism("Gable",[(x,z),(x+w,z),(mid,z+h)])
    for i,q in enumerate(blocks):
        x,y,w,d=q["x"],q["z"],q["w"],q["d"];garage=q["use"]=="garage"
        H=2.65 if garage else q["floors"]*height+(m["atticKnee"] if q["attic"] else 0)
        if i>0 and not garage:H-=.28 if q["roof"]=="flat" else .25
        tag="main" if i==0 else "wing"+str(i)
        box(tag+" plinth",x,y,0,w,d,pl,foundation,.015)
        box(tag+" floor",x+th,y+th,pl,w-2*th,d-2*th,.14,stone)
        for side in ("front","back","left","right"):
            L=w if side in ("front","back") else d-2*th
            op=[]
            touching=any(o is not q and ((side=="left" and abs(o["x"]+o["w"]-x)<.001) or (side=="right" and abs(x+w-o["x"])<.001)) and max(y,o["z"])<min(y+d,o["z"]+o["d"]) for o in blocks)
            if garage and side=="front":op=[(.4,0,w-.8,2.22,"garage")]
            elif not garage and not touching:
                for lev in range(q["floors"]):
                    z=lev*height
                    if side=="front" and i==0 and lev==0:op.append((L/2-.56,z,1.12,2.18,"door"))
                    count=2 if L>=5.6 else 1
                    for k in range(count):
                        u=L*(k+.5)/count;ww=min(1.65,L/count-.64)
                        if m["id"]=="K150-02":ww=min(2.3,L/count-.64)
                        if side=="front" and i==0 and lev==0 and abs(u-L/2)<ww/2+.7:continue
                        sill=.84;wh=1.35
                        if side=="back" and lev==0 and i==0 and k==0:
                            ww=min(2.5,L/count-.64);sill=0;wh=2.20
                        if ident=="K150-02":sill=.30;wh=1.95
                        if ident in ("K200-02","K200-05") and lev>0:wh=1.55
                        op.append((u-ww/2,z+sill,ww,wh,"patio" if side=="back" and lev==0 and i==0 and k==0 and sill==0 else "window"))
            if i==0 and side in m.get("openings",{}):op=m["openings"][side]
            if plan and i==0:op=plan["exterior_openings"][side]
            wall(q,side,pl,H,op,tag)
        z=pl+H;r=q["rise"];e=.35 if q["roof"]!="flat" else .14
        if q["roof"]=="flat":
            # No overlapping coplanar slabs between adjacent flat volumes.
            left=any(o is not q and abs(o["x"]+o["w"]-x)<.001 and max(y,o["z"])<min(y+d,o["z"]+o["d"]) for o in blocks)
            right=any(o is not q and abs(x+w-o["x"])<.001 and max(y,o["z"])<min(y+d,o["z"]+o["d"]) for o in blocks)
            le=0 if left else e;re=0 if right else e
            box("Flat roof",x-le,y-e,z,w+le+re,d+2*e,.19,roof,0)
            for o in blocks:
                if o is q or o["roof"]!="flat" or abs(x+w-o["x"])>=.001:continue
                start=max(y,o["z"]);end=min(y+d,o["z"]+o["d"])
                if end>start:box("Roof junction flashing",x+w-.075,start,z+.19,.15,end-start,.025,roof,0)
        else:
            a=(x-e,y-e,z-r*2*e/w);c=(x+w+e,y-e,a[2]);f=(x-e,y+d+e,a[2]);g=(x+w+e,y+d+e,a[2])
            if q["roof"]=="gable":
                s=(x+w/2,y-e,z+r);t=(x+w/2,y+d+e,z+r)
                gable_end(q,y,z,r,False);gable_end(q,y+d,z,r,True)
                detailed_roof("Left pitch",[a,s,t,f]);detailed_roof("Right pitch",[s,c,g,t]);beam_between("Ridge cap",(s[0],s[1],s[2]+.085),(t[0],t[1],t[2]+.085),.13,metal)
            else:
                ridge=min(d*.29,w*.40)
                s=(x+w/2,y+ridge,z+r);t=(x+w/2,y+d-ridge,z+r)
                for pts in ([a,c,s],[f,t,g],[a,s,t,f],[s,c,g,t]):detailed_roof("Hip pitch",pts)
                beam_between("Ridge cap",(s[0],s[1],s[2]+.085),(t[0],t[1],t[2]+.085),.13,metal)
    if plan:
        if abs(plan["width"]-b["w"])>.001 or abs(plan["depth"]-b["d"])>.001:raise ValueError("Plan and shell dimensions differ")
        # Actual door openings in all interior partitions, not surface drawings.
        for wall_spec in plan["walls"]:
            xx,yy,L=wall_spec["x"],wall_spec["y"],wall_spec["length"];T=plan["partition"];H=2.70;Z=pl+.14
            def segment(start,length,z,h):
                if wall_spec["axis"]=="x":box("Interior partition",xx+start,yy,z,length,T,h,interior)
                else:box("Interior partition",xx,yy+start,z,T,length,h,interior)
            pos=0
            for door in sorted(wall_spec["doors"],key=lambda d:d["start"]):
                start,width=door["start"],door["width"]
                segment(pos,start-pos,Z,H);segment(start,width,Z+2.05,H-2.05)
                pos=start+width
            segment(pos,L-pos,Z,H)
        # Closed interior ceiling blocks view into the attic.
        box("Interior ceiling",.30,.30,pl+2.88,b["w"]-.60,b["d"]-.60,.12,interior)
    pw,pd=m["porch"]["w"],m["porch"]["d"];px=m.get("entryCenter",b["w"]/2)-pw/2
    box("Porch platform",px,-pd,0,pw,pd,.28,stone,.025)
    columns=[px+.18,px+pw-.43]
    if entry=="veranda" and pw>7:columns=[px+.18,px+pw*.25,px+pw*.75,px+pw-.43]
    for x in columns:
        if entry in ("masonry","craftsman"):
            box("Masonry plinth",x-.09,-pd+.08,.18,.43,.43,.40,pale,.025)
            if entry=="craftsman":
                box("Pier base",x-.035,-pd+.135,.58,.32,.32,.47,pale,.015)
                box("Craftsman timber column",x+.015,-pd+.185,1.05,.22,.22,1.57,wood,.012)
            else:box("Masonry pier",x-.035,-pd+.135,.58,.32,.32,2.04,pale,.015)
        elif entry in ("modern","modernFrame","timberPortal"):
            box("Entry portal column",x,-pd+.19,.28,.25,.25,2.42,wood if entry=="timberPortal" else trim,.012)
        else:
            box("Post footing",x-.07,-pd+.12,.18,.36,.36,.22,foundation,.02)
            box("Supported timber post",x,-pd+.19,.40,.22,.22,2.24,wood,.012)
    box("Porch beam",px-.12,-pd-.10,2.62,pw+.24,.38,.18,wood if entry in ("gable","veranda","pergola") else trim,.015)
    if entry in ("gable","craftsman"):
        lo=2.80;hi=lo+min(1.15,pw*.24)
        a=(px-.18,-pd-.18,lo);c=(px+pw+.18,-pd-.18,lo)
        f=(px-.18,-.035,lo);g=(px+pw+.18,-.035,lo)
        s=(px+pw/2,-pd-.18,hi);t=(px+pw/2,-.035,hi)
        detailed_roof("Entrance left pitch",[a,s,t,f]);detailed_roof("Entrance right pitch",[s,c,g,t])
        roof_panel("Entrance timber gable",[a,c,s],wood,.08)
    elif entry=="pergola":
        for k in range(max(2,int(pw/.42))):
            box("Pergola rafter",px+k*.42,-pd-.14,2.80,.10,pd+.18,.16,wood,.01)
    else:
        box("Porch canopy",px-.20,-pd-.20,2.80,pw+.40,pd+.25,.20,roof,.02)
        if entry in ("modernFrame","timberPortal"):
            portal=wood if entry=="timberPortal" else trim
            box("Entry portal lintel",px-.10,-pd-.11,2.56,pw+.20,.32,.27,portal,.018)
            box("Entry side screen",px-.10,-pd+.18,.28,.16,pd-.18,2.50,portal,.012)
    box("Step",px+.3,-pd-.34,0,max(.8,pw-.6),.34,.14,stone,.015)
    if ident=="K75-05":
        w=b["w"];z=pl+height
        box("Floor cornice",-.035,-.06,z,w+.07,.085,.14,pale,.015)
        for x in (.04,w-.23):
            box("Corner pilaster",x,-.04,pl,.19,.08,2*height,pale,.012)
    tw=min(b["w"]*.70,6.5);tx=(b["w"]-tw)/2;ty=b["d"];td=3.0 if ident=="K75-03" else 2.4
    box("Rear terrace",tx,ty,0,tw,td,.28,stone,.025)
    if ident in ("K75-02","K75-03","K75-05"):
        for x in (tx+.10,tx+tw-.30):
            box("Terrace column",x,ty+td-.25,.28,.18,.18,2.40,wood,.01)
        box("Terrace beam",tx-.05,ty+td-.30,2.68,tw+.10,.26,.18,wood,.01)
        for k in range(max(2,int(tw/.45))):
            box("Terrace shade rafter",tx+k*.45,ty,2.86,.10,td,.14,wood,.008)
    # Eave gutters and downpipes; no decorative floating parts.
    for q in blocks:
        x,y,w,d=q["x"],q["z"],q["w"],q["d"];garage=q["use"]=="garage"
        H=2.65 if garage else q["floors"]*height+(m["atticKnee"] if q["attic"] else 0)
        if q is not blocks[0] and not garage:H-=.28 if q["roof"]=="flat" else .25
        if q["roof"]!="flat":
            z=pl+H-q["rise"]*.70/w-.08
            for xx in (x-.37,x+w+.37):
                beam_between("Rain gutter",(xx,y-.35,z),(xx,y+d+.35,z),.11,metal)
            # Downpipe close to front left corner, terminating above paved surface.
            xx=x-.075
            beam_between("Gutter outlet",(x-.37,y+.23,z),(xx,y+.23,z-.25),.065,metal)
            beam_between("Downpipe",(xx,y+.23,z-.25),(xx,y+.23,.23),.065,metal)
    # Deliberate facade accents only on blank walls; never cover openings.
    if ident=="K75-01":
        # Standing vertical timber battens flank the entry portal.
        for k in range(7):
            box("Entry timber batten",.19+k*.075,-.055,.35,.035,.055,2.52,wood,.004)
    if ident=="K75-03":
        for k in range(10):
            box("Entry privacy batten",.18+k*.055,-.06,.30,.025,.055,2.65,wood,.003)
    if ident=="K75-04":
        # Two attic windows are not needed: one generous central gable opening.
        for x in (.25,b["w"]-.43):
            box("Gable corner trim",x,-.05,.32,.15,.07,2.90,pale,.01)
    # Keep house meshes separate from presentation objects.
    house=list(scene.objects)
    bpy.context.view_layer.update()
    for o in house:
        if o.type=="MESH" and facade in list(o.data.materials):world_uv(o)
    folder=out/m["id"];folder.mkdir(exist_ok=True)
    bpy.ops.object.select_all(action="DESELECT")
    for o in house:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(folder/"house.glb"),export_format="GLB",use_selection=True)
    # Presentation objects excluded from GLB.
    maxX=max(q["x"]+q["w"] for q in blocks);maxY=max(q["z"]+q["d"] for q in blocks)
    box("Ground", -35,-35,-.24,70,70,.22,grass)
    center=m.get("entryCenter",b["w"]/2)
    box("Walkway",center-.75,-7,-.015,1.5,7-pd,.055,pathstone,.01)
    # A narrow perimeter blind area around the independent main volume.
    box("Front apron",-.70,-.70,.012,b["w"]+1.4,.70,.055,pathstone,.008)
    box("Left apron",-.70,0,.012,.70,b["d"],.055,pathstone,.008)
    box("Rear apron",-.70,b["d"],.012,b["w"]+1.4,.70,.055,pathstone,.008)
    if not m["wings"]:box("Right apron",b["w"],0,.012,.70,b["d"],.055,pathstone,.008)
    for j in range(1,10):
        yy=-7+j*.53
        if yy>=-pd:break
        box("Paving joint",center-.75,yy,.041,1.5,.016,.008,trim)
    # Remove the placeholder spherical foliage; use a real outdoor panorama.
    photo_material(grass,"leafy_grass",.35)
    for o in scene.objects:
        if o.type=="MESH" and grass in list(o.data.materials):world_uv(o)
    world=bpy.data.worlds.new("Photographed daylight");scene.world=world;world.use_nodes=True
    nt=world.node_tree;bg=nt.nodes.get("Background");env=nt.nodes.new("ShaderNodeTexEnvironment")
    env.image=bpy.data.images.load(str(Path(args.assets)/"meadow_2_environment.hdr"),check_existing=True);env.image.pack()
    nt.links.new(env.outputs["Color"],bg.inputs["Color"]);bg.inputs["Strength"].default_value=.85
    bpy.ops.object.camera_add();cam=bpy.context.object;scene.camera=cam
    cam.data.type="PERSP";cam.data.lens=43
    scene.render.engine="CYCLES";scene.cycles.samples=args.samples;scene.cycles.use_denoising=True
    device="CPU"
    def configure_device(kind):
        scene.cycles.device="CPU"
        if kind=="CPU":return "CPU"
        prefs=bpy.context.preferences.addons["cycles"].preferences
        prefs.compute_device_type=kind;prefs.refresh_devices()
        for d in prefs.devices:d.use=(d.type==kind)
        if not any(d.use for d in prefs.devices):raise RuntimeError("No "+kind+" device")
        scene.cycles.device="GPU";return kind
    choices=["OPTIX","CUDA","CPU"] if args.device=="auto" else ([args.device,"CPU"] if args.device!="CPU" else ["CPU"])
    def render_safe():
        nonlocal device
        for kind in choices:
            try:
                device=configure_device(kind)
                bpy.ops.render.render(write_still=True)
                return
            except Exception as exc:
                print("Render fallback",kind,str(exc),flush=True)
        raise RuntimeError("All render devices failed")
    scene.render.resolution_x=args.width;scene.render.resolution_y=round(args.width*.70);scene.render.resolution_percentage=100
    scene.render.image_settings.file_format="PNG"
    scene.render.film_transparent=False
    scene.view_settings.view_transform="AgX"
    target=(maxX/2,maxY/2,2.15 if full==1 else 3.25)
    radius=max(maxX,maxY)*1.65+2
    cam.location=(target[0]+radius*.72,target[1]-radius,target[2]+radius*.085);aim(cam,target)
    scene.render.filepath=str(folder/"front.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(folder/"house.blend"))
    render_safe()
    cam.location=(target[0]-radius*.65,target[1]+radius,target[2]+radius*.10);aim(cam,target)
    scene.render.filepath=str(folder/"rear.png");render_safe()
    report={"id":m["id"],"device":device,"stage":"V76 exterior architectural concept; not construction documentation","openings":window_schedule,"rectangular_wall_segment_area_m2":round(net_wall,2),"limitations":["Wall segment area excludes gable triangles and includes shared walls","No structural or compliance checks","No complete engineering or furniture plan"],"mesh_objects":len(house)}
    if plan:
        report["layout"]={"rooms":[dict(r,area_m2=round(r["w"]*r["d"],2)) for r in plan["rooms"]],"net_rooms_m2":plan["net_rooms_m2"],"partition_segments":len(plan["walls"])}
        (folder/"layout.json").write_text(json.dumps(plan,ensure_ascii=False,indent=2),encoding="utf-8")
    (folder/"qa.json").write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf-8")
    print("KASKAD DONE",m["id"],device,flush=True)
for m in selected:build(m)
