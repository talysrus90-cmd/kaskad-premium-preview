"""Concept-stage external envelope quantities for the V72 factory.
Not structural quantities or pricing. Reads actual generated opening schedules.
"""
import argparse,csv,json,math
from pathlib import Path
p=argparse.ArgumentParser()
p.add_argument("--catalog",required=True)
p.add_argument("--out",required=True)
args=p.parse_args()
root=Path(args.out)
models=json.loads(Path(args.catalog).read_text(encoding="utf-8-sig"))["models"]
results=[]
for m in models:
    ident=m["id"];folder=root/ident
    if not (folder/"qa.json").is_file():continue
    qa=json.loads((folder/"qa.json").read_text(encoding="utf-8"))
    assert qa["id"]==ident
    full=2 if m["levels"].startswith("2") else 1
    attic="attic" in m["levels"]
    b=m["main"]
    blocks=[dict(b,use="living",floors=full,attic=attic,tag="main")]
    blocks.extend(dict(w,floors=1,attic=False,tag="wing"+str(i)) for i,w in enumerate(m["wings"],1))
    for i,q in enumerate(blocks):
        q["height"]=2.65 if q["use"]=="garage" else q["floors"]*m["storeyHeight"]+(m["atticKnee"] if q["attic"] else 0)
        if i and q["use"]!="garage" and q["roof"]=="flat" and b["roof"]!="flat":q["height"]-=.28
    def overlap(q,o):
        return max(0,min(q["z"]+q["d"],o["z"]+o["d"])-max(q["z"],o["z"]))
    def adjacent(q,o,side):
        return o is not q and abs((o["x"]+o["w"]-q["x"]) if side=="left" else (q["x"]+q["w"]-o["x"]))<.001 and overlap(q,o)>0
    surfaces=[]
    roof_area=0
    for q in blocks:
        w,d,H=q["w"],q["d"],q["height"]
        for side in ("front","back","left","right"):
            gross=(w if side in ("front","back") else d)*H
            if side in ("front","back") and q["roof"]=="gable":gross+=w*q["rise"]/2
            shared=0
            if side in ("left","right"):
                for o in blocks:
                    if adjacent(q,o,side):shared+=overlap(q,o)*min(H,o["height"])
            openings=sum(o["width_m"]*o["height_m"] for o in qa["openings"] if o["side"]==side and (o["block"]==q["tag"] or (q["tag"]=="main" and o["block"]=="main attic")))
            net=gross-shared-openings
            if net<0:raise ValueError("negative facade area "+ident)
            surfaces.append({"block":q["tag"],"side":side,"gross_m2":round(gross,3),"shared_m2":round(shared,3),"openings_m2":round(openings,3),"net_exposed_m2":round(net,3)})
        if q["roof"]=="flat":
            e=.14;le=0 if any(adjacent(q,o,"left") for o in blocks) else e;re=0 if any(adjacent(q,o,"right") for o in blocks) else e
            roof_area+=(w+le+re)*(d+2*e)
        else:
            e=.35;r=q["rise"]
            a=(-e,-e,-r*2*e/w);c=(w+e,-e,a[2]);f=(-e,d+e,a[2]);g=(w+e,d+e,a[2])
            if q["roof"]=="gable":
                s=(w/2,-e,r);t=(w/2,d+e,r);faces=[[a,s,t,f],[s,c,g,t]]
            else:
                ridge=min(d*.29,w*.40);s=(w/2,ridge,r);t=(w/2,d-ridge,r);faces=[[a,c,s],[f,t,g],[a,s,t,f],[s,c,g,t]]
            for face in faces:
                aa=face[0]
                for i in range(1,len(face)-1):
                    u=[face[i][j]-aa[j] for j in range(3)];v=[face[i+1][j]-aa[j] for j in range(3)]
                    roof_area+=math.hypot(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])/2
    opening_kind={}
    for o in qa["openings"]:
        opening_kind[o["kind"]]=opening_kind.get(o["kind"],0)+o["width_m"]*o["height_m"]
    summary={"id":ident,"gross_floor_approx_m2":m["quantities"]["grossHeatedApprox"],"footprint_m2":m["quantities"]["footprintGross"],"facade_exposed_net_m2":round(sum(s["net_exposed_m2"] for s in surfaces),2),"window_openings_m2":round(opening_kind.get("window",0),2),"entry_openings_m2":round(opening_kind.get("door",0),2),"garage_openings_m2":round(opening_kind.get("garage",0),2),"main_and_wing_roof_surface_m2":round(roof_area,2),"rear_terrace_m2":round(min(b["w"]*.67,6.5)*2.4,2)}
    report={"basis":"V72 original concept geometry; not statutory area or tender quantities", "summary":summary,"facades":surfaces,"opening_schedule":qa["openings"],"excluded":["roof of porch, flashings, laps and waste","interior walls and stairs","foundation, reinforcement, slabs and engineering","costs and construction compliance"],"caveat":"Surface estimate only; shared side contacts deducted; roof transitions may require detailed reconciliation."}
    (folder/"quantities.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    results.append(summary)
if not results:raise SystemExit("No generated models found")
with (root/"quantities.csv").open("w",newline="",encoding="utf-8-sig") as f:
    writer=csv.DictWriter(f,fieldnames=list(results[0]),delimiter=";");writer.writeheader();writer.writerows(results)
print("Quantity passports:",len(results),"of",len(models))
raise SystemExit(0 if len(results)==len(models) else 1)
