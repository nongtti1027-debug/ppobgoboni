import { partyColor } from "@/lib/constants";

type PartyProgress = { party: string; average: number; count: number };

export function PartyProgressStats({ stats }: { stats: PartyProgress[] }) {
  if (stats.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-1 text-lg font-semibold text-brand">정당별 평균 이행율</h2>
      <p className="mb-4 text-xs text-foreground/60">
        판정이 완료된 공약만 반영한 값으로, 정치인 개인별 편차가 클 수 있어요.
      </p>
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
