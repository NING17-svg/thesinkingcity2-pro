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
];
