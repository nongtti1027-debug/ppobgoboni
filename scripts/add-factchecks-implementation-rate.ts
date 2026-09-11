/**
 * Two new fact-checks on implementation-rate / satisfaction claims, per
 * user request to add recent (Sept 2026) factchecks on this theme.
 *
 * Usage: npx tsx scripts/add-factchecks-implementation-rate.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-factchecks-implementation-rate.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const yeoju = await prisma.politician.findFirst({
    where: { name: "이충우", region: "경기도", office: "여주시" },
    select: { id: true },
  });
  const president = await prisma.politician.findFirst({
    where: { level: "president" },
    select: { id: true },
  });

  await prisma.factCheck.create({
    data: {
      politicianId: yeoju?.id,
      politicianName: "이충우",
      claim: "민선 8기 여주시 공약 이행률이 85.3%에 이르렀다",
      context: "2026년 2월 4일 여주시 신년 정책브리핑",
      contextSource: "https://www.newspf.net/8389",
      verdict: "half_true",
      explanation:
        "여주시가 공식 발표한 85.3%라는 수치 자체는 조작된 것이 아니라, 84개 공약사업과 시정 만족도 조사(85.4%)를 근거로 산출된 실제 통계다. 그러나 이 시장이 취임 당시 대표 공약으로 내세웠던 제2여주대교(타당성조사조차 미착수), 강천면 전철역 신설(정부 공식 계획 미반영), 여주형 산업단지 조성(부지·인허가 난항, 유치 기업의 유치권 행사로 사실상 좌초), 명문학교 육성(기숙사 입주율이 정원의 절반)은 임기 종료를 앞두고도 뚜렷한 진전이 없는 것으로 확인됐다. 전체 이행률 수치는 소규모·경상 사업까지 포함해 산출된 것으로, 시민들이 가장 주목했던 대표 공약의 부진을 가려 보이게 하는 측면이 있어 '절반의 사실'로 판단한다.",
      sources:
        "뉴스보고(이충우 여주시장, 공약 이행률 85.3% 성과 제시)\nhttps://www.newspf.net/8389\n아시아경제(이충우 여주시장 핵심 공약 줄줄이 표류 조짐…시민 신뢰 급락)\nhttps://v.daum.net/v/20251027105913740",
    },
  });

  await prisma.factCheck.create({
    data: {
      politicianId: president?.id,
      politicianName: "이재명",
      claim: "국정과제 123개 중 564개 실천과제의 93%(523개)가 정상 추진되고 있다",
      context: "2026년 5월, 이재명 정부 출범 1주년 국정과제 추진현황 및 성과 발표",
      contextSource:
        "https://www.korea.kr/multi/visualNewsView.do?newsId=148964963&pWise=sub&pWiseSub=C4",
      verdict: "half_true",
      explanation:
        "정부가 발표한 93%는 정부 스스로 564개 실천과제를 자체 평가해 산출한 수치로, 조작된 통계는 아니다. 실제로 국가 R&D 예산을 역대 최대인 35조 5000억원으로 늘리는 등 과학기술 분야는 독립적인 전문가 평가(지디넷코리아 정책 평가)에서도 14개 부문 중 유일하게 A- 학점을 받을 만큼 뚜렷한 성과를 냈다. 그러나 같은 평가에서 배터리 분야는 오히려 학점이 하락(A-→B-)했고, 이 대통령의 대표 공약이었던 '국내생산촉진세제'(한국판 IRA)는 부처 간 형평성·통상마찰 우려로 출범 1년이 지나도록 지지부진한 상태로 확인됐다. 정부의 자체 평가와 독립적인 외부 평가가 분야별로 엇갈리는 만큼, 93%라는 단일 수치만으로 국정과제 이행 상황 전체를 판단하기는 어렵다.",
      sources:
        "대한민국 정책브리핑(이재명 정부 출범 1주년 국정과제 추진현황 및 성과)\nhttps://www.korea.kr/multi/visualNewsView.do?newsId=148964963&pWise=sub&pWiseSub=C4\n지디넷코리아(이재명 정부 1년, 혁신성장정책 어땠나…성적표 매겼더니)\nhttps://zdnet.co.kr/view/?no=20260604171232",
    },
  });

  console.log("Added 2 fact-checks.");
}

main().finally(() => prisma.$disconnect());
