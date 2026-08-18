import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Launch Questions`,
    metaDescription:
      "Quick answers to the most common launch, platform, edition, and gameplay questions about The Sinking City 2 (Frogwares, Steam AppID 2825860).",
    summary:
      "Answers to the most common questions about The Sinking City 2 launch, platforms, editions, and gameplay.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Direct answers to launch, platform, edition, and gameplay questions, each tied to a source on this site.",
      ctas: [
        { label: "Release Info", href: "/release-date" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Browse short, source-backed answers to the questions players most often ask about The Sinking City 2.",
    keyFacts: [
      { label: "FAQ source", value: "Steam store + Frogwares + attributed media" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Refreshed when launch facts change" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "How answers are sourced",
        body:
          "Every answer names the source it leans on. Launch timing and edition prices are pulled from the Steam store and the Xbox Store; review sentiment is attributed to the publication and the author who wrote it; lore and ending coverage is attributed to the writer who published it.",
      },
    ],
    faqIds: [
      "what-is-this-site",
      "is-official",
      "release-date-known",
      "platforms-known",
      "guide-depth",
    ],
    relatedPageIds: ["release-date-en-US", "platforms-en-US", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      `About ${site.name}: an unofficial source-backed guide to The Sinking City 2 launch, platforms, editions, walkthroughs, and post-launch updates.`,
    summary:
      "An unofficial source-backed guide to The Sinking City 2 launch, walkthroughs, and post-launch notes.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What this site covers for The Sinking City 2, how the facts are sourced, and what to expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan guide that aggregates verified launch facts, walkthroughs, and post-launch updates for The Sinking City 2.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Official facts first, attributed media second" },
      { label: "Scope", value: "Release, platforms, walkthroughs, post-launch" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find the verified launch facts and post-launch updates for The Sinking City 2 without requiring them to bounce between storefronts, social posts, and review sites.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Steam store, PlayStation Store, Xbox Store, Epic Games Store, Frogwares YouTube channel, Kickstarter project, and attributed media (PCGamer, Rock Paper Shotgun, wccftech, SixthAxis, OpenCritic, TrueAchievements, Rely on Horror, Into Indie Games, TechRaptor, dsogaming) carry the weight for each page. Open questions are explicitly labeled.",
      },
    ],
    faqIds: ["what-is-this-site", "is-official"],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "How to send corrections, source links, or feedback about The Sinking City 2 to the site maintainers.",
    summary: "A dedicated correction and feedback channel.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source links, or feedback so the guide stays accurate as launch facts change.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email support@thesinkingcity2.pro for corrections and source-link updates. Responses are best-effort.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Response target", value: "Best-effort, typically within a week" },
      { label: "Policy", value: "No game account credentials" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Send corrections to support@thesinkingcity2.pro. Include an official source URL so the change can be verified in one pass.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When you spot a fact that drifted — a launch window, an edition price, a confirmed setting detail — include the official source URL (Steam store, Frogwares YouTube, Kickstarter, storefront page) so the page can be corrected in a single edit.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "What thesinkingcity2.pro collects, why GA4 is enabled, what contact messages include, and how the policy is updated.",
    summary:
      "What thesinkingcity2.pro collects, why, and how to reach the maintainers.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Plain-language disclosure of analytics, hosting, and contact-message handling for this guide.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "thesinkingcity2.pro uses Google Analytics 4 for aggregate usage and Cloudflare for hosting. No accounts, comments, or payments.",
    keyFacts: [
      { label: "Analytics", value: "Google Analytics 4 only" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Hosting", value: "Cloudflare (OpenNext runtime)" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. When Google Analytics 4 is enabled, it collects aggregate usage data (page views, referrers, device class, approximate country) so the maintainers can see which guides help players. No advertising is enabled at launch; the page is hosted on Cloudflare.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If you email support@thesinkingcity2.pro, the message body and your email address are stored only long enough to act on the correction and reply. No sensitive personal information is requested.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "When the analytics setup, hosting, contact method, or any other data-collection behavior changes, this page is updated to match.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Use, accuracy, and acceptable-use rules for thesinkingcity2.pro, an unofficial fan guide to The Sinking City 2.",
    summary:
      "Unofficial guide status, accuracy notes, and acceptable-use rules for thesinkingcity2.pro.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Unofficial status, accuracy guidance, and acceptable-use rules for browsing this guide.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "thesinkingcity2.pro is an unofficial fan guide for The Sinking City 2. Use it for orientation; confirm final purchase decisions on the storefronts.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Accuracy", value: "Sourced to storefronts + attributed media" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Frogwares Ireland Ltd., Sony, Microsoft, Valve, Epic, or any trademark owner. All game names, character names, and storefront names belong to their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details update. Use the storefronts and the Frogwares YouTube channel for final purchase, platform, release, and edition decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not scrape the site aggressively, interfere with service availability, or post harmful content through the contact channel. Respect rate limits; the contact address is for corrections and feedback only.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: "Guide Index",
    seoTitle: `Guides Index | ${site.gameName}`,
    metaDescription:
      "Quick-launch index of all first-launch guides for The Sinking City 2, including walkthroughs, demo walkthrough, getting-started, and how-long-to-beat.",
    summary: "A consolidated index of the launch-day guides.",
    hero: {
      eyebrow: "Guides",
      subtitle: "Browse first-launch guides, walkthrough entry points, and how-to play start hints.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Getting started", href: "/getting-started" },
      ],
    },
    quickAnswer:
      "This index links to every guide on the site so you can jump directly to the playthrough aid you need.",
    keyFacts: [
      { label: "Total guides", value: "5 launch guides" },
      { label: "Source rule", value: "Verified post-launch facts" },
      { label: "Demo", value: "Prologue demo walkthrough included" },
    ],
    modules: [
      {
        id: "guide-index",
        type: "entity-grid",
        heading: "Browse guides",
        items: [
          {
            title: "Getting started",
            summary: "First-hour choices, inventory, ammo crafting.",
            href: "/getting-started",
          },
          {
            title: "Walkthrough",
            summary: "Full main-story progression with chapter entry points.",
            href: "/walkthrough",
          },
          {
            title: "Demo walkthrough",
            summary: "Clear the Prologue demo, including Devil's Reef safe code.",
            href: "/demo-walkthrough",
          },
          {
            title: "How long to beat",
            summary: "Main story, side content, and completion estimates.",
            href: "/how-long-to-beat",
          },
        ],
      },
    ],
    faqIds: ["guide-depth"],
    relatedPageIds: ["release-date-en-US", "platforms-en-US"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Codex`,
    seoTitle: `${site.gameName} Codex | Setting, Systems, and Lore`,
    metaDescription:
      "Wiki index page grouping all setting, lore, system, and reference pages for The Sinking City 2 in one place.",
    summary: "Index of the world and system notes.",
    hero: {
      eyebrow: "Codex",
      subtitle: "Setting, lore, system, and reference notes for The Sinking City 2.",
      ctas: [
        { label: "1920s Arkham", href: "/setting-arkham" },
        { label: "Enemies", href: "/enemies" },
      ],
    },
    quickAnswer:
      "This codex index is the launch-day reference hub for setting, lore, enemies, weapons, achievements, and ending notes.",
    keyFacts: [
      { label: "Scope", value: "Setting and systems" },
      { label: "Source rule", value: "Official lore + attributed media" },
      { label: "Legacy reference", value: "The Sinking City 1 ending-only" },
    ],
    modules: [
      {
        id: "codex-index",
        type: "entity-grid",
        heading: "Browse the codex",
        items: [
          {
            title: "1920s Arkham",
            summary: "Setting, Cal Rafferty, and Faye Bennett.",
            href: "/setting-arkham",
          },
          {
            title: "Enemies",
            summary: "Slither, Deep Ones, Shadow enemies.",
            href: "/enemies",
          },
          {
            title: "Weapons",
            summary: "Standard weapons and Chthonic Arsenal.",
            href: "/weapons",
          },
          {
            title: "Achievements",
            summary: "23 achievements / trophies.",
            href: "/achievements",
          },
          {
            title: "Endings",
            summary: "How endings work.",
            href: "/endings",
          },
          {
            title: "Vs The Sinking City 1",
            summary: "Comparing Arkham to Oakmont.",
            href: "/vs-the-sinking-city-1",
          },
        ],
      },
    ],
    faqIds: ["is-official"],
    relatedPageIds: ["setting-arkham-en-US", "enemies-en-US"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-18",
  },
];
