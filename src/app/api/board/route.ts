import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

const postSchema = z.object({
  title: z.string().trim().min(1, "제목을 입력해주세요.").max(100),
  content: z.string().trim().min(1, "내용을 입력해주세요.").max(5000),
});

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  const post = await prisma.boardPost.create({
    data: { authorId: user.id, title: parsed.data.title, content: parsed.data.content },
  });

  return Response.json({ id: post.id });
}
