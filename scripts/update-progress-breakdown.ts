import { prisma } from "@/lib/db";

type Item = { item: string; percent: number; note: string; source?: string };

function avg(items: Item[]) {
  return Math.round(items.reduce((s, i) => s + i.percent, 0) / items.length);
}

const pledgeA: Item[] = [
  {
    item: "AI 3강 도약 (예산·GPU·인재양성)",
    percent: 70,
    note: "예산편성(10조원 확정)에 그치지 않고 AI기본법 시행, GPU 1.8만장(36%) 실제 확충, '모두의 AI' 프로젝트 출범 후 SKT·카카오·KT 베타서비스 가동까지 — 착수를 넘어 실행 기록이 여러 건 쌓인 상태.",
    source: "http://www.itdaily.kr/news/articleView.html?idxno=236161",
  },
  {
    item: "Big5 문화강국 (K컬쳐 수출·콘텐츠 지원)",
    percent: 60,
    note: "문체부 예산 10.3%↑ 확정과 콘텐츠정책펀드 7300억원 조성까지는 실행됐지만, 예술인고용보험법은 2026년 10월에야 시행 예정이라 아직 진행 중인 부분이 남아있음.",
    source: "https://www.mcst.go.kr/kor/s_policy/govProj/govDetail.jsp?pGubun=58",
  },
  {
    item: "K-방산 컨트롤타워·방사청 역량강화",
    percent: 50,
    note: "2026년 6월 범정부 방산 수출 컨트롤타워가 착수(가동)됐으나, 8월 보도에서 '실권 있는 컨트롤타워 부재' 비판이 제기돼 후속 실행 기록으로 인정하기 어려움.",
    source: "https://news.nate.com/view/20260604n21897",
  },
  {
    item: "국가첨단전략산업 집중투자 (국민펀드·기금)",
    percent: 85,
    note: "50조원 규모 첨단전략산업기금 신설 법률 시행(착수)에 이어, 150조원 국민성장펀드가 2026년 실제로 30조원을 집행 — 착수 이후 구체적 집행 기록까지 확인된 사례.",
    source: "https://www.asiae.co.kr/article/2026010911075380438",
  },
  {
    item: "R&D 예산 확대",
    percent: 55,
    note: "2026년도 R&D 예산 35조3000억원(19.3%↑)이 확정돼 집행 연도에 진입한 것은 실행 기록이지만, '지속성 담보'는 여러 해에 걸쳐 증명돼야 하는 목표라 아직 착수 단계를 조금 넘은 수준으로 판단.",
    source: "https://www.daejeonpress.co.kr/news/65581",
  },
  {
    item: "벤처투자 육성 (4대 벤처강국)",
    percent: 55,
    note: "종합대책 발표 후 모태펀드 1차 출자로 4.4조원 벤처펀드가 실제 조성된 것은 착수를 넘은 기록이지만, 세제개편·M&A 촉진 후속입법은 아직 진행 중.",
    source: "https://www.etnews.com/20260106000317",
  },
  {
    item: "스마트농업·푸드테크·K-푸드 수출",
    percent: 60,
    note: "농촌진흥청 투자(1595억원)와 K-푸드플러스 수출 역대 최대 실적(136.3억달러)이라는 두 실행 기록이 확인되지만, '확산·육성·전환'은 종료 시점이 없는 목표라 완료로 보지 않음.",
    source: "https://www.fnnews.com/news/202605201819250732",
  },
];

