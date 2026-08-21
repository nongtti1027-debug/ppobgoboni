import { partyColor } from "@/lib/constants";

type PartyCount = { party: string; count: number };

export function PartyStats({ counts }: { counts: PartyCount[] }) {
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  if (total === 0) return null;

  const sorted = [...counts].sort((a, b) => b.count - a.count);

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-foreground/70">정당별 인원</h3>
      <ul className="space-y-2">
        {sorted.map(({ party, count }) => {
          const pct = (count / total) * 100;
          const color = partyColor(party);
          return (
            <li key={party}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium" style={{ color }}>
                  {party}
                </span>
                <span className="text-foreground/50">{count}명</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
