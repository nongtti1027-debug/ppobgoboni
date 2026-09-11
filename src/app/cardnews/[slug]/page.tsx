import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { partyColor } from "@/lib/constants";
import { AdSlot } from "@/components/AdSlot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await prisma.cardNews.findUnique({ where: { slug } });
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      images: item.images.split("\n").slice(0, 1),
    },
  };
}

export default async function CardNewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await prisma.cardNews.findUnique({
    where: { slug },
    include: { politician: true },
  });

  if (!item) notFound();

  const images = item.images.split("\n").filter(Boolean);

  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <Link href="/cardnews" className="text-sm text-accent hover:underline">
          ← 카드뉴스 목록
        </Link>

        <article className="mt-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-accent">{item.category}</span>
            {item.politician && (
              <Link
                href={`/politician/${item.politician.id}`}
                className="text-sm font-medium hover:underline"
                style={{ color: partyColor(item.politician.party) }}
              >
                {item.politician.name} 프로필 보기 →
              </Link>
            )}
          </div>

          <h1 className="mt-3 text-2xl font-bold leading-snug text-foreground">
            {item.title}
          </h1>
          <p className="mt-2 text-sm text-foreground/60">{item.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-background"
              >
                <Image
                  src={src}
                  alt={`${item.title} 슬라이드 ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 45vw, 220px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h2 className="mb-3 text-sm font-semibold text-foreground/70">전체 내용</h2>
            <div className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
              {item.content}
            </div>
          </div>

          <p className="mt-6 text-xs text-foreground/40">
            게시일: {item.publishedAt.toLocaleDateString("ko-KR")}
          </p>
        </article>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-6">
          <AdSlot position="sidebar" />
        </div>
      </aside>
    </main>
  );
}