const pledgeB: Item[] = [
  {
    item: "세종 행정수도 완성 (국회의사당·대통령 집무실)",
    percent: 35,
    note: "국회 세종의사당 설계공모 당선작 선정, 대통령 세종집무실은 2027년 착공·2029년 입주 목표 — 예산·계획 수립을 넘어섰지만 착공 전 설계 단계라 착수로 보기엔 이름.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148965213",
  },
  {
    item: "공공기관 2차 지방이전·정주여건 개선",
    percent: 20,
    note: "수도권 공공기관 약 350곳 대상 2차 지방이전 계획이 검토 중이며 이르면 9월 윤곽 발표 예정. 예산 편성이나 착수 단계에도 못 미치는 검토 단계.",
    source: "https://www.newspim.com/news/view/20260813000647",
  },
  {
    item: "5극3특 균형발전 기반 (특별지자체·광역급행철도)",
    percent: 65,
    note: "5극3특 초광역 협력 특별법 통과(착수)에 이어, 대구~경북 광역급행철도가 예비타당성조사까지 통과 — 착수 이후 실행 기록이 하나 더 쌓인 상태.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148964072",
  },
  {
    item: "자치분권 강화 (국가자치분권회의·지방교부세)",
    percent: 30,
    note: "공약이었던 '국가자치분권회의' 신설 근거는 확인되지 않았고, 대신 국무조정실 산하 재정분권 TF가 출범한 수준 — 본래 약속과는 다른 축소된 착수.",
    source: "https://www.imaeil.com/page/view/2026082115535730092",
  },
  {
    item: "지역소멸 방지 행정체계 개편",
    percent: 60,
    note: "'지방소멸대응 범부처 지역혁신프로젝트' 진행에 더해, 인구총조사 기능을 이관받은 국가데이터처가 장관급으로 승격되는 등 착수 이후 실행 기록이 추가로 확인됨.",
    source: "https://www.idaegu.com/news/articleView.html?idxno=662924",
  },
  {
    item: "지역대표 전략산업 육성·지역투자 촉진",
    percent: 45,
    note: "'지역특화 프로젝트 레전드50+' 등 495억원 규모 사업이 시행 중이지만, 기존 사업의 연속·확대 성격이 강해 새로운 착수로 보기는 어려움.",
    source: "https://www.nabis.go.kr/policyDetailView.do?menucd=20&gbnCode=P50&refCode=20&poIdx=11693",
  },
  {
    item: "수도권 대학 서열화 완화 (서울대 10개 만들기)",
    percent: 60,
    note: "'서울대 10개 만들기' 국정과제 확정과 거점국립대 3곳 선정(착수)에 이어, 관련 예산이 8조7330억원으로 증액 배정되는 실행 기록까지 확인됨.",
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148969434",
  },
  {
    item: "지역사랑상품권 발행 의무화",
    percent: 30,
    note: "국비지원 의무화(예산 1조1500억원)까지는 시행됐지만, 공약의 핵심인 '발행' 자체는 여전히 지자체장 재량이라 본래 목표는 착수 전 단계에 머묾.",
    source: "https://www.nabo.go.kr/board/file/down.do?fid=33318937",
  },
  {
    item: "관광산업 지역경제 활성화 (휴가지원 3종세트)",
    percent: 20,
    note: "근로자휴가지원사업은 기존과 동일한 구조로 유지되고, 신설 공약이었던 '지역사랑휴가지원제' 출범 근거는 확인되지 않아 새로운 착수로 보기 어려움.",
    source: "https://www.mt.co.kr/policy/2026/06/05/2026060510431492623",
  },
  {
    item: "지속가능한 농산어촌 (귀농귀촌·빈집정비)",
    percent: 20,
    note: "귀농인 지원금·빈집 정비가 계속 운영되지만 대부분 기존 제도의 연장으로, 이 정부의 신규 입법·조직 신설 근거는 확인되지 않음.",
  },
  {
    item: "철도지하화 종합계획 수립·시행",
    percent: 50,
    note: "철도지하화 특별법에 따라 국토부가 통합개발 사업 시행방안을 발표(착수)했으나, 1차 선도사업 확정이 지자체 협의 지연으로 미뤄져 다음 단계 실행 기록은 아직 없음.",
    source: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156668265",
  },
  {
    item: "지역·중소방송사 콘텐츠 제작 지원",
    percent: 60,
    note: "지원 예산이 202억원(전년 35억원)으로 대폭 증액된 데 이어, AI 제작지원 시범사업에 8개 지역방송사가 선정되는 실행 기록까지 확인됨.",
    source: "https://zdnet.co.kr/view/?no=20260127121200",
  },
  {
    item: "재난현장 이·통장 특별활동비 신설",
    percent: 10,
    note: "국가 차원의 신설 입법·예산 근거는 찾지 못함. 경상남도의회가 관련 조례 개정안을 발의한 것이 유일한 사례라, 국가 정책 착수로 보기엔 부족하지만 지역 단위의 미미한 움직임은 확인됨.",
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
