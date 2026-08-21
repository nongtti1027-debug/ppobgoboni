type AdPosition = "header" | "in-list" | "sidebar" | "bottom" | "mobile-sticky";

const CONFIG: Record<AdPosition, { label: string; size: string; className: string }> = {
  header: {
    label: "헤더 배너 광고",
    size: "728 x 90",
    className: "mx-auto h-[90px] w-full max-w-[728px]",
  },
  "in-list": {
    label: "목록 중간 광고",
    size: "728 x 90",
    className: "mx-auto h-[90px] w-full max-w-[728px]",
  },
  sidebar: {
    label: "사이드바 광고",
    size: "300 x 250",
    className: "h-[250px] w-full max-w-[300px]",
  },
  bottom: {
    label: "하단 광고",
    size: "728 x 90",
    className: "mx-auto h-[90px] w-full max-w-[728px]",
  },
  "mobile-sticky": {
    label: "모바일 하단 고정 광고",
    size: "320 x 50",
    className: "h-[50px] w-full",
  },
};

/**
 * Placeholder ad slot. Once AdSense approval is granted, replace the
 * placeholder <div> below with the AdSense <ins> snippet for this position.
 */
export function AdSlot({ position }: { position: AdPosition }) {
  const config = CONFIG[position];

  return (
    <div
      className={`flex items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 text-center text-xs text-neutral-400 ${config.className}`}
      data-ad-slot={position}
    >
      <span>
        {config.label}
        <br />
        {config.size}
      </span>
    </div>
  );
}
