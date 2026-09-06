import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { SITE_NAME } from "@/lib/constants";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "자유게시판",
  description: `${SITE_NAME} 이용자들의 자유게시판`,
};

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export default async function BoardListPage() {
  const posts = await prisma.boardPost.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: {
      author: { select: { nickname: true } },
      _count: { select: { comments: true } },
    },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand">자유게시판</h1>
          <p className="mt-2 text-sm text-foreground/60">
            공약 이행에 대한 의견을 자유롭게 나눠보세요.
          </p>
        </div>
        <Link
          href="/board/new"
          className="shrink-0 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
        >
          글쓰기
        </Link>
      </header>

      <AdSlot position="header" />

      {posts.length === 0 ? (
        <p className="mt-8 text-foreground/60">아직 등록된 글이 없어요. 첫 글을 남겨보세요.</p>
      ) : (
        <ul className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/board/${post.id}`}
                className="flex items-center justify-between gap-3 px-5 py-4 transition hover:bg-brand/5"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">
                    {post.title}
                    {post._count.comments > 0 && (
                      <span className="ml-1.5 text-sm text-accent">[{post._count.comments}]</span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-foreground/50">
                    {post.author.nickname} · {formatDate(post.createdAt)}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-foreground/40">조회 {post.views}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
