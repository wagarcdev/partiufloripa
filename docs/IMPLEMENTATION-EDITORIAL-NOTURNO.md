# Editorial Noturno integration - 2026-10-29

- Approved design direction: ADR-026; explicitly approved by user after the lighter upper hero refinement.
- Integrated into `evento.html` as a single, dynamically populated event template, retaining the GitHub Pages `/evento/<slug>/` build pipeline and legacy `evento.html?date=...&title=...&venue=...` links.
- Event-specific title and date, category emoji neutral artwork, time distinctions (venue opening vs attraction start), location, price if available, notes and approved external source CTA.
- No fabricated promotional tagline or event photo. Source marked quarantined has no external CTA. Unreviewed and incomplete records display transparent warnings. Current catalogue is not fully verified.
- Preserve Esri map unchanged, no changes to home page or rights policy.
- CI syntax / static page generation executed before shipping. Manual mobile/desktop browser QA and deploy readback to be recorded separately; visual choice does not equal QA or beta launch.

## Final browser QA and release readback
- GitHub Pages deployment of commit `21465a7` succeeded: https://github.com/wagarcdev/partiufloripa/actions/runs/40956651237
- Chrome headless against **published** static `/evento/<slug>/` pages, viewports 390x844 and 1440x900.
- Daniel Duncan: H1 present, opening 19:00, performance 21:00, venue and external source CTA displayed.
- Armandinho e Vitor Kley: missing-time warning displayed with no fabricated hour.
- Fresno: quarantined-source warning displayed, external CTA absent.
- Six event-page checks HTTP 200, JS page errors 0, no horizontal overflow. Legacy `evento.html?date=...&title=...&venue=...` also HTTP 200 and resolves Daniel Duncan.
- Visual readback of the 390px screenshot confirmed differentiated teal hero vs dark lower section, expressive serif title, balanced typography and CTA; no event photographs.
- This is automated browser functional QA. A physical Android device and the unverified editorial catalogue have not been signed off; beta release remains pending.
