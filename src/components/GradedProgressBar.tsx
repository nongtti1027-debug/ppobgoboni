function band(percent: number): { bar: string; text: string } {
  if (percent >= 100) return { bar: "bg-blue-500", text: "text-blue-700" };
  if (percent >= 50) return { bar: "bg-emerald-500", text: "text-emerald-700" };
  if (percent >= 30) return { bar: "bg-amber-400", text: "text-amber-700" };
  return { bar: "bg-rose-500", text: "text-rose-700" };
}

export function GradedProgressBar({ percent }: { percent: number | null }) {
  if (percent === null) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-full rounded-full bg-gray-300" />
        </div>
        <span className="shrink-0 text-xs font-medium text-foreground/40">판정 전</span>
      </div>
    );
  }
  const c = band(percent);
  return (
    <div className="flex items-center gap-2">
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${percent}%` }} />
      </div>
      <span className={`shrink-0 text-xs font-semibold ${c.text}`}>{percent}%</span>
    </div>
  );
}
