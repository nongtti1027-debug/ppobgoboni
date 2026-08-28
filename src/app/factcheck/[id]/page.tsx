import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { VerdictBadge } from "@/components/VerdictBadge";
import { AdSlot } from "@/components/AdSlot";

export default async function FactCheckDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const check = await prisma.factCheck.findUnique({
    where: { id },
    include: { politician: true },
  });

  if (!check) notFound();

  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <Link href="/factcheck" className="text-sm text-accent hover:underline">
          ← 팩트체크 목록
        </Link>

        <article className="mt-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-foreground/60">
              {check.politicianName}
              {check.politician && ` · ${check.politician.office}`}
            </span>
            <VerdictBadge verdict={check.verdict} />
          </div>

          <blockquote className="mt-4 border-l-4 border-brand pl-4 text-lg font-semibold leading-snug">
            &ldquo;{check.claim}&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-foreground/50">{check.context}</p>
          {check.contextSource && (
            <a
              href={check.contextSource}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-accent underline"
            >
              발언 원문 보기
            </a>
          )}

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="mb-2 text-sm font-semibold text-foreground/70">판정 근거</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
              {check.explanation}
            </p>
          </div>

          <div className="mt-6 rounded-md bg-background p-4">
            <h2 className="mb-2 text-xs font-semibold text-foreground/50">출처</h2>
            <p className="whitespace-pre-line text-xs text-foreground/60">{check.sources}</p>
          </div>

          <p className="mt-6 text-xs text-foreground/40">
            확인일: {check.checkedAt.toLocaleDateString("ko-KR")}
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
