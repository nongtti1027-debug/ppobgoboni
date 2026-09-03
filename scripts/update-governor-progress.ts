import { prisma } from "@/lib/db";

type Judgment = {
  order: number;
  percent: number;
  note: string;
  source: string;
};

type GovernorJudgment = {
  name: string;
  region: string;
  pledges: Judgment[];
};

const governors: GovernorJudgment[] = [
  {
    name: "우상호",
    region: "강원특별자치도",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "2030년까지 공공임대주택 1만 호 공급 계획이 도정 4대 중점과제로 확정됐으나, 청년마을 조성 등 실행계획은 아직 구체화되지 않음.",
        source: "https://www.sisajournal.com/news/articleView.html?idxno=382387",
      },
      {
        order: 2,
        percent: 30,
        note: "취임 1호 공약. 속초 군사보호구역 해제 등 실제 행정 조치가 이뤄졌으나 태양광·풍력 시설 착공 소식은 아직 없음.",
        source: "https://www.kwnews.co.kr/page/view/2026040115085191853",
      },
      {
        order: 3,
        percent: 30,
        note: "강원 수산식품클러스터 설계비 59.5억원이 확보돼 사업이 구체화 단계에 진입.",
        source: "https://www.kado.net/news/curationView.html?idxno=2062572",
      },
      {
        order: 4,
        percent: 10,
        note: "인수위 농산어업상생분과에서 논의·현장 의견수렴이 진행 중이나 조직·예산 확정 보도는 없음.",
        source: "https://www.asiae.co.kr/article/2026062620134819631",
      },
      {
        order: 5,
        percent: 30,
        note: "고성 거진읍 일원 5,000억원 규모 '해솔리아 관광단지' 투자협약이 8월 25일 체결됨.",
        source: "https://www.khan.co.kr/article/202608251455001/",
      },
    ],
  },
  {
    name: "추미애",
    region: "경기도",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "GTX 안정적 추진 지원 등 방향은 제시됐으나 도 자체 신규 실행 성과는 확인되지 않음. 8월 재정 비상 선언으로 신규 재원 투입에 제약 예상.",
        source: "https://www.kyeonggi.com/article/20260511580106",
      },
      {
        order: 2,
        percent: 10,
        note: "공공주택 55만호 공급, 1기 신도시 선도지구 지원 등이 정책 방향으로 발표됐으나 구체 사업 착수·예산 반영 보도는 없음.",
        source: "https://v.daum.net/v/20260608193658780",
      },
      {
        order: 3,
        percent: 10,
        note: "K-반도체 클러스터 구상이 제시됐으나 조직 설치·예산 반영 미확인. 재정 비상 선언으로 신규 투자 여력에도 의문 제기.",
        source: "https://biz.heraldcorp.com/article/10741041",
      },
      {
        order: 4,
        percent: 0,
        note: "구 도정이 복지예산을 9개월치만 편성해 노인요양·소아응급 예산이 10월 소진 위기에 처하는 재정위기가 최우선 현안으로 부상, 신규 공약 착수 여력이 제한적.",
        source: "https://www.koreadaily.com/article/20260804202509809",
      },
      {
        order: 5,
        percent: 10,
        note: "AI 안심귀가 등 공약이 제시됐으나 실행 보도는 없음. 대신 재정위기 대응 TF가 구성돼 활동 중(안전 공약과는 별개 조직).",
        source: "https://www.kyeonggi.com/article/20260330580068",
      },
    ],
  },
  {
    name: "박완수",
    region: "경상남도",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "'행복 UP 5대 복지공약' 1호로 발표됐으나 취임 후 카드 발급·조례 제정 등 이행 보도는 확인되지 않음.",
        source: "https://www.gnnews.co.kr/news/articleView.html?idxno=635968",
      },
      {
        order: 2,
        percent: 10,
        note: "창원~김해~양산~부산·울산 광역급행버스 도입 계획이 상세히 발표(2027년 하반기 목표)됐으나 취임 후 사업비 반영이나 착수 보도는 없음.",
        source: "https://www.newsis.com/view/NISX20260506_0003618454",
      },
      {
        order: 3,
        percent: 10,
        note: "'피지컬AI 대전환' 비전 선포, 2030년까지 4조9,399억원 투입 계획을 발표했으나 예산 집행이나 전담 조직 설치는 미확인.",
        source: "https://biz.heraldcorp.com/article/10781943",
      },
      {
        order: 4,
        percent: 0,
        note: "소득 2,600만원 이하 청년 대상 금융상품 개발 공약만 확인되며, 취임 후 제도 설계·예산 반영 후속 보도를 찾지 못함.",
        source: "https://news.nate.com/view/20260505n10066",
      },
      {
        order: 5,
        percent: 0,
        note: "여성 HPV 지원 공약이었으나, 확인된 최신 보도는 남성 대상 신규 국가지원사업 소식이며 여성 지원은 기존 사업 연속으로 보여 신규 확대로 보기 어려움.",
        source: "https://biz.heraldcorp.com/article/10727583",
      },
    ],
  },
  {
    name: "이철우",
    region: "경상북도",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "행정통합을 최우선 과제로 추진 중이나 이재명 대통령이 '차기 지방선거까지 어렵다'는 취지로 발언, 정부와 갈등. 정기국회 내 통합법안 통과를 압박 중이나 입법 진전은 없음.",
        source: "https://segye.com/newsView/20260818518141",
      },
      {
        order: 2,
        percent: 10,
        note: "'투포트 전략' 비전을 발표했으나, 통합신공항 자체는 기존 국책사업(계속 공사 중)이고 영일만항 연계 '경제권' 조성은 아직 구상 단계.",
        source: "https://www.idaegu.com/news/articleView.html?idxno=661308",
      },
      {
        order: 3,
        percent: 10,
        note: "경북투자청 설립 등 10대 공약이 발표됐으나, 취임 후 투자청의 실제 설립(조례 제정 등) 보도는 확인되지 않음.",
        source: "https://www.pressian.com/pages/articles/2026061420105852448",
      },
      {
        order: 4,
        percent: 10,
        note: "경북형 전략산업 앵커대학 사업 600억원 계획이 보도됐으나 신규 편성 여부 불명확. 인재혁신도시 관련 부지·조직 설치 보도는 없음.",
        source: "https://www.hankyung.com/article/2026073047781",
      },
      {
        order: 5,
        percent: 10,
        note: "'경북 첫걸음연금' 제도가 상세히 설계·발표됐으나 취임 후 조례 제정이나 예산 반영 등 실행 착수 보도는 찾지 못함.",
        source: "https://biz.heraldcorp.com/article/10713983",
      },
    ],
  },
  {
    name: "민형배",
    region: "광주광역시",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "'800조 반도체'를 최우선 의제로 제시, 8월 21일 입법예고된 조직개편안에 시장 직속 '반도체실' 신설이 포함됨. 실제 착공·예산 집행은 아직.",
        source: "https://www.newsworks.co.kr/news/articleView.html?idxno=844107",
      },
      {
        order: 2,
        percent: 30,
        note: "4권역 분업전략을 발표, 8월 조직개편안에 '3개 청사 균형운영·4부시장제'가 반영돼 입법예고 단계까지 진행. 구체 사업비 집행은 미확인.",
        source: "https://www.khan.co.kr/article/202606232123025/",
      },
      {
        order: 3,
        percent: 10,
        note: "시민 주도 행정을 표방하며 소통 행보를 이어가고 있으나, 자치권 이양을 위한 조례 제·개정이나 예산 반영은 확인되지 않음.",
        source: "https://www.nocutnews.co.kr/news/6476446",
      },
      {
        order: 4,
        percent: 10,
        note: "기후부에 '발전공기업 통합 본사' 유치를 건의했으나, 핵심 공약인 '전남광주에너지공사' 설립은 지연되고 있다는 지적이 나옴.",
        source: "https://www.etnews.com/20260808000028",
      },
      {
        order: 5,
        percent: 30,
        note: "8월 22일 시의회에 '기본사회 상설특별위원회'가 공식 구성됨(13명). 다만 특위는 시 집행부 내 전담부서 신설이 필요하다고 요구한 상태.",
        source: "https://www.asiae.co.kr/article/2026080910210977772",
      },
    ],
  },
  {
    name: "추경호",
    region: "대구광역시",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "정부의 반도체 팹 입지 선정 기준 공개를 요구하며 유치를 압박 중. 9월 추경에 AI·미래산업 예산 430억원이 반영됐으나 국가산단 지정·착공 등 실질 진전은 없음.",
        source: "https://www.edaily.co.kr/News/Read?newsId=05769526645575856",
      },
      {
        order: 2,
        percent: 55,
        note: "1조원 청년창업펀드 공약을 실행에 옮겨 '창업도시 프로젝트' 참여기업 74개사를 최종 선정, 성장단계별 최대 4억원 지원이 실제 진행 중.",
        source: "https://www.gukjenews.com/news/articleView.html?idxno=3673637",
      },
      {
        order: 3,
        percent: 10,
        note: "'TK신공항 국가주도 사업 전환·특별법 개정'을 촉구 중이나 특별법 개정안은 국회 계류 중으로 처리 시점 불확실.",
        source: "https://www.idaegu.com/news/articleView.html?idxno=662961",
      },
      {
        order: 4,
        percent: 10,
        note: "도시철도 연장·모노레일 변경 공론화 등을 발표, 추경에 인프라 예산 1195억원이 반영됐으나 이는 포괄 예산으로 특정 노선 착공은 미확인.",
        source: "https://www.hidomin.com/news/articleView.html?idxno=704662",
      },
      {
        order: 5,
        percent: 30,
        note: "일부 통합 공공기관을 재분리하는 조직개편안을 7월 23일 발표·시행, 간부 인사도 마무리됨.",
        source: "https://www.khan.co.kr/article/202607231546001/",
      },
    ],
  },
  {
    name: "허태정",
    region: "대전광역시",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "대전형 고유가 지원금 공약과 관련해 1차 추경에 고유가 피해지원금 1769억원이 반영됐고, 2차 추경(4715억원)도 실제 배분됨.",
        source: "https://www.nocutnews.co.kr/news/6542345",
      },
      {
        order: 2,
        percent: 10,
        note: "청년특보 공개모집 계획을 밝혔고, 5000호 청년주택 등 핵심 사업은 8월 기본방향 설정 단계에 머물러 있음.",
        source: "https://www.goodmorningcc.com/news/articleView.html?idxno=447718",
      },
      {
        order: 3,
        percent: 10,
        note: "시민단체가 지역에너지·탄소중립 계획의 전면 재수정을 촉구했으나, 시가 이를 반영했다는 후속 보도는 없음. 장기비전 과제로만 언급된 상태.",
        source: "https://v.daum.net/v/20260615111501574",
      },
      {
        order: 4,
        percent: 10,
        note: "취임 100일 프로젝트 3대 장기비전 중 하나로 포함돼 9월까지 로드맵 확정 예정. 구체 유치·착공 소식은 없음.",
        source: "https://www.ajunews.com/view/20260609140112006",
      },
      {
        order: 5,
        percent: 0,
        note: "후보 시절 통합돌봄 원스톱 창구 등이 제시됐으나, 취임 후 실행조직 신설이나 예산 반영을 확인할 수 있는 보도는 찾지 못함.",
        source: "",
      },
    ],
  },
  {
    name: "전재수",
    region: "부산광역시",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "취임 첫날 '민생 100일 비상조치'(1조3783억원)를 가동, 8월 14일 3차 추경(6374억원) 중 '해양수도 부산'에 1379억원이 실제 배정됨.",
        source: "https://www.mhns.co.kr/news/articleView.html?idxno=747785",
      },
      {
        order: 2,
        percent: 30,
        note: "정부가 3월 UN 산하 기구와 LOI를 체결한 가운데 UN AI 허브 유치를 공식 추진하며 국비 확보전 진행 중. 최종 유치 결정은 아직.",
        source: "https://www.munhwa.com/article/11593880",
      },
      {
        order: 3,
        percent: 10,
        note: "'관계돌봄' 중심 부산형 통합돌봄 방향이 제시됐으나 예산 반영이나 전담조직 신설 등 구체 착수 근거는 확인되지 않음.",
        source: "https://www.busan.com/view/busan/view.php?code=2026070518241721684",
      },
      {
        order: 4,
        percent: 10,
        note: "서부산 산업AX허브 등 구상을 발표했으나, 신규 기업 이전 확정이나 예산 집행을 보여주는 후속 보도는 찾지 못함.",
        source: "https://www.newsis.com/view/NISX20260510_0003623396",
      },
      {
        order: 5,
        percent: 30,
        note: "부울경 3개 시도 부단체장급 합동추진단 구성에 합의(7월), 특별지방자치단체 설치 법적 절차가 실제 진행 중.",
        source: "https://www.gnnews.co.kr/news/articleView.html?idxno=640331",
      },
    ],
  },
  {
    name: "오세훈",
    region: "서울특별시",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "조기 착공 가능한 85개 구역 8만5000가구를 '핵심공급전략사업'으로 선정, 기존 신속통합기획 제도 위에서 관리 체계가 실질 가동 중.",
        source: "https://www.mt.co.kr/policy/2026/06/04/2026060311385413893",
      },
      {
        order: 2,
        percent: 10,
        note: "공공임대 12만3000호 등 세부 계획은 발표됐으나 취임 후 조직개편·예산편성·실행계획 등 구체적 후속 조치는 확인되지 않음.",
        source: "https://biz.heraldcorp.com/article/10732112",
      },
      {
        order: 3,
        percent: 10,
        note: "20조8000억원 규모 7개 노선 공약이 발표됐으나, 취임 후 서울시 자체 노선·예산 반영 관련 후속 보도는 확인되지 않음(GTX-A는 중앙정부 사업).",
        source: "https://www.etoday.co.kr/news/view/2583016",
      },
      {
        order: 4,
        percent: 55,
        note: "기존 '약자와의 동행' 정책의 연장으로, 8월 24일 '2025 약자동행지수' 150.7(전년 대비 6대 영역 모두 개선)가 발표되는 등 실측 지표로 운영 중.",
        source: "https://biz.heraldcorp.com/article/10850131",
      },
      {
        order: 5,
        percent: 10,
        note: "4조원 규모 '넥스트이코노미서울펀드' 조성 등이 공약으로 제시됐으나, 펀드 실제 조성이나 조직적 착수 증거는 확인되지 않음.",
        source: "https://www.newspim.com/news/view/20260518000996",
      },
    ],
  },
  {
    name: "조상호",
    region: "세종특별자치시",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "8월 26일 대통령 면담으로 행정수도특별법 제정을 요청, 민주당에 특위 설치를 건의(김민석 대표 검토 지시). 국회전부이전법은 운영위 상정 단계로 통과 전.",
        source: "https://www.mt.co.kr/politics/2026/09/02/2026090211000280613",
      },
      {
        order: 2,
        percent: 10,
        note: "3대 산업클러스터·5대 전략산업 육성이 정부의 '5극3특' 계획과 연계됐으나, 청년청 설립·한예종 유치 등은 아직 구상·논의 단계.",
        source: "https://www.hankyung.com/article/2026080323141",
      },
      {
        order: 3,
        percent: 0,
        note: "'조치원-오송 자족도시화' 구상은 언급됐으나, 공약인 복합환승센터·제2청사에 대한 구체적 계획 발표나 예산 반영은 확인되지 않음.",
        source: "https://www.newsis.com/view/NISX20260724_0003721626",
      },
      {
        order: 4,
        percent: 30,
        note: "재정혁신 TF 설치, 대중교통 개편 보고회 등 제도적 착수가 확인되나 소상공인 상생펀드 등은 아직 예산 집행 전 단계.",
        source: "https://www.goodmorningcc.com/news/articleView.html?idxno=447665",
      },
      {
        order: 5,
        percent: 0,
        note: "취임사에서 시민청 설치 구상을 밝혔으나, 구체적 설립 시기·조직·예산에 대한 후속 보도는 확인되지 않음.",
        source: "",
      },
    ],
  },
  {
    name: "김상욱",
    region: "울산광역시",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "울산트램 1호선 전면 재검토를 공식화, 2026년 7~10월 시민공론화 절차 진행 중. 버스 공영제·교통공사 설립은 아직 논의 단계.",
        source: "https://www.ulsanpress.net/news/articleView.html?idxno=577897",
      },
      {
        order: 2,
        percent: 30,
        note: "산업 AX 전환을 위한 민·관 협의체가 7월 가동, 노동정책위원회 구성. 2027년도 정부예산안에 관련 신규사업 3조원이 반영됐으나 실제 전직지원 프로그램은 2027년 초 시작 예정.",
        source: "https://www.hankyung.com/article/2026070960841",
      },
      {
        order: 3,
        percent: 10,
        note: "중앙지방협력회의에서 정부에 지원을 요청한 수준으로, 기존 울산항 정책의 연장선 성격이 크고 별도 조직 신설이나 예산 확정은 확인되지 않음.",
        source: "https://www.newstomato.com/ReadNews.aspx?no=1311559",
      },
      {
        order: 4,
        percent: 10,
        note: "어린이 특화 울산의료원 설립 추진위 구성을 지시했으나, 통합돌봄 체계는 아직 방향 설정을 촉구받는 단계.",
        source: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1061541",
      },
      {
        order: 5,
        percent: 10,
        note: "표류 사업 목록화와 방향성 발언은 있으나 개별 사업의 구체적 해법은 미확정. 공항 고도제한 완화는 국가 차원 제도 개정 일정에 종속됨.",
        source: "https://www.hankyung.com/article/2026061576741",
      },
    ],
  },
  {
    name: "박찬대",
    region: "인천광역시",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "'미래산업국'을 '미래산업본부'로 격상하는 조직개편이 6월 확정됐으나, 산업단지 지정·예산 반영 등 실질 집행 단계 보도는 아직 없음.",
        source: "https://www.kyeonggi.com/article/20260621580285",
      },
      {
        order: 2,
        percent: 30,
        note: "'원도심활력국(가칭)' 신설이 확인됐고, 전임 '제물포 르네상스' 사업을 K-컬처 중심으로 전면 재검토한다고 밝힘. 설계·예산·착공은 미확인.",
        source: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=3025670",
      },
      {
        order: 3,
        percent: 10,
        note: "경인선 지하화 등 기존 용역과 연계 추진 방침이며, 2027년 국비 확보 건의에 일부 사업이 포함됐으나 신규 착수보다는 연계·건의 단계.",
        source: "https://www.ajunews.com/view/20260724153858778",
      },
      {
        order: 4,
        percent: 10,
        note: "정부 목표보다 5년 이른 '2045 탄소중립' 로드맵 구축을 본격화한다고 밝혔으나, 공공의료·돌봄·AI안전도시 등은 후속 보도가 확인되지 않음.",
        source: "https://www.ajunews.com/view/20260709164907364",
      },
      {
        order: 5,
        percent: 10,
        note: "'민선9기 일자리창출 선언식' 등 상징적 행사는 있었으나, 신규 공약에 따른 구체적 제도 신설이나 예산 집행 증거는 확인되지 않음.",
        source: "https://www.sijung.co.kr/news/articleView.html?idxno=435867",
      },
    ],
  },
  {
    name: "이원택",
    region: "전북특별자치도",
    pledges: [
      {
        order: 1,
        percent: 10,
        note: "인수위가 재생에너지·피지컬AI 등 5개 분과로 출범, 비전을 제시했으나 전북특별법 개정이나 RE100 산단 지정 등 제도화 절차 착수는 확인되지 않음.",
        source: "https://www.khan.co.kr/article/202607011644001/",
      },
      {
        order: 2,
        percent: 30,
        note: "8월 28일 국토교통부에 '전주 도심융합특구' 지정 신청서를 공식 제출(정부 절차 개시). 4대 실증지구·규제자유특구 지정은 아직 미확정.",
        source: "https://www.ajunews.com/view/20260831144557914",
      },
      {
        order: 3,
        percent: 10,
        note: "새만금 SOC를 임기 내 완공하겠다는 공약을 반복 강조했으나, 취임 후 신규 편성 예산이나 별도 실행계획 발표는 확인되지 않음.",
        source: "https://www.newspim.com/news/view/20260520000071",
      },
      {
        order: 4,
        percent: 30,
        note: "'도민주권참여위원회' 위원 공개모집, 도청사 전면 개방·도정회의 생중계 등 실제 행정조치가 시행됨. '도민주권국' 정식 신설은 미확정.",
        source: "https://www.etoday.co.kr/news/view/2591651",
      },
      {
        order: 5,
        percent: 10,
        note: "전북페이, 이차보전 등 정책 구상이 제시됐으나 취임 후 예산 반영이나 실행계획 발표는 확인되지 않음.",
        source: "https://www.etoday.co.kr/news/view/2590306",
      },
    ],
  },
  {
    name: "위성곤",
    region: "제주특별자치도",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "취임 즉시 추경 편성에 착수, 7월 30일 제주도의회가 8조4747억원 규모 추경안을 가결해 실제 예산 집행 단계에 진입.",
        source: "https://www.asiatoday.co.kr/kn/view.php?key=20260730010011493",
      },
      {
        order: 2,
        percent: 30,
        note: "행안부에 '제주 기본사회 시범도시' 지정을 공식 건의, 지사를 위원장으로 하는 위원회가 출범해 종합계획 수립 착수. 지정 확정은 아직.",
        source: "https://www.khan.co.kr/article/202607291408011/",
      },
      {
        order: 3,
        percent: 30,
        note: "취임 후 첫 확대간부회의에서 '민생경제 상황실' 설치를 1호 행정명령(7/10)으로 발동, 물가·소상공인 지표를 상시 점검 중.",
        source: "https://www.seoul.co.kr/news/society/2026/07/10/20260710500158",
      },
      {
        order: 4,
        percent: 10,
        note: "국회의원 시절 발표한 공약으로 권역별 센터 구상이 제시됐으나 취임 후 실제 설치나 예산 반영 보도는 찾지 못함.",
        source: "https://www.jejudomin.co.kr/news/articleView.html?idxno=317596",
      },
      {
        order: 5,
        percent: 0,
        note: "디지털 주민투표 시스템 등이 공약으로 제시됐으나 취임 후 관련 보도나 자료를 찾지 못함.",
        source: "",
      },
    ],
  },
  {
    name: "박수현",
    region: "충청남도",
    pledges: [
      {
        order: 1,
        percent: 55,
        note: "취임 즉시 'AI기본사회복지실'·'청년성장국' 신설, 천안·아산 AI특화 시범도시 선정(총 6,109억원), 삼성·SK하이닉스 등과 202조원 투자협약 체결.",
        source: "https://www.khan.co.kr/article/202607091020001/",
      },
      {
        order: 2,
        percent: 10,
        note: "충청광역연합장으로 선출돼 2028년 통합 목표를 재확인했으나, 행정통합특별법 발의나 구체 로드맵 확정 보도는 아직 없음.",
        source: "https://www.mediatoday.co.kr/news/articleView.html?idxno=334465",
      },
      {
        order: 3,
        percent: 10,
        note: "시군 단위 특화 콘텐츠가 소개되고 내년도 본예산 반영 준비가 강화 중이나, 도 차원 실행계획은 아직 미확정.",
        source: "https://www.ajunews.com/view/20260831153557063",
      },
      {
        order: 4,
        percent: 10,
        note: "석탄화력발전소 지원 특별법(국가 입법)이 통과됐고 발전공기업 통합본사 유치에 총력을 기울이고 있으나, 도 자체 기후테크 육성계획은 확인되지 않음.",
        source: "https://www.dtoday.co.kr/news/articleView.html?idxno=787325",
      },
      {
        order: 5,
        percent: 10,
        note: "GTX-C 연장, 서산공항 민항 건설 등이 지속 거론되나, 취임 후 새로운 착공·승인·예산반영은 확인되지 않음.",
        source: "https://www.ajunews.com/view/20260901141827082",
      },
    ],
  },
  {
    name: "신용한",
    region: "충청북도",
    pledges: [
      {
        order: 1,
        percent: 30,
        note: "8월 6일 '창업특별도 충북 조성 종합계획'을 공식 발표(총사업비 7,072억원, 2030년까지 유니콘기업 6개 목표). 실제 집행·국비 확정은 이후 단계.",
        source: "https://www.newspim.com/news/view/20260806001123",
      },
      {
        order: 2,
        percent: 10,
        note: "8월 31일 지역 국회의원들과 함께 '수도권 2차 공공기관 이전 충북 우선배치' 공동 건의문을 정부에 전달. 실제 배정 결정은 아직.",
        source: "https://www.ajunews.com/view/20260831133214662",
      },
      {
        order: 3,
        percent: 10,
        note: "6월 24일 청주공항을 방문해 민간활주로 확보 의지를 밝혔으나, 국토부의 국가계획 반영이나 예타 착수 등 공식 절차 개시는 확인되지 않음.",
        source: "https://www.newspim.com/news/view/20260624000109",
      },
      {
        order: 4,
        percent: 10,
        note: "국토부가 KDI에 민자적격성 조사를 의뢰한 상태(취임 이전부터 진행)이며, 취임 후 별도의 조기착공 확정이나 예산 반영 소식은 찾지 못함.",
        source: "https://www.hankookilbo.com/News/Read/A2025102316240002566",
      },
      {
        order: 5,
        percent: 30,
        note: "충북도의회가 청년위원회 설치 조례 제정을 위해 9월 2일 공청회를 열었고 9월 8일 정례회 심사 예정 — 조례안이 의회 심사 단계에 진입.",
        source: "https://www.viva100.com/article/20260902501448",
      },
    ],
  },
];

async function main() {
  for (const g of governors) {
    const politician = await prisma.politician.findFirst({
      where: { level: "governor", name: g.name, region: g.region },
    });
    if (!politician) {
      console.warn(`governor not found: ${g.name} (${g.region})`);
      continue;
    }
    for (const j of g.pledges) {
      const pledge = await prisma.pledge.findFirst({
        where: { politicianId: politician.id, source: "nec", order: j.order },
      });
      if (!pledge) {
        console.warn(`  no pledge order ${j.order} for ${g.name}`);
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
    console.log(`${g.name} (${g.region}) updated`);
  }
}

main().finally(() => prisma.$disconnect());
