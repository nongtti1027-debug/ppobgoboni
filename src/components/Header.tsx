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
        </Link>
        <p className="hidden text-sm text-foreground/50 sm:block">
          공약, 지금 얼마나 지켜지고 있을까요?
        </p>
      </div>
    </header>
  );
}
