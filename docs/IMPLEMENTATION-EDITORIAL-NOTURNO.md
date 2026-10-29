# Editorial Noturno integration - 2026-10-29

- Approved design direction: ADR-026; explicitly approved by user after the lighter upper hero refinement.
- Integrated into `evento.html` as a single, dynamically populated event template, retaining the GitHub Pages `/evento/<slug>/` build pipeline and legacy `evento.html?date=...&title=...&venue=...` links.
- Event-specific title and date, category emoji neutral artwork, time distinctions (venue opening vs attraction start), location, price if available, notes and approved external source CTA.
- No fabricated promotional tagline or event photo. Source marked quarantined has no external CTA. Unreviewed and incomplete records display transparent warnings. Current catalogue is not fully verified.
- Preserve Esri map unchanged, no changes to home page or rights policy.
- CI syntax / static page generation executed before shipping. Manual mobile/desktop browser QA and deploy readback to be recorded separately; visual choice does not equal QA or beta launch.
