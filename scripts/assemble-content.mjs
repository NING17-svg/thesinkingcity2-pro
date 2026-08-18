#!/usr/bin/env node
// V3 content assembler for the Sinking City 2.
// Reads en-US markdown files declared in content-package.json and writes
// generated TypeScript data into src/data/generated-pages.ts so the Builder
// does not hand-author 16 prose-heavy pages.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import crypto from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const taskContentDir = "/Users/ningshiqi/project/game-workflow/site-launch/tasks/thesinkingcity2-pro/content";
const packageJsonPath = path.join(taskContentDir, "content-package.json");
const generatedOut = path.resolve(
  projectRoot,
  "src/data/generated-pages.ts",
);

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("missing frontmatter");
  }
  const [, fm, body] = match;
  const meta = {};
  for (const line of fm.split(/\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body };
}

function extractSections(body) {
  const sections = [];
  const lines = body.split(/\n/);
  let current = null;
  for (const line of lines) {
    const sectionMatch = line.match(/<!--\s*section:([a-z0-9-]+)\s*-->/i);
    if (sectionMatch) {
      if (current) sections.push(current);
      current = { name: sectionMatch[1], lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);
  for (const s of sections) {
    s.text = s.lines.join("\n").trim();
  }
  return sections;
}

function stripHeading(text) {
  return text.replace(/^##\s+.*?\n/, "").trim();
}

function listItems(text) {
  const lines = text.split(/\n/);
  return lines
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

function slugifyHeading(heading) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function splitProseBlocks(text) {
  // Splits section into paragraphs separated by blank lines; headings become
  // module headings.
  const blocks = [];
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  for (const para of paragraphs) {
    if (para.startsWith("## ")) {
      blocks.push({ heading: para.slice(3).trim(), body: "" });
      continue;
    }
    blocks.push({ heading: null, body: para });
  }
  return blocks;
}

function linksFromParagraph(para) {
  // Extract markdown links.
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  let m;
  while ((m = linkRe.exec(para)) !== null) {
    links.push({ label: m[1], href: m[2] });
  }
  return links;
}

function assemblePage(pkgFile, markdownRaw) {
  const { meta, body } = parseFrontmatter(markdownRaw);
  const sections = extractSections(body);
  const sectionMap = {};
  for (const s of sections) sectionMap[s.name] = s.text;

  const quickAnswerBlock =
    sectionMap["quick-answer"] ||
    extractQuickAnswerFromHeadings(body);
  // Trim to first paragraph block so the hero does not embed subsequent
  // headings or body prose.
  const quickAnswer = stripHeading(quickAnswerBlock)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)[0] || "";

  const sourcesBlock = sectionMap["sources"] || "";
  const linksBlock = sectionMap["internal-links"] || "";

  // Body sections are everything between quick-answer and the first non-body
  // explicit section marker (faq/sources/internal-links/fact-boundaries).
  const bodySectionsText = [];
  for (const s of sections) {
    if (
      s.name === "quick-answer" ||
      s.name === "faq" ||
      s.name === "sources" ||
      s.name === "internal-links" ||
      s.name === "fact-boundaries"
    ) {
      continue;
    }
    bodySectionsText.push(s.text);
  }
  const proseText = bodySectionsText.join("\n\n");

  const modules = [];
  const relatedPageIds = new Set();
  const urlToId = (url) => url.replace(/^\//, "").replace(/\/$/, "") || "home";
  const urlToTranslationKey = (url) =>
    url.replace(/^\//, "").replace(/\/$/, "") || "home";

  // Collect internal links across the whole body.
  const allBodyText =
    quickAnswer +
    "\n" +
    proseText +
    "\n" +
    (sectionMap["faq"] || "") +
    "\n" +
    linksBlock;
  for (const link of linksFromParagraph(allBodyText)) {
    if (link.href.startsWith("/") && link.href !== pkgFile.route) {
      const slugPart = link.href.replace(/^\//, "").replace(/\/$/, "");
      if (slugPart && slugPart !== "home") {
        relatedPageIds.add(`${slugPart}-en-US`);
      }
    }
  }

  // Each prose block becomes a prose module. Headings become module headings.
  const blocks = splitProseBlocks(proseText);
  let moduleCount = 0;
  let currentHeading = null;
  let currentBody = "";
  const flush = () => {
    if (!currentHeading && !currentBody.trim()) return;
    const id = `${slugifyHeading(currentHeading || "section")}-${++moduleCount}`;
    const guideModule = {
      id,
      type: "prose",
      heading: currentHeading || id,
      body: currentBody.trim(),
    };
    // pull links from body
    const links = linksFromParagraph(guideModule.body);
    if (links.length) {
      guideModule.links = links.map((l) => ({
        label: l.label,
        href: l.href,
        description: undefined,
      }));
    }
    modules.push(guideModule);
    currentHeading = null;
    currentBody = "";
  };
  for (const block of blocks) {
    if (block.heading) {
      flush();
      currentHeading = block.heading;
    } else if (block.body) {
      currentBody += (currentBody ? "\n\n" : "") + block.body;
    }
  }
  flush();

  // Source list as a final prose module when sources exist.
  const sourceItems = listItems(sourcesBlock);
  if (sourceItems.length) {
    modules.push({
      id: "sources",
      type: "prose",
      heading: "Sources",
      body: sourceItems.join("\n"),
    });
  }

  const route = pkgFile.route === "/" ? "/" : pkgFile.route;
  const slug = route === "/" ? "" : route.slice(1);
  const pageType =
    pkgFile.content_type === "homepage"
      ? "home"
      : pkgFile.content_type === "status"
        ? "release"
        : pkgFile.content_type === "comparison"
          ? "wiki"
          : pkgFile.content_type === "guide"
            ? "guides"
            : pkgFile.content_type === "explanation"
              ? "wiki"
              : "wiki";
  const shell =
    pkgFile.content_type === "homepage"
      ? "home"
      : pkgTypeToShell(pkgFile.content_type);
  const variant = pkgFile.route_kind === "home" ? undefined : "reading-right-rail";

  return {
    pkgFile,
    meta,
    pageData: {
      id: `${pkgFile.page_id}-en-US`,
      translationKey: pkgFile.page_id,
      locale: pkgFile.locale,
      routeKind: pkgFile.route_kind === "home" ? "fixed" : pkgFile.route_kind,
      slug,
      url: route,
      pageType,
      presentation:
        pkgFile.page_id === "home"
          ? { shell: "home" }
          : { shell, ...(variant ? { variant } : {}) },
      h1: meta.h1,
      seoTitle: meta.title,
      metaDescription: meta.meta_description,
      summary: (quickAnswer || meta.h1).slice(0, 240),
      hero: {
        subtitle: meta.primary_intent || meta.h1,
        ctas: [],
      },
      quickAnswer,
      keyFacts: buildKeyFacts(meta, pkgFile),
      modules,
      faqIds: pageIdListFromFaqSection(sectionMap["faq"] || ""),
      relatedPageIds: Array.from(relatedPageIds),
      schemaTypes: ["Article", "BreadcrumbList"],
      sourceStatus: "official",
      lastReviewed: meta.research_date || "2026-08-18",
    },
  };
}

function pkgTypeToShell(contentType) {
  // Hub-like pages (status, reference, comparison) use content shell.
  return "content";
}

function extractQuickAnswerFromHeadings(body) {
  // Some pages prefix the quick answer with `## Quick Answer` instead of
  // the comment-tagged section. Capture the content up to the next heading.
  const re = /^##\s+Quick Answer\s*\n([\s\S]*?)(?=\n##\s|\n<!--\s*section:|$)/m;
  const match = body.match(re);
  return match ? match[1] : "";
}

function buildKeyFacts(meta, pkgFile) {
  const facts = [];
  if (meta.research_date) {
    facts.push({ label: "Research date", value: meta.research_date });
  }
  if (pkgFile.content_type === "status" || pkgFile.route_kind === "home") {
    facts.push({
      label: "Page type",
      value: pkgFile.content_type === "homepage" ? "Guide hub" : "Status",
    });
  }
  if (pkgFile.content_type === "guide") {
    facts.push({ label: "Scope", value: "Player guide" });
  }
  if (pkgFile.content_type === "reference") {
    facts.push({ label: "Scope", value: "Reference" });
  }
  if (pkgFile.content_type === "comparison") {
    facts.push({ label: "Scope", value: "Comparison" });
  }
  if (pkgFile.content_type === "explanation") {
    facts.push({ label: "Scope", value: "Lore / setting" });
  }
  facts.push({ label: "Source rule", value: "Official facts only" });
  return facts;
}

function pageIdListFromFaqSection(text) {
  // Each FAQ heading becomes an in-page section; do NOT inject FAQ JSON-LD
  // items we did not author. Return empty array.
  return [];
}

function buildSiteConfig(pkg) {
  return {
    primaryLocale: pkg.primary_locale,
    locales: pkg.launch_locales,
  };
}

async function main() {
  const packageRaw = await readFile(packageJsonPath, "utf-8");
  const pkg = JSON.parse(packageRaw);

  const pages = [];
  for (const file of pkg.page_files) {
    const abs = path.join(taskContentDir, file.file);
    const raw = await readFile(abs, "utf-8");
    const { pageData, meta } = assemblePage(file, raw);
    pages.push({ file, pageData, meta });
  }

  const header = `// AUTO-GENERATED by scripts/assemble-content.mjs. Do not edit by hand.
// Regenerate whenever content-package.json or its declared files change.
import type { PageContent } from "@/types/content";\n\n`;

  const constants = pages
    .map(({ pageData, meta, file }) => {
      const banner = `// Source: ${file.file}\n// h1: ${meta.h1 || ""}\n`;
      return banner + `export const page_${pageData.translationKey.replace(/-/g, "_")}: PageContent = ${JSON.stringify(pageData, null, 2)};`;
    })
    .join("\n\n");

  const aggregate = `export const generatedPages: PageContent[] = [\n  ${pages
    .map(({ pageData }) => `page_${pageData.translationKey.replace(/-/g, "_")}`)
    .join(",\n  ")},\n];\n`;

  const out = header + constants + "\n\n" + aggregate;
  await writeFile(generatedOut, out, "utf-8");

  const sha = crypto
    .createHash("sha256")
    .update(
      pages
        .map(({ meta }) =>
          Object.entries(meta)
            .map(([k, v]) => `${k}:${v}`)
            .join("|"),
        )
        .join(""),
    )
    .digest("hex");

  console.log(
    `[assemble-content] wrote ${pages.length} pages to ${path.relative(projectRoot, generatedOut)} (combined meta hash ${sha.slice(0, 16)})`,
  );
}

main().catch((err) => {
  console.error("[assemble-content] failed:", err);
  process.exit(1);
});
