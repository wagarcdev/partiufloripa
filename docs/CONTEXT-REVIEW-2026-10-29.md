# PartiuFloripa - context reconciliation - 2026-10-29

## Review scope
Reconciles repository documentation with available conversation summaries. This is NOT a full read of the other three conversations and NOT functional acceptance.

## Decisions retained
- Mobile-first WEB portal before app and social features; no in-house ticketing or payment; monetization after traction.
- GitHub Pages static implementation, JSON events, search/filters, carousel, Leaflet/Esri map.
- The first schematic map was rejected and replaced by a ready-made Esri layer. Heat expresses registered events, not crowd density. ADR-010 supersedes the three-region threshold in ADR-008: show small heat halo even for one mapped event. Native date calendar per ADR-011.
- Event categories and emoji per ADR-012; cover priority event poster > identified venue photo > category fallback per ADR-013. No invented pictures as venue photos.
- A1.10: wide featured cards, low horizontal results cards, prices only when verified.
- A1.11: whole card opens internal details; only details CTA navigates to original event source.
- Figma GUI via authenticated browser was validated; mobile foundations begun; desktop and final acceptance still pending.
- Git is the sole source of truth; ALS dashboard is a deterministic projection, approval gateway/readback not yet verified.

## Existing technical state and outstanding work
Historical audit of 2026-10-28: 56 occurrences, 8 without times, 31 generic regions, 14 local image files and no verified individual licenses. These are time-bound audit numbers, not live verified counts.
Technical deployment exists, but real device QA, rights, event accuracy, accessible navigation, stable event IDs, SEO, analytics, editorial ingestion, operation and beta acceptance remain pending.
Acceptance of a design in conversation does not establish implementation QA or formal ALS acceptance.

## Changes made
ARCHITECTURE.md now follows ADR-010 instead of the old three-region rule.
PRODUCT.md now states the Esri map and internal details journey.
REQUIREMENTS.md RF-06/07/08 now match actual mapping and card-detail-CTA behavior.
Historical ADR records are preserved, not silently rewritten.

## Follow-up
Review three older ChatGPT project conversations fully before deleting, if feasible. Test published pages on desktop and Android, audit data/images and document evidence. Do not mark gateway or design accepted without verification.
