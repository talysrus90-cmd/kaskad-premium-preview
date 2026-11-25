# KASKAD V70 — first original concept meshes

13 original exterior OBJ meshes and shared MTL, catalog.json, dependency-free browser preview. Units metres, Y up. No copied third-party plans or images. Concept-stage only: window and door surfaces are visual panels, not cut openings; no internal room geometry, structural verification, site/utility design or cost estimates. 

Area labels 100/150/200 are approximate group names. Actual gross heated concept area is computed from exterior footprint and full floor count plus a 0.65 attic allowance, excluding garage and porch. This is not statutory or net usable floor area. The geometry is suitable for visual review and initial quantity extraction, not tender quantities. The production V69 files are untouched.

To view: open index.html with preview.js in same directory. To import: keep models/kaskad.mtl beside OBJ files. Next acceptance: visual comparison, actual wall openings, room layout, adaptive parametric integration with V69, construction assemblies, dated regional unit prices and quantity rules.


## Blender exterior factory (local workstation)

`factory.py` reconstructs schematic shells from `catalog.json`, cuts rectangular exterior wall openings, adds window frames and solid roof panels, exports GLB and saves BLEND and two renders per model. Run with Blender 4.5+ or 5.x; no third-party Python packages needed. Windows example:

```powershell
& $blender -b -t 8 --python-exit-code 1 --python factory.py -- --catalog catalog.json --out output --id K100-01 --device CUDA --samples 32 --width 1200
python qa_batch.py --catalog catalog.json --out output
```

Use `--id all` to generate the entire catalog; batch QA requires all model IDs. Use a new output folder for each run. The factory supports explicit CUDA, OptiX, CPU, or auto (with render fallback). The RTX 3090 pilot on Blender 5.2.2 encountered an OptiX kernel compilation error but completed on CUDA. No driver or system settings were changed.

Do not publish generated houses directly into V69. Technical QA checks GLB container validity, nonempty geometry, file uniqueness, PNG headers and reported openings. It does **not** certify buildability, visual quality, complete room layouts, engineering, code compliance or quantities for a quote. Internal partitions, stairs and assemblies are not generated yet; roof and facade materials are procedural approximations. Before publication, review both render angles, fix intersections, unsupported pieces, roof transitions and visual repetition, check actual dimensions and floor plans, and verify mobile performance. Keep approved previews and web assets derived from the same geometry.
