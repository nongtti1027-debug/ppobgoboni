"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function RatingWidget({
  politicianId,
  average,
  count,
  myScore,
  isLoggedIn,
}: {
  politicianId: string;
  average: number | null;
  count: number;
  myScore: number | null;
  isLoggedIn: boolean;
}) {
  const pathname = usePathname();
  const [summary, setSummary] = useState({ average, count });
  const [selected, setSelected] = useState(myScore);
  const [hovered, setHovered] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRate(score: number) {
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/politician/${politicianId}/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "평가 등록에 실패했습니다.");
        return;
      }
      setSelected(score);
      setSummary({ average: data.average, count: data.count });
    } catch {
      setError("평가 등록 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  const displayScore = hovered ?? selected ?? 0;

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-foreground/80">시민 평가</span>
        <span className="text-xs text-foreground/60">
          {summary.average !== null ? `${summary.average.toFixed(1)}점` : "평가 없음"} ·{" "}
          {summary.count}명 참여
        </span>
      </div>

      {isLoggedIn ? (
        <div className="mt-3">
          <div className="flex gap-1" role="radiogroup" aria-label="1~5점 평가">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={selected === n}
                aria-label={`${n}점`}
                disabled={submitting}
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n)}
                onBlur={() => setHovered(null)}
                onClick={() => handleRate(n)}
                className="text-2xl leading-none transition disabled:cursor-not-allowed"
              >
                <span className={n <= displayScore ? "text-accent" : "text-border"}>★</span>
              </button>
            ))}
          </div>
          {selected !== null && (
            <p className="mt-1.5 text-xs text-foreground/60">내 평가: {selected}점</p>
          )}
          {error && <p className="mt-1.5 text-xs text-rose-600">{error}</p>}
        </div>
      ) : (
        <p className="mt-3 text-xs text-foreground/60">
          <Link
            href={`/login?redirect=${encodeURIComponent(pathname)}`}
            className="text-accent hover:underline"
          >
            로그인
          </Link>
          하면 이 정치인을 1~5점으로 평가할 수 있어요.
        </p>
      )}
    </div>
  );
}
