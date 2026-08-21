import { STATUS_COLORS, STATUS_ORDER } from "@/lib/constants";

/**
 * A horizontal stacked bar showing the breakdown of pledge statuses.
 * Works even when everything is "unrated" — renders as a solid gray bar,
 * so the layout is already in place for once real ratings start coming in.
 */
export function StatusDistributionBar({
  counts,
  total,
}: {
  counts: Record<string, number>;
  total: number;
}) {
  if (total === 0) return null;

  return (
    <div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        {STATUS_ORDER.map((status) => {
          const count = counts[status] ?? 0;
          if (count === 0) return null;
          const pct = (count / total) * 100;
          const c = STATUS_COLORS[status] ?? STATUS_COLORS.unrated;
          return (
            <div
              key={status}
              className={c.dot}
              style={{ width: `${pct}%` }}
              title={`${status}: ${count}`}
            />
          );
        })}
      </div>
    </div>
  );
}
