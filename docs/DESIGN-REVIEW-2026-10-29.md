# UI review - 2026-10-29 (design feedback, NOT acceptance)

## Client feedback
The current internal event page was described as too generic, simplistic and lacking personality. The choice was "Other / discuss", NOT "approve" or "approve with changes". ADR-019 still requires a revised concept and explicit visual approval.

## Non-approved design hypotheses for comparison
- **Cartaz da Ilha**: distinctive poster typography, local editorial identity, asymmetry, color accent and clear time hierarchy with an illustrated category cover (no unlicensed event artwork).
- **Noite na Ilha**: dark high-contrast nightlife-oriented style, bolder oversized type and contextual venue/date information.
- Preserve factual hierarchy (title, date, venue, opening, performance start), source/provenance notices, tickets CTA only when source not quarantined, neutral category art.
- Mobile-first, keyboard-accessible contrast, fast low-cost static site. No fake photo, no fake event facts.

## Approval state
Neither proposal is accepted; current production A1.11 remains a working implementation, not a visual design sign-off. Present clickable previews and ask for choice / feedback after QA.

## Prototype delivered for visual discussion (not accepted)
- Static compare: `design-event-directions.html` with two radio-selectable styles and one real catalog example. Neutral CSS artwork only; data read from events.json. Distinct editorial serif / warm poster treatment versus dark condensed nightlife treatment.
- The preview has `noindex,nofollow` and is not linked from the main event page. The live detail design remains unchanged.
- Client approval still pending; this is a response to criticism of generic, simplistic styling, not a claim of design signoff.

## Expanded map preview
- Existing `map-compare.html` continues comparing Esri vs OSM Standard.
- `map-vector-compare.html` adds OpenFreeMap Positron, Bright and Dark with MapLibre GL JS. No API key required under current official documentation; third-party terms and uptime are subject to change.
- Uses same region centres and nighttime data classification; never shows locations as confirmed house coordinates. Does not migrate main map.
- Provider docs: https://openfreemap.org/quick_start/ and https://openfreemap.org/tos/ (published 2026-10-14).

## Client feedback (2026-10-29, second review)
- User clarified Esri is already satisfactory and approved as primary basemap. ADR-025 supersedes ADR-022's open selection without removing comparison prototypes.
- The existing night/expressive prototype underperformed the light editorial version in information readability and color contrast.
- **Accepted directional preference, not visual signoff:** preserve the editorial hierarchy and legibility. Prototype an editorial dark variant with higher contrast, readable type and restrained accents. Do not replace the live event page until explicitly homologated.

## Revised prototype and browser readback
- `design-event-directions.html` offers "Cartaz da Ilha" and a revised "Editorial Noturno - alto contraste" variant, replacing the less legible loud/condensed treatment. The event page in production was **not** replaced.
- The dark variant keeps the editorial serif title, uses high-contrast cream text on deep teal background, separate show/opening timing, restrained warm accent and differentiated primary CTA.
- QA Chrome headless against the published prototype at 390x844 and 1440x844: HTTP 200, variant selected, event data loaded, 0 JS page errors, no horizontal overflow. Verified readable text colors by computed style and inspected mobile screenshot.
- User's approval of Esri (ADR-025) is recorded; these UI proposals remain pending visual approval.
