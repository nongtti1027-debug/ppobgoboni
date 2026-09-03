import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-brand">
            {SITE_NAME}
          </span>
          <svg width="24" height="24" viewBox="0 0 30 30" aria-hidden="true">
            <rect x="1" y="1" width="28" height="28" rx="8" fill="var(--brand)" />
            <path
              d="M8.5 15.5l4 4 9-9.5"
              stroke="var(--accent)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium sm:gap-4">
          <Link href="/search" className="text-foreground/80 hover:text-accent">
            공약 찾기
          </Link>
          <Link href="/factcheck" className="text-foreground/80 hover:text-accent">
            팩트체크
          </Link>
          <Link href="/about#판정기준" className="text-foreground/80 hover:text-accent">
            판정 기준
          </Link>
        </nav>
      </div>
    </header>
  );
}
