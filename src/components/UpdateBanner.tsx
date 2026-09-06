function formatDate(d: Date) {
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export function UpdateBanner({
  recentCount,
  latestDate,
}: {
  recentCount: number;
  latestDate: Date | null;
}) {
  if (!latestDate) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg bg-brand/10 px-4 py-2.5 text-sm text-brand">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
      <span className="font-medium">최근 7일간 {recentCount}건 갱신</span>
      <span className="text-brand/50">·</span>
      <span>최종 업데이트 {formatDate(latestDate)}</span>
    </div>
  );
}
