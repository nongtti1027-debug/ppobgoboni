import { prisma } from "@/lib/db";

type Item = { item: string; percent: number; note: string; source?: string };

function avg(items: Item[]) {
  return Math.round(items.reduce((s, i) => s + i.percent, 0) / items.length);
}

const pledgeA: Item[] = [
  {
    item: "AI 3강 도약 (예산·GPU·인재양성)",
    percent: 66,
    note: "2026년 AI예산이 약 10조원(전년 대비 약 211%↑)으로 확정됐고, GPU는 목표 5만장 중 상반기까지 약 1.8만장(36%) 확충. '모두의 AI 성장사다리 프로젝트'가 2026년 8월 출범해 SKT·카카오·KT 베타서비스 진행 중.",
    source: "http://www.itdaily.kr/news/articleView.html?idxno=236161",
  },
  {
    item: "Big5 문화강국 (K컬쳐 수출·콘텐츠 지원)",
    percent: 66,
    note: "2026년 문체부 예산 7조8555억원(10.3%↑), 콘텐츠 부문 1조6103억원(26.5%↑), 콘텐츠정책펀드 7300억원 조성. 예술인고용보험법은 2026년 10월 시행 예정.",
    source: "https://www.mcst.go.kr/kor/s_policy/govProj/govDetail.jsp?pGubun=58",
  },
  {
    item: "K-방산 컨트롤타워·방사청 역량강화",
    percent: 66,
    note: "2026년 6월 범정부 방산 수출 컨트롤타워가 가동됐으나, 8월 보도에서 '실권 있는 컨트롤타워 부재' 비판도 제기됨. 국방 R&D는 2026년 방위산업 예산 3.7조원 배정.",
    source: "https://news.nate.com/view/20260604n21897",
  },
  {
    item: "국가첨단전략산업 집중투자 (국민펀드·기금)",
    percent: 100,
    note: "150조원 규모 국민성장펀드가 조성돼 2026년 30조원 집행. 한국산업은행 산하 50조원 규모 첨단전략산업기금 신설 법률이 2026년 4월 시행됨.",
    source: "https://www.asiae.co.kr/article/2026010911075380438",
  },
  {
    item: "R&D 예산 확대",
    percent: 66,
    note: "2026년도 R&D 예산 35조3000억원(전년 대비 19.3%↑, 역대 최대)으로 확정, 국가전략기술·AI·방위산업 등에 배정돼 집행 연도에 진입. 다만 '확대·지속성 담보'는 종료 시점이 없는 목표라 한 해 증액만으로 완료로 보지 않음.",
    source: "https://www.daejeonpress.co.kr/news/65581",
  },
  {
    item: "벤처투자 육성 (4대 벤처강국)",
    percent: 66,
    note: "2025년 12월 '벤처 4대 강국 도약 종합대책' 발표 후 2026년 모태펀드 1차 출자로 4.4조원 벤처펀드 조성, 세제개편·M&A 촉진 후속입법 진행 중.",
    source: "https://www.etnews.com/20260106000317",
  },
  {
    item: "스마트농업·푸드테크·K-푸드 수출",
    percent: 66,
    note: "농촌진흥청 스마트농업·그린바이오에 1595억원 투자(2026), K-푸드플러스 수출 2025년 역대 최대(136.3억달러) 달성, 2026년 목표 160억달러로 수출거점 확대 중. 다만 '확산·육성·전환'은 종료 시점이 없는 목표라 투자·실적만으로 완료로 보지 않음.",
    source: "https://www.fnnews.com/news/202605201819250732",
  },
];

