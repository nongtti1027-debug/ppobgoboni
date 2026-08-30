import Link from "next/link";
import { prisma } from "@/lib/db";
import { LEVEL_LABELS, partyColor } from "@/lib/constants";
import { StatusDistributionBar } from "@/components/StatusDistributionBar";
import { PartyStats } from "@/components/PartyStats";
import { AdSlot } from "@/components/AdSlot";
import { VerdictBadge } from "@/components/VerdictBadge";

export default async function HomePage() {
  const recentFactChecks = await prisma.factCheck.findMany({
    orderBy: { checkedAt: "desc" },
    take: 5,
  });

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

  const president = politicians.filter((p) => p.level === "president");
  const assembly = politicians.filter((p) => p.level === "assembly");

  const SIDO_ORDER = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원특별자치도",
    "충청북도",
    "충청남도",
    "전북특별자치도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const regionMap = new Map<
    string,
    { governor?: (typeof politicians)[number]; mayors: typeof politicians }
  >();
  for (const p of politicians) {
    if (p.level !== "governor" && p.level !== "mayor") continue;
    const entry = regionMap.get(p.region) ?? { mayors: [] };
    if (p.level === "governor") entry.governor = p;
    else entry.mayors.push(p);
    regionMap.set(p.region, entry);
  }
  const regionSections = SIDO_ORDER.filter((r) => regionMap.has(r)).map((r) => ({
    region: r,
    ...regionMap.get(r)!,
  }));
  // 목록에 없는 지역명이 데이터에 있으면 맨 뒤에라도 표시
  for (const [region, entry] of regionMap) {
    if (!SIDO_ORDER.includes(region)) regionSections.push({ region, ...entry });
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <AdSlot position="header" />

      {recentFactChecks.length > 0 && (
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground/60">최근 팩트체크</h2>
            <Link href="/factcheck" className="text-xs text-accent hover:underline">
              전체 보기 →
            </Link>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {recentFactChecks.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/factcheck/${c.id}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-accent hover:shadow-sm"
                >
                  <span className="min-w-0 truncate text-sm">
                    <span className="font-medium">{c.politicianName}</span>
                    <span className="text-foreground/50">
                      {" "}
                      &ldquo;{c.claim}&rdquo;
                    </span>
                  </span>
                  <VerdictBadge verdict={c.verdict} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
        <>
          {president.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand">
                {LEVEL_LABELS.president}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {president.map((p) => (
                  <PoliticianCard key={p.id} p={p} />
                ))}
              </ul>
            </section>
          )}

          {regionSections.map((section, idx) => (
            <div key={section.region}>
              <section className="mb-10">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand">
                  {section.region}
                  <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                    {(section.governor ? 1 : 0) + section.mayors.length}명
                  </span>
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {section.governor && <PoliticianCard p={section.governor} />}
                  {section.mayors.map((p) => (
                    <PoliticianCard key={p.id} p={p} />
                  ))}
                </ul>
              </section>
              {idx < regionSections.length - 1 && idx % 4 === 3 && (
                <div className="mb-10">
                  <AdSlot position="in-list" />
                </div>
              )}
            </div>
          ))}

          {assembly.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand">
                {LEVEL_LABELS.assembly}
                <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                  {assembly.length}명
                </span>
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {assembly.map((p) => (
                  <PoliticianCard key={p.id} p={p} />
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      <AdSlot position="bottom" />
    </main>
  );
}

function PoliticianCard({
  p,
}: {
  p: {
    id: string;
    name: string;
    party: string;
    office: string;
    pledges: { status: string }[];
  };
}) {
  const counts = p.pledges.reduce<Record<string, number>>((acc, pl) => {
    acc[pl.status] = (acc[pl.status] ?? 0) + 1;
    return acc;
  }, {});
  return (
    <li>
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
            <span className="shrink-0 text-xs font-medium" style={{ color: partyColor(p.party) }}>
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
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-2xl font-bold text-brand sm:text-3xl">{value}</div>
      <div className="mt-0.5 text-xs text-foreground/50 sm:text-sm">{label}</div>
    </div>
  );
}
