"""Structural output checks. No claim of architectural or visual approval."""
import argparse, hashlib, json, struct
from pathlib import Path

parser=argparse.ArgumentParser()
parser.add_argument("--catalog",required=True)
parser.add_argument("--out",required=True)
args=parser.parse_args()
models=json.loads(Path(args.catalog).read_text(encoding="utf-8-sig"))["models"]
root=Path(args.out)
rows=[]; seen=set()
def glb_info(path):
    data=path.read_bytes()
    magic,version,length=struct.unpack_from("<4sII",data)
    if magic!=b"glTF" or version!=2 or length!=len(data):
        raise ValueError("Invalid GLB header")
    size,typ=struct.unpack_from("<I4s",data,12)
    if typ!=b"JSON" or size+20>len(data):raise ValueError("Invalid JSON chunk")
    doc=json.loads(data[20:20+size].decode("utf-8"))
    if not doc.get("meshes") or not doc.get("scenes"):raise ValueError("Empty model")
    if not doc.get("accessors"):raise ValueError("No mesh accessors")
    return len(data), len(doc["meshes"]), hashlib.sha256(data).hexdigest()
def png_info(path):
    with path.open("rb") as f:head=f.read(24)
    if len(head)!=24 or head[:8]!=b"\x89PNG\r\n\x1a\n" or head[12:16]!=b"IHDR":
        raise ValueError("Invalid PNG")
    w,h=struct.unpack(">II",head[16:24])
    if min(w,h)<300:raise ValueError("Preview too small")
    return [w,h]
for m in models:
    ident=m["id"];folder=root/ident
    row={"id":ident,"status":"FAIL"}
    try:
        size,count,sha=glb_info(folder/"house.glb")
        if sha in seen:raise ValueError("Duplicate GLB")
        seen.add(sha)
        front=png_info(folder/"front.png");rear=png_info(folder/"rear.png")
        if front!=rear:raise ValueError("Preview dimensions mismatch")
        if hashlib.sha256((folder/"front.png").read_bytes()).digest()==hashlib.sha256((folder/"rear.png").read_bytes()).digest():
            raise ValueError("Identical front and rear")
        report=json.loads((folder/"qa.json").read_text(encoding="utf-8"))
        if report["id"]!=ident or not report.get("openings"):raise ValueError("Incomplete openings report")
        if any(min(x["width_m"],x["height_m"])<=0 for x in report["openings"]):raise ValueError("Invalid openings")
        if (folder/"house.blend").stat().st_size<=0:raise ValueError("Missing Blender source")
        row.update(status="PASS_TECHNICAL",bytes=size,meshes=count,device=report["device"],preview_px=front,openings=len(report["openings"]),sha256=sha)
    except Exception as exc:row["error"]=str(exc)
    rows.append(row)
report={"scope":"file integrity and uniqueness only; visual, geometric, engineering and pricing review required",
        "total":len(rows),"passed":sum(r["status"]=="PASS_TECHNICAL" for r in rows),"models":rows}
(root/"batch-qa.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps(report,ensure_ascii=False,indent=2))
raise SystemExit(0 if report["passed"]==report["total"] else 1)
