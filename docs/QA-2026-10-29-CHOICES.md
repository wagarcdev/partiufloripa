# QA of client-choice previews - 2026-10-29

## Source of decisions
- ADR-022: compare more basemap providers, no migration accepted.
- ADR-023: review incomplete event publication individually.
- ADR-024: beta participants receive invitation links; links are shareable and do not provide technical access control.
- User's description of existing detail UI ("too generic, simplistic, without personality") is a design critique, NOT an approval.

## Tested map alternatives
- `map-vector-compare.html` offers OpenFreeMap Positron, Bright and Dark with MapLibre GL JS 6.11.2. Provider docs: https://openfreemap.org/quick_start/ ; terms last updated 2026-10-14 at https://openfreemap.org/tos/.
- Chrome headless, Playwright, deployed GitHub Pages:
  - 390x844: HTTP 200; Positron and Dark show ready only after MapLibre idle; all three event layers (heat, halo, markers) present; dark background computed RGB(12,12,12); 0 page errors; document scrollWidth=390.
  - 1440x900: same outcome; document scrollWidth=1440.
- Previous check also switched to Bright successfully on both viewports.
- Visual captures of mobile Dark and design Night reviewed manually from authorized browser. Dark rendering is visibly dark after async style load. Provisional heat halo now more visible for a single mapped region. Tiles remain third-party CDN and require terms/availability review.
- This confirms browser rendering and interaction, not Android physical-device QA, cartographic provider approval, or final visual acceptance.

## Tested design preview
- `design-event-directions.html` is a separate proposal with alternate modes Cartaz da Ilha (warm editorial) and Noite na Ilha (dark expressive). Uses the existing Daniel Duncan record in `events.json`; no event photographs or unlicensed material.
- In Chrome at 390x844 and 1440x900: HTTP 200, CSS mode switches from editorial to night, event name loaded from catalogue, 0 page errors, no horizontal overflow.
- Reviewed the mobile Night capture; a choice or additional critique is still required before moving any of these styles to `evento.html`.

## Remaining user-facing gates
- Basemap selection after actual comparison on user's Android and provider terms verification.
- New detail page visual direction **not approved**: request feedback on the two proposals, do not merge them into the production event page automatically.
- Beta can be distributed by shareable link only with safe public content, individually reviewed events, privacy/contact notices, and explicit launch sign-off.
- Source feed activation remains disabled pending evidenced permissions; no publishing of unreviewed events.
