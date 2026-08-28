import { prisma } from "@/lib/db";
import { createPoliticianComment } from "@/lib/comments";
import { commentInputSchema } from "@/lib/comment-schema";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const politician = await prisma.politician.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!politician) {
    return Response.json({ error: "정치인을 찾을 수 없습니다." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const parsed = commentInputSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "잘못된 요청입니다." },
      { status: 400 }
    );
  }

  const comment = await createPoliticianComment({
    politicianId: politician.id,
    author: parsed.data.author,
    content: parsed.data.content,
  });

  return Response.json(comment, { status: 201 });
}
