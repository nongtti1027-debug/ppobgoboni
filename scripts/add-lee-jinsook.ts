/**
 * Adds 이진숙 (국민의힘, 대구 달성군, 제22대 국회의원 — 2026.6 재보선 당선,
 * 전 방송통신위원장) as a new assembly-level politician.
 *
 * Currently the hottest controversy in Korean politics (Sept 2026): she
 * co-hosted a forum at the National Assembly Library calling 5·18 a "riot",
 * and even her own party's grassroots members petitioned the ethics
 * committee for her expulsion. Per the site's standing rule, each factcheck
 * leads with the fact that the condemnation came from her OWN side (party
 * base, cross-party assembly resolution), not just "the opposition attacking
 * her" — that's the self-contradiction her own "political persecution"
 * framing tries to obscure.
 *
 * No personal bill-pledge research done yet (she's brand new to the site);
 * this seed only adds the Politician record + factchecks.
 *
 * Usage: npx tsx scripts/add-lee-jinsook.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-lee-jinsook.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const FACTCHECKS = [
  {
    claim:
      '"토론이 필요 없다는 건 5·18을 성역으로 인정하라는 강요다", "김정은 환영모임도 이만큼 비난받을까"',
    context: "2026.8 '5·18 민주화운동 재조명 포럼' 공동주최 논란에 대한 반박",
    contextSource: "https://www.thepublic.kr/news/articleView.html?idxno=314983",
    verdict: "mostly_false",
    explanation:
      "이진숙 의원은 2026년 8월 13일 국회도서관에서 뉴라이트 성향 단체 '새역사국민운동'과 함께 5·18 민주화운동을 재조명하는 포럼을 공동주최했다. 이 자리에서는 5·18을 '폭동', '소요 사태'로 표현하는 발제가 나왔다. 이 의원은 이를 정당한 학술 토론이라 주장하며 '김정은 환영모임도 이만큼 비난받을까'라는 비유로 이중잣대를 지적했지만, 이는 논점을 흐리는 물타기에 가깝다 — 헌법 전문에 싣기로 한 민주화운동을 '폭동'으로 규정하는 내용과 특정 정치 집회에 대한 찬반은 성격이 다른 문제다. 무엇보다 이 프레임은 본인이 속한 국민의힘 책임당원들조차 받아들이지 않았다: 당원들은 윤리위에 이 의원의 제명 또는 탈당 권고를 포함한 최고 수준 징계를 요구했고, 국회 운영위원회에서는 여야를 아우르는 제명촉구 결의안이 가결됐다. '정치 공세'라는 주장과 달리, 문제 제기는 본인이 속한 당 안에서부터 나왔다.",
    sources: [
      "더퍼블릭 - '5·18 포럼' 논란 정면돌파한 이진숙 \"토론 필요 없다? 성역 넘어 신화 된 것\" (https://www.thepublic.kr/news/articleView.html?idxno=314983)",
      "파이낸셜뉴스 - '5·18 포럼' 野도 고개 숙였지만…이진숙 \"김정은 환영도 이런 비난받을까\" (https://www.fnnews.com/news/202608141207240774)",
      "경향신문 - '5·18 폄훼 토론회 개최' 이진숙 제명촉구 결의안, 여권 주도 운영위 가결 (https://www.khan.co.kr/article/202608251046001/)",
      "헤럴드경제 - 민주당, 5·18 폄훼 논란 이진숙 윤리위 징계안 제출 (https://biz.heraldcorp.com/article/10848510)",
    ].join("\n"),
  },
  {
    claim: '"(과학기술정보방송통신위원이 될) 자격이 충분하다"',
    context: "2026.9 본인이 이끌던 방송통신위원회를 감독하는 국회 과방위 배정 논란에 대한 반박",
    contextSource: "https://imnews.imbc.com/replay/2026/nwdesk/article/6841335_37004.html",
    verdict: "mostly_false",
    explanation:
      "이진숙 의원은 자신이 위원장을 지낸 방송통신위원회를 감독·감사하는 국회 과학기술정보방송통신위원회(과방위)에 배정됐다. 더불어민주당은 이를 '셀프 감사'라 비판했고, 이 의원이 그 과방위로부터 위증 혐의로 고발된 상태라는 점도 함께 지적했다 — 자신을 고발한 상임위를 자신이 감독하는 구도인 셈이다. 이 의원은 '자격이 충분하다'고 반박했지만, 국민의힘도 별도의 자격 기준을 제시하기보다 '고발 경험만으로 자격을 박탈할 수 없다'는 절차적 방어에 그쳤다. 본인은 비판을 '전학 온 학생에게 집단 따돌림 하듯 한다'는 감정적 프레임으로 받아쳤을 뿐, 구조적 이해충돌 우려에 대한 실질적 해명은 내놓지 않았다.",
    sources: [
      "MBC뉴스 - \"'이해충돌' 이진숙 떠나라\"‥\"그럼 대통령도 무자격\" (https://imnews.imbc.com/replay/2026/nwdesk/article/6841335_37004.html)",
    ].join("\n"),
  },
  {
    claim:
      '"밉보이면 탄핵인가"·"사실상 국회의원 탄핵이 가능하게 하는 일이 대한민국에서 벌어지고 있다"',
    context: "2026.8.25 국회 운영위원회 제명촉구 결의안 가결에 대한 반응",
    contextSource: "https://www.newsis.com/view/NISX20260826_0003763890",
    verdict: "mostly_false",
    explanation:
      "이진숙 의원은 자신에 대한 국회 제명촉구 결의안 가결을 '대통령·다수당에 밉보이면 의원까지 잘라낼 수 있는 선례'라며 정치보복 프레임으로 반박했다. 그러나 이 결의안에 앞서 그를 제명 또는 중징계하라고 먼저 요구한 건 야당이 아니라 본인이 속한 국민의힘 책임당원들이었고, 같은 당 조경태 의원도 '5·18 광주오월정신을 모욕하여 당의 강령·당헌·당규를 짓밟은 이진숙 의원은 당연히 제명시켜야 할 자'라고 공개 비판했다. 여야를 가리지 않는 문제 제기를 '다수당의 탄압'으로만 규정하는 것은 실제 반발의 진원지를 가리는 설명이다. 다만 당 지도부 차원의 공식 징계는 아직 이뤄지지 않아, 실제 제명 여부는 열려 있는 사안이다.",
    sources: [
      "뉴시스 - 이진숙, 제명 결의안에 \"밉보이면 탄핵인가\"…국힘 일부 표결 참여 (https://www.newsis.com/view/NISX20260826_0003763890)",
      "오마이뉴스 - 이진숙 놓고 갈라진 국힘... \"제명\" vs. \"징계사안 아냐\" (https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003259853&PAGE_CD=N0002&CMPT_CD=M0112)",
    ].join("\n"),
  },
];

async function main() {
  const politician = await prisma.politician.upsert({
    where: { sgId_huboid: { sgId: "20260603", huboid: "LEEJINSOOK" } },
    create: {
      name: "이진숙",
      party: "국민의힘",
      office: "대구 달성군",
      region: "대구광역시",
      level: "assembly",
      electionName: "2026년 국회의원 재보궐선거",
      electionDate: new Date("2026-06-03"),
      sgId: "20260603",
      sgTypecode: "3",
      huboid: "LEEJINSOOK",
    },
    update: {
      party: "국민의힘",
      office: "대구 달성군",
      region: "대구광역시",
    },
  });

  for (const fc of FACTCHECKS) {
    const existing = await prisma.factCheck.findFirst({
      where: { politicianId: politician.id, claim: fc.claim },
    });
    if (!existing) {
      await prisma.factCheck.create({
        data: {
          politicianId: politician.id,
          politicianName: "이진숙",
          ...fc,
        },
      });
    }
  }

  console.log(`Added/updated 이진숙: ${FACTCHECKS.length} factchecks.`);
}

main().finally(() => prisma.$disconnect());
