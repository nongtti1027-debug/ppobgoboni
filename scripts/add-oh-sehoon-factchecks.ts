/**
 * Adds 4 factchecks for 오세훈 (서울특별시장, 국민의힘) — first entries for
 * an already-existing Politician record (5 NEC pledges, 0 factchecks).
 * Follows the site's tight/skeptical-by-default standard: lead with the
 * self-contradiction or the gap between self-reported claims and outcomes,
 * not the politician's defense.
 *
 * Usage: npx tsx scripts/add-oh-sehoon-factchecks.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-oh-sehoon-factchecks.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const oh = await prisma.politician.findFirst({ where: { name: "오세훈" } });
  if (!oh) throw new Error("오세훈 정치인 레코드를 찾을 수 없습니다");

  const factChecks = [
    {
      claim:
        "명씨에게 여론조사를 의뢰한 사실이 없고, 김씨가 명씨에게 비용을 지급한 것과 관련해서도 요청하거나 납부하도록 한 사실이 없다",
      context: "2026.8 항소심 공판에서 혐의 전면 부인",
      contextSource: "https://www.newdaily.co.kr/site/data/html/2026/08/21/2026082100233.html",
      verdict: "mostly_false",
      explanation:
        "2026년 7월 서울중앙지법 1심 재판부는 오세훈이 정치브로커 명태균에게 여론조사를 의뢰하고 그 비용을 후원자 김모씨가 대납하게 한 사실관계를 인정해 벌금 1000만원과 추징금 2100만원을 선고했다 — 공직선거법상 벌금 100만원 이상이 대법원에서 확정되면 시장직을 잃는 수위다. 재판부는 \"국회의원과 서울시장 4년을 지내며 정치자금법의 입법 취지를 잘 알았을 것\"이라며 죄질이 나쁘다고 질타했고, 재판 과정 내내 책임을 제대로 인정하지 않았다고 지적했다. 특검은 1심에서 징역 1년 6개월을 구형한 상태다. 그런데도 오세훈은 1심 결과를 \"납득할 수 없다\"며 항소했고, 8월 항소심에서도 \"의뢰한 사실 없다, 대납을 요청하거나 납부하도록 한 사실도 없다\"며 혐의를 전면 부인하고 있다 — 1심 법원이 이미 사실로 인정한 내용과 정면으로 배치되는 주장이다.",
      sources: [
        "MBC뉴스 - '명태균 여론조사비 대납 의혹' 오세훈 1심 벌금 1천만 원‥공직 상실형 (https://imnews.imbc.com/news/2026/society/article/6839256_36918.html)",
        "MBC뉴스 - \"정치자금법 잘 알았을 텐데‥죄질 나빠\" 질타한 판사 (https://imnews.imbc.com/news/2026/society/article/6839317_36918.html)",
        "뉴데일리 - 오세훈, '명태균 여론조사비 대납 의혹' 2심서도 혐의 부인 (https://www.newdaily.co.kr/site/data/html/2026/08/21/2026082100233.html)",
        "미주중앙일보 - 法 \"오세훈, 명태균에 여론조사 의뢰하고 후원자가 비용 대납\" (https://www.koreadaily.com/article/20260721223335752)",
      ].join("\n"),
    },
    {
      claim:
        "감사의 정원이 대한민국을 지켜낸 헌신을 오래 기억하는 장소, 자유와 평화의 의미를 다음 세대에 전하는 공간이 되기를 바란다",
      context: "2026.5.12 광화문광장 '감사의 정원' 준공식 발언",
      contextSource: "https://www.joseilbo.com/news/htmls/2026/05/20260512568125.html",
      verdict: "half_true",
      explanation:
        "6·25 참전용사에 대한 감사를 기리는 취지 자체는 진정성 있는 목표다. 하지만 이 사업은 애초 100m 높이 태극기 게양대(추산 100억원)로 출발해 반발에 밀려 '감사의 정원'으로 이름과 형태를 바꿨는데, 총사업비는 오히려 207억원으로 두 배 넘게 불어났다. 상대 후보였던 정원오 측은 이를 \"졸속 선거용\"이라 직격했고, 문화연대 등 시민단체는 \"서울이 오세훈 개인 공간이 아니다\"라며 반발했다. 사업 추진에 제동이 걸리자 오세훈 측은 이를 \"직권남용\"이라 반박하며 강행했고, 결국 2026년 6·3 지방선거를 한 달도 남기지 않은 5월 12일 준공식을 열었다. 헌신을 기리는 공간이라는 설명과, 선거 직전 배로 불어난 예산을 밀어붙인 방식 사이에는 설명되지 않는 간극이 있다.",
      sources: [
        "조세일보 - 오세훈 역점사업 '감사의 정원' 개장...정원오 \"졸속 선거용\" 반발 (https://www.joseilbo.com/news/htmls/2026/05/20260512568125.html)",
        "파이낸셜뉴스 - 오세훈-정원오 '감사의 정원' 종일 공방…토론회 신경전 (https://www.fnnews.com/news/202605121604023788)",
        "네이트뉴스 - \"세종대왕이 창살에…\" 오세훈표 207억 '받들어 총' 비판 봇물 (https://news.nate.com/view/20260513n13329)",
        "다음뉴스(문화연대) - \"서울, 오세훈 사유 공간 아냐…'감사의 정원' 공사...\" (https://v.daum.net/v/xv3lVr9UH4)",
      ].join("\n"),
    },
    {
      claim:
        "(정부의 내년도 821조원 예산안에 대해) 올해보다 93조원 늘어난 초팽창 예산이다, 부동산 불씨에 유동성이라는 기름을 붓는 격이다",
      context: "2026.9.4 정부 내년도 예산안 비판 발언",
      contextSource: "https://www.mt.co.kr/estate/2026/09/04/2026090412095317790",
      verdict: "half_true",
      explanation:
        "예산 확대가 재정 건전성에 부담이 된다는 지적 자체는 타당한 재정 논점이다. 그런데 오세훈은 \"재정 지출로 경기를 떠받쳐 민심을 달래보겠다는 심산은 아닌지 의심할 수밖에 없다\"며 정부의 예산 확대를 선거를 의식한 지출로 몰아붙였다 — 정작 본인은 2026년 6월 지방선거를 코앞에 두고 애초 계획보다 두 배 넘게 불어난 '감사의 정원' 예산(207억원)을 밀어붙여 선거 직전 완공했고, 상대 후보 측으로부터 \"졸속 선거용\"이라는 지적을 받았다. 박홍근 장관도 \"오 시장은 지난 임기 동안 서울 주거 안정을 위해 무엇을 했는가\"라고 맞받았다. 국가 예산의 선거용 팽창은 의심하면서, 자신의 선거 직전 예산 집행에는 같은 잣대를 대지 않은 셈이다.",
      sources: [
        "머니투데이 - 오세훈 \"역대 최대 규모 내년 초팽창 예산…부동산 불씨에 기름 붓는 격\" (https://www.mt.co.kr/estate/2026/09/04/2026090412095317790)",
        "아시아경제 - 오세훈 \"초팽창 예산, 부동산 포기했나\" 공격에…박홍근 \"오락가락 서울시 행정부터 돌아보라\" 반박 (https://view.asiae.co.kr/article/2026090419025155212)",
        "시사저널 - 오세훈 \"부동산 포기했나…821조 초팽창 예산이 맞는 선택인가\" (https://www.sisajournal.com/news/articleView.html?idxno=386133)",
      ].join("\n"),
    },
    {
      claim: "민선 8기 공약 총 244개 중 82.38%(201개)가 완료·이행됐다 (서울시 자체 평가 SA등급)",
      context: "서울시 자체 공약이행 평가 결과 발표",
      contextSource: "https://www.munhwa.com/article/11578967",
      verdict: "mostly_false",
      explanation:
        "서울시가 자체 발표한 평가에서 오세훈 시장 공약은 82.38%가 완료·이행으로 집계돼 광역단체 중 최고 수준인 SA등급(90점 이상)을 받았다. 그런데 같은 자체 평가 자료 안에서도 앞뒤가 맞지 않는다: 전체 공약의 재정 확보율은 62.90%인데, 실제 재정 집행률은 22.81%에 불과하다. 예산의 5분의 1 정도만 실제로 쓰인 공약들이 다수 '이행 완료'로 잡혀 있다는 뜻으로, '착수'만 하면 이행으로 집계하는 자체 평가 기준의 허점을 보여준다. 체감과의 괴리도 크다 — 오세훈표 5대 핵심공약에 대한 2023년 조사에서 53.0%가 \"만족하지 않는다\"고 답해, 만족한다는 응답(40.8%)보다 많았다. 자체 채점한 이행률과 실제 예산 집행, 시민 체감 사이의 간극이 이 정도로 크다면 '82.38% 이행'이라는 숫자를 그대로 받아들이기는 어렵다.",
      sources: [
        "문화일보 - 서울시, 공약이행 평가 'SA 등급'…전국 광역단체 중 최고 수준 (https://www.munhwa.com/article/11578967)",
        "경실련 - 서울시장 후보 3대 핵심공약 점수는? (https://ccej.or.kr/posts/xltn3D)",
      ].join("\n"),
    },
  ];

  for (const fc of factChecks) {
    await prisma.factCheck.create({
      data: {
        politicianId: oh.id,
        politicianName: oh.name,
        ...fc,
      },
    });
    console.log("created:", fc.claim.slice(0, 40));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
