/**
 * 조상래 (전남 곡성군수): his official "10대 핵심공약" questionnaire table
 * was submitted entirely blank (every field literally empty in the source
 * document), which earlier import runs turned into 10 placeholder pledge
 * rows with garbage titles ("완료시기" — actually a blank form-field label).
 *
 * He did separately submit a complete, well-formed "5대공약" (top-5)
 * questionnaire (data/manifesto/text_full/...조상래 후보 (5대공약).txt).
 * This script replaces the 10 broken placeholder rows with those 5 real
 * pledges, judged from actual news coverage.
 *
 * Usage: npx tsx scripts/fix-gokseong-manifesto-pledges.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/fix-gokseong-manifesto-pledges.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const PLEDGES = [
  {
    order: 101,
    title: "청년이 돌아오고 농민이 살아나는 맞춤형 지원으로 부자농촌 만들기",
    goal: "시대변화에 맞는 농업지원 정책과 청년 농업인의 안정적 영농정착을 도와주고 첨단농업, 스마트농업으로 경쟁력 향상, 농촌소득 증대를 기대\n\n[목표]\n첨단 농업·농촌 복합단지 조성 / 노후 농기계 조기폐차 지원사업, 농가 건설기계 엔진교체 지원 / 공공형 계절근로 사업 확대 및 외국인근로자 숙소신축, 벼육묘 노동력 절감을 위한 자동화 시설 지원 / 임대형 스마트팜단지 청년농부 역량 강화, 청년 농부 성장 동행 멘토링 / 기후변화대응 고부가가치 특화 작목육성, 첨단자동화 재배 실습온실 구축",
    method: "48년 경과로 노후화한 현 농업기술센터 청사·종합검정실 등 신축 / 관내 농업기계 대리점 폐차업소 지정 및 사업대상자 선정 심의 / 외국인근로자 국내 적응 지원, 벼 육묘하우스 운영 농업인조사 및 육묘시설 보수·설치 사업 추진 / 스마트팜 설비운영, 보유 유전자원 보존 및 증식실시",
    timeline: "2026년 ~ 2030년 임기중 시행",
    funding: "국비, 도비, 군비",
    percent: 10,
    note: "2026년 곡성군 군정 방향에 '농업인이 대우받는 부자농촌'이 5대 축 중 하나로 재확인됐고, 청년 농업인 정착·스마트팜 지원 기조는 이어지고 있다. 다만 농업기술센터 신축이나 노후 농기계 폐차 지원사업 등 이 공약에 명시된 구체적 세부 사업의 착수·예산 확보 근거는 확인되지 않아 계획 발표 단계로 판단된다.",
    source: "지이코노미(조상래 곡성군수, 농업이 살고 사람이 돌아오는 희망 곡성)\nhttps://www.geconomy.co.kr/mobile/article.html?no=322126",
  },
  {
    order: 102,
    title: "다시 뛰는 곡성경제 지역경제에 활성화를, 세대통합형 지원으로 지역상권 살리기",
    goal: "중동사태로 어려워지는 지역경제를 청년 상인부터 중장년 상인까지 세대통합형 균형 지원과 농어촌기본소득의 효율적 활용으로 골목상권의 활력 회복 및 경제 활성화 만들기\n\n[목표]\n'골목 RUN, 다시 뛰는 상점가' 상인단체 자생력 지원사업 / 곡성몰 입점확대를 위한 포장재지원사업 추진 / 청년소상공인 육성을 위한 청년로컬가게 조성 및 청년자격증 응시료 지원 / 은퇴 중·장년의 경험과 전문성을 바탕으로 창업도약 지원사업",
    method: "상인단체 구성 및 사업 모집공고, 선정 / 곡성몰 사업공고 및 대상자 선정, 사업추진 / 곡성읍 유휴공간 조사, 청년 운영대상자모집 및 확정 후 개소, 운영 / 곡성군 일자리 창출 지원 조례 개정, 참여자 공고 모집 및 홍보",
    timeline: "2026년~2028년 임기중 시행",
    funding: "국비, 군비",
    percent: 30,
    note: "곡성군 온라인 쇼핑몰 '곡성몰'이 이미 운영 중이며 판매 수수료 0%로 신규 입점업체를 정기 모집하고 있어(2025년 2월 모집 공고 기준) 공약의 핵심 축인 곡성몰 확대는 실제로 진행되고 있다. 지역 농산물·관광자원에 청년 아이디어를 접목한 '청년 로컬가게' 사업도 골목상권 활성화 사업으로 소개되고 있으나, 별도의 상인단체 자생력 지원사업 출범이나 청년로컬가게의 구체적 개소 실적은 확인되지 않았다.",
    source: "프레시안(곡성군, 곡성몰 신규 입점업체 모집)\nhttps://www.pressian.com/pages/articles/2025021912243007493",
  },
  {
    order: 103,
    title: "2026년 곡성관광 재도약의 해 선포로 세계속의 관광메카 만들기",
    goal: "2031년 정원박람회, 정해박해 성지순례거점화추진 및 장미정원, 동화정원, 기차마을을 연계한 다양한 테마정원 조성으로 장미 도시·정원도시 브랜드화로 일자리 창출, 경제 활성화, 기반시설 확보를 통한 지역 소멸 위기 극복 및 곡성관광 세계화 실현\n\n[목표]\n2027년 정해박해 200주년, 성지순례 거점화 추진 / 다마스크장미 묘목 육성 장미산업화 기반 구축 / 2031년 국제정원 박람회 유치 추진 / 섬진강 권역 K-봄 글로벌 관광 클러스터 구축",
    method: "세계청년대회 준비협의체 출범, 성지순례길 코스 개발 수립 / 유리온실 신축으로 곡성장미 신품종 및 다마스크 장미 묘목 육성 / 국제정원박람회 기본구상, 기재부 심사 등 행정절차 이행, 조직위 구성 및 실시설계 / 광역 순환 교통망 구축 및 스마트 관광 통합 플랫폼 구축",
    timeline: "2026년~2031년 중기 사업",
    funding: "국비, 도비, 군비",
    percent: 30,
    note: "조상래 군수가 직접 이탈리아를 방문하고 산림청장과 면담하는 등 '2031 곡성국제정원박람회' 유치를 위한 행보가 구체화되고 있으며, 기차마을 장미정원을 포함한 75㏊ 부지에서 2031년 4~7월 개최를 목표로 '농촌형 정원박람회' 구상이 제시됐다. 다만 아직 정식 유치 확정 전 단계이며, 정해박해 성지순례 거점화 관련 진전은 별도로 확인되지 않았다.",
    source: "광주in(곡성2031 국제정원박람회 유치 본격화)\nhttps://www.gwangjuin.com/news/articleView.html?idxno=268060\n전남인뉴스(곡성군, 2031 국제정원박람회 유치 시동)\nhttps://www.jninnews.com/news/articleView.html?idxno=43774",
  },
  {
    order: 104,
    title: "예외 없는 복지인프라 구축으로 전국복지 1번지 실현",
    goal: "어르신, 장애우, 여성, 청소년, 아동까지 모든 군민이 직접적으로 혜택을 받을 수 있는 현실복지 구현, 복지로 소외되는 군민 제로운동으로 전국에서 제일 가는 복지 곡성을 만들겠습니다.\n\n[목표]\n곡성형 3S(smart, security, speed) 스마트안전돌봄사업 추진 / 장애인 쉼터조성과 다중이용 생활시설 이동경사로 지원사업 / 관내학생 자기주도 학습센터구축 및 지원 / 곡성햇빛·바람마을, 신재생에너지마을조성",
    method: "읍면 및 민관 안전 돌봄협의체 통한 응급시 신속대응 / 장애인쉼터 벤치마킹, 현장실사 및 심의위원회 심의 의결 / EBS 멘토링 학습지원 및 학습코디네이터 예산교부 / 마을단위 태양광사업 설명회 및 주민 협동조합구성",
    timeline: "2026년~2028년 임기중 시행",
    funding: "국비, 도비, 군비, 교육청비",
    percent: 30,
    note: "'곡성형 3S 스마트 안전 돌봄사업'과 '곡성형 마을 주치의 제도' 확대, 감염병 대응센터 신축 등 공약과 일치하는 구체적 사업명이 실제로 추진되고 있는 것으로 확인된다. 곡성군-곡성소방서 간 취약계층 안전 확보 업무협약도 체결돼 응급 대응체계 구축이 진행 중이나, 장애인쉼터나 신재생에너지마을 조성 등 나머지 세부 사업의 착수 근거는 확인되지 않았다.",
    source: "데일리연합(곡성군-곡성소방서 관내 취약계층 안전 확보 업무협약 체결)\nhttps://www.dailyan.com/news/article.html?no=728424",
  },
  {
    order: 105,
    title: "곡성 수상레포츠 관광단지 조성사업",
    goal: "편리한 교통으로 영·호남 경계에 위치하고 있으나 인구소멸 위기에 직면해 호남권 최초 사회복합문화 공간을 조성, 지역 상생 관광 활성화로 관광객, 일자리 창출 등 인구유입을 통한 지방소멸 고위험지역 극복\n\n[목표]\n호남권 최초 경정장 및 수상레포츠 시설 도입과 남부권 광역 관광 연계 호남의 랜드마크 역할기대 / 지방소멸위기 극복을 위해 군민이 참여하는 지역문화 관광발전 기틀마련",
    method: "수상레포츠 관광단지 운영 관리를 위한 특수목적법인(SPC)을 설립하여 금융사 및 증권사와 금융투자 및 컨설팅 계약 체결 / 제3섹터 방식을 통한 개발사업 추진",
    timeline: "2026년 ~ 2028년 임기중 시행",
    funding: "군비, 민자투자",
    percent: 30,
    note: "곡성군이 인구감소지수 전국 5위, 고령인구 41.4%의 위기 속에서 경정장 중심 수상레포츠 관광단지(워터파크·리조트·래프팅파크) 조성을 공식 추진 중이며, 군이 경정장 허가를 취득하면 민자투자로 개발하는 제3섹터 방식이 구체화됐다. 2025~2026년에 걸쳐 다수 언론이 추진 경과를 보도했으나, 아직 경정장 설치 허가나 SPC 설립 등 최종 단계는 완료되지 않았다.",
    source: "세계일보(곡성 경정장 유치로 인구소멸 돌파)\nhttps://www.segye.com/newsView/20251119515018\n스마트에프엔(곡성군, 인구소멸 위기 돌파 수상레포츠 관광단지 조성)\nhttps://www.smartfn.co.kr/news/articleView.html?idxno=126394",
  },
];

async function main() {
  const politician = await prisma.politician.findFirst({
    where: { name: "조상래", region: "전라남도", office: "곡성군" },
    select: { id: true },
  });
  if (!politician) {
    console.error("조상래 not found in this database.");
    process.exit(1);
  }

  await prisma.pledge.deleteMany({ where: { politicianId: politician.id, source: "manifesto" } });

  for (const p of PLEDGES) {
    await prisma.pledge.create({
      data: {
        politicianId: politician.id,
        order: p.order,
        source: "manifesto",
        title: p.title,
        goal: p.goal,
        method: p.method,
        timeline: p.timeline,
        funding: p.funding,
        measurability: "unrated",
        status: "in_progress",
        progressPercent: p.percent,
        statusNote: p.note,
        statusSource: p.source,
        statusCheckedAt: new Date(),
      },
    });
  }

  console.log(`Replaced 조상래's manifesto pledges with ${PLEDGES.length} real, judged pledges.`);
}

main().finally(() => prisma.$disconnect());
