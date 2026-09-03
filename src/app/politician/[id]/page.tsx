import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { partyColor, SOURCE_LABELS, CONTACT_EMAIL } from "@/lib/constants";
import { StatusBadge } from "@/components/StatusBadge";
import { StatusDistributionBar } from "@/components/StatusDistributionBar";
import { ProgressBar } from "@/components/ProgressBar";
import { ProgressChecklist } from "@/components/ProgressChecklist";
import { AdSlot } from "@/components/AdSlot";
import { CommentSection } from "@/components/CommentSection";
import { RatingWidget } from "@/components/RatingWidget";
import { getCommentsForPolitician } from "@/lib/comments";
import { getCurrentUser } from "@/lib/auth";
import { getRatingSummary, getUserRating } from "@/lib/ratings";

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

  const [comments, ratingSummary, currentUser] = await Promise.all([
    getCommentsForPolitician(politician.id),
    getRatingSummary(politician.id),
    getCurrentUser(),
  ]);
  const myScore = currentUser ? await getUserRating(politician.id, currentUser.id) : null;

  const counts = politician.pledges.reduce<Record<string, number>>((acc, pl) => {
    acc[pl.status] = (acc[pl.status] ?? 0) + 1;
    return acc;
  }, {});

  const necPledges = politician.pledges.filter((p) => p.source === "nec");
  const manifestoPledges = politician.pledges.filter((p) => p.source === "manifesto");

  const ratedNecPledges = necPledges.filter((p) => p.status !== "unrated");
  const avgProgress = ratedNecPledges.length
    ? Math.round(
        ratedNecPledges.reduce((sum, p) => sum + p.progressPercent, 0) /
          ratedNecPledges.length,
      )
    : null;

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
            <h1 className="break-keep text-2xl font-bold">{politician.name}</h1>
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

          {avgProgress !== null && (
            <div className="mt-4 border-t border-border pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-foreground/50">평균 이행 진도율</span>
                <span className="text-2xl font-bold text-brand">{avgProgress}%</span>
                <span className="text-xs text-foreground/40">
                  (판정 완료 {ratedNecPledges.length}/{necPledges.length}개 공약 기준)
                </span>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${avgProgress}%` }}
                />
              </div>
            </div>
          )}
        </header>

        <div className="mb-8">
          <RatingWidget
            politicianId={politician.id}
            average={ratingSummary.average}
            count={ratingSummary.count}
            myScore={myScore}
            isLoggedIn={Boolean(currentUser)}
          />
        </div>

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
            <p className="mt-2 text-xs text-foreground/60">
              선거 전 후보자가 직접 작성해 제출한 답변으로, 위 공약(중앙선거관리위원회 자료)과는 별도의
              자료입니다.
            </p>
            <div className="mt-4 whitespace-pre-line text-sm text-foreground/80">
              {politician.manifestoText}
            </div>
          </details>
        )}

        <p className="mt-8 text-xs text-foreground/60">
          ※ 대표적인 공약이며, BK미래연구소에서 판단한 이행율입니다.
          <br />
          ※ 정치인 본인께서 직접 연락하셔서 공약 이행에 대한 소명 자료를 제시하시면 확인 후
          반영해드립니다. (문의:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          )
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <CommentSection
            apiPath={`/api/politician/${politician.id}/comments`}
            initialComments={comments}
          />
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-6">
          <AdSlot position="sidebar" />
        </div>
      </aside>
    </main>
  );
}

function parseSources(raw: string): { label: string; url?: string }[] {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const out: { label: string; url?: string }[] = [];
  let pendingLabel: string | null = null;
  for (const line of lines) {
    if (line.startsWith("http")) {
      let label = pendingLabel;
      if (!label) {
        try {
          label = new URL(line).hostname.replace(/^www\./, "");
        } catch {
          label = line;
        }
      }
      out.push({ label, url: line });
      pendingLabel = null;
    } else {
      pendingLabel = line;
    }
  }
  if (pendingLabel) out.push({ label: pendingLabel });
  return out;
}

function SourceList({ raw }: { raw: string }) {
  const sources = parseSources(raw);
  if (sources.length === 0) return null;
  return (
    <ul className="mt-1.5 space-y-1 text-xs text-foreground/60">
      {sources.map((s, i) => (
        <li key={i}>
          출처:{" "}
          {s.url ? (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              {s.label}
            </a>
          ) : (
            s.label
          )}
        </li>
      ))}
    </ul>
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
    statusCheckedAt: Date | null;
    progressPercent: number;
    progressBreakdown: string | null;
  }[];
}) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-foreground/60">{title}</h2>
      <div className="space-y-5">
        {pledges.map((pledge) => (
          <article
            key={pledge.id}
            id={`pledge-${pledge.id}`}
            className="scroll-mt-20 rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="break-keep font-semibold leading-snug">
                {pledge.order}. {pledge.title}
              </h3>
              <StatusBadge status={pledge.status} />
            </div>
            {pledge.realm && (
              <p className="mt-1 text-xs text-foreground/60">{pledge.realm}</p>
            )}
            {pledge.status !== "unrated" && (
              <div className="mt-3">
                <ProgressBar percent={pledge.progressPercent} />
              </div>
            )}

            {pledge.status !== "unrated" && pledge.statusNote && (
              <div className="mt-3 rounded-md bg-background p-3">
                <p className="text-xs font-semibold text-foreground/70">핵심 근거 요약</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                  {pledge.statusNote}
                </p>
                {pledge.statusSource && <SourceList raw={pledge.statusSource} />}
                {pledge.statusCheckedAt && (
                  <p className="mt-1.5 text-xs text-foreground/50">
                    마지막 확인: {pledge.statusCheckedAt.toLocaleDateString("ko-KR")}
                  </p>
                )}
              </div>
            )}

            <details className="group mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-accent marker:content-none">
                <span className="inline-flex items-center gap-1">
                  근거 자세히 보기
                  <span className="transition group-open:rotate-90">›</span>
                </span>
              </summary>
              <dl className="mt-3 space-y-3 border-t border-border pt-3 text-sm">
                <div>
                  <dt className="font-medium text-foreground/70">목표</dt>
                  <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.goal}</dd>
                </div>

                {pledge.progressBreakdown && (
                  <div>
                    <dt className="font-medium text-foreground/70">이행방법 세부 진행도</dt>
                    <dd className="mt-2">
                      <ProgressChecklist json={pledge.progressBreakdown} />
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="font-medium text-foreground/70">이행방법 원문</dt>
                  <dd className="mt-1 whitespace-pre-line text-foreground/80">{pledge.method}</dd>
                </div>

                <div>
                  <dt className="font-medium text-foreground/70">이행기간</dt>
                  <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.timeline}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground/70">재원조달방안</dt>
                  <dd className="mt-1 whitespace-pre-line text-foreground/90">{pledge.funding}</dd>
                </div>
              </dl>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
