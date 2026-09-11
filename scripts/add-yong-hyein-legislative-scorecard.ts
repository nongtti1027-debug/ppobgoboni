/**
 * Adds comparative context to 용혜인's "그래서 뭘 했나" story: raw bill count
 * alone (116건) is a self-serving stat if not compared against (a) her own
 * pass/reflected rate vs the National Assembly average, and (b) the glaring
 * fact that she has ZERO primary-sponsored bills in the exact policy area
 * (성평등가족부) she is now nominated to lead — despite having served a term
 * on that very committee. Adds this as a 4th factcheck.
 *
 * Usage: npx tsx scripts/add-yong-hyein-legislative-scorecard.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-yong-hyein-legislative-scorecard.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const politician = await prisma.politician.findFirst({
    where: { name: "용혜인", level: "assembly" },
    select: { id: true },
  });
  if (!politician) {
    console.error("용혜인 not found in this database.");
    process.exit(1);
  }

  const existing = await prisma.factCheck.findFirst({
    where: {
      politicianId: politician.id,
      claim: "국회에서 성평등이나 가족 관련해서 많은 활동을 했다",
    },
  });
  if (!existing) {
    await prisma.factCheck.create({
      data: {
        politicianId: politician.id,
        politicianName: "용혜인",
        claim: "국회에서 성평등이나 가족 관련해서 많은 활동을 했다",
        context: "2026년 9월, 성평등가족부 인사청문준비단의 정책 전문성 논란 해명",
        contextSource: "https://www.thepublic.kr/news/articleView.html?idxno=316906",
        verdict: "half_true",
        explanation:
          "국민의힘 임종득 의원이 국회 의안정보시스템을 분석한 결과, 용 후보자가 21·22대 국회에서 대표발의한 법안 116건 중 여성가족위원회·성평등가족위원회 소관 법률은 단 한 건도 없었다. 21대 국회 후반기 여성가족위원회 위원까지 지냈는데도 정작 그 상임위 소관 법안을 자신이 대표발의한 적은 없다. 다만 공동발의자로는 21대 여가위 소관 20건, 22대 여가위·성평등위 소관 6건 등 총 26건에 이름을 올렸고, 후보자 측은 '성평등 업무는 법무부·고용노동부·복지부 등 여러 부처에 걸쳐 있어 소관 법률 대표발의 건수만으로 평가하는 건 적절하지 않다'는 입장이다. 공동발의를 통한 활동 자체는 사실이지만, 법안을 직접 설계하고 대표발의하는 것과는 책임의 무게가 다르다는 점에서 '많은 활동을 했다'는 주장은 절반만 맞는다.",
        sources:
          "더퍼블릭(용혜인, 재선 6년간 법안 116건 냈지만… 성평등부 소관은 '0')\nhttps://www.thepublic.kr/news/articleView.html?idxno=316906\n시사저널(용혜인 법안 105건 뜯어보니 여가위 소관 '0건'…정부行 4人 입법 성적표)\nhttps://www.sisajournal.com/news/articleView.html?idxno=385987",
      },
    });
    console.log("Added 4th factcheck (성평등 전문성 논란).");
  } else {
    console.log("4th factcheck already exists, skipped.");
  }
}

main().finally(() => prisma.$disconnect());
