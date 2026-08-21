import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border py-8 text-center text-xs text-foreground/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4">
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-foreground/70 hover:underline">
            사이트 소개
          </Link>
          <Link href="/privacy" className="hover:text-foreground/70 hover:underline">
            개인정보처리방침
          </Link>
        </div>
        <p>© 2026 {SITE_NAME}. 본 사이트의 정보는 참고용이며, 정확한 내용은 원문 출처를 확인해 주세요.</p>
      </div>
    </footer>
  );
}
