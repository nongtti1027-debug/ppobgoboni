/**
 * Revises the 이충우(여주시장) 85.3% factcheck after user pushback:
 * the cited 시정 만족도 조사(85.4%) is self-commissioned by the city being
 * evaluated (real N=1,016, disclosed methodology, but an inherent conflict
 * of interest), and applying the site's own evidence-based staged scale
 * (0/10/30/55/80/100) to his named flagship pledges puts them at 10-30%,
 * not "substantially done" — so a self-reported "84건 중 85.3%" completion
 * count likely counts merely-budgeted/announced items as "이행", a
 * well-documented pattern in Korean local-government self-reporting.
 * Downgrades verdict from half_true to mostly_false.
 *
 * Usage: npx tsx scripts/revise-yeoju-factcheck.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/revise-yeoju-factcheck.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const res = await prisma.factCheck.updateMany({
    where: { politicianName: "이충우", claim: { contains: "85.3%" } },
    data: {
      verdict: "mostly_false",
      explanation:
        "여주시가 근거로 든 시정 만족도 85.4%는 2025년 6월 4~15일 성인 1,016명 대면조사(95% 신뢰수준 ±3.1%p)로 표본 자체는 부족하지 않다. 그러나 이 조사는 평가 대상인 여주시가 직접 발주한 자체 여론조사로, 독립적인 여론조사기관의 정기 조사(예: 리얼미터 광역단체장 평가)와 달리 문항 설계·조사 시점에 대한 외부 검증이 없다는 한계가 있다. 더 결정적인 문제는 '84개 공약사업 중 85.3% 이행'이라는 집계 방식이다. 이 시장이 대표 공약으로 직접 내세웠던 제2여주대교(타당성조사조차 미착수), 강천면 전철역 신설(정부 공식 계획 미반영), 여주형 산업단지 조성(유치 기업의 유치권 행사로 사실상 좌초), 명문학교 육성(기숙사 입주율이 정원의 절반)에 본 사이트의 공약 판정 기준(근거가 확인된 단계만 인정하는 0/10/30/55/80/100 방식)을 적용하면 모두 '계획발표~착수' 수준인 10~30%대에 그친다. 가장 상징적인 공약들이 이 정도 수준에 머무르는데도 전체 이행률이 85%대로 집계된 것은, 예산 반영이나 행정절차 착수 단계까지 폭넓게 '이행'으로 산정하는 지자체 자체 이행률 집계의 통상적인 관행이 반영된 결과로 보인다. 따라서 85.3%라는 수치는 시민이 체감할 수 있는 실질적 완료 수준을 나타낸다고 보기 어려워 '대체로 사실 아님'으로 판정한다.",
      sources:
        "뉴스보고(이충우 여주시장, 공약 이행률 85.3% 성과 제시)\nhttps://www.newspf.net/8389\n아시아경제(이충우 여주시장 핵심 공약 줄줄이 표류 조짐…시민 신뢰 급락)\nhttps://v.daum.net/v/20251027105913740\n중앙신문(여주시 시정 여론조사 결과 발표…85.4% 긍정 평가, 2025.6 조사·1,016명·대면조사)\nhttp://www.joongang.tv/news/articleView.html?idxno=148522",
    },
  });
  console.log(`Updated ${res.count} fact-check(s).`);
}

main().finally(() => prisma.$disconnect());
