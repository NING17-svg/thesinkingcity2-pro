# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-25 - Static Assets deployment migration

- Task: Replace the OpenNext Worker runtime with Next.js static export served directly by Cloudflare Workers Static Assets.
- URLs affected: None; route, content, metadata, navigation, schema, titles, H1s, canonicals, and internal-link roles are unchanged.
- Runtime: Production output is `out/`; `wrangler.jsonc` has no Worker `main`, and fixed security headers are served from `public/_headers`.
- Verification: Full local verification and production public checks are required before the migration is considered complete.

### 2026-08-21 - Post-launch upscaling / DualSense / collision FAQ cluster

- Task: Second content update for thesinkingcity2.pro after launch acceptance; central task `2026-08-21-thesinkingcity2-pro-post-launch-upscaling-dualsense-and-collision-faq-cluster`.
- Files changed: `src/data/faq.ts` (new FAQ items `fsr-not-yet`, `dlss-fg-performance`, `dlss-missing-option`, `dualsense-audio-output`, `stuck-in-collision`), `src/data/pages/site-pages.ts` (FAQ page `faqIds` extended; `lastReviewed` -> `2026-08-21`), `src/data/generated-pages.ts` (home `recent-updates` block + 2026-08-21 line; home `lastReviewed` -> `2026-08-21`; system-requirements new `upscaling-posture` module + 2026-08-21 source dates; system-requirements `lastReviewed` -> `2026-08-21`), `CONTENT_INDEX.md` (rows refreshed for `/`, `/system-requirements`, `/faq`).
- URLs affected: `/`, `/faq`, `/system-requirements`.
- Content changed: Five new /faq entries sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860 (FSR pending AMD UE 5.8 patch; DLSS Frame Generation performance caveats; DLSS Upscaler missing-option clean-reinstall fix via Display Driver Uninstaller; DualSense gamepad speaker audio routing via Windows audio output toggle; stuck-in-collision load-last-save). /system-requirements now carries an explicit "Upscaling & upscaler posture" note (DLSS 4 + DLSS Multi Frame Generation only on launch; no AMD FSR, no Intel XeSS, no TSR yet) and its source-links block lists the Steam Discussions pinned FAQ, the Steam Discussions hub for AppID 2825860, the PCGamingWiki upscaling list, and DSOGaming's first PC performance impressions + PC performance analysis. /home recent-updates block now carries a 2026-08-21 line summarizing the post-launch upscaling posture + new /faq entries.
- Verification: `npm run verify` (typecheck, lint, template, content, indexnow, build, rendered SEO) passed locally.
- IndexNow: target-site script `npm run indexnow:submit -- --submit --site-url https://thesinkingcity2.pro --url https://thesinkingcity2.pro/ --url https://thesinkingcity2.pro/faq --url https://thesinkingcity2.pro/system-requirements` invoked after live verification.

### 2026-08-19 - Launch-day review aggregates + NG+/HDR FAQ entries

- Task: First content update for thesinkingcity2.pro after launch acceptance; central task `2026-08-19-thesinkingcity2-pro-launch-day-reviews-and-frogwares-launch-confirmations`.
- Files changed: `src/data/faq.ts` (new FAQ items `ngplus-at-launch`, `hdr-support`), `src/data/pages/site-pages.ts` (FAQ page `faqIds` extended; `lastReviewed` -> `2026-08-19`), `src/data/generated-pages.ts` (home `recent-updates` block + 2026-08-19 source dates; review-roundup `launch-day-aggregates` + `per-critic-verdicts` modules and 2026-08-19 source dates), `CONTENT_INDEX.md` (rows refreshed for `/`, `/review-roundup`, `/faq`).
- URLs affected: `/`, `/review-roundup`, `/faq`.
- Content changed: Metacritic 79 (Generally Favorable; PS5 79 / Xbox Series X 84 / PC 75; 82% Positive / 18% Mixed / 0% Negative), OpenCritic top critic average 81 with 73% Critics Recommend across 41 critic reviews, per-critic attributed scores (PCGamer 70/100 Jody Macgregor; SixthAxis 8/10 Steve C; Wccftech 8.5/10 Chris Wray; Hobby Consolas 82/100 Daniel Quesada; PlayStation Universe 8.5/10 Thea Severance; COGconnected 80/100 Stephan Adamus; Push Square 7/10 Liam Croft; DualShockers 9/10 Eric Warner; Player 2 91; Merlin'in Kazani 88; GamingBolt 80; Worth Playing 80; Gamereactor UK 80; GameOver.gr 70; Guardian 60). Frogwares launch-day New Game+ confirmation and free HDR post-launch patch confirmation added to both the review-roundup page and the FAQ.
- Verification: `npm run verify` (typecheck, lint, template, content, indexnow, build, rendered SEO) passed locally.
- IndexNow: target-site script `npm run indexnow:submit -- --submit --site-url https://thesinkingcity2.pro --url https://thesinkingcity2.pro/ --url https://thesinkingcity2.pro/review-roundup --url https://thesinkingcity2.pro/faq` invoked after live verification.

### 2026-08-19 - Adsterra fixed six-unit ads activated

- Task: Replace empty Adsterra placeholders in `src/data/ads.ts` with the real codes for the fixed Native Banner, Banner 728x90, 468x60, 320x50, 160x600, and Smartlink units.
- Files changed: `src/data/ads.ts`.
- URLs affected: None. Module containers were already generated by the builder; only the placeholder values changed.
- Ad baseline: Fixed six-unit Adsterra placement now serves the real code on the page DOM. No new component, layout, or schema change.
- Verification: `npm run verify` (template, content, IndexNow, build, rendered SEO) passed locally.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
