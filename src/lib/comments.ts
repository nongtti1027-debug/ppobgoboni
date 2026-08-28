import { prisma } from "./db";

export async function getCommentsForPolitician(politicianId: string) {
  return prisma.comment.findMany({
    where: { politicianId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createPoliticianComment(data: {
  politicianId: string;
  author: string;
  content: string;
}) {
  return prisma.comment.create({ data });
}

export async function getCommentsForFactCheck(factCheckId: string) {
  return prisma.factCheckComment.findMany({
    where: { factCheckId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createFactCheckComment(data: {
  factCheckId: string;
  author: string;
  content: string;
}) {
  return prisma.factCheckComment.create({ data });
}
