"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function SearchBox({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [q, setQ] = useState(initialQuery);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex w-full max-w-xl gap-2">
      <label htmlFor="site-search" className="sr-only">
        정치인, 지역, 공약 검색
      </label>
      <div className="relative w-full">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="정치인 이름, 지역, 공약 키워드로 검색"
          className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
      >
        검색
      </button>
    </form>
  );
}
