"""Download selected CC0 assets with verification. No third-party packages."""
import argparse, hashlib, json, urllib.request
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument("--out",required=True);a=p.parse_args()
root=Path(a.out);root.mkdir(parents=True,exist_ok=True)
headers={"User-Agent":"Kaskad-Architecture-Library/1.0"}
def get(url):
    with urllib.request.urlopen(urllib.request.Request(url,headers=headers),timeout=45) as r:return r.read()
manifest=[]
for asset in ["brick_wall_09","white_plaster_02","leafy_grass","meadow_2"]:
    files=json.loads(get("https://api.polyhaven.com/files/"+asset))
    channels=[("hdri","2k","hdr","environment")] if asset=="meadow_2" else [("Diffuse","1k","jpg","color"),("nor_gl","1k","jpg","normal"),("Rough","1k","jpg","roughness")]
    for channel,res,ext,role in channels:
        entry=files[channel][res][ext];path=root/(asset+"_"+role+"."+ext)
        if path.exists() and hashlib.md5(path.read_bytes()).hexdigest()==entry["md5"]:pass
        else:
            data=get(entry["url"])
            if len(data)!=entry["size"] or hashlib.md5(data).hexdigest()!=entry["md5"]:raise ValueError("Asset checksum failed: "+asset+" "+role)
            path.write_bytes(data)
        manifest.append({"asset":asset,"role":role,"file":path.name,"source":"https://polyhaven.com/a/"+asset,"license":"CC0","sha256":hashlib.sha256(path.read_bytes()).hexdigest(),"size":path.stat().st_size})
        print("OK",path.name,path.stat().st_size,flush=True)
(root/"manifest.json").write_text(json.dumps(manifest,indent=2),encoding="utf-8")
