/**
 * Adds 2 more 김승원 factchecks after user pushback ("이 사람이 어떤 사람인지
 * 모르겠어" — the first pass under-covered him). The sharpest addition is a
 * clean "그때는 맞고 지금은 틀리다" flip-flop: he co-led a lawmakers' group
 * demanding immediate 공소취소 for President 이재명's case, calling it a
 * "조작 기소" — then, once nominated as the Justice Minister who'd oversee
 * exactly that kind of decision, reversed to "no power, no intention to
 * direct it." The second is a separate, more serious money allegation
 * (alleged slush-fund/kickback scheme while he chaired the Gyeonggi
 * provincial party) distinct from the family-salary controversy already on
 * the site.
 *
 * Usage: npx tsx scripts/add-kim-seungwon-round2.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-kim-seungwon-round2.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const FACTCHECKS = [
  {
    claim: "법무부 장관에게는 직접 권한이 없고 검찰총장을 통해 지휘할 생각도 없다",
    context: "2026년 9월 3일, 이재명 대통령 사건 공소취소 관련 입장",
    contextSource: "https://www.hankookilbo.com/news/article/amp/A2026090309440001650",
    verdict: "mostly_false",
    explanation:
      "정작 본인은 불과 몇 달 전인 2026년 2월 윤건영 의원과 함께 '이재명 대통령 사건 공소취소와 국정조사 추진을 위한 의원 모임'을 직접 출범시키고 공동대표를 맡았다. 1월에는 더불어민주당 경기지역 의원들과 기자회견까지 열어 \"정치검찰이 조작 기소한 이 대통령 사건을 즉시 공소취소해야 한다\"고 공개 주장했다. 그런 그가 정작 그 결정을 실제로 내릴 수 있는 법무부 장관 후보자가 되자 \"권한이 없고 지휘할 생각도 없다\"며 발을 뺐다. 오마이뉴스는 이를 두고 \"그때는 맞고 지금은 틀리다?\"고 짚었다. 공소취소를 요구하던 사람이 그 요구를 실현할 수 있는 자리에 앉자 말을 바꾼 것 자체가, 애초 주장이 원칙이었는지 정치적 언사였는지를 의심하게 만든다.",
    sources:
      "경향신문('공취모' 대표 김승원, 법무장관 후보에…이 대통령 공소취소 시도할까)\nhttps://www.khan.co.kr/article/202608301637001/\n한국일보(김승원 \"공소취소, 지휘할 생각 없다\"… 식약처 의혹엔 \"억울\")\nhttps://www.hankookilbo.com/news/article/amp/A2026090309440001650\n오마이뉴스(그때는 맞고 지금은 틀리다? 김승원이 답해야 할 질문)\nhttps://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003264694",
  },
  {
    claim: "경기도당 급여 관련 보도를 보고 놀랐으며 중앙당에 감사를 요청했다",
    context: "2026년 9월, 더불어민주당 경기도당위원장 재직 시절 '별도 급여 200만원' 페이백·비자금 의혹 해명",
    contextSource: "https://www.kmib.co.kr/article/view.asp?arcid=9000009490",
    verdict: "unverifiable",
    explanation:
      "김 후보자가 더불어민주당 경기도당위원장을 맡았던 2025년 1~5월, 도당은 당직자들에게 기본급과 별도로 1인당 매월 200만원씩(총 3600만원)을 추가 지급했고, 이 돈이 총무·재정 담당자 계좌로 흘러들어간 정황이 확인됐다. 한동훈 국민의힘 의원은 이를 두고 급여를 부풀린 뒤 되돌려받는 '페이백' 수법으로 비자금을 조성한 것 아니냐는 의혹을 제기했다. 김 후보자 측은 보도를 보고 놀랐다며 중앙당에 감사를 요청했다는 입장이지만, 본인이 위원장으로서 조직을 이끌던 시기에 벌어진 일에 대한 관리·감독 책임과는 별개로, 자금의 최종 용처나 페이백 여부는 아직 감사·수사를 통해 규명되지 않았다. 배우자 회사의 가족 급여 문제에 이어 본인이 이끌던 조직에서도 유사한 성격의 자금 논란이 제기됐다는 점에서 패턴으로 주목받고 있다.",
    sources:
      "국민일보([단독] 김승원 경기도당 '별도 급여 200만원' 미스터리… 페이백 의혹)\nhttps://www.kmib.co.kr/article/view.asp?arcid=9000009490\n시사저널(한동훈 \"김승원, 경기도당 급여 200만원씩 '페이백'해 비자금 만들었나\")\nhttps://www.sisajournal.com/news/articleView.html?idxno=385882\n국민일보([단독] 김승원 경기도당 수상한 별도 급여… 총무·재정 담당자 계좌로 유입 정황)\nhttps://www.kmib.co.kr/article/view.asp?arcid=9000009893",
  },
];

async function main() {
  const politician = await prisma.politician.findFirst({
    where: { name: "김승원", level: "assembly" },
    select: { id: true },
  });
  if (!politician) {
    console.error("김승원 not found in this database.");
    process.exit(1);
  }

  let added = 0;
  for (const fc of FACTCHECKS) {
    const existing = await prisma.factCheck.findFirst({
      where: { politicianId: politician.id, claim: fc.claim },
    });
    if (!existing) {
      await prisma.factCheck.create({
        data: {
          politicianId: politician.id,
          politicianName: "김승원",
          claim: fc.claim,
          context: fc.context,
          contextSource: fc.contextSource,
          verdict: fc.verdict,
          explanation: fc.explanation,
          sources: fc.sources,
        },
      });
      added++;
    }
  }

  console.log(`Added ${added} new factcheck(s).`);
}

main().finally(() => prisma.$disconnect());
