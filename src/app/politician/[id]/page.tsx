import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { partyColor, SOURCE_LABELS } from "@/lib/constants";
import { StatusBadge } from "@/components/StatusBadge";
import { StatusDistributionBar } from "@/components/StatusDistributionBar";
import { AdSlot } from "@/components/AdSlot";

export default async function PoliticianPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const politician = await prisma.politician.findUnique({
    where: { id },
    include: { pledges: { orderBy: { order: "asc" } } },
  });

  if (!politician) notFound();

  const counts = politician.pledges.reduce<Record<string, number>>((acc, pl) => {
    acc[pl.status] = (acc[pl.status] ?? 0) + 1;
    return acc;
  }, {});

  const necPledges = politician.pledges.filter((p) => p.source === "nec");
  const manifestoPledges = politician.pledges.filter((p) => p.source === "manifesto");

  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← 전체 목록
        </Link>

        <header
          className="mt-4 mb-8 rounded-2xl border border-border bg-card p-6"
          style={{ borderTopColor: partyColor(politician.party), borderTopWidth: 4 }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h1 className="text-2xl font-bold">{politician.name}</h1>
            <span
              className="text-sm font-medium"
              style={{ color: partyColor(politician.party) }}
            >
              {politician.party}
            </span>
          </div>
          <p className="mt-1 text-sm text-foreground/60">
            {politician.office} · {politician.electionName}
          </p>

          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between text-xs text-foreground/50">
              <span>공약 {politician.pledges.length}개</span>
              <span>{counts.unrated ?? 0}개 판정 전</span>
            </div>
            <StatusDistributionBar counts={counts} total={politician.pledges.length} />
          </div>
        </header>

        {necPledges.length > 0 && (
          <PledgeGroup title={SOURCE_LABELS.nec} pledges={necPledges} />
        )}

        {manifestoPledges.length > 0 && (
          <div className="mt-10">
            <PledgeGroup title={SOURCE_LABELS.manifesto} pledges={manifestoPledges} />
          </div>
        )}

        {politician.manifestoText && (
          <details className="mt-8 rounded-lg border border-border bg-card p-5">
            <summary className="cursor-pointer select-none font-semibold text-foreground/80">
              한국매니페스토실천본부 질의응답 원문
            </summary>
            <p className="mt-2 text-xs text-foreground/40">
              선거 전 후보자가 직접 작성해 제출한 답변으로, 위 공약(중앙선거관리위원회 자료)과는 별도의
              자료입니다.
            </p>
            <div className="mt-4 whitespace-pre-line text-sm text-foreground/80">
              {politician.manifestoText}
            </div>
          </details>
        )}

        <p className="mt-8 text-xs text-foreground/40">
          ※ 대표적인 공약이며, 병국미래연구소에서 판단한 이행율입니다.
        </p>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-6">
          <AdSlot position="sidebar" />
        </div>
      </aside>
    </main>
  );
}

function PledgeGroup({
  title,
  pledges,
}: {
  title: string;
  pledges: {
    id: string;
    order: number;
    realm: string | null;
    title: string;
    goal: string;
    method: string;
    timeline: string;
    funding: string;
    status: string;
    statusNote: string | null;
    statusSource: string | null;
  }[];
}) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-foreground/60">{title}</h2>
      <div className="space-y-5">
        {pledges.map((pledge) => (
          <article key={pledge.id} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug">
                {pledge.order}. {pledge.title}
              </h3>
              <StatusBadge status={pledge.status} />
            </div>
            {pledge.realm && (
              <p className="mt-1 text-xs text-foreground/40">{pledge.realm}</p>
            )}

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-foreground/70">목표</dt>
                <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.goal}</dd>
              </div>

              <details className="group">
                <summary className="cursor-pointer select-none font-medium text-foreground/70 marker:content-none">
                  <span className="inline-flex items-center gap-1">
                    이행방법
                    <span className="text-foreground/40 transition group-open:rotate-90">›</span>
                  </span>
                </summary>
                <dd className="mt-2 whitespace-pre-line text-foreground/80">{pledge.method}</dd>
              </details>

              <div>
                <dt className="font-medium text-foreground/70">이행기간</dt>
                <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.timeline}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/70">재원조달방안</dt>
                <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.funding}</dd>
              </div>

              {pledge.status !== "unrated" && pledge.statusNote && (
                <div className="rounded-md bg-background p-3">
                  <dt className="font-medium text-foreground/70">판정 근거</dt>
                  <dd className="mt-1 text-foreground/80">{pledge.statusNote}</dd>
                  {pledge.statusSource && (
                    <dd className="mt-1 text-xs text-foreground/40">출처: {pledge.statusSource}</dd>
                  )}
                </div>
              )}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
