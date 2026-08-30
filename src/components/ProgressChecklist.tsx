type ChecklistItem = {
  item: string;
  percent: number;
  note: string;
  source?: string;
};

function dotColor(percent: number) {
  if (percent >= 80) return "bg-emerald-500";
  if (percent >= 50) return "bg-sky-400";
  if (percent >= 20) return "bg-amber-400";
  return "bg-rose-400";
}

export function ProgressChecklist({ json }: { json: string }) {
  let items: ChecklistItem[] = [];
  try {
    items = JSON.parse(json);
  } catch {
    return null;
  }
  if (items.length === 0) return null;

  return (
    <div className="space-y-2.5">
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotColor(it.percent)}`} />
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-foreground/90">{it.item}</span>
              <span className="shrink-0 text-xs font-semibold text-foreground/50">
                {it.percent}%
              </span>
            </div>
            <p className="mt-0.5 text-xs leading-relaxed text-foreground/60">{it.note}</p>
            {it.source && (
              <a
                href={it.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block text-xs text-accent underline"
              >
                출처
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
