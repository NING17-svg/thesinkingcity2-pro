import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "The Sinking City 2 Guide",
  brandMark: "TSC2",
  gameName: "The Sinking City 2",
  domain: "thesinkingcity2.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://thesinkingcity2.pro").replace(/\/$/, ""),
  description:
    "First-launch guide hub for The Sinking City 2: release date, platforms, edition pricing, walkthrough, enemies, weapons, achievements, Arkham lore, and post-launch update tracking.",
  tagline:
    "Release date, platforms, walkthrough, weapons, and post-launch notes for The Sinking City 2.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "The Sinking City 2 Guide (unofficial fan site)",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "The Sinking City 2 on Steam",
      href: "https://store.steampowered.com/app/2825860/The_Sinking_City_2",
      description: "AppID 2825860 store page; primary source for release timing, editions, and PC specs.",
    },
    {
      label: "Frogwares official site",
      href: "https://frogwares.com",
      description: "Developer and publisher (Frogwares Ireland Ltd.) official site.",
    },
    {
      label: "Frogwares YouTube channel",
      href: "https://www.youtube.com/@Frogwares",
      description: "Release-date trailers, gold-master update, and first-place announcements.",
    },
    {
      label: "Frogwares Kickstarter campaign",
      href: "https://www.kickstarter.com/projects/frogwares/the-sinking-city-2",
      description: "Premium-tier contents, Holloway Manor side mission, and collector's edition.",
    },
    {
      label: "PlayStation Store (concept)",
      href: "https://store.playstation.com/en-us/concept/10009208",
      description: "PS5 SKU availability and edition tiers.",
    },
    {
      label: "Xbox Store (Premium Edition)",
      href: "https://www.xbox.com/en-US/games/store/the-sinking-city-2-premium-edition-pre-order/9nh7j9l5pgtm",
      description: "Xbox Series X|S Premium Edition pre-order.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. It is not affiliated with Frogwares Ireland Ltd., the platform holders, or any trademark owner. Edition, price, and release information is sourced from the Steam store and storefront pages at the research date noted on each page.",
};
