"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Comment = {
  id: string;
  content: string;
  createdAt: string | Date;
  author: { nickname: string };
};

export function BoardCommentSection({
  postId,
  initialComments,
  isLoggedIn,
}: {
  postId: string;
  initialComments: Comment[];
  isLoggedIn: boolean;
}) {
  const [comments, setComments] = useState(initialComments);
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/board/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "댓글 등록에 실패했습니다.");
        return;
      }
      setComments((prev) => [...prev, data]);
      setContent("");
    } catch {
      setError("댓글 등록 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">댓글 {comments.length}</h2>

      {isLoggedIn ? (
        <form onSubmit={handleSubmit} className="mb-6 space-y-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="댓글을 남겨주세요"
            rows={3}
            maxLength={1000}
            required
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent"
          />
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <div className="text-right">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 disabled:opacity-60"
            >
              {submitting ? "등록 중..." : "댓글 등록"}
            </button>
          </div>
        </form>
      ) : (
        <p className="mb-6 rounded-md bg-background px-4 py-3 text-sm text-foreground/60">
          <Link href={`/login?redirect=${encodeURIComponent(`/board`)}`} className="text-accent hover:underline">
            로그인
          </Link>
          하면 댓글을 남길 수 있어요.
        </p>
      )}

      {comments.length === 0 ? (
        <p className="py-6 text-center text-sm text-foreground/40">첫 댓글을 남겨보세요.</p>
      ) : (
        <ul className="divide-y divide-border">
          {comments.map((c) => (
            <li key={c.id} className="py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-foreground">{c.author.nickname}</span>
                <span className="text-xs text-foreground/40">
                  {new Date(c.createdAt).toLocaleString("ko-KR")}
                </span>
              </div>
              <p className="mt-1 whitespace-pre-wrap text-sm text-foreground/80">{c.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
