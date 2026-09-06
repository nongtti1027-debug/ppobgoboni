import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { AdSlot } from "@/components/AdSlot";
import { BoardCommentSection } from "@/components/BoardCommentSection";

export const dynamic = "force-dynamic";

function formatDateTime(d: Date) {
  return d.toLocaleString("ko-KR");
}

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await prisma.boardPost.update({
    where: { id },
    data: { views: { increment: 1 } },
    include: {
      author: { select: { nickname: true } },
      comments: {
        orderBy: { createdAt: "asc" },
        include: { author: { select: { nickname: true } } },
      },
    },
  }).catch(() => null);

  if (!post) notFound();

  const user = await getCurrentUser();

  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <Link href="/board" className="text-sm text-accent hover:underline">
          ← 자유게시판
        </Link>

        <article className="mt-4 rounded-2xl border border-border bg-card p-6">
          <h1 className="break-keep text-xl font-bold text-foreground">{post.title}</h1>
          <p className="mt-2 text-sm text-foreground/50">
            {post.author.nickname} · {formatDateTime(post.createdAt)} · 조회 {post.views}
          </p>
          <p className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
            {post.content}
          </p>
        </article>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <BoardCommentSection
            postId={post.id}
            initialComments={post.comments}
            isLoggedIn={!!user}
          />
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-6">
          <AdSlot position="sidebar" />
        </div>
      </aside>
    </main>
  );
}
