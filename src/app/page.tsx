import Link from "next/link";
import { prisma } from "@/lib/db";
import { SIDO_ORDER } from "@/lib/constants";
import { PoliticianCard } from "@/components/PoliticianCard";
import { SearchBox } from "@/components/SearchBox";
import { PartyStats } from "@/components/PartyStats";
import { PartyProgressStats } from "@/components/PartyProgressStats";
import { AdSlot } from "@/components/AdSlot";
import { VerdictBadge } from "@/components/VerdictBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { UpdateBanner } from "@/components/UpdateBanner";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const pledgeSelect = { select: { status: true, progressPercent: true, source: true } } as const;

  const [
    recentFactChecks,
    recentJudgedPledges,
    president,
    governors,
    totalPoliticians,
    totalPledges,
    ratedCount,
    partyGroups,
    ratedPledgesByParty,
    recentUpdateCount,
    latestUpdate,
  ] = await Promise.all([
    prisma.factCheck.findMany({ orderBy: { checkedAt: "desc" }, take: 5 }),
    prisma.pledge.findMany({
      where: { source: "nec", statusCheckedAt: { not: null } },
      orderBy: { statusCheckedAt: "desc" },
      take: 5,
      include: { politician: { select: { id: true, name: true } } },
    }),
    prisma.politician.findFirst({ where: { level: "president" }, include: { pledges: pledgeSelect } }),
    prisma.politician.findMany({ where: { level: "governor" }, include: { pledges: pledgeSelect } }),
    prisma.politician.count(),
    prisma.pledge.count(),
    prisma.pledge.count({ where: { status: { not: "unrated" } } }),
    prisma.politician.groupBy({ by: ["party"], _count: { _all: true } }),
    prisma.pledge.findMany({
      where: { source: "nec", status: { not: "unrated" } },
      select: { progressPercent: true, politician: { select: { party: true } } },
    }),
    prisma.pledge.count({
      where: { statusCheckedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
    }),
    prisma.pledge.findFirst({
      where: { statusCheckedAt: { not: null } },
      orderBy: { statusCheckedAt: "desc" },
      select: { statusCheckedAt: true },
    }),
  ]);

  const sortedGovernors = [...governors].sort(
    (a, b) => SIDO_ORDER.indexOf(a.region) - SIDO_ORDER.indexOf(b.region),
  );
  const partyCounts = partyGroups
    .map((g) => ({ party: g.party, count: g._count._all }))
    .sort((a, b) => b.count - a.count);

  const partyProgressMap = new Map<string, { sum: number; count: number }>();
  for (const pl of ratedPledgesByParty) {
    const party = pl.politician.party;
    const entry = partyProgressMap.get(party) ?? { sum: 0, count: 0 };
    entry.sum += pl.progressPercent;
    entry.count += 1;
    partyProgressMap.set(party, entry);
  }
  const partyProgress = [...partyProgressMap.entries()]
    .map(([party, { sum, count }]) => ({ party, average: Math.round(sum / count), count }))
    .sort((a, b) => b.average - a.average);

  const hasAnyContent = totalPoliticians > 0;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <h1 className="break-keep text-3xl font-bold text-brand sm:text-4xl">
          뽑았으니, 이제 확인해요.
        </h1>
        <p className="mt-3 max-w-2xl break-keep text-base leading-relaxed text-foreground/70">
          중앙선거관리위원회 공식 데이터를 기반으로, 선출직 공직자가 내건 공약이 지금 어디까지
          왔는지 근거와 함께 확인할 수 있는 곳입니다.
        </p>
        <div className="mt-6">
          <SearchBox />
        </div>
      </section>

      <UpdateBanner recentCount={recentUpdateCount} latestDate={latestUpdate?.statusCheckedAt ?? null} />

      {partyProgress.length > 0 && (
        <section className="mb-10">
          <PartyProgressStats stats={partyProgress} />
        </section>
      )}

      {hasAnyContent && (
        <section id="region-picker" className="mb-10 scroll-mt-20">
          <h2 className="mb-3 text-lg font-semibold text-brand">지역 선택</h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {SIDO_ORDER.map((sido) => (
              <li key={sido}>
                <Link
                  href={`/region/${encodeURIComponent(sido)}`}
                  className="block break-keep rounded-lg border border-border bg-card px-3 py-2.5 text-center text-sm font-medium text-foreground/80 transition hover:border-accent hover:text-accent"
                >
                  {sido}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(president || sortedGovernors.length > 0) && (
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-brand">주요 정치인</h2>
          {president && (
            <div className="mb-3">
              <PoliticianCard p={president} highlight />
            </div>
          )}
          <ul className="grid gap-3 sm:grid-cols-2">
            {sortedGovernors.map((g) => (
              <PoliticianCard
                key={g.id}
                p={g}
                regionLinkLabel="관할 시·군·구 보기 →"
              />
            ))}
          </ul>
        </section>
      )}

      {(recentJudgedPledges.length > 0 || recentFactChecks.length > 0) && (
        <section className="mb-10 grid gap-6 sm:grid-cols-2">
          {recentJudgedPledges.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground/70">최근 판정된 공약</h2>
              <ul className="space-y-2">
                {recentJudgedPledges.map((pl) => (
                  <li key={pl.id}>
                    <Link
                      href={`/politician/${pl.politician!.id}#pledge-${pl.id}`}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-accent hover:shadow-sm"
                    >
                      <span className="min-w-0 truncate text-sm">
                        <span className="font-medium">{pl.politician!.name}</span>
                        <span className="text-foreground/60"> {pl.title}</span>
                      </span>
                      <StatusBadge status={pl.status} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recentFactChecks.length > 0 && (
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground/70">최근 팩트체크</h2>
                <Link href="/factcheck" className="text-xs text-accent hover:underline">
                  전체 보기 →
                </Link>
              </div>
              <ul className="space-y-2">
                {recentFactChecks.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/factcheck/${c.id}`}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-accent hover:shadow-sm"
                    >
                      <span className="min-w-0 truncate text-sm">
                        <span className="font-medium">{c.politicianName}</span>
                        <span className="text-foreground/60"> &ldquo;{c.claim}&rdquo;</span>
                      </span>
                      <VerdictBadge verdict={c.verdict} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="mb-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="mb-4 text-sm font-semibold text-foreground/70">수집 현황과 출처</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="등록된 정치인" value={totalPoliticians} />
          <Stat label="수집된 공약" value={totalPledges} />
          <Stat label="판정 완료" value={ratedCount} />
          <Stat
            label="판정률"
            value={totalPledges ? `${Math.round((ratedCount / totalPledges) * 100)}%` : "0%"}
          />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-foreground/70">
          공약 원문은 중앙선거관리위원회 공식 자료를, 이행 판정 기준은{" "}
          <Link href="/about#판정기준" className="text-accent hover:underline">
            판정 기준 안내
          </Link>
          에서 자세히 볼 수 있어요.
        </p>
      </section>

      {partyCounts.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-3 text-sm font-semibold text-foreground/60">정당별 인원 (보조 정보)</h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <PartyStats counts={partyCounts} />
          </div>
        </section>
      )}

      <AdSlot position="bottom" />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-2xl font-bold text-brand sm:text-3xl">{value}</div>
      <div className="mt-0.5 text-sm text-foreground/60">{label}</div>
    </div>
  );
}
