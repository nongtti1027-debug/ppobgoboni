import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { PoliticianCard } from "@/components/PoliticianCard";
import { SearchBox } from "@/components/SearchBox";
import { LEVEL_LABELS } from "@/lib/constants";

export const metadata: Metadata = { title: "공약 찾기" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const results = query
    ? await prisma.politician.findMany({
        where: {
          OR: [
            { name: { contains: query } },
            { region: { contains: query } },
            { office: { contains: query } },
            { pledges: { some: { title: { contains: query } } } },
          ],
        },
        orderBy: [{ level: "asc" }, { region: "asc" }],
        include: { pledges: { select: { status: true, progressPercent: true, source: true } } },
      })
    : [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="break-keep text-2xl font-bold text-brand">공약 찾기</h1>
      <p className="mt-2 text-base text-foreground/70">
        정치인 이름, 지역, 공약 키워드로 검색해보세요.
      </p>
      <div className="mt-5">
        <SearchBox initialQuery={query} />
      </div>

      <div className="mt-8">
        {!query ? (
          <p className="text-sm text-foreground/60">검색어를 입력해주세요.</p>
        ) : results.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-6 text-sm text-foreground/70">
            <p>
              &ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다. 이름, 지역명, 또는 공약에
              들어갈 만한 단어로 다시 시도해보세요.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-3 text-sm text-foreground/60">
              &ldquo;{query}&rdquo; 검색 결과 {results.length}건
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {results.map((p) => (
                <PoliticianCard key={p.id} p={p} />
              ))}
            </ul>
          </>
        )}
      </div>

      <p className="mt-10 text-xs text-foreground/60">
        찾는 지역이 있다면{" "}
        <Link href="/#region-picker" className="text-accent hover:underline">
          지역별로 둘러보기
        </Link>
        , {LEVEL_LABELS.president}·{LEVEL_LABELS.governor} 공약 판정 기준은{" "}
        <Link href="/about#판정기준" className="text-accent hover:underline">
          판정 기준 안내
        </Link>
        에서 확인할 수 있어요.
      </p>
    </main>
  );
}
