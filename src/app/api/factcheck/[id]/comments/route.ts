import { prisma } from "@/lib/db";
import { createFactCheckComment } from "@/lib/comments";
import { commentInputSchema } from "@/lib/comment-schema";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const factCheck = await prisma.factCheck.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!factCheck) {
    return Response.json({ error: "팩트체크를 찾을 수 없습니다." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const parsed = commentInputSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "잘못된 요청입니다." },
      { status: 400 }
    );
  }

  const comment = await createFactCheckComment({
    factCheckId: factCheck.id,
    author: parsed.data.author,
    content: parsed.data.content,
  });

  return Response.json(comment, { status: 201 });
}
