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
args=p.parse_args(sys.argv[sys.argv.index("--")+1:])
models=json.loads(Path(args.catalog).read_text(encoding="utf-8-sig"))["models"]
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
    facade=material("Facade plaster or brick tone",{"cream":(.72,.65,.54),"sand":(.58,.46,.32),"brick":(.33,.115,.068)}[m["facade"]],.8,.25)
    roof=material("Standing seam roof tone",(.055,.072,.082) if m["roofMat"]=="dark" else (.14,.17,.19),.42,.13,.3)
    dark=material("Anodized frame",(.045,.052,.05),.32,0,.4)
    glass=material("Architectural glazing",(.18,.30,.35),.19,0,.38)
    wood=material("Timber",(.32,.16,.065),.55,.15)
    foundation=material("Plinth",(.18,.18,.16),.85,.3)
    stone=material("Paving",(.48,.45,.39),.85,.2)
    grass=material("Garden",(.15,.23,.10),.95,.2)
    trim=material("Fascia",(.12,.13,.12),.55)
    if m["facade"]=="brick":brick_material(facade)
    pale=material("Warm limestone trim",(.67,.61,.51),.78,.12)
    metal=material("Roof seams",(.065,.085,.095),.42,0,.5)
    leaf=material("Leaves",(.10,.22,.055),.9,.15)
    leaf2=material("Leaves light",(.17,.31,.08),.9,.1)
    window_schedule=[];net_wall=0.0
    ident=m["id"]
    entry={"K100-01":"gable","K100-03":"masonry","K100-04":"modern","K150-01":"pergola","K150-02":"modern","K150-03":"gable","K150-04":"modern","K200-01":"masonry","K200-02":"masonry","K200-03":"veranda","K200-04":"gable","K200-05":"masonry"}.get(ident,"modern")
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
        xs=sorted(set([0,L]+[v for u,z,ow,oh,k in valid for v in (u,u+ow)]))
        zs=sorted(set([0,H]+[v for u,z,ow,oh,k in valid for v in (z,z+oh)]))
        for a,c in zip(xs,xs[1:]):
            for low,hi in zip(zs,zs[1:]):
                if any(u<(a+c)/2<u+ow and z<(low+hi)/2<z+oh for u,z,ow,oh,k in valid):continue
                part(tag+" wall",a,z0+low,c-a,hi-low,facade)
                net_wall+=(c-a)*(hi-low)
        for u,z,ow,oh,kind in valid:
            window_schedule.append({"block":tag,"side":side,"kind":kind,"width_m":ow,"height_m":oh,"area_m2":round(ow*oh,3)})
            Z=z0+z;f=.065
            for a,c in [(u,u+f),(u+ow-f,u+ow)]:part("Jamb",a,Z,c-a,oh,dark,.13,.09)
            for a,c in [(Z,Z+f),(Z+oh-f,Z+oh)]:part("Head/sill",u+f,a,ow-2*f,c-a,dark,.13,.09)
            part("Glazing" if kind=="window" else "Door panel",u+f,Z+f,ow-2*f,oh-2*f,glass if kind=="window" else wood,.045,.135)
            if kind=="window":
                part("Mullion",u+ow*.5-.025,Z+f,.05,oh-2*f,dark,.10,.085)
                part("Sill",u-.045,Z-.045,ow+.09,.045,stone,.29,-.06)
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
        n=max(2,int((b-a).length/.52))
        for k in range(1,n):
            t=k/n;aa=a.lerp(b,t);bb=c.lerp(d,t);aa.z+=.075;bb.z+=.075
            beam_between("Raised roof seam",aa,bb,.022,metal)
        aa=a.copy();bb=b.copy();aa.z-=.045;bb.z-=.045
        beam_between("Eave fascia",aa,bb,.13,trim)
    def gable_end(q,y,z,h,back):
        x,w=q["x"],q["w"];mid=x+w/2
        # Original gable wall, optional actual central attic opening.
        window=1.1 if q["attic"] else 0
        def top(a):return z+h*(1-abs(a-mid)/(w/2))
        def prism(name,poly):
            a=[(u,y,v) for u,v in poly];b=[(u,y+(-th if back else th),v) for u,v in poly]
            n=len(a);faces=[tuple(range(n)),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
            solid(name,a+b,faces,facade)
        if window and h>1.9:
            a,c=mid-window/2,mid+window/2;low=z+.20;high=z+1.38
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
                        op.append((u-ww/2,z+sill,ww,wh,"window"))
            wall(q,side,pl,H,op,tag)
        z=pl+H;r=q["rise"];e=.35 if q["roof"]!="flat" else .14
        if q["roof"]=="flat":box("Flat roof",x-e,y-e,z,w+2*e,d+2*e,.19,roof,.02)
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
    pw,pd=m["porch"]["w"],m["porch"]["d"];px=(b["w"]-pw)/2
    box("Porch platform",px,-pd,0,pw,pd,.28,stone,.025)
    columns=[px+.18,px+pw-.43]
    if entry=="veranda" and pw>7:columns=[px+.18,px+pw*.25,px+pw*.75,px+pw-.43]
    for x in columns:
        if entry=="masonry":
            box("Masonry plinth",x-.09,-pd+.08,.18,.43,.43,.40,pale,.025)
            box("Masonry pier",x-.035,-pd+.135,.58,.32,.32,2.04,pale,.015)
        elif entry=="modern":
            box("Steel post",x,-pd+.19,.28,.17,.17,2.42,trim,.012)
        else:
            box("Post footing",x-.07,-pd+.12,.18,.36,.36,.22,foundation,.02)
            box("Supported timber post",x,-pd+.19,.40,.22,.22,2.24,wood,.012)
    box("Porch beam",px-.12,-pd-.10,2.62,pw+.24,.38,.18,wood if entry in ("gable","veranda","pergola") else trim,.015)
    if entry=="gable":
        lo=2.80;hi=lo+min(.82,pw*.2)
        a=(px-.18,-pd-.18,lo);c=(px+pw+.18,-pd-.18,lo)
        f=(px-.18,-.035,lo);g=(px+pw+.18,-.035,lo)
        s=(px+pw/2,-pd-.18,hi);t=(px+pw/2,-.035,hi)
        detailed_roof("Entrance left pitch",[a,s,t,f]);detailed_roof("Entrance right pitch",[s,c,g,t])
        roof_panel("Entrance timber gable",[a,c,s],wood,.08)
    elif entry=="pergola":
        for k in range(max(2,int(pw/.42))):
            box("Pergola rafter",px+k*.42,-pd-.14,2.80,.10,pd+.18,.16,wood,.01)
    else:
        box("Porch canopy",px-.20,-pd-.20,2.80,pw+.40,pd+.25,.16,roof,.02)
    box("Step",px+.3,-pd-.34,0,max(.8,pw-.6),.34,.14,stone,.015)
    if ident in ("K200-02","K200-05"):
        w=b["w"];z=pl+height
        box("Floor cornice",-.035,-.06,z,w+.07,.085,.14,pale,.015)
        for x in (.04,w-.23):
            box("Corner pilaster",x,-.04,pl,.19,.08,2*height,pale,.012)
    tw=min(b["w"]*.67,6.5);tx=(b["w"]-tw)/2;ty=b["d"];td=2.4
    box("Rear terrace",tx,ty,0,tw,td,.28,stone,.025)
    if ident in ("K150-01","K150-02","K200-03"):
        for x in (tx+.10,tx+tw-.30):
            box("Terrace column",x,ty+td-.25,.28,.18,.18,2.40,wood,.01)
        box("Terrace beam",tx-.05,ty+td-.30,2.68,tw+.10,.26,.18,wood,.01)
        for k in range(max(2,int(tw/.45))):
            box("Terrace shade rafter",tx+k*.45,ty,2.86,.10,td,.14,wood,.008)
    # Keep house meshes separate from presentation objects.
    house=list(scene.objects)
    folder=out/m["id"];folder.mkdir(exist_ok=True)
    bpy.ops.object.select_all(action="DESELECT")
    for o in house:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(folder/"house.glb"),export_format="GLB",use_selection=True)
    # Presentation objects excluded from GLB.
    maxX=max(q["x"]+q["w"] for q in blocks);maxY=max(q["z"]+q["d"] for q in blocks)
    box("Ground", -100,-100,-.24,200,200,.22,grass)
    box("Walkway",b["w"]/2-.75,-7,-.015,1.5,7-pd,.055,stone,.01)
    for j in range(1,10):
        yy=-7+j*.53
        if yy>=-pd:break
        box("Paving joint",b["w"]/2-.75,yy,.041,1.5,.016,.008,trim)
    rng=random.Random(1700+sum(map(ord,ident)))
    def foliage(x,y,z,r,mat):
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=3,radius=r,location=(x,y,z))
        o=bpy.context.object;o.data.materials.append(mat)
        for f in o.data.polygons:f.use_smooth=True
    for xx in (-1.0,maxX+1.0):
        for j in range(3):
            for k in range(6):
                ang=rng.random()*2*pi;rr=rng.random()*.32
                foliage(xx+cos(ang)*rr,-.25+j*1.05+sin(ang)*rr,.30+rng.random()*.23,.32,leaf if k%2 else leaf2)
    for xx in (-2.8,maxX+2.6):
        yy=maxY+1.6
        bpy.ops.mesh.primitive_cylinder_add(vertices=12,radius=.11,depth=2.2,location=(xx,yy,1.1))
        bpy.context.object.data.materials.append(wood)
        for k in range(8):
            ang=k*2*pi/8;foliage(xx+cos(ang)*.6,yy+sin(ang)*.6,2.7+rng.random()*.55,.85,leaf2 if k%2 else leaf)
    world=bpy.data.worlds.new("Daylight");scene.world=world;world.use_nodes=True
    nt=world.node_tree;bg=nt.nodes.get("Background")
    bg.inputs[0].default_value=(.69,.80,.98,1);bg.inputs[1].default_value=.75
    bpy.ops.object.light_add(type="SUN",location=(3,-6,12));sun=bpy.context.object
    sun.rotation_euler=(math.radians(37),math.radians(-31),math.radians(-25));sun.data.energy=2.8;sun.data.angle=.08
    bpy.ops.object.light_add(type="AREA",location=(maxX*.65,-6,10));light=bpy.context.object;light.data.energy=750;light.data.shape="DISK";light.data.size=9;aim(light,(maxX/2,maxY/2,2))
    bpy.ops.object.camera_add();cam=bpy.context.object;scene.camera=cam
    cam.data.type="PERSP";cam.data.lens=42
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
    target=(maxX/2,maxY/2,2.6 if full==1 else 3.5)
    radius=max(maxX,maxY)*1.65+2
    cam.location=(target[0]+radius*.65,target[1]-radius,target[2]+radius*.23);aim(cam,target)
    scene.render.filepath=str(folder/"front.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(folder/"house.blend"))
    render_safe()
    cam.location=(target[0]-radius*.65,target[1]+radius,target[2]+radius*.23);aim(cam,target)
    scene.render.filepath=str(folder/"rear.png");render_safe()
    report={"id":m["id"],"device":device,"stage":"exterior draft; not construction documentation","openings":window_schedule,"rectangular_wall_segment_area_m2":round(net_wall,2),"limitations":["Wall segment area excludes gable triangles and includes shared walls","No internal partitions, structure or compliance checks","Procedural materials not product specifications"],"mesh_objects":len(house)}
    (folder/"qa.json").write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf-8")
    print("KASKAD DONE",m["id"],device,flush=True)
for m in selected:build(m)
