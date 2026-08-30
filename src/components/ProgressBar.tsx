export function ProgressBar({ percent }: { percent: number }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-full max-w-[160px] overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="shrink-0 text-xs font-medium text-foreground/60">{clamped}%</span>
    </div>
  );
}
