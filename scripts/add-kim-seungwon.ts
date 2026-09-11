/**
 * Adds 김승원 (더불어민주당, 경기 수원시갑, 제21·22대 국회의원, 법무부 장관
 * 후보자) as the site's second "assembly" level politician.
 *
 * Same pattern as 용혜인: no personal-district pledge data in our system for
 * the 2024 총선, so tracked via real sponsored bills (source: "bill") +
 * factchecks on his current ministerial-nomination controversy. His public
 * identity is built on being a hardline "검찰개혁 선봉장" (prosecution-reform
 * spearhead, pushed to abolish prosecutors' supplementary investigation
 * power) — which is the deliberate contrast for the factchecks below, per
 * the site's standing rule: lead with self-contradiction, not the
 * politician's own defense.
 *
 * Usage: npx tsx scripts/add-kim-seungwon.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/add-kim-seungwon.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const BILLS = [
  {
    order: 1,
    title: "형사소송법 일부개정법률안 (사건관계인 의견진술권 보장 등)",
    goal:
      "수사·기소 과정에서 피의자·피해자 등 사건관계인의 의견진술권을 명문으로 보장하고, 수사기록 열람과 책임 소재를 추적할 수 있도록 하는 개정안. '검찰개혁 선봉장'을 자처해 온 김 의원의 대표적인 형사사법 개혁 입법 중 하나.",
    method: "국회 법제사법위원회 심사를 거쳐 위원회 대안에 반영되어 공포됨.",
    timeline: "22대 국회 발의 → 위원회 대안 반영·공포",
    funding: "해당 없음",
    status: "completed",
    progressPercent: 100,
    statusNote:
      "발의한 형사소송법 개정 내용이 국회 법제사법위원회 대안에 반영되어 실제로 공포까지 이어졌다. 22대 국회에서 그가 대표발의한 87건 중 원안·수정 가결 또는 대안 반영으로 이어진 13건 중 하나로, 실제 입법 성과로 확인된다.",
    statusSource:
      "CBC뉴스(\"보완수사권 폐지 밀어붙인 강성\"… '검찰개혁 선봉장' 김승원은 누구?)\nhttps://www.cbci.co.kr/news/articleView.html?idxno=602248",
  },
  {
    order: 2,
    title: "검찰 수사권·기소권 완전 분리(보완수사권 폐지) 관련 입법",
    goal:
      "검찰의 보완수사권을 완전히 폐지해 수사와 기소를 분리하는 것을 목표로 하는 검찰개혁 입법. 김 의원이 21·22대에 걸쳐 가장 강성으로 밀어붙여 온 사안으로 꼽힌다.",
    method: "법제사법위원회 더불어민주당 간사로서 관련 법안 처리를 주도.",
    timeline: "21·22대 국회 지속 추진",
    funding: "해당 없음",
    status: "in_progress",
    progressPercent: 30,
    statusNote:
      "보완수사권 폐지는 여러 차례 법안 발의와 위원회 논의로 이어졌으나, 검찰·야당의 반발과 정치적 공방 속에 완전한 제도화까지는 이르지 못한 상태다. 검찰개혁을 자신의 정치적 정체성으로 내세워 온 만큼, 본인이 연루된 판사·브로커 관련 의혹(아래 팩트체크 참고)은 이 브랜드와 정면으로 배치된다는 지적이 나온다.",
    statusSource:
      "CBC뉴스(\"보완수사권 폐지 밀어붙인 강성\"… '검찰개혁 선봉장' 김승원은 누구?)\nhttps://www.cbci.co.kr/news/articleView.html?idxno=602248",
  },
  {
    order: 3,
    title: "조세특례제한법 일부개정법률안",
    goal: "조세특례 적용 범위 관련 개정안 (세부 조항은 국회 의안정보시스템 원문 참고).",
    method: "소관 상임위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.08.26 발의",
    funding: "해당 없음",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
  {
    order: 4,
    title: "교정공무원 보건안전 및 복지 기본법안",
    goal: "교정공무원의 보건·안전과 복지 증진을 위한 기본법 제정안.",
    method: "소관 상임위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.08.25 발의",
    funding: "국비 (교정공무원 복지·안전 관련 예산 근거 마련)",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
  {
    order: 5,
    title: "주택임대차보호법 일부개정법률안",
    goal: "주택 임차인 보호 강화를 위한 개정안 (세부 조항은 국회 의안정보시스템 원문 참고).",
    method: "소관 상임위원회 법안 심사 대상으로 계류 중.",
    timeline: "2026.08.25 발의",
    funding: "해당 없음",
    status: "unrated",
    progressPercent: 0,
    statusNote: null,
    statusSource: null,
  },
];

const FACTCHECKS = [
  {
    claim: "영장 기각과 입법보조원 근무는 인과관계가 없는 것이 명백하다",
    context: "2026년 9월 10일, 법무부 장관 후보자 인사청문회 준비단의 '보은 채용' 의혹 반박",
    contextSource: "https://www.khan.co.kr/article/202609102016001/",
    verdict: "unverifiable",
    explanation:
      "김 후보자는 검찰의 보완수사권 완전 폐지를 밀어붙여 '검찰개혁 선봉장'으로 불려온 인물이다. 그런 그가 정작 2022년 2월 — 브로커 양모씨가 제넨셀의 코로나 신약 임상시험 승인을 청탁한 것으로 알려진 시점 — 정인재 부장판사와 함께 '3인 셀카'를 찍었고, 그로부터 약 1년 뒤인 2023년 정 판사는 검찰이 청구한 제넨셀 창업주 구속영장을 기각했다. 이후 2024년 중반 정 판사의 아들이 약 3개월간 김 후보자 의원실에서 입법보조원으로 근무했다(월 100만원 실비 수준). 후보자 측은 정 판사와 제넨셀 사건을 논의한 적이 없고 인과관계가 명백히 없다고 밝혔지만, 셀카·브로커·영장기각·채용으로 이어지는 타임라인 자체는 공개된 사실이며 아직 청문회·수사를 통해 규명되지 않았다. 검찰·사법 개혁을 자신의 정치적 브랜드로 내세워 온 이가 사법부 인사와의 사적 친분·채용 문제로 검증대에 오른 것 자체가 아이러니라는 지적이 나온다.",
    sources:
      "경향신문(김승원, '영장 기각' 판사 아들 의원실 근무 논란에 \"보은 채용 아냐\")\nhttps://www.khan.co.kr/article/202609102016001/\n디지털타임스([속보] '제넨셀 창업자 영장기각' 판사 아들, 김승원 의원실 근무…金 \"특혜 아냐\")\nhttps://www.dt.co.kr/article/12083385\nCBC뉴스(\"보완수사권 폐지 밀어붙인 강성\"… '검찰개혁 선봉장' 김승원은 누구?)\nhttps://www.cbci.co.kr/news/articleView.html?idxno=602248",
  },
  {
    claim: "가족의 급여 인상은 조합원인 학부모들의 충분한 논의와 승인 아래 이뤄졌다",
    context: "2026년 9월, 배우자·자녀가 근무하는 사회적협동조합 인건비 논란에 대한 청문회준비단 해명",
    contextSource: "https://www.thepublic.kr/news/articleView.html?idxno=317984",
    verdict: "mostly_false",
    explanation:
      "배우자가 대표를 맡고 두 자녀가 근무 중인 발달장애인 돌봄기관 '한국아동발달 사회적협동조합'에서 가족 3인이 받아간 급여는 2024년 6840만원, 2025년 8930만원, 2026년 1~8월 1억1382만원으로 매년 약 30%씩 늘었다. 반면 같은 기간 조합의 순이익은 2024년 1억332만원에서 2025년 4720만원으로 1년 만에 54.3% 줄었다 — 조합 살림은 어려워지는데 가족 급여만 계속 늘어난 셈이다. 같은 당 김태규 의원은 급여를 근로소득과 사업소득으로 나눠 지급해 5년간 4대보험료를 1300만원 넘게 절감한 정황도 제기했다. 후보자 측은 '다른 선생님들과 유사한 인상률'이라며 학부모 승인 절차를 근거로 들었지만, 조합 재정이 악화되는 추세와 정확히 반대로 가족 급여가 늘어난 배경과 소득 분리 지급의 목적은 별도로 설명되지 않았다.",
    sources:
      "더퍼블릭(주진우 \"김승원 가족, 협동조합 순이익 급감에도 급여30% 증가\" '저격')\nhttps://www.thepublic.kr/news/articleView.html?idxno=317984\n파이낸셜뉴스(\"김승원 아내가 원장, 아들·딸 채용\"…복지기관서 '3억3000만원 급여' 논란)\nhttps://www.fnnews.com/news/202609070657335242\n디지털타임스(김승원, '가족 인건비 의혹'에…\"급여인상, 학부모 승인 아래 이뤄져\" 반박)\nhttps://www.dt.co.kr/article/12082937",
  },
];

async function main() {
  const politician = await prisma.politician.upsert({
    where: { sgId_huboid: { sgId: "20240410", huboid: "KIMSEUNGWON" } },
    create: {
      name: "김승원",
      party: "더불어민주당",
      office: "경기 수원시갑",
      region: "경기도",
      level: "assembly",
      electionName: "제22대 국회의원선거",
      electionDate: new Date("2024-04-10"),
      sgId: "20240410",
      sgTypecode: "2",
      huboid: "KIMSEUNGWON",
    },
    update: {
      party: "더불어민주당",
      office: "경기 수원시갑",
      region: "경기도",
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
          politicianName: "김승원",
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

  console.log(`Added/updated 김승원: ${BILLS.length} bill-pledges, ${FACTCHECKS.length} factchecks.`);
}

main().finally(() => prisma.$disconnect());
