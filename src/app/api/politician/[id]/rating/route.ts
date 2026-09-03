import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { getRatingSummary, upsertRating } from "@/lib/ratings";

const ratingSchema = z.object({ score: z.number().int().min(1).max(5) });

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id } = await params;
  const politician = await prisma.politician.findUnique({ where: { id }, select: { id: true } });
  if (!politician) {
    return Response.json({ error: "정치인을 찾을 수 없습니다." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const parsed = ratingSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "1~5점 사이로 평가해주세요." }, { status: 400 });
  }

  await upsertRating(politician.id, user.id, parsed.data.score);
  const summary = await getRatingSummary(politician.id);

  return Response.json({ myScore: parsed.data.score, ...summary });
}
