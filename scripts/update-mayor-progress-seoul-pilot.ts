import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
  {
    name: "김현기",
    office: "강남구",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "취임 1호 결재로 '강남 재건축 신속화 프로젝트'를 승인, 구청장 직속 TF(약 40명)를 구성. 조합설립추진위 승인 기간을 법정 30일→10일로 단축한 실제 사례가 보도됨.",
        source: "https://biz.heraldcorp.com/article/10818575",
      },
      {
        order: 2,
        percent: 10,
        note: "수서역 환승센터·영동대로 지하화는 기존 서울시·국토부 주도 광역사업으로, 신임 구청장의 별도 착수나 신규 조치는 확인되지 않음.",
        source: "https://www.gangnam.go.kr/leader/board/leader_press/192/view.do",
      },
      {
        order: 3,
        percent: 10,
        note: "다자녀 1주택 재산세 감면은 전임 구청장 시기 조례로 이미 시행 중이며, 공약의 핵심인 전체 1주택 실거주자 감면·공공기여금 역외유출 차단 법제화는 아직 국회 촉구 수준.",
        source: "https://www.khan.co.kr/article/202603091417001/",
      },
      {
        order: 4,
        percent: 10,
        note: "세텍 부지 개발, 500억원 규모 펀드 조성 등이 제시됐으나, AI 인재 양성 등 소규모 프로그램 외 핵심 공약의 구체적 착수는 확인되지 않음.",
        source: "https://www.sijung.co.kr/news/articleView.html?idxno=434927",
      },
      {
        order: 5,
        percent: 0,
        note: "취임 8대 과제로 방향은 제시됐으나, 취임 3개월 시점 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
        source: "",
      },
    ],
  },
  {
    name: "유동균",
    office: "마포구",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "공무원 자체 개발 'AI 메모장'을 8월 7일부터 전 직원 도입. 대장홍대선은 8월 도로관리심의회에서 상암역·성산역 안건이 가결돼 병행공사 가능해짐. 강변북로 지하화·군부대 이전은 아직 계획 수준.",
        source: "https://www.newspim.com/news/view/20260818000322",
      },
      {
        order: 2,
        percent: 10,
        note: "홍대 일대 노면주차 재정비, 보행 동선 개선 계획이 발표되고 주민 소통이 진행됐으나 구체적 시행 실적은 아직 제한적.",
        source: "https://v.daum.net/v/20260803050413888?f=p",
      },
      {
        order: 3,
        percent: 55,
        note: "올 1월 '돌봄통합팀'을 신설했고 5월부터 의료·재활·일상지원을 연계한 '마포형 통합돌봄' 서비스가 실제 가동 중.",
        source: "https://biz.heraldcorp.com/article/10830901",
      },
      {
        order: 4,
        percent: 10,
        note: "청년정책 특강 개최, 8월 조직개편은 있었으나 교육·진로·취업·창업 연계 체계의 구체적 시행은 아직 확인되지 않음.",
        source: "https://biz.heraldcorp.com/article/10838070",
      },
      {
        order: 5,
        percent: 10,
        note: "마을정원사 양성교육 등 소규모 녹화사업에는 착수했으나, 문화벨트 조성 등 관광도시 브랜드화 자체는 아직 구상 단계.",
        source: "https://www.khan.co.kr/article/202607051531001/",
      },
    ],
  },
  {
    name: "유찬종",
    office: "종로구",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "취임 1호 결재로 '종로형 일자리·상권 상생 추진계획'을 승인, 630억원 투입·8000명 고용 목표와 구체적 지원제도를 설계. 실집행 실적은 아직 확인 안 됨.",
        source: "https://biz.heraldcorp.com/article/10794414",
      },
      {
        order: 2,
        percent: 10,
        note: "통합돌봄센터·보건소 건립 등을 공언했으나, 취임 3개월 시점 구체적 착공이나 예산 반영 보도는 확인되지 않음.",
        source: "https://biz.heraldcorp.com/article/10795299",
      },
      {
        order: 3,
        percent: 30,
        note: "전국 최초 'AI 4종' 웹서비스(콘텐츠 요약, 9개 언어 번역)를 8월 실제 출시·운영 중. K컬처 관광 콘텐츠화는 아직 구상 단계.",
        source: "https://biz.heraldcorp.com/article/10828425",
      },
      {
        order: 4,
        percent: 10,
        note: "세운4구역 사업시행계획 변경 인가 절차를 법적 검토 이유로 중단시키는 등 초기 개입은 있었으나 종합 정책은 아직 협의 단계.",
        source: "https://www.mt.co.kr/policy/2026/07/01/2026063017092543519",
      },
      {
        order: 5,
        percent: 10,
        note: "'현장 구청장실' 운영, 점심시간 주정차 단속 유예 등 소규모 시범 조치만 확인, 종합 교통·주차 대책은 아직 없음.",
        source: "https://www.newspim.com/news/view/20260730000623",
      },
    ],
  },
  {
    name: "조유진",
    office: "영등포구",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "취임 1호 결재로 '영등포 헌법도시 선언'을 승인. 12월 3일 첫 구민 민회 개최를 위해 참여자 200명 공개모집 중이며 11월 사전 토론회 등 구체적 로드맵이 마련됨.",
        source: "https://www.khan.co.kr/article/202609021126001/",
      },
      {
        order: 2,
        percent: 30,
        note: "8월 '재개발·재건축 신속추진지원단'을 정식 출범, 관내 107개 정비사업장을 지원하는 체계를 갖췄으나 실제 기간 단축 실적은 아직 이름.",
        source: "https://biz.heraldcorp.com/article/10818518",
      },
      {
        order: 3,
        percent: 10,
        note: "서울신용보증재단과 협력한 소상공인 창업아카데미는 운영됐으나, 1인당 200만원 지원·상생펀드 조성의 구체적 시행은 확인되지 않음.",
        source: "https://biz.heraldcorp.com/article/10830998",
      },
      {
        order: 4,
        percent: 0,
        note: "유엔 AI 허브 유치는 정부 차원의 결정에 의존하는 사안으로, 구 차원의 구체적 유치 활동이나 문화벨트 조성 착수는 확인되지 않음.",
        source: "",
      },
      {
        order: 5,
        percent: 10,
        note: "취임 후 첫 공식 행보로 신생아실을 방문해 저출생 대응을 선언, 구체적 정책 구상을 발표했으나 예산 반영이나 시행 착수는 아직 확인되지 않음.",
        source: "https://biz.heraldcorp.com/article/10795284",
      },
    ],
  },
  {
    name: "김경대",
    office: "용산구",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "취임 1호 결재로 구청장 직속 '용산개발신속추진담당관'을 실제 설치, 대형 개발사업을 전담하는 조직이 발족함.",
        source: "https://biz.heraldcorp.com/article/10793699",
      },
      {
        order: 2,
        percent: 10,
        note: "정부의 1만 세대 확대안에 맞서 기존 6000세대 원안 유지를 주장 중이나, 국토부·서울시와의 협상은 8월 말 기준 결론이 나지 않음.",
        source: "https://www.newspim.com/news/view/20260710000875",
      },
      {
        order: 3,
        percent: 30,
        note: "정부의 용산공원 부지 주택공급 후보지 검토에 8월 공식 반대 입장을 발표하고 구청장이 직접 현장을 점검하는 등 구체적 대응 활동이 이뤄짐.",
        source: "https://biz.heraldcorp.com/article/10842390",
      },
      {
        order: 4,
        percent: 0,
        note: "취임사에서 학군 재배치·학교 신설 방향을 제시했으나, 취임 3개월 시점 구체적 계획이나 교육청 협의 진척 보도는 찾지 못함.",
        source: "",
      },
      {
        order: 5,
        percent: 10,
        note: "민선 9기 슬로건 '미래를 여는 매력도시 용산'과 연계된 문화관광 클러스터 구상을 제시했으나 구체적 실행계획이나 예산 반영은 아직 확인되지 않음.",
        source: "https://www.sijung.co.kr/news/articleView.html?idxno=436052",
      },
    ],
  },
];

async function main() {
  for (const m of mayors) {
    const politician = await prisma.politician.findFirst({
      where: { level: "mayor", region: "서울특별시", name: m.name, office: m.office },
    });
    if (!politician) {
      console.warn(`mayor not found: ${m.name} (${m.office})`);
      continue;
    }
    for (const j of m.pledges) {
      const pledge = await prisma.pledge.findFirst({
        where: { politicianId: politician.id, source: "nec", order: j.order },
      });
      if (!pledge) {
        console.warn(`  no pledge order ${j.order} for ${m.name}`);
        continue;
      }
      await prisma.pledge.update({
        where: { id: pledge.id },
        data: {
          status: "in_progress",
          progressPercent: j.percent,
          statusNote: j.note,
          statusSource: j.source || null,
          statusCheckedAt: new Date(),
        },
      });
    }
    console.log(`${m.name} (${m.office}) updated`);
  }
}

main().finally(() => prisma.$disconnect());
