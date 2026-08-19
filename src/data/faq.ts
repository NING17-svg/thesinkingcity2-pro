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
];