const pledgeB: Item[] = [
  {
    item: "세종 행정수도 완성 (국회의사당·대통령 집무실)",
    percent: 33,
    note: "국회 세종의사당은 설계공모 당선작 선정(2033년 준공 목표), 대통령 세종집무실은 2027년 착공·2029년 입주 목표 — 두 건물 모두 아직 착공 전 설계 단계.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148965213",
  },
  {
    item: "공공기관 2차 지방이전·정주여건 개선",
    percent: 33,
    note: "수도권 공공기관 약 350곳 대상 2차 지방이전 계획이 검토 중이며 이르면 9월 윤곽 발표 예정. 금융위·금감원 등 이전 논의되나 노조 반발로 미확정.",
    source: "https://www.newspim.com/news/view/20260813000647",
  },
  {
    item: "5극3특 균형발전 기반 (특별지자체·광역급행철도)",
    percent: 66,
    note: "5극3특 초광역 협력 특별법이 국회를 통과했고, 대구~경북 광역급행철도가 예비타당성조사를 통과. 강원·전북·제주 특별법 개정도 진행 중.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148964072",
  },
  {
    item: "자치분권 강화 (국가자치분권회의·지방교부세)",
    percent: 33,
    note: "공약이었던 '국가자치분권회의' 신설 근거는 확인되지 않았으나, 국무조정실 산하 재정분권 TF가 2026년 1월 출범했고 지방교부세 산정방식 개편이 55년 만에 추진 중.",
    source: "https://www.imaeil.com/page/view/2026082115535730092",
  },
  {
    item: "지역소멸 방지 행정체계 개편",
    percent: 66,
    note: "중기부 주도 '지방소멸대응 범부처 지역혁신프로젝트'가 2026년에도 진행 중이며, 대구·경북 통합 자치단체가 2026년 7월 출범을 목표로 추진됨.",
    source: "https://www.idaegu.com/news/articleView.html?idxno=662924",
  },
  {
    item: "지역대표 전략산업 육성·지역투자 촉진",
    percent: 66,
    note: "'지역특화 프로젝트 레전드50+' 등 지역주력산업 육성사업이 17개 시도 1840개 기업 대상 495억원 규모로 시행 중 — 다만 기존 사업의 연속·확대 성격이 강함.",
    source: "https://www.nabis.go.kr/policyDetailView.do?menucd=20&gbnCode=P50&refCode=20&poIdx=11693",
  },
  {
    item: "수도권 대학 서열화 완화 (서울대 10개 만들기)",
    percent: 66,
    note: "'서울대 10개 만들기'가 국정과제로 확정, 거점국립대 3곳 신속 선정. 2026년 거점국립대 예산 8조7330억원, RISE 사업 21조4030억원으로 증액 배정.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148969434",
  },
  {
    item: "지역사랑상품권 발행 의무화",
    percent: 33,
    note: "2025년 8월 지역사랑상품권법 개정으로 국비지원 의무화(2026년 국비 1조1500억원)는 시행됐지만, 상품권 '발행' 자체는 여전히 지자체장 재량으로 남아 있어 발행 의무화는 미이행.",
    source: "https://www.nabo.go.kr/board/file/down.do?fid=33318937",
  },
  {
    item: "관광산업 지역경제 활성화 (휴가지원 3종세트)",
    percent: 33,
    note: "근로자휴가지원사업은 기존과 동일한 구조로 유지되고, 신설 공약이었던 '지역사랑휴가지원제' 출범 근거는 확인되지 않음. 워케이션은 지자체 단위로 확대 중.",
    source: "https://www.mt.co.kr/policy/2026/06/05/2026060510431492623",
  },
  {
    item: "지속가능한 농산어촌 (귀농귀촌·빈집정비)",
    percent: 33,
    note: "귀농인 농업창업자금·영농정착지원금, 빈집 철거·수리 지원이 계속 운영되지만 대부분 기존 제도의 연장으로, 신규 입법·조직 신설 근거는 확인되지 않음.",
  },
  {
    item: "철도지하화 종합계획 수립·시행",
    percent: 66,
    note: "철도지하화 특별법에 따라 국토부가 통합개발 사업 시행방안을 발표(투자규모 65조2000억원), 2026년 착공 목표로 추진 중이나 1차 선도사업 확정은 지연.",
    source: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156668265",
  },
  {
    item: "지역·중소방송사 콘텐츠 제작 지원",
    percent: 66,
    note: "문체부의 2026년 지역·중소방송사 지원 예산이 202억원(전년 35억원에서 대폭 증액)으로 편성되고, AI 제작지원 시범사업에 8개 지역방송사가 선정됨.",
    source: "https://zdnet.co.kr/view/?no=20260127121200",
  },
  {
    item: "재난현장 이·통장 특별활동비 신설",
    percent: 0,
    note: "국가 차원의 이·통장 재난특별활동비 신설 입법이나 예산 편성 근거를 찾지 못함. 경상남도의회가 2026년 5월 관련 조례 개정안을 발의한 것이 유일한 사례(국가 차원 정책 아님).",
    source: "https://www.newsis.com/view/NISX20260526_0003643918",
  },
];

async function main() {
  const president = await prisma.politician.findFirst({ where: { level: "president" } });
  if (!president) throw new Error("president not found");

  const updates = [
    { order: 1, items: pledgeA, label: "경제 강국(7개 세부 항목)" },
    { order: 6, items: pledgeB, label: "세종 행정수도·5극3특(13개 세부 항목)" },
  ];

  for (const u of updates) {
    const pledge = await prisma.pledge.findFirst({
      where: { politicianId: president.id, source: "nec", order: u.order },
    });
    if (!pledge) continue;
    const percent = avg(u.items);
    await prisma.pledge.update({
      where: { id: pledge.id },
      data: {
        progressPercent: percent,
        progressBreakdown: JSON.stringify(u.items),
        statusNote: `이행방법 ${u.label}의 진행도를 항목별로 조사해 평균낸 값입니다(모든 항목 근거 확인, 단순 평균).`,
        statusSource: u.items.map((i) => i.source).filter(Boolean).slice(0, 3).join("\n"),
        statusCheckedAt: new Date(),
      },
    });
    console.log(`order ${u.order} -> ${percent}% (${u.items.length}개 항목)`);
  }
}

main().finally(() => prisma.$disconnect());
