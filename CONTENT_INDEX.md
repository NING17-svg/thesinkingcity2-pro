# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/generated-pages.ts` (`page_home`) | Landing | The Sinking City 2 guide | Find the launch hub for release, platforms, walkthrough, and reviews | Open Wiki / Browse Guides | Hub | Hub now includes a 2026-09-01 six-page NG+/Talents/Sanity/Bosses/Inventory/DLC cluster recent-updates line, the 2026-08-21 post-launch upscaling / FAQ-cluster line, and the 2026-08-19 launch-day review aggregate + NG+/HDR line. |
| `/review-roundup` | `src/data/generated-pages.ts` (`page_review_roundup`) | Status | The Sinking City 2 review roundup | Compare review aggregates and critic verdicts | OpenCritic / Metacritic | Hub | Refreshed 2026-08-19 with launch-day Metacritic 79 (PS5 79 / Xbox Series X 84 / PC 75 split, 82% Positive), OpenCritic top critic average 81 with 73% Critics Recommend across 41 critic reviews, and Frogwares NG+/HDR launch-day confirmations. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/walkthrough` | `src/data/generated-pages.ts` (`page_walkthrough`) | Guide | The Sinking City 2 walkthrough chapters puzzles codes | Recover exact code/order for gated puzzles in each chapter so an optional-investigation trophy is not skipped | Achievements / Getting Started / Endings | Hub | Refreshed 2026-08-27 with chapter-by-chapter anchors for Devil's Reef, Akeley Memorial Hospital, Redemption Church, Fish Market, and Portal Room, plus a compact puzzle table that names every code/sequence, hint source, and optional-investigation trophy. |
| `/achievements` | `src/data/generated-pages.ts` (`page_achievements`) | Wiki | The Sinking City 2 achievements 23 missable NG+ | Plan a single-playthrough completion route and decide whether to commit to NG+ for the 18 otherwise-missable achievements | Walkthrough / Getting Started / Endings | Hub | Refreshed 2026-08-27 with the full 23-achievement list, category, Gamerscore-equivalent, unlock condition, and explicit missable / NG+ flags, plus a single-playthrough vs. New Game+ summary. |
| `/system-requirements` | `src/data/generated-pages.ts` (`page_system_requirements`) | Wiki | The Sinking City 2 system requirements | Find the official PC specs | FAQ / Wiki | Reference | Refreshed 2026-08-21 with an explicit "Upscaling & upscaler posture" note (DLSS 4 + DLSS Multi Frame Generation only on launch; no AMD FSR, no Intel XeSS, no TSR). Source-links block updated with the Steam Discussions pinned FAQ + PCGamingWiki upscaling list + DSOGaming first PC performance impressions + DSOGaming PC performance analysis. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | The Sinking City 2 FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. `faqIds` now includes the 2026-09-01 cluster entries `ngplus-carryover`, `nightshade-mask-talents`, `sanity-minds-eye`, `boss-fights-named`, `inventory-expansions-missable`, and `holloway-manor-standalone`, plus the 2026-08-21 post-launch cluster entries `fsr-not-yet`, `dlss-fg-performance`, `dlss-missing-option`, `dualsense-audio-output`, and `stuck-in-collision` (sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860), alongside the 2026-08-19 launch-day entries `ngplus-at-launch` and `hdr-support`. |
| `/new-game-plus` | `src/data/generated-pages.ts` (`page_new_game_plus`) | Guide | The Sinking City 2 New Game Plus carryover Ex Oblivione Infinite Supplies Eldritch Rewards | Plan a second playthrough by knowing exactly what carries over vs. resets, what the 8 Ex Oblivione purple documents are, what the 5 Infinite Supplies Reference Set entries are, and how Eldritch Points unlock the late-game Talents | Achievements / Talents / Walkthrough | Hub | Added 2026-09-01. Lists carryover (perk points, perks, items) vs. reset (story progress), the 2 confirmed Ex Oblivione titles ('The Loss of Calvin Rafferty', 'The Joys of Discomfort') plus 6 unnamed slots in the set, the 5 Infinite Supplies Reference Set entries (Frag Grenades, Handgun, Rifle, Shotgun, SMG), Eldritch Reward Talent unlocks, and the preserve-your-completed-save NG+ tip. |
| `/talents` | `src/data/generated-pages.ts` (`page_talents`) | Wiki | The Sinking City 2 Talents all 22 Nightshade Mask loadout | Plan a build by comparing all 22 named Talents grouped by category and choosing a loadout | Weapons / Sanity / New Game Plus / Getting Started | Hub | Added 2026-09-01. Lists all 22 Talents grouped into Combat Offense (11), Combat / Weapon Handling (2), Survival Defense & Healing (8), and Investigation / Crafting Economy (1), plus the Nightshade Mask safe-room loadout system, and a community-recommended first-pick summary for the Mind's Eye, Weak-Point, and Survival playstyles. |
| `/sanity` | `src/data/generated-pages.ts` (`page_sanity`) | Guide | The Sinking City 2 sanity The Seed Mind's Eye consumables restoration | Survive The Seed's horror zones by understanding sanity drain triggers, restoration methods, and the consumable categories | Talents / Weapons / Enemies / Getting Started | Hub | Added 2026-09-01. Covers The Seed entity, the four sanity drain triggers (Mind's Eye, dark zones, corpses, cosmic entities), restoration methods (safe zones, calming tonics, antipsychotics, Talent upgrades), the Mind's Eye activation rule (no enemies nearby), and the four launch consumable categories (Dolorocide, Regenerine, Lifesaver, Night Ore). |
| `/bosses` | `src/data/generated-pages.ts` (`page_bosses`) | Wiki | The Sinking City 2 boss fights Shoggoth Slither Prime Acheronian Juggernaut Smasher | Survive each named boss by knowing its weakness, attack pattern, and the weapon to bring | Weapons / Enemies / Sanity / Walkthrough | Hub | Added 2026-09-01. Covers Shoggoth's three-device eye cycle, Slither Prime's summoned adds + glowing head timing, Acheronian Juggernaut's ranged-grip interrupt, and Smasher's recovery-window dodge loop with per-boss weapon recommendations, plus a general boss-prep checklist. |
| `/inventory-expansions` | `src/data/generated-pages.ts` (`page_inventory_expansions`) | Guide | The Sinking City 2 Inventory Expansions 6 missable slots NG+ reset | Find all 6 Inventory Expansion slots before chapter progression blocks them and decide whether to optimise the first playthrough or commit to NG+ | Getting Started / Achievements / Walkthrough / New Game Plus | Hub | Added 2026-09-01. Lists all 6 Inventory Expansion slots (+2 each, +12 total) by chapter with location and requirement (E.R.C. Activator Pen, Star Key, A.P.H. Key, Leyden Jar, Heart of Ice), the no-chapter-replay missable rule, the E.R.C. Crate mechanic, and the explicit NG+ reset note. |
| `/holloway-manor` | `src/data/generated-pages.ts` (`page_holloway_manor`) | Status | The Sinking City 2 Holloway Manor DLC $12.99 standalone Premium Edition console bundle | Confirm the Holloway Manor $12.99 Steam standalone, the Premium Edition console bundle, the 2-hour side quest, and the Bucking Bronco + Kane attachments + ammo recipe reward list | Price / Weapons / Updates & DLC | Hub | Added 2026-09-01. Confirms $12.99 Steam standalone separate from the Premium Edition, console-only Premium Edition bundle (no console standalone at launch), 2-hour haunted mansion side quest length, Bucking Bronco revolver + Kane's Hefty Barrel + Kane's Wrapped Grip + revolver ammo recipe rewards, and playable before or after the main campaign. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Player-guide hub: `/walkthrough` (chapter anchors + puzzle codes), `/getting-started`, `/demo-walkthrough`, `/how-long-to-beat`
- Completion reference: `/achievements` (23-trophy list + missable / NG+ flags), `/endings`, `/weapons`, `/enemies`, `/bosses`
- Build and survival reference: `/talents` (22-Talent Nightshade Mask loadout), `/sanity` (The Seed / Mind's Eye / consumables), `/inventory-expansions` (6 missable slots + NG+ reset)
- Post-launch content: `/new-game-plus` (carryover, Ex Oblivione, Eldritch Rewards), `/holloway-manor` (DLC standalone + bundle), `/price` (editions)
- Setting and world: `/setting-arkham`, `/vs-the-sinking-city-1`
- Status and updates: `/platforms`, `/system-requirements`, `/review-roundup`, `/updates-dlc`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.
- `/walkthrough` should link to `/achievements` (missable flags), `/getting-started` (first-hour prep), `/demo-walkthrough` (Prologue Devil's Reef), `/how-long-to-beat`, and `/endings`.
- `/achievements` should link to `/walkthrough` (chapter puzzle codes), `/getting-started` (first-hour prep), `/endings`, `/new-game-plus` (NG+-only achievements), and `/inventory-expansions` (no-chapter-replay rule).
- `/new-game-plus` should link to `/achievements` (From Oblivion Read, What Dreams Are Made Of), `/talents` (Eldritch Reward Talents), and `/walkthrough` (chapter anchors).
- `/talents` should link to `/weapons`, `/sanity`, `/new-game-plus`, and `/getting-started`.
- `/sanity` should link to `/talents`, `/weapons`, `/enemies`, and `/getting-started`.
- `/bosses` should link to `/weapons`, `/enemies`, `/sanity`, and `/walkthrough`.
- `/inventory-expansions` should link to `/getting-started`, `/achievements`, `/walkthrough`, and `/new-game-plus`.
- `/holloway-manor` should link to `/price`, `/weapons`, and `/updates-dlc`.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
