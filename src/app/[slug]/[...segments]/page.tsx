import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getIndexablePages, getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
    segments: string[];
  }>;
}

export function generateStaticParams() {
  return getIndexablePages()
    .map((page) => page.url.split("/").filter(Boolean))
    .filter((segments) => segments.length > 1)
    .map(([slug, ...segments]) => ({ slug, segments }));
}

function routePath(slug: string, segments: string[]): string {
  return `/${[slug, ...segments].join("/")}`;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, segments } = await params;
  const page = getPageByUrl(routePath(slug, segments));

  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps) {
  const { slug, segments } = await params;
  const page = getPageByUrl(routePath(slug, segments));

  if (!page) notFound();

  return (
    <PageShell locale={page.locale}>
      <PageRenderer page={page} />
    </PageShell>
  );
}
