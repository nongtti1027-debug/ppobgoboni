import { prisma } from "@/lib/db";

export async function getRatingSummary(politicianId: string) {
  const ratings = await prisma.rating.findMany({
    where: { politicianId },
    select: { score: true },
  });
  const count = ratings.length;
  const average = count ? ratings.reduce((sum, r) => sum + r.score, 0) / count : null;
  return { average, count };
}

export async function getUserRating(politicianId: string, userId: string) {
  const rating = await prisma.rating.findUnique({
    where: { userId_politicianId: { userId, politicianId } },
  });
  return rating?.score ?? null;
}

export async function upsertRating(politicianId: string, userId: string, score: number) {
  return prisma.rating.upsert({
    where: { userId_politicianId: { userId, politicianId } },
    create: { politicianId, userId, score },
    update: { score },
  });
}
