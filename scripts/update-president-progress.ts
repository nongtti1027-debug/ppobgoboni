import { prisma } from "@/lib/db";

type Judgment = {
  order: number;
  status: "completed" | "in_progress" | "partial" | "delayed" | "failed";
  progressPercent: number;
  statusNote: string;
  statusSource: string;
};

const judgments: Judgment[] = [
  {
    order: 1,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "2025년 9월 대통령 직속 국가인공지능전략위원회가 출범했고 12월 'AI기본법'이 국회를 통과했다. 2026년 AI 국가예산 약 10조원이 배정됐고, 전략위는 'AI 3대 강국 행동계획(안)'을 공개했다. K-콘텐츠 분야는 2026년 문화예술 예산이 전년 대비 35.7% 증액된 5.7조원으로 확정되고 콘텐츠 부문 예산은 50% 늘었다. 다만 일부 언론은 행동계획의 구체성 부족과 사령탑 공백을 지적한다.",
    statusSource:
      "정책브리핑 - 이재명 정부 첫 예산\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148948409\n\n데일리안 - Big5 문화강국 예산 5.7조\nhttps://www.dailian.co.kr/news/view/1541760\n\n인공지능신문 - AI 3대 강국 행동계획\nhttps://www.aitimes.kr/news/articleView.html?idxno=37721",
  },
  {
    order: 2,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "윤석열 전 대통령 내란 우두머리 혐의 1심에서 2026년 2월 무기징역이 선고됐고 항소심이 진행 중이다. 국민통합위원회는 임기를 2030년까지 연장해 5대 갈등 분야 대화를 이어가고 있다. 스웨덴 V-Dem연구소 '민주주의보고서 2026'에서 한국의 민주주의 지수 순위가 41위(2024)에서 22위(2025)로 급등, '자유민주주의' 지위를 회복했다는 평가가 나왔다.",
    statusSource:
      "경향신문 - 민주주의지수 41→22위\nhttps://www.khan.co.kr/article/202603172032005\n\n서울경제 - 외국언론의 한국 민주주의 회복력 평가\nhttps://www.sedaily.com/article/20054486",
  },
  {
    order: 3,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "상법이 3차례 개정돼(집중투표제 의무화, 감사위원 분리선출 확대, 자사주 의무소각) 2026년 순차 시행됐다. 2025년 전 국민 '민생회복 소비쿠폰' 13.5조원이 지급 완료됐고, 장기연체 소상공인 채무 탕감도 추진됐다. 다만 소상공인 단체행동 공정거래법 적용제외 등은 아직 공정위의 '추진 계획' 단계로, 세부 항목별 진행 속도 차이가 크다.",
    statusSource:
      "정책브리핑 - 상법 개정 및 규제 합리화\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148966161\n\n머니투데이 - 민생회복 소비쿠폰 성과\nhttps://www.mt.co.kr/politics/2026/05/12/2026051210070085815",
  },
  {
    order: 4,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "2025년 11월 한미 관세·안보 협상이 타결돼 상호관세 15%, 3,500억달러 대미투자, 국방비 GDP 3.5% 증액 등이 합의됐다. 대북 확성기·전단 살포 중단, 남북협력기금 1조원 복원 등 긴장완화 조치가 있었으나 개성공단 재개나 정상회담 등 실질적 남북관계 개선은 아직 없다.",
    statusSource:
      "정책브리핑 - 한미 관세·안보 협상 타결\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148954753\n\n통일부 - 한반도 평화공존정책 성과\nhttps://unikorea.go.kr/web/unikorea/bbs/bbs_0000000000000004/59420",
  },
  {
    order: 5,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "정부는 내년부터 5년간 연평균 668명씩 의대 정원을 증원하는 계획을 확정했고 2026년도 수가협상은 8년 만에 전 유형 타결됐다. 그러나 2026년 상반기 수련병원 인턴·1년차 충원율은 77~79%인 반면 고연차(3·4년차) 복귀율은 8.7%에 그쳐 필수의료 공백은 해소되지 않았다. 화재감지기 보급, 노후아파트 전수점검 등으로 화재 발생은 5.9% 감소했다.",
    statusSource:
      "한국일보 - 의대증원 관련 평가\nhttps://www.hankookilbo.com/news/article/A2026071617350005076\n\n정책브리핑 - 화재안전 성과\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148965528",
  },
  {
    order: 6,
    status: "in_progress",
    progressPercent: 30,
    statusNote:
      "세종 행정수도 관련 특별법 5건이 발의됐지만 모두 국회 계류 중이며, 대통령 세종집무실은 2027년 8월 착공, 2029년 8월 입주가 목표로 임기 막바지에나 완성될 전망이다. 반면 5극3특 관련 '지방자치분권균형발전법' 개정안은 2026년 5월 국회를 통과해 초광역협력특별회계 등 법적 근거가 마련됐다 — 두 축의 진행 속도 차이가 크다.",
    statusSource:
      "비즈니스포스트 - 세종 행정수도 추진 속도\nhttps://www.businesspost.co.kr/BP?command=article_view&num=444833\n\n정책브리핑 - 5극3특 특별법 통과\nhttps://www.korea.kr/news/policyNewsView.do?newsId=148964072",
  },
  {
    order: 7,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "'노란봉투법'(노동조합법 2·3조 개정)이 2025년 8월 국회를 통과, 2026년 3월부터 시행돼 하청·특수고용 노동자에 대한 원청의 사용자성이 확대됐다. 주4.5일제는 2026년 324억원 규모 시범사업 예산이 편성되고 법적 근거 입법이 추진 중이다. 플랫폼·특수고용 노동자 보호 후속 입법은 아직 구체적 정보가 부족하다.",
    statusSource:
      "경향신문 - 노란봉투법 통과·시행\nhttps://www.khan.co.kr/article/202605182109005/\n\n뉴시스 - 주4.5일제 시범사업\nhttps://www.newsis.com/view/NISX20251213_0003439679",
  },
  {
    order: 8,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "2026년 예산에서 기초연금·생계급여·의료급여가 모두 증액됐고 청년미래적금 신설 등 청년 소득보장 정책이 추진됐다. 대통령 직속 기본사회위원회는 2026년 4월 '기본소득 추진'을 공식화해 2027년 시범사업을 목표로 제도화에 착수했다. 다만 참여연대는 사회서비스 분야의 정책 공백을 지적하는 등 핵심 공약인 기본소득 자체는 아직 계획수립 단계다.",
    statusSource:
      "한국일보 - 청년 기본소득 정책 시동\nhttps://www.hankookilbo.com/news/article/A2026071211060004104\n\n아시아경제 - 기본소득 제도화 착수\nhttps://view.asiae.co.kr/article/2026041010003852773",
  },
  {
    order: 9,
    status: "in_progress",
    progressPercent: 55,
    statusNote:
      "노인·장애인 대상 '지역사회 통합돌봄'이 2026년 3월부터 전국 시행돼 5월 기준 약 2만8천명이 신청했다. 관련 예산은 2025년 71억원에서 2026년 914억원으로 10배 이상 늘었다. 정부 로드맵은 2026~2027년을 '도입기'로, 2030년까지 60종 서비스 통합을 목표로 한다. 합계출산율 반등세가 이어지고 있으나 2024년부터 시작된 추세로 이 정부만의 성과로 보기는 어렵다.",
    statusSource:
      "웰페어뉴스 - 2026 아동수당·통합돌봄\nhttps://www.welfarenews.net/news/articleView.html?idxno=203536\n\nKDI - 보건복지 1주년 성과\nhttps://eiec.kdi.re.kr/policy/materialView.do?num=281901",
  },
  {
    order: 10,
    status: "in_progress",
    progressPercent: 30,
    statusNote:
      "기존에 분산됐던 기후·환경·에너지 기능을 통합한 '기후에너지환경부'가 2025년 10월 신설됐고, 2035년 온실가스 53~61% 감축 목표(NDC)에 대한 사회적 합의가 도출됐다. 2026~2040년 '제12차 전력수급기본계획'을 수립 중이며 석탄발전 감축 방안이 담길 예정이나 아직 확정되지 않았다. 재생에너지 100GW, 서해안 해상풍력 20GW 목표가 제시됐고 전기차 보급은 100만대를 넘었다.",
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
