import { partyColor } from "@/lib/constants";

type PartyProgress = { party: string; average: number; count: number };

export function PartyProgressStats({ stats }: { stats: PartyProgress[] }) {
  if (stats.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-3 text-lg font-semibold text-brand">정당별 평균 이행율</h2>
      <div className="mb-4 flex items-start gap-2 rounded-lg bg-sky-50 px-3 py-2 text-xs leading-relaxed text-sky-800">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 11v5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="7.8" r="1.15" fill="currentColor" />
        </svg>
        <span>판정이 완료된 공약만 반영한 값으로, 정치인 개인별 편차가 클 수 있어요.</span>
      </div>
      <ul className="space-y-3">
        {stats.map(({ party, average, count }) => {
          const color = partyColor(party);
          return (
            <li key={party} className="flex items-center justify-between text-sm">
              <span className="font-medium" style={{ color }}>
                {party}
              </span>
              <span className="text-foreground/70">
                <span className="font-semibold text-foreground">{average}%</span>{" "}
                <span className="text-xs text-foreground/50">(공약 {count}개 기준)</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
