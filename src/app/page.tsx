import Link from "next/link";
import { prisma } from "@/lib/db";
import { LEVEL_LABELS, partyColor } from "@/lib/constants";
import { StatusDistributionBar } from "@/components/StatusDistributionBar";
import { PartyStats } from "@/components/PartyStats";
import { AdSlot } from "@/components/AdSlot";

export default async function HomePage() {
  const politicians = await prisma.politician.findMany({
    orderBy: [{ level: "asc" }, { region: "asc" }],
    include: { pledges: { select: { status: true } } },
  });

  const totalPledges = politicians.reduce((sum, p) => sum + p.pledges.length, 0);
  const overallCounts = politicians.reduce<Record<string, number>>((acc, p) => {
    for (const pledge of p.pledges) {
      acc[pledge.status] = (acc[pledge.status] ?? 0) + 1;
    }
    return acc;
  }, {});
  const ratedCount = totalPledges - (overallCounts.unrated ?? 0);

  const partyCounts = Object.entries(
    politicians.reduce<Record<string, number>>((acc, p) => {
      acc[p.party] = (acc[p.party] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([party, count]) => ({ party, count }));

  const groups = politicians.reduce<Record<string, typeof politicians>>(
    (acc, p) => {
      (acc[p.level] ??= []).push(p);
      return acc;
    },
    {},
  );
  const levelOrder = ["president", "governor", "mayor", "assembly"];
  const visibleLevels = levelOrder.filter((level) => groups[level]?.length);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <AdSlot position="header" />

      <section className="mt-6 mb-10 grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="text-2xl font-bold text-brand sm:text-3xl">
            정치인들의 약속, 지금 어디까지 왔을까요?
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-foreground/60 sm:text-base">
            중앙선거관리위원회 공식 데이터를 기반으로 선거 공약과 이행 현황을 정리합니다.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="등록된 정치인" value={politicians.length} />
            <Stat label="수집된 공약" value={totalPledges} />
            <Stat label="판정 완료" value={ratedCount} />
            <Stat
              label="판정률"
              value={totalPledges ? `${Math.round((ratedCount / totalPledges) * 100)}%` : "0%"}
            />
          </div>

          <div className="mt-5">
            <StatusDistributionBar counts={overallCounts} total={totalPledges} />
          </div>
        </div>

        <div className="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
          <PartyStats counts={partyCounts} />
        </div>
      </section>

      {politicians.length === 0 ? (
        <p className="text-foreground/60">아직 등록된 데이터가 없습니다.</p>
      ) : (
        visibleLevels.map((level, idx) => (
          <div key={level}>
            <section className="mb-10">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand">
                {LEVEL_LABELS[level] ?? level}
                <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                  {groups[level].length}명
                </span>
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {groups[level].map((p) => {
                  const counts = p.pledges.reduce<Record<string, number>>((acc, pl) => {
                    acc[pl.status] = (acc[pl.status] ?? 0) + 1;
                    return acc;
                  }, {});
                  return (
                    <li key={p.id}>
                      <Link
                        href={`/politician/${p.id}`}
                        className="flex items-stretch gap-3 rounded-lg border border-border bg-card p-4 transition hover:border-accent hover:shadow-sm"
                      >
                        <span
                          className="w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: partyColor(p.party) }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="font-medium">{p.name}</span>
                            <span
                              className="shrink-0 text-xs font-medium"
                              style={{ color: partyColor(p.party) }}
                            >
                              {p.party}
                            </span>
                          </div>
                          <div className="mt-1 text-sm text-foreground/60">
                            {p.office} · 공약 {p.pledges.length}개
                          </div>
                          <div className="mt-3">
                            <StatusDistributionBar counts={counts} total={p.pledges.length} />
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            {idx < visibleLevels.length - 1 && (
              <div className="mb-10">
                <AdSlot position="in-list" />
              </div>
            )}
          </div>
        ))
      )}

      <AdSlot position="bottom" />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-2xl font-bold text-brand sm:text-3xl">{value}</div>
      <div className="mt-0.5 text-xs text-foreground/50 sm:text-sm">{label}</div>
    </div>
  );
}
