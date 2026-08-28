import { VERDICT_COLORS, VERDICT_LABELS } from "@/lib/constants";

export function VerdictBadge({ verdict }: { verdict: string }) {
  const c = VERDICT_COLORS[verdict] ?? VERDICT_COLORS.unverifiable;
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${c.bg} ${c.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {VERDICT_LABELS[verdict] ?? verdict}
    </span>
  );
}
