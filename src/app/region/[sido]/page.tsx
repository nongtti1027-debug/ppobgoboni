import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { PoliticianCard } from "@/components/PoliticianCard";
import { SIDO_ORDER } from "@/lib/constants";

const PAGE_SIZE = 12;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sido: string }>;
}): Promise<Metadata> {
  const { sido } = await params;
  return { title: decodeURIComponent(sido) };
}

export default async function RegionPage({
  params,
  searchParams,
}: {
  params: Promise<{ sido: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { sido: sidoParam } = await params;
  const region = decodeURIComponent(sidoParam);
  if (!SIDO_ORDER.includes(region)) notFound();

  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const pledgeSelect = { select: { status: true, progressPercent: true, source: true } } as const;

  const governor = await prisma.politician.findFirst({
    where: { level: "governor", region },
    include: { pledges: pledgeSelect },
  });

  const totalMayors = await prisma.politician.count({ where: { level: "mayor", region } });
  const totalPages = Math.max(1, Math.ceil(totalMayors / PAGE_SIZE));
  const mayors = await prisma.politician.findMany({
    where: { level: "mayor", region },
    orderBy: { office: "asc" },
    include: { pledges: pledgeSelect },
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-accent hover:underline">
        ← 홈으로
      </Link>

      <h1 className="mt-3 break-keep text-2xl font-bold text-brand">{region}</h1>
      <p className="mt-1 text-sm text-foreground/70">
        {governor ? "광역단체장 1명" : "광역단체장 정보 없음"} · 기초단체장 {totalMayors}명
      </p>

      {governor && (
        <div className="mt-6">
          <PoliticianCard p={governor} highlight />
        </div>
      )}

      <h2 className="mb-3 mt-8 text-sm font-semibold text-foreground/70">기초단체장</h2>
      {mayors.length === 0 ? (
        <p className="text-sm text-foreground/60">등록된 기초단체장 정보가 없습니다.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {mayors.map((p) => (
            <PoliticianCard key={p.id} p={p} />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav className="mt-6 flex items-center justify-center gap-1" aria-label="페이지 이동">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={`/region/${sidoParam}?page=${n}`}
              aria-current={n === page ? "page" : undefined}
              className={
                n === page
                  ? "flex h-9 w-9 items-center justify-center rounded-md bg-brand text-sm font-semibold text-white"
                  : "flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm text-foreground/70 hover:border-accent"
              }
            >
              {n}
            </Link>
          ))}
        </nav>
      )}
    </main>
  );
}
