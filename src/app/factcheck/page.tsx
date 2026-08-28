import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { partyColor } from "@/lib/constants";
import { VerdictBadge } from "@/components/VerdictBadge";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "팩트체크",
  description: "정치인들의 발언을 검증합니다",
};

export const dynamic = "force-dynamic";

export default async function FactCheckListPage() {
  const checks = await prisma.factCheck.findMany({
    orderBy: { checkedAt: "desc" },
    include: { politician: { select: { party: true } } },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-brand">팩트체크</h1>
        <p className="mt-2 text-sm text-foreground/60">
          정치인들이 한 말이 사실인지, 근거와 함께 확인합니다.
        </p>
      </header>

      <AdSlot position="header" />

      {checks.length === 0 ? (
        <p className="mt-8 text-foreground/60">아직 등록된 팩트체크가 없습니다.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {checks.map((c) => (
            <Link
              key={c.id}
              href={`/factcheck/${c.id}`}
              className="block rounded-lg border border-border bg-card p-5 transition hover:border-accent hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span
                    className="text-sm font-medium"
                    style={{ color: partyColor(c.politician?.party ?? "") }}
                  >
                    {c.politicianName}
                  </span>
                  <p className="mt-1 font-semibold leading-snug text-foreground">
                    &ldquo;{c.claim}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground/40">{c.context}</p>
                </div>
                <VerdictBadge verdict={c.verdict} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
