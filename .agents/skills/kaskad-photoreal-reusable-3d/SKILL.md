---
name: kaskad-photoreal-reusable-3d
description: Improve KASKAD realistic 3D roofs, dimensions, windows, facades, CC0 PBR textures, HD/Ultra quality and safe reuse in Zhivoy-Proekt. Never misrepresent conceptual geometry as engineering or verified photoreal BIM.
---

# KASKAD / Zhivoy — shared 3D skill

Read docs/3D_ROOFS_SCALE_REALISM_AND_ZHIVOY_REUSE_20261110.md, contracts/house_visual_config_v1.schema.json, contracts/house_style_examples_v20.json and assets/3d/ATTRIBUTION.md before 3D changes.

1. Treat every example as CONCEPT_VISUAL, not a measured Metric Twin/BIM, approved house plan, SKU or cost quote. Render must follow the same geometric source, no hallucinated geometry.
2. Roof SHAPE (roof-forms-v20.js: gable/hip/flat/shed/mansard) differs from roof COVERING (roof-market-v16.js: 12 kinds). Changes in roof shape and size must change real meshes. Fence is independent.
3. Style alters footprint, roofing, architecture, and window patterns. A 3D preview remains sticky on mobile. House roof, windows, foundation, corners and gables belong to one transform group. Keep brick UV dimensions constant as size changes.
4. All facade sides and gables share the identical material and texture. White cornices are a decorative element, not mismatched cladding.
5. Keep startup textures 1K. The 2K high quality CC0 textures from Poly Haven are opt-in, locally served, lazy loaded. Never hotlink license-ambiguous assets.
6. For true photoreal outputs, produce detailed original or licensed GLB, physically accurate PBR albedo/roughness/normal, detailed vegetation, physically correct windows/roof tiles, HDRI, Cycles path tracing on licensed Blender using RTX 3090 OptiX where available, and mobile LOD. Blender is not yet confirmed installed: do not claim to render through Blender before verified.
7. Exchange through standardized glTF/GLB and optional OpenUSD. glTF Transform and Meshoptimizer for pipeline optimization, KTX2 texture compression when measured. GLTFLoader must register appropriate decoder plugins.
8. Zhivoy-Proekt already has Three.js/React Three Fiber/GLTFLoader, authority and SHA validation. Import visual candidates only through provenance and CONCEPT_VISUAL checks; never silently promote to VERIFIED or merge unapproved changes into main.
9. NVIDIA RTX Remix is a legacy-game remaster, not a drop-in website engine; OpenUSD/Omniverse are candidates for offline interoperability. Check commercial licenses separately.
10. Run node .agents/skills/kaskad-photoreal-reusable-3d/scripts/check-v20.mjs; test 5 roof shapes, 6 sizes, 8 styles, 5 facades, 11 fences, HD/Ultra DPR, CSS sticky under 390px, no discussion button in 3D, browser errors, PWA cache/version and published Pages. Confirm on real phone only if actual phone was tested.

Official refs: https://www.khronos.org/gltf/ ; https://www.khronos.org/ktx/ ; https://threejs.org/docs/pages/GLTFLoader.html ; https://github.com/donmccurdy/glTF-Transform ; https://www.blender.org/features/rendering/ ; https://docs.omniverse.nvidia.com/usd/latest/learn-openusd/faq.html ; https://api.polyhaven.com ; https://uk.prefa.com/news/the-prefa-configurator-for-roof-facade/
