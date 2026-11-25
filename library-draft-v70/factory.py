# KASKAD original exterior factory, Blender 4.5+/5.x. No external assets.
# Run: blender -b -t 8 --python factory.py -- --catalog catalog.json --out output --id K100-01
import argparse, json, math, sys
from pathlib import Path
import bpy
from mathutils import Vector
from math import sin, cos, pi

p=argparse.ArgumentParser()
p.add_argument("--catalog", required=True)
p.add_argument("--out", required=True)
p.add_argument("--id", default="K100-01")
p.add_argument("--samples",type=int,default=32)
p.add_argument("--width",type=int,default=1000)
args=p.parse_args(sys.argv[sys.argv.index("--")+1:])
models=json.loads(Path(args.catalog).read_text(encoding="utf-8-sig"))["models"]
out=Path(args.out);out.mkdir(parents=True,exist_ok=True)
selected=[m for m in models if args.id=="all" or m["id"]==args.id]
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
    window_schedule=[];net_wall=0.0
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
                        op.append((u-ww/2,z+.84,ww,1.35,"window"))
            wall(q,side,pl,H,op,tag)
        z=pl+H;r=q["rise"];e=.35 if q["roof"]!="flat" else .14
        if q["roof"]=="flat":box("Flat roof",x-e,y-e,z,w+2*e,d+2*e,.19,roof,.02)
        else:
            a=(x-e,y-e,z-r*2*e/w);c=(x+w+e,y-e,a[2]);f=(x-e,y+d+e,a[2]);g=(x+w+e,y+d+e,a[2])
            if q["roof"]=="gable":
                s=(x+w/2,y-e,z+r);t=(x+w/2,y+d+e,z+r)
                gable_end(q,y,z,r,False);gable_end(q,y+d,z,r,True)
                roof_panel("Left pitch",[a,s,t,f],roof);roof_panel("Right pitch",[s,c,g,t],roof)
            else:
                ridge=min(d*.29,w*.40)
                s=(x+w/2,y+ridge,z+r);t=(x+w/2,y+d-ridge,z+r)
                for pts in ([a,c,s],[f,t,g],[a,s,t,f],[s,c,g,t]):roof_panel("Hip pitch",pts,roof)
    pw,pd=m["porch"]["w"],m["porch"]["d"];px=(b["w"]-pw)/2
    box("Porch platform",px,-pd,0,pw,pd,.18,stone,.025)
    for x in (px+.16,px+pw-.38):
        box("Post footing",x-.07,-pd+.12,0,.36,.36,.38,foundation,.02)
        box("Supported porch post",x,-pd+.19,.38,.22,.22,2.22,wood,.012)
    box("Porch beam",px-.12,-pd-.10,2.60,pw+.24,.38,.20,wood,.015)
    box("Porch canopy",px-.20,-pd-.20,2.80,pw+.40,pd+.30,.13,roof,.02)
    box("Step",px+.65,-pd-.32,0,max(.8,pw-1.3),.32,.09,stone,.015)
    # Keep house meshes separate from presentation objects.
    house=list(scene.objects)
    folder=out/m["id"];folder.mkdir(exist_ok=True)
    bpy.ops.object.select_all(action="DESELECT")
    for o in house:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(folder/"house.glb"),export_format="GLB",use_selection=True)
    # Neutral landscaping, no external texture downloads.
    maxX=max(q["x"]+q["w"] for q in blocks);maxY=max(q["z"]+q["d"] for q in blocks)
    box("Garden", -12,-12,-.22,maxX+24,maxY+24,.20,grass)
    box("Walkway",b["w"]/2-.75,-8,-.025,1.5,8-pd,.055,stone,.01)
    for j in range(5):
        x=-1.6-j*.65;y=1+(j%3)*.9
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2,radius=.55,location=(x,y,.43))
        o=bpy.context.object;o.name="Shrub";o.scale=(1,.85,.85);o.data.materials.append(grass)
    world=bpy.data.worlds.new("Daylight");scene.world=world;world.use_nodes=True
    bg=world.node_tree.nodes.get("Background");bg.inputs[0].default_value=(.68,.78,.92,1);bg.inputs[1].default_value=.48
    bpy.ops.object.light_add(type="SUN",location=(3,-6,12));sun=bpy.context.object
    sun.rotation_euler=(math.radians(27),math.radians(-28),math.radians(-28));sun.data.energy=2.5;sun.data.angle=.12
    bpy.ops.object.light_add(type="AREA",location=(maxX*.65,-6,10));light=bpy.context.object;light.data.energy=850;light.data.shape="DISK";light.data.size=9;aim(light,(maxX/2,maxY/2,2))
    bpy.ops.object.camera_add();cam=bpy.context.object;scene.camera=cam
    cam.data.type="ORTHO";cam.data.ortho_scale=max(maxX,maxY)*1.75+3
    scene.render.engine="CYCLES";scene.cycles.samples=args.samples;scene.cycles.use_denoising=True
    device="CPU"
    try:
        prefs=bpy.context.preferences.addons["cycles"].preferences;prefs.compute_device_type="OPTIX";prefs.refresh_devices()
        for d in prefs.devices:d.use=(d.type=="OPTIX")
        if any(d.use for d in prefs.devices):scene.cycles.device="GPU";device="OPTIX"
    except Exception as e:print("OptiX fallback:",e,flush=True)
    scene.render.resolution_x=args.width;scene.render.resolution_y=round(args.width*.70);scene.render.resolution_percentage=100
    scene.render.image_settings.file_format="PNG"
    target=(maxX/2,maxY/2,2.6 if full==1 else 3.5)
    radius=max(maxX,maxY)*1.7
    cam.location=(target[0]+radius*.65,target[1]-radius,target[2]+radius*.50);aim(cam,target)
    scene.render.filepath=str(folder/"front.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(folder/"house.blend"))
    bpy.ops.render.render(write_still=True)
    cam.location=(target[0]-radius*.65,target[1]+radius,target[2]+radius*.50);aim(cam,target)
    scene.render.filepath=str(folder/"rear.png");bpy.ops.render.render(write_still=True)
    report={"id":m["id"],"device":device,"stage":"exterior draft; not construction documentation","openings":window_schedule,"rectangular_wall_segment_area_m2":round(net_wall,2),"limitations":["Wall segment area excludes gable triangles and includes shared walls","No internal partitions, structure or compliance checks","Procedural materials not product specifications"],"mesh_objects":len(house)}
    (folder/"qa.json").write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf-8")
    print("KASKAD DONE",m["id"],device,flush=True)
for m in selected:build(m)
