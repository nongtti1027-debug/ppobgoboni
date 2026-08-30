import { prisma } from "@/lib/db";

type Judgment = {
  order: number;
  status: "completed" | "in_progress" | "partial" | "delayed" | "failed";
  progressPercent: number;
  statusNote: string;
  statusSource: string;
};

// order 1, 6은 이행방법 세부 항목 체크리스트(update-progress-breakdown.ts)로 관리하므로 여기서는 제외.
const judgments: Judgment[] = [
  {
    order: 2,
    status: "in_progress",
    progressPercent: 45,
    statusNote:
      "윤석열 전 대통령 내란 우두머리 혐의 1심에서 2026년 2월 무기징역이 선고됐으나 항소심이 진행 중이라 '내란극복' 자체가 아직 사법적으로 확정되지 않았다. 국민통합위원회는 임기를 2030년까지 연장해 5대 갈등 분야 대화를 이어가고 있다. 스웨덴 V-Dem연구소 '민주주의보고서 2026'에서 한국의 민주주의 지수 순위가 41위(2024)에서 22위(2025)로 급등했으나, 이는 정부의 직접 조치라기보다 정치적 안정에 따른 간접 지표에 가깝다.",
    statusSource:
      "경향신문 - 민주주의지수 41→22위\nhttps://www.khan.co.kr/article/202603172032005\n\n서울경제 - 외국언론의 한국 민주주의 회복력 평가\nhttps://www.sedaily.com/article/20054486",
  },
  {
    order: 3,
    status: "in_progress",
    progressPercent: 48,
    statusNote:
      "상법이 3차례 개정돼(집중투표제 의무화, 감사위원 분리선출 확대, 자사주 의무소각) 2026년 순차 시행됐고, 2025년 전 국민 '민생회복 소비쿠폰' 13.5조원 지급도 완료됐다 — 두 가지는 명확히 완료된 사안이다. 다만 소상공인 단체행동 공정거래법 적용제외 등 소상공인 보호의 핵심 항목은 아직 공정위의 '추진 계획' 단계에 머물러 있어, 전체를 반영해 보수적으로 판정했다.",
    statusSource:
      "정책브리핑 - 상법 개정 및 규제 합리화\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148966161\n\n머니투데이 - 민생회복 소비쿠폰 성과\nhttps://www.mt.co.kr/politics/2026/05/12/2026051210070085815",
  },
  {
    order: 4,
    status: "in_progress",
    progressPercent: 42,
    statusNote:
      "2025년 11월 한미 관세·안보 협상이 타결돼 상호관세 15%, 3,500억달러 대미투자, 국방비 GDP 3.5% 증액 등 구체적 수치까지 합의됐다 — '경제안보 구축' 축은 상당히 진전됐다. 그러나 공약의 또 다른 축인 '지속가능한 한반도 평화 실현'은 대북 확성기·전단 살포 중단 등 긴장완화 조치에 그치고, 개성공단 재개나 정상회담 등 실질적 남북관계 개선은 명시적으로 없어 핵심 목표 하나가 사실상 미달성 상태다.",
    statusSource:
      "정책브리핑 - 한미 관세·안보 협상 타결\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148954753\n\n통일부 - 한반도 평화공존정책 성과\nhttps://unikorea.go.kr/web/unikorea/bbs/bbs_0000000000000004/59420",
  },
  {
    order: 5,
    status: "in_progress",
    progressPercent: 45,
    statusNote:
      "정부는 내년부터 5년간 연평균 668명씩 의대 정원을 증원하는 계획을 확정했고 2026년도 수가협상은 8년 만에 전 유형 타결됐다 — 제도 정비는 진전됐다. 그러나 공약이 명시한 '의료 대란 해결'의 핵심인 필수의료 공백은 여전해서, 2026년 상반기 고연차(3·4년차) 전공의 복귀율이 8.7%에 그쳤다. 화재감지기 보급 등 안전 분야 성과가 있었지만 공약의 핵심 난제(의료대란)가 미해결이라 보수적으로 판정했다.",
    statusSource:
      "한국일보 - 의대증원 관련 평가\nhttps://www.hankookilbo.com/news/article/A2026071617350005076\n\n정책브리핑 - 화재안전 성과\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148965528",
  },
  {
    order: 7,
    status: "in_progress",
    progressPercent: 45,
    statusNote:
      "'노란봉투법'(노동조합법 2·3조 개정)이 2025년 8월 국회를 통과, 2026년 3월부터 시행돼 하청·특수고용 노동자에 대한 원청의 사용자성이 확대됐다 — 이 항목만 놓고 보면 명확히 완료된 입법이다. 다만 공약에 함께 담긴 주4.5일제는 시범사업 예산(324억원)만 편성된 초기 단계이고, 플랫폼·특수고용 노동자 보호 후속 입법은 구체적 정보가 없어, 공약 전체로는 절반을 조금 넘긴 수준으로 판정했다.",
    statusSource:
      "경향신문 - 노란봉투법 통과·시행\nhttps://www.khan.co.kr/article/202605182109005/\n\n뉴시스 - 주4.5일제 시범사업\nhttps://www.newsis.com/view/NISX20251213_0003439679",
  },
  {
    order: 8,
    status: "in_progress",
    progressPercent: 40,
    statusNote:
      "2026년 예산에서 기초연금·생계급여·의료급여가 모두 증액됐고 청년미래적금 신설 등 청년 소득보장 정책이 추진됐다. 다만 이 공약의 핵심축인 '기본소득 추진'은 2026년 4월에야 공식화돼 2027년 시범사업을 목표로 이제 막 제도화에 착수한 계획수립 단계이며, 참여연대는 사회서비스 분야의 정책 공백을 지적하고 있어 전체적으로는 초기 단계로 보는 것이 맞다.",
    statusSource:
      "한국일보 - 청년 기본소득 정책 시동\nhttps://www.hankookilbo.com/news/article/A2026071211060004104\n\n아시아경제 - 기본소득 제도화 착수\nhttps://view.asiae.co.kr/article/2026041010003852773",
  },
  {
    order: 9,
    status: "in_progress",
    progressPercent: 44,
    statusNote:
      "노인·장애인 대상 '지역사회 통합돌봄'이 2026년 3월부터 전국 시행돼 5월 기준 약 2만8천명이 신청했고 예산도 10배 이상 늘었다 — 실행 자체는 시작됐다. 다만 정부 스스로도 2026~2027년을 '도입기'로 규정할 만큼 초반 단계이고, 함께 언급되는 합계출산율 반등은 2024년부터 이어진 기존 추세라 이 정부의 성과로 보기 어려워 별도로 제외했다.",
    statusSource:
      "웰페어뉴스 - 2026 아동수당·통합돌봄\nhttps://www.welfarenews.net/news/articleView.html?idxno=203536\n\nKDI - 보건복지 1주년 성과\nhttps://eiec.kdi.re.kr/policy/materialView.do?num=281901",
  },
  {
    order: 10,
    status: "in_progress",
    progressPercent: 28,
    statusNote:
      "기존에 분산됐던 기후·환경·에너지 기능을 통합한 '기후에너지환경부'가 2025년 10월 신설됐고, 2035년 온실가스 53~61% 감축 목표(NDC)에 대한 사회적 합의가 도출됐다 — 조직·목표 설정 단계는 마쳤다. 그러나 공약의 실질적 핵심인 '산업구조의 탈탄소 전환'을 담을 '제12차 전력수급기본계획'(석탄발전 감축 방안 포함)은 아직 확정되지 않아, 실제 전환은 시작 전으로 보는 것이 정확하다.",
    statusSource:
      "ZDNet코리아 - 재생에너지 대전환 기틀\nhttps://zdnet.co.kr/view/?no=20260604145401\n\n뉴스핌 - 기후환경에너지 1년, 전기차 100만\nhttps://www.newspim.com/news/view/20260604001076",
  },
];

async function main() {
  const president = await prisma.politician.findFirst({
    where: { level: "president" },
  });
  if (!president) throw new Error("president not found");

  for (const j of judgments) {
    const pledge = await prisma.pledge.findFirst({
      where: { politicianId: president.id, source: "nec", order: j.order },
    });
    if (!pledge) {
      console.warn("no pledge for order", j.order);
      continue;
    }
    await prisma.pledge.update({
      where: { id: pledge.id },
      data: {
        status: j.status,
        progressPercent: j.progressPercent,
        statusNote: j.statusNote,
        statusSource: j.statusSource,
        statusCheckedAt: new Date(),
      },
    });
    console.log(`order ${j.order} updated -> ${j.status} ${j.progressPercent}%`);
  }
}

main().finally(() => prisma.$disconnect());
