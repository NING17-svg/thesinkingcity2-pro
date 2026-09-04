import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is this guide site for?",
    answer:
      "This site is a first-launch guide hub for The Sinking City 2. It collects verified launch facts, walkthroughs, enemies, weapons, achievements, setting notes, and post-launch updates so players can navigate a single source-backed reference rather than scattered storefront blurbs.",
    pageIds: ["home-en-US", "faq", "setting-arkham-en-US", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official game website?",
    answer:
      "No. This site is an unofficial fan guide and is not affiliated with Frogwares Ireland Ltd. or any platform holder. Confirmed launch facts are sourced from the Steam store, the Frogwares YouTube channel, Kickstarter, PlayStation Store, Xbox Store, and the Epic Games Store Premium Edition page; reviews are attributed to the publication and author who published them.",
    pageIds: ["home-en-US", "faq", "setting-arkham-en-US", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-date-known",
    question: "When did The Sinking City 2 release?",
    answer:
      "The Sinking City 2 launched worldwide on 18 Aug 2026 across PC (Steam), PS5, and Xbox Series X|S. Premium Edition owners received a 24-hour early unlock that opened on 17 Aug 2026. The gold master build was confirmed on 7 Aug 2026.",
    pageIds: ["release-date-en-US", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-known",
    question: "Which platforms is The Sinking City 2 on?",
    answer:
      "The Sinking City 2 launched on PC (Steam AppID 2825860), PS5, and Xbox Series X|S. As of 18 Aug 2026 the game is not announced for Nintendo Switch, Xbox Game Pass, or any retail physical SKU. Updates would first appear on the Steam store page and the Frogwares YouTube channel.",
    pageIds: ["platforms-en-US", "release-date-en-US", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guide-depth",
    question: "How detailed are the guides on this site?",
    answer:
      "V1 guides give a launch-day reference: release timing, platforms, editions and pricing, system requirements, a getting-started checklist, walkthrough entry points, demo walkthrough, weapons, enemies, achievements, ending notes, and the live review roundup. Detailed per-chapter walkthroughs and weapon-vs-enemy tables are added after verified post-launch demand appears.",
    pageIds: ["getting-started-en-US", "walkthrough-en-US", "demo-walkthrough-en-US", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "ngplus-at-launch",
    question: "Does The Sinking City 2 have New Game Plus at launch?",
    answer:
      "Yes. The Sinking City 2 ships at launch with a fully featured New Game+ mode, confirmed by Frogwares during the 17-18 Aug 2026 launch window (GamingTrend coverage). New Game+ lets you carry over perk points, perks, and items into a fresh run to tackle new challenges, unlock achievements, and earn cosmetic and gameplay rewards.",
    pageIds: ["faq", "review-roundup-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "hdr-support",
    question: "Is HDR supported on The Sinking City 2?",
    answer:
      "HDR is not a 1.0 launch feature. Frogwares confirmed during the 17-18 Aug 2026 launch window (GamingTrend coverage) that the previously planned HDR patch is now part of the game's free post-launch support, not part of the day-one 1.0 release. HDR availability will surface first on the Steam Store page and the Frogwares YouTube channel.",
    pageIds: ["faq", "release-date-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fsr-not-yet",
    question: "Does The Sinking City 2 support AMD FSR?",
    answer:
      "FSR is not currently supported. AMD has not yet released the required plugin/patch for Unreal Engine 5.8. Frogwares has stated FSR will be added once it becomes available. (Sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860.)",
    pageIds: ["faq", "system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dlss-fg-performance",
    question: "Why is performance worse with Frame Generation Enabled?",
    answer:
      "The Sinking City 2 ships with NVIDIA DLSS 4 / DLSS Multi Frame Generation support only. Running Frame Generation can introduce visual artifacts and lower effective performance on lower-end NVIDIA GPUs and on high-refresh 60Hz monitors; if you see worse performance with Frame Generation on, switch Frame Generation off or turn V-Sync off if your monitor runs at 60Hz. (Sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860; corroborated by DSOGaming's first PC performance impressions.)",
    pageIds: ["faq", "system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dlss-missing-option",
    question: "The DLSS Upscaler option is missing from my graphics settings — how do I fix it?",
    answer:
      "Please update or reinstall your NVIDIA graphics driver and select the 'Perform a clean installation' option during installation. Preferably use Display Driver Uninstaller (https://www.guru3d.com/download/display-driver-uninstaller-download/) before reinstalling. (Sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860.)",
    pageIds: ["faq", "system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dualsense-audio-output",
    question: "All game sounds are coming from my DualSense gamepad speaker, not my headset — what do I do?",
    answer:
      "In the Windows audio output settings, switch the output device to the DualSense gamepad and then switch it back to your headset or speaker. This refreshes the audio routing. (Sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860.)",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "stuck-in-collision",
    question: "I'm stuck in a collision / the environment and my character won't move — what do I do?",
    answer:
      "Please load the last save. (Sourced from Team Frogwares' pinned launch FAQ on the Steam Community General Discussions board for AppID 2825860.)",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ngplus-carryover",
    question: "What carries over to New Game Plus in The Sinking City 2?",
    answer:
      "New Game Plus carries over all perk points, all unlocked perks, and all items from your completed save. Story progress resets so the new run restarts in Arkham using your carried progression. NG+-only content includes the 8 Ex Oblivione purple documents (the 'From Oblivion Read' achievement), the 5 Infinite Supplies Reference Set entries (infinite Frag Grenades, Handgun, Rifle, Shotgun, and SMG ammo), and the Eldritch Reward Talents that gate the 'What Dreams Are Made Of' achievement. See the /new-game-plus page for the full carryover vs. reset list.",
    pageIds: ["faq", "new-game-plus-en-US", "achievements-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "nightshade-mask-talents",
    question: "How many Talents are there and how does the Nightshade Mask loadout work?",
    answer:
      "The Sinking City 2 ships with 22 named Talents grouped into Combat Offense (11 perks), Combat / Weapon Handling (2 perks), Survival Defense & Healing (8 perks), and Investigation / Crafting Economy (1 perk). Talents are learned by spending Dream Essence at the Talent Table in Safe Rooms. The Nightshade Mask is the compact loadout board; only Talents occupying your limited equipped slots are active. The full set unlocks across New Game Plus via Eldritch Reward Talents. See the /talents page for the full per-Talent effect table.",
    pageIds: ["faq", "talents-en-US", "new-game-plus-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sanity-minds-eye",
    question: "What drains sanity in The Sinking City 2, and how do I restore it?",
    answer:
      "Sanity drains when Mind's Eye is active, in dark Arkham zones, near corpses, and around cosmic entities tied to The Seed. Sanity restores in safe zones (passive recovery), with calming tonics and antipsychotics, and via Safe Room Talent upgrades (Sanity Regeneration is the community-recommended first pick for the Mind's Eye playstyle). Mind's Eye can only be activated when no enemies are nearby. See the /sanity page for the four launch consumable categories (Dolorocide, Regenerine, Lifesaver, Night Ore).",
    pageIds: ["faq", "sanity-en-US", "talents-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "boss-fights-named",
    question: "Which boss fights are in The Sinking City 2?",
    answer:
      "There are four named boss-tier encounters: Shoggoth (three-device eye vulnerability cycle; cycle the three strange devices and shoot the exposed eyes), Slither Prime (final boss; clear summoned adds before shooting the glowing head), Acheronian Juggernaut (ranged-grip interrupt pattern; break line of sight before the grab lands), and Smasher (recovery-window dodge loop; bait the committed attack, dodge, punish during recovery). See the /bosses page for per-boss weapon recommendations.",
    pageIds: ["faq", "bosses-en-US", "walkthrough-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "inventory-expansions-missable",
    question: "How many Inventory Expansion slots are missable in The Sinking City 2?",
    answer:
      "There are 6 missable Inventory Expansion slots (+2 slots each, +12 total) spread across Chapters 2, 3, and 4. They are missable because completed chapters cannot be revisited via Chapter Select. The slots reset to default capacity in New Game Plus, so they only matter to the first playthrough. See the /inventory-expansions page for the per-chapter location table.",
    pageIds: ["faq", "inventory-expansions-en-US", "achievements-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "holloway-manor-standalone",
    question: "Is Holloway Manor sold as a standalone DLC?",
    answer:
      "Yes on Steam: Holloway Manor is a $12.99 standalone DLC separate from the Premium Edition. No on consoles at launch: console buyers only get Holloway Manor via the $59.99 Premium Edition bundle. The DLC adds a 2-hour haunted mansion side quest with the Bucking Bronco revolver, Kane's Hefty Barrel, Kane's Wrapped Grip, and a revolver ammo recipe that carry into the main game. Playable before or after the main campaign. See the /holloway-manor page.",
    pageIds: ["faq", "holloway-manor-en-US", "price-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
