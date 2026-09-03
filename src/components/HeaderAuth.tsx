"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeaderAuth({ nickname }: { nickname: string | null }) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  if (!nickname) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login" className="text-foreground/80 hover:text-accent">
          로그인
        </Link>
        <Link href="/signup" className="text-foreground/80 hover:text-accent">
          회원가입
        </Link>
      </div>
    );
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.refresh();
    setLoggingOut(false);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-foreground/70">{nickname}님</span>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loggingOut}
        className="text-foreground/80 hover:text-accent disabled:opacity-60"
      >
        로그아웃
      </button>
    </div>
  );
}
