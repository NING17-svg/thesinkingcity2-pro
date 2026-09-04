import type { PageContent } from "@/types/content";
import { generatedPages } from "@/data/generated-pages";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  description?: Record<string, string>;
}

const pageLabels: Record<string, string> = {
  "release-date": "Release Date",
  "platforms": "Platforms",
  "price": "Price & Editions",
  "system-requirements": "System Requirements",
  "review-roundup": "Review Roundup",
  "how-long-to-beat": "How Long To Beat",
  "getting-started": "Getting Started",
  "walkthrough": "Walkthrough",
  "demo-walkthrough": "Demo Walkthrough",
  "weapons": "Weapons",
  "enemies": "Enemies",
  "endings": "Endings",
  "setting-arkham": "1920s Arkham",
  "achievements": "Achievements",
  "vs-the-sinking-city-1": "Vs The Sinking City 1",
  "updates-dlc": "Updates & DLC",
  "new-game-plus": "New Game Plus",
  "talents": "Talents",
  "sanity": "Sanity & Mind's Eye",
  "bosses": "Bosses",
  "inventory-expansions": "Inventory Expansions",
  "holloway-manor": "Holloway Manor DLC",
};

function buildLabel(page: PageContent): string {
  return pageLabels[page.translationKey] || page.h1.split(":")[0].trim();
}

const homeAndStatus: string[] = [
  "release-date",
  "platforms",
  "price",
  "system-requirements",
  "review-roundup",
];

const guides: string[] = [
  "getting-started",
  "walkthrough",
  "demo-walkthrough",
  "how-long-to-beat",
];

const worldAndCodex: string[] = [
  "setting-arkham",
  "enemies",
  "weapons",
  "talents",
  "sanity",
  "bosses",
  "achievements",
  "endings",
  "vs-the-sinking-city-1",
  "new-game-plus",
  "inventory-expansions",
];

const status: string[] = ["updates-dlc"];

function buildItems(keys: string[]): LocalizedNavigationItem[] {
  const items: LocalizedNavigationItem[] = [];
  for (const page of generatedPages) {
    if (!keys.includes(page.translationKey)) continue;
    items.push({
      href: page.url,
      labels: { "en-US": buildLabel(page) },
      description: { "en-US": page.summary.slice(0, 140) },
    });
  }
  return items;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Guide Hub" } },
  ...buildItems(homeAndStatus),
  ...buildItems(guides),
];

export const secondaryNavigation: LocalizedNavigationItem[] = [
  ...buildItems(worldAndCodex),
  ...buildItems(status),
];

export const footerNavigation: LocalizedNavigationItem[] = [
  ...buildItems(updatesDlcOnly()),
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

function updatesDlcOnly(): string[] {
  return ["updates-dlc", "holloway-manor"];
}

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    Object.values(item.labels)[0] ||
    item.href
  );
}
