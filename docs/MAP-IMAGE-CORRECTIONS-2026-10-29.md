# Venue location and category covers - 2026-10-29

## Diagnosis
The old map only allowed four region names in a hardcoded region-centre dictionary. The event Daniel Duncan (Floripa Comedy Club, Saco Grande) was entirely filtered out, so it did not appear in the heatmap on October 29. An existing Lagoa event remained visible. The map did **not** plot Duncan at Lagoa; it omitted Duncan.

## Implemented solution
- Resolve mapped locations from a canonical venue directory first (data/venues.json), then known regional centroids clearly marked as approximate. Unknown or generic locations are excluded and counted as unplotted.
- Floripa Comedy Club: Square SC, Loja 18, SC-401 / Rod. Jose Carlos Daux 5500, Saco Grande; coordinates (-27.5346491, -48.5093949) are the approximate coordinates of the **Square SC complex**, not the verified exact entrance. Sources: https://squaresc.com.br/empresa/floripa-comedy-club/ and https://www.benditoguia.com.br/empresa/square-sc-saco-grande-florianopolis
- Existing Esri Light Gray basemap, native calendar picker, and meaning of the heatmap as *events* (not people) are unchanged.
- Other venues still need address-level source verification before using more exact points. Site intentionally labels fallback markers approximate.

## Images and rights
- Nine original, locally stored SVG editorial category covers (assets/covers) replace the large emoji-only event art in catalogue cards.
- Original SVG art is generic, not a third-party event poster, and does not claim to depict the performer.
- All 12 legacy event photos remain rights-pending in data/image-rights.json and are blocked from use unless explicit rightsStatus=approved, license and rightsEvidenceUrl are recorded. A website displaying a photo does not itself constitute licensing.
- No third-party venue photo has been authorized in this increment. Rights audit is a separate task.

## QA
- Venue tests verify correct Saco Grande mapping even when event region is inconsistent, unknown region exclusion, fallback classification and invalid coordinate rejection.
- Rights tests verify registry and availability of all nine original SVGs.
- Browser QA must verify October 29 map marker and mobile/desktop covers before release acceptance.
