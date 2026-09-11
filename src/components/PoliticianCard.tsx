import Link from "next/link";
import { partyColor } from "@/lib/constants";
import { GradedProgressBar } from "@/components/GradedProgressBar";

type PledgeSlim = { status: string; progressPercent: number; source: string };

export function computeAvgProgress(pledges: PledgeSlim[]) {
  const nec = pledges.filter((pl) => pl.source === "nec" && pl.status !== "unrated");
  // Politicians with no NEC 선거공약서 on file (e.g. proportional-representation
  // 국회의원) are tracked via their sponsored bills instead — see SOURCE_LABELS.bill.
  const rated = nec.length > 0 ? nec : pledges.filter((pl) => pl.source === "bill" && pl.status !== "unrated");
  return rated.length
    ? Math.round(rated.reduce((sum, pl) => sum + pl.progressPercent, 0) / rated.length)
    : null;
}

function statusBadge(percent: number | null): { label: string; className: string } {
  if (percent === null) return { label: "판정 전", className: "bg-gray-100 text-gray-500" };
  if (percent >= 100) return { label: "완료", className: "bg-blue-50 text-blue-700" };
  if (percent >= 50) return { label: "추진중", className: "bg-emerald-50 text-emerald-700" };
  if (percent >= 30) return { label: "착수", className: "bg-amber-50 text-amber-700" };
  return { label: "검토중", className: "bg-rose-50 text-rose-700" };
}

export function PoliticianCard({
  p,
  highlight,
  regionLinkLabel,
}: {
  p: {
    id: string;
    name: string;
    party: string;
    office: string;
    region?: string;
    pledges: PledgeSlim[];
  };
  highlight?: boolean;
  /** When set, shows a small secondary link (e.g. "관할 시·군·구 보기 →") to /region/[region]. */
  regionLinkLabel?: string;
}) {
  const avgProgress = computeAvgProgress(p.pledges);
  const badge = statusBadge(avgProgress);
  const link = (
    <Link
      href={`/politician/${p.id}`}
      className={
        highlight
          ? "flex items-stretch gap-4 rounded-xl border-2 bg-brand/5 p-5 transition hover:shadow-sm"
          : "flex items-stretch gap-3 rounded-lg border-l-[3px] border-y border-r border-border bg-card p-4 transition hover:shadow-sm"
      }
      style={
        highlight
          ? { borderColor: partyColor(p.party) }
          : { borderLeftColor: partyColor(p.party) }
      }
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="flex items-center gap-2">
            {highlight && (
              <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold text-white">
                광역단체장
              </span>
            )}
            <span className={highlight ? "break-keep text-lg font-bold" : "break-keep font-medium"}>
              {p.name}
            </span>
          </span>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: `${partyColor(p.party)}1a`, color: partyColor(p.party) }}
          >
            {p.party}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-foreground/70">
          <span>{p.office} · 공약 {p.pledges.length}개</span>
          <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${badge.className}`}>
            {badge.label}
          </span>
        </div>
        <div className="mt-3">
          <GradedProgressBar percent={avgProgress} />
        </div>
      </div>
    </Link>
  );

  if (!regionLinkLabel) {
    return highlight ? link : <li>{link}</li>;
  }

  const withRegionLink = (
    <div className={highlight ? undefined : "contents"}>
      {link}
      <Link
        href={`/region/${encodeURIComponent(p.region ?? "")}`}
        className="mt-1.5 inline-block text-xs text-accent hover:underline"
      >
        {regionLinkLabel}
      </Link>
    </div>
  );

  return highlight ? withRegionLink : <li>{withRegionLink}</li>;
}
