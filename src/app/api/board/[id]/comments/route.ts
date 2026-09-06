import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

const commentSchema = z.object({
  content: z.string().trim().min(1, "내용을 입력해주세요.").max(1000),
});

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id: postId } = await params;
  const post = await prisma.boardPost.findUnique({ where: { id: postId }, select: { id: true } });
  if (!post) {
    return Response.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const parsed = commentSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  const comment = await prisma.boardComment.create({
    data: { postId, authorId: user.id, content: parsed.data.content },
    include: { author: { select: { nickname: true } } },
  });

  return Response.json(comment);
}
