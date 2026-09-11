import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { partyColor } from "@/lib/constants";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "카드뉴스",
  description: "정치인 검증·공약 이행 카드뉴스를 한눈에 모아봅니다",
};

export const dynamic = "force-dynamic";

export default async function CardNewsListPage() {
  const items = await prisma.cardNews.findMany({
    orderBy: { publishedAt: "desc" },
    include: { politician: { select: { name: true, party: true } } },
  });

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-brand">카드뉴스</h1>
        <p className="mt-2 text-sm text-foreground/60">
          정치인 검증·공약 이행 내용을 카드뉴스로 정리해서 다시 볼 수 있습니다.
        </p>
      </header>

      <AdSlot position="header" />

      {items.length === 0 ? (
        <p className="mt-8 text-foreground/60">아직 등록된 카드뉴스가 없습니다.</p>
      ) : (
        categories.map((category) => (
          <section key={category} className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-foreground/70">{category}</h2>
            <div className="space-y-4">
              {items
                .filter((i) => i.category === category)
                .map((item) => {
                  const firstImage = item.images.split("\n")[0];
                  return (
                    <Link
                      key={item.id}
                      href={`/cardnews/${item.slug}`}
                      className="flex gap-4 rounded-lg border border-border bg-card p-4 transition hover:border-accent hover:shadow-sm"
                    >
                      {firstImage && (
                        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-md bg-background">
                          <Image
                            src={firstImage}
                            alt={item.title}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        {item.politician && (
                          <span
                            className="text-xs font-medium"
                            style={{ color: partyColor(item.politician.party) }}
                          >
                            {item.politician.name}
                          </span>
                        )}
                        <p className="mt-1 font-semibold leading-snug text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-foreground/50">
                          {item.summary}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </section>
        ))
      )}
    </main>
  );
}
