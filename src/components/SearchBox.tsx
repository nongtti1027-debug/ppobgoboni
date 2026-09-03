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
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="정치인 이름, 지역, 공약 키워드로 검색"
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
      >
        검색
      </button>
    </form>
  );
}
