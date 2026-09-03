"use client";

import { useState, type FormEvent } from "react";

type Comment = {
  id: string;
  author: string;
  content: string;
  createdAt: string | Date;
};

export function CommentSection({
  apiPath,
  initialComments,
}: {
  apiPath: string;
  initialComments: Comment[];
}) {
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, content }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "댓글 등록에 실패했습니다.");
        return;
      }
      setComments((prev) => [data, ...prev]);
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

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="이름"
          maxLength={30}
          required
          className="w-full max-w-[200px] rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent"
        />
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

      {comments.length === 0 ? (
        <p className="py-6 text-center text-sm text-foreground/40">첫 댓글을 남겨보세요.</p>
      ) : (
        <ul className="divide-y divide-border">
          {comments.map((c) => (
            <li key={c.id} className="py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-foreground">{c.author}</span>
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
