import { STATUS_COLORS, STATUS_LABELS, STATUS_ORDER } from "@/lib/constants";

export function StatusStatsGrid({
  counts,
  total,
}: {
  counts: Record<string, number>;
  total: number;
}) {
  if (total === 0) return null;
  const statuses = STATUS_ORDER.filter((s) => (counts[s] ?? 0) > 0);

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => {
        const count = counts[status] ?? 0;
        const pct = Math.round((count / total) * 100);
        const c = STATUS_COLORS[status] ?? STATUS_COLORS.unrated;
        return (
          <div key={status} className={`min-w-[92px] flex-1 rounded-lg px-3 py-2 ${c.bg}`}>
            <div className={`text-xs font-medium ${c.text}`}>{STATUS_LABELS[status]}</div>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className={`text-lg font-bold ${c.text}`}>{count}</span>
              <span className="text-xs text-foreground/40">{pct}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
