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
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "A frequently asked questions page template for site status, release info, platforms, and starter guide scope.",
    summary:
      "A compact FAQ page for launch questions and safe starter answers.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Answer common launch, platform, wiki, and guide-scope questions without overclaiming.",
      ctas: [
        { label: "Release Info", href: "/release-date" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This FAQ should answer only what the site can support with official facts or clear internal policy.",
    keyFacts: [
      { label: "FAQ source", value: "Official facts or site policy" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Update as launch facts change" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details.",
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
    lastReviewed: "2026-06-18",
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
      "About page template for an unofficial game guide site, including scope, sourcing, and editorial principles.",
    summary:
      "A trust page explaining the site's unofficial status, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial guide hub template that should be filled with verified game information before launch.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts first" },
      { label: "Scope", value: "Wiki, guides, release info, FAQ" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information without pretending the site knows more than official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use official websites, store pages, developer updates, publisher posts, and press materials for launch facts. Mark uncertain areas as pending instead of filling gaps with guesses.",
      },
    ],
    faqIds: ["what-is-this-site", "is-official"],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
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
      "Contact page template for corrections, official source updates, and site feedback.",
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Replace this page with a working contact method before launch, such as an email address or contact form.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Launch requirement", value: "Add a real contact method" },
      { label: "Response", value: "Set expectations clearly" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Add a real email address or form endpoint before publishing. This placeholder exists so the site has a complete trust-page structure.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
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
      "Privacy policy template for a lightweight game guide site using basic analytics and contact channels.",
    summary:
      "A starter privacy policy page for analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This page should be reviewed before launch and updated to match the deployed site's analytics, hosting, and contact setup.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
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
      "Terms of use template for an unofficial game guide site, including scope, disclaimers, and acceptable use.",
    summary:
      "A starter terms page for an unofficial guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This terms page is a template and should be reviewed before launch for the final site owner and jurisdiction.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update before launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the game publisher, developer, platform holders, or trademark owners unless explicitly stated after launch.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
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
