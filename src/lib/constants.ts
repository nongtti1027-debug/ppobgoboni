export const SITE_NAME = "뽑고보니";
export const SITE_DESCRIPTION = "정치인 공약 이행률 추적";
export const CONTACT_EMAIL = "nongtti1027@gmail.com";

export const STATUS_LABELS: Record<string, string> = {
  completed: "완료",
  in_progress: "정상추진",
  partial: "일부이행",
  delayed: "지연·보류",
  failed: "미이행",
  unrated: "판정 전",
};

// Tailwind class pairs (background / text) per status, used for badges & bars.
export const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  completed: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  in_progress: { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
  partial: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  delayed: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  failed: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
  unrated: { bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
};

export const STATUS_ORDER = [
  "completed",
  "in_progress",
  "partial",
  "delayed",
  "failed",
  "unrated",
];

export const SOURCE_LABELS: Record<string, string> = {
  nec: "중앙선거관리위원회 제출 공식 선거공약",
  manifesto: "한국매니페스토실천본부 제출 10대 핵심공약",
};

export const LEVEL_LABELS: Record<string, string> = {
  president: "대통령",
  governor: "광역단체장",
  mayor: "기초단체장",
  assembly: "국회의원",
};

export const PARTY_COLORS: Record<string, string> = {
  "더불어민주당": "#0050c8",
  "국민의힘": "#e61e2b",
  "조국혁신당": "#0d4b9b",
  "개혁신당": "#ff7c00",
  "진보당": "#d6001c",
  "정의당": "#ffcc00",
  "기본소득당": "#00d2c3",
  "새로운미래": "#3aaeff",
  "무소속": "#6b7280",
};

// Fallback palette for parties not in PARTY_COLORS, picked deterministically
// by name so a given party always renders the same color across the site.
const FALLBACK_PALETTE = [
  "#8b5cf6",
  "#059669",
  "#d97706",
  "#db2777",
  "#0891b2",
  "#65a30d",
];

export function partyColor(party: string): string {
  if (PARTY_COLORS[party]) return PARTY_COLORS[party];
  let hash = 0;
  for (let i = 0; i < party.length; i++) hash = (hash * 31 + party.charCodeAt(i)) | 0;
  return FALLBACK_PALETTE[Math.abs(hash) % FALLBACK_PALETTE.length];
}
