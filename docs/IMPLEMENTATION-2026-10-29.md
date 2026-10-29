# Implementation checkpoint - 2026-10-29

## Delivered in this increment
- Static GitHub Pages deployment now depends on a structural CI check of JavaScript and events JSON. The existing editorial validator is separate because legacy entries still contain known missing times and locations.
- Assigned 56 persistent event IDs to the current JSON catalogue. Existing date/title/venue query links continue working; new links use the stored ID.
- Event imagery is temporarily suppressed in index and detail rendering, using neutral category artwork pending individual rights review. Source image files remain in the repository but are not displayed by the updated templates.
- The check script confirms event ID presence/uniqueness and JS syntax.

## Not completed and not accepted
- Human review and publication warnings for incomplete events; source trust policy and extraction automation.
- Friendly path URLs and per-event prerendered SEO metadata; IDs are groundwork only.
- Map-layer comparison, design refinements, Figma completion, Android QA, release sign-off.
- Current 56 events are not automatically considered verified; static content still needs editorial QA.
- No local PartiuFloripa backend exists in this repository. GitHub Pages deploy updates automatically after CI success; unrelated local servers must not be altered without service identification and rollback plan.

## Follow-up acceptance
Run real browser QA for old/new event links, neutral artwork, filters, accessibility, desktop/mobile. Confirm publication workflow success before claiming production deployment.

## Follow-up: readable event routes and SEO generation
- Each event now has a persistent ASCII slug, alongside its stable ID.
- The Github Pages deployment generates /evento/<slug>/index.html pages automatically from the detail template and events.json. Each generated page has event-specific title, description, Open Graph metadata and canonical URL.
- Historical event links using query parameters remain supported by evento.html.
- Unreviewed events remain noindex,follow; only an explicitly reviewed event with status=verified is eligible for index,follow. This is infrastructure, not an editorial claim of verification.
- SEO path generation was tested locally, but visual/browser QA and production acceptance are still pending.

## User-evidenced editorial corrections (incremental)
- MUNDO M: event page reports 13 Nov 2026 at 22:00, Stage Music Park; source changed from generic Music Park calendar to the specific Pensa no Evento URL. Existing persisted event ID and slug unchanged.
- Daniel Duncan: 29 Oct 2026 venue opening 19:00, show 21:00; region Saco Grande. Detail page can display a separate show time when available. Other records are not assumed to have this field.
- All 5 entries sourced only from emfloripa.ia.br have sourceReview=quarantined and are excluded from the current agenda pending independent corroboration. Historical data remains in JSON and routes remain noindex; no editorial approval was inferred.
- This does not complete the overall 56-event audit or formal beta acceptance.
