/**
 * Adds 용혜인 (기본소득당, 비례대표, 제21·22대 국회의원) as the site's first
 * "assembly" level politician — a pilot for eventually adding other notable
 * 국회의원 (per project scope: only famous ones, post-launch).
 *
 * She has no personal district NEC 선거공약서 (proportional-representation
 * candidates run on a coalition/party list, not individual district
 * pledges), so — rather than fabricating a pledge list — she is tracked via
 * her REAL sponsored bills (source: "bill", see SOURCE_LABELS.bill) plus two
 * factchecks on her current ministerial-nomination controversy (a
 * "청문회 검증" style deep dive, per user request).
 *
 * Usage: npx tsx scripts/add-yong-hyein.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-yong-hyein.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const BILLS = [
  {
    order: 1,
    title: "연동형 비례대표제 확대 및 위성정당 방지 공직선거법·정당법 개정안",
    goal:
      "지역구 240석·비례대표 120석으로 국회의원 정수 구성을 바꿔 다당제 민주주의를 강화하고, 거대 양당의 위성정당 창당을 막기 위해 2개 이상 정당의 선거연합을 허용. 비례 의석 배분 기준인 정당 득표율 하한도 3%에서 1%로 완화.",
    method:
      "2023년 8월 28일 공직선거법·정당법 일부개정법률안을 대표발의. 국회 정치개혁특별위원회 심사 대상이었으나 본회의 표결에는 부쳐지지 못함.",
    timeline: "2023.08.28 발의 → 21대 국회 임기 만료(2024.05.29)",
    funding: "해당 없음 (선거제도 개정 법안으로 별도 예산 소요 없음)",
    status: "failed",
    progressPercent: 0,
    statusNote:
      "위성정당 방지와 다당제 강화를 위해 대표발의한 공직선거법·정당법 개정안은 21대 국회 임기 만료로 본회의 표결 없이 자동 폐기됐다. 국민의힘 등은 이 법안을 '민주당 기생법'이라 비판하며 반대했고, 22대 국회 들어서도 동일 내용의 재발의나 별도 처리 진전은 확인되지 않는다.",
    statusSource:
      "더퍼블릭(용혜인, 비례 120석·선거연합 허용 선거법 발의했었다... 국민의힘 \"민주당 기생법\")\nhttps://www.thepublic.kr/news/articleView.html?idxno=317956",
  },
  {
    order: 2,
    title: "집회 및 시위에 관한 법률 일부개정법률안",
    goal:
      "현행 집시법이 '적법한 집회 보호·위법한 집회 규제'에 방점을 두고 경찰이 적법 여부를 사전 판단하도록 해 집회의 자유를 위축시킨다는 문제의식에서, 집회 억제·관리 중심에서 헌법상 평화적 집회 보장 중심으로 방향을 바꾸는 개정안. 참여연대와 공동 발의.",
    method: "국회 행정안전위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.08.05 발의",
    funding: "해당 없음",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
  {
    order: 3,
    title: "대한민국지방의정회법안",
    goal:
      "전직 지방의원들의 모임인 의정회를 법정단체로 인정해 지자체 보조금을 받을 수 있도록 하고, 지방발전 연구·입법 제안·지역 갈등 해소 지원 기능을 부여하는 법안.",
    method: "국회 행정안전위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.08.03 발의",
    funding: "해당 없음 (법정단체 지정 및 지자체 보조금 근거 마련)",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
  {
    order: 4,
    title: "변호사시험법 일부개정법률안",
    goal: "변호사시험 관련 제도 개선을 위한 개정안 (세부 조항은 국회 의안정보시스템 원문 참고).",
    method: "국회 소관 상임위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.07.13 발의",
    funding: "해당 없음",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
];

const FACTCHECKS = [
  {
    claim: "국회의원의 국무위원 겸직은 법률이 허용하는 원칙이다",
    context: "2026년 9월, 여성가족부 장관 후보자 지명 후 의원직 겸직 논란에 대한 반박",
    contextSource: "https://www.ajunews.com/view/20260910152352332",
    verdict: "mostly_true",
    explanation:
      "국회법상 국회의원의 국무위원(장관) 겸직은 실제로 허용되며, 역대 정부에서도 현역 의원이 장관을 겸임한 사례가 다수 있어 법적 근거 자체는 정확하다. 다만 논란의 핵심은 겸직의 '적법성'이 아니라, 비례대표 의원이 장관에 지명되면 후순위 승계자에게 의석을 넘기고 사퇴해 온 정치적 관례를 따르지 않는다는 점이다. 용 후보자는 '기본소득당 소속 유일한 의원'이라 사퇴하면 원외정당이 된다는 점을 사퇴 거부의 실질적 이유로 들었는데, 이는 법적 문제가 아니라 정치적 선택의 문제라 '법률이 허용한다'는 설명만으로는 관례를 벗어난 이유를 충분히 해명하지 못한다.",
    sources:
      "아주경제(용혜인, 의원·장관 겸직 고수… \"법률이 허용하는 원칙\")\nhttps://www.ajunews.com/view/20260910152352332\n노컷뉴스(용혜인, 비례직 사퇴 거부…\"겸직은 합법, 비례만 다른 잣대 안 돼\")\nhttps://www.nocutnews.co.kr/news/6576271",
  },
  {
    claim: "김포공항 귀빈실은 공항공사 안내에 따라 정상적으로 승인받아 이용했다",
    context: "2026년 9월, 가족 동반 김포공항 귀빈실 이용 논란에 대한 해명",
    contextSource: "https://www.sisajournal.com/news/articleView.html?idxno=385750",
    verdict: "unverifiable",
    explanation:
      "용 의원 측은 한국공항공사에 '공무 외 사용'으로 신청해 승인받았고 뒤늦게 사용료도 납부했다고 해명했다. 그러나 한국공항공사 귀빈실 운영 예규상 귀빈실 이용 대상에 이용자의 부모는 포함되지 않는 것으로 알려져 있어, 애초에 승인 자체가 규정에 맞게 이뤄졌는지는 별도 확인이 필요하다. 시민단체 서민민생대책위원회가 직권남용 및 공직선거법 위반 혐의로 서울경찰청에 고발한 상태로, 수사가 진행 중이라 규정 위반 여부에 대한 최종 판단은 아직 내려지지 않았다.",
    sources:
      "이데일리(가족여행 때 '공항 귀빈실' 이용한 용혜인…직권남용 혐의 고발)\nhttps://www.edaily.co.kr/News/Read?newsId=03811366645576184\n시사저널(용혜인, 직권남용 혐의로 고발당해)\nhttps://www.sisajournal.com/news/articleView.html?idxno=385750",
  },
];

async function main() {
  const politician = await prisma.politician.upsert({
    where: { sgId_huboid: { sgId: "20240410", huboid: "YONGHYEIN" } },
    create: {
      name: "용혜인",
      party: "기본소득당",
      office: "비례대표",
      region: "전국",
      level: "assembly",
      electionName: "제22대 국회의원선거",
      electionDate: new Date("2024-04-10"),
      sgId: "20240410",
      sgTypecode: "2",
      huboid: "YONGHYEIN",
    },
    update: {
      party: "기본소득당",
      office: "비례대표",
      region: "전국",
    },
  });

  for (const b of BILLS) {
    await prisma.pledge.upsert({
      where: { id: `${politician.id}-bill-${b.order}` },
      create: {
        id: `${politician.id}-bill-${b.order}`,
        politicianId: politician.id,
        order: b.order,
        source: "bill",
        title: b.title,
        goal: b.goal,
        method: b.method,
        timeline: b.timeline,
        funding: b.funding,
        measurability: "unrated",
        status: b.status,
        progressPercent: b.progressPercent,
        statusNote: b.statusNote,
        statusSource: b.statusSource,
        statusCheckedAt: b.statusNote ? new Date() : null,
      },
      update: {
        title: b.title,
        goal: b.goal,
        method: b.method,
        timeline: b.timeline,
        funding: b.funding,
        status: b.status,
        progressPercent: b.progressPercent,
        statusNote: b.statusNote,
        statusSource: b.statusSource,
        statusCheckedAt: b.statusNote ? new Date() : null,
      },
    });
  }

  for (const fc of FACTCHECKS) {
    const existing = await prisma.factCheck.findFirst({
      where: { politicianId: politician.id, claim: fc.claim },
    });
    if (!existing) {
      await prisma.factCheck.create({
        data: {
          politicianId: politician.id,
          politicianName: "용혜인",
          claim: fc.claim,
          context: fc.context,
          contextSource: fc.contextSource,
          verdict: fc.verdict,
          explanation: fc.explanation,
          sources: fc.sources,
        },
      });
    }
  }

  console.log(`Added/updated 용혜인: ${BILLS.length} bill-pledges, ${FACTCHECKS.length} factchecks.`);
}

main().finally(() => prisma.$disconnect());
