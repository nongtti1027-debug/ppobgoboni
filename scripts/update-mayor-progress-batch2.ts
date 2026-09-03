import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
 {
  "name": "이수희",
  "office": "강동구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 첫날 IB MYP 후보학교인 동신중학교를 방문해 특구 지정 의지를 재확인했으나, 구청 내 전담 추진팀 구성이나 교육청과의 공식 협의 착수는 확인되지 않음.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=432335"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "취임 직후 '구청장 직속 도시개발 TF' 성격의 '더 빠른 재건축·재개발 협의체'를 실제 구성해 7월 첫 회의를 열고 명일동 12개 단지 조합장 등이 참석, 회의를 정례화할 계획을 발표함.",
    "source": "https://www.etoday.co.kr/news/view/2601499"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-D 강동 경유는 2024년 이미 확정되어 제5차 국가철도망 구축계획에 반영된 사안으로, 재선 이후 국토부·서울시에 조속 추진을 촉구하는 수준 외에 구청장의 독자적 신규 조치는 확인되지 않음.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260628010009694"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "그린웨이의 소규모 하위사업인 '워밍업 스테이션'이 2026년 8월 서울시 디자인·경관 공모사업에 선정되는 성과가 있었으나, 핵심 구간인 생태관찰로 조성 실시설계 예산은 2026년 전액 삭감됨.",
    "source": "https://www.newspim.com/news/view/20260811000395"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "경계선지능인 종합지원센터 설립과 권리증진 조례 신설이 여전히 추진·제안 단계로 언급되고 있을 뿐, 센터 설립이나 조례 제정 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=436201"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "정창수",
  "office": "강북구",
  "pledges": [
   {
    "order": 1,
    "percent": 0,
    "note": "신강북선의 동부선 업그레이드는 2026년 하반기 서울시 제3차 도시철도망 구축계획 반영을 목표로 하는 초기 단계로, 취임 3개월 시점 구체적 착수나 서울시와의 공식 협의 진전은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 0,
    "note": "'강북형 정비사업 신속 추진 지원단'은 2026년 하반기 기본계획 수립을 목표로 한 공약 단계에 머물러 있으며, 영등포·강남·동대문 등 타 자치구와 달리 강북구의 지원단 출범 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "오현적환장 공원화·북서울 체육문화센터 복합개발은 2025년 서울시 '신성장거점 신속추진사업' 선정 이후 시 주도 용역 단계로, 신임 구청장 취임 이후 별도의 새로운 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "북서울 꿈의숲은 서울시 관할 공원으로 구는 서울시와 협의를 추진하겠다는 방침이나, 취임 이후 구체적 협의 진전이나 예산 확보 관련 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "시립 강북어린이병원 건립은 2018년부터 이어진 서울시 주도 사업으로 여러 차례 무산된 바 있으며, 정창수 구청장은 서울시와의 행정 조율 문제 해결 의지를 밝혔으나 구체적 진전은 확인되지 않음.",
    "source": "https://www.khan.co.kr/article/202606040016005"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "진교훈",
  "office": "강서구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "마곡과 원도심이 상생하는 '균형성장도시' 완성을 3대 미래비전 중 하나로 제시했으나, 취임 후 원도심 정비나 편의시설 확충과 관련한 구체적 사업 착수 보도는 찾지 못함.",
    "source": "https://www.munhwa.com/article/11587872"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "김포공항 모빌리티 첨단산업화, 마곡 R&D 거점 육성 등을 '혁신경제도시' 비전으로 제시했으나, 예산 편성이나 조직 신설 등 구체적 착수 단계의 조치는 확인되지 않음.",
    "source": "https://www.koreaunionnews.com/2272922"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "국토부에 5호선 차량기지 이전, 2호선 신정지선 연장 등 교통현안을 건의하고 디지털 안전상황실 설치 방침을 밝혔으나, 이는 요청·계획 발표 수준으로 실제 설치나 예산 반영은 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10676788"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "재선 후 첫 일정으로 복지 현장을 방문하는 행보를 보였으나, 노인일자리 확대·마곡 어르신복지관 건립 등은 민선 8기 성과이며 이번 임기의 신규 조치는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10763982"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "마곡을 '신산업·문화 융합 미래도시'로 만들겠다는 방향을 제시했을 뿐, 구체적인 교육·문화 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": "https://biz.heraldcorp.com/article/10782361"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "박준희",
  "office": "관악구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "관악S밸리는 이미 서울대와 창업보육공간 18곳을 운영 중이며 입주기업 630여개·활동인원 3000명, 매출 68배 증가 등 실질 성과가 있는 사업으로, 3선 임기에도 벤처기업 1000개·일자리 1만명 목표로 계속 추진 중.",
    "source": "https://www.fntimes.com/html/view.php?ud=202606040504488223b372994c95_18"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "은천동 숙원사업인 상도근린공원 공영주차장(총사업비 188억원, 128면 규모)이 착공되어 2026년 12월 준공을 목표로 실제 공사가 진행 중.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=408704"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "전국 최초로 21개 전동에 '관악형 작은 1인가구지원센터'를 조성해 생활밀착 복지망을 이미 운영 중이며, 2026년에도 체육활동 지원 등 관련 사업이 계속 확대되고 있음.",
    "source": "https://biz.heraldcorp.com/article/10840882"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "'관악형 통합돌봄' 추진 기반을 마련해 8월까지 돌봄 대상자 집중 발굴에 나섰고, 통합돌봄 지역거점인 '관악건강돌봄이음센터' 1호점이 실제 개소함.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=433081"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "관악산 하늘숲길(약 22.88km, 2028~2030년 목표)에 대해 구청장이 지속 추진 의지를 밝혔으나, 기본구상 용역 착수나 부지 확보 등 구체적 진전은 확인되지 않음.",
    "source": "https://view.asiae.co.kr/article/2026082610173902717"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "김경호",
  "office": "광진구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "민선 9기 조직개편으로 '주택국'을 신설했고, 재개발·재건축·모아타운 등 40여개소 주택정비사업이 동시에 실질적으로 추진되고 있음.",
    "source": "https://biz.heraldcorp.com/article/10817822"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "동서울터미널 현대화는 2026년 말 착공을 목표로 교통영향평가·건축심의 등 행정절차가 진행 중이나 이는 민간 시행사·서울시 주도 사업이며, 주민 반대로 지연 우려도 제기되는 등 신임 구청장의 별도 조치는 확인되지 않음.",
    "source": "https://news.skbroadband.com/news/articleView.html?idxno=208172"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "2026년 교육경비로 147억원(교육경비보조금 85억원, 친환경급식 56억원 등)을 유치원 및 초중고 68곳에 실제 편성·투입해 공약 목표치(120억원)를 상회하는 예산 집행이 이뤄짐.",
    "source": "https://biz.heraldcorp.com/article/10691050"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "구청장이 경로당을 순회하며 어르신 현장소통에 나섰으나, 중곡동 노인복지센터 준공이나 치매안심센터 신축 등 구체적 사업 진전은 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10845359"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "청년 월세·이사비 지원, 소상공인 특별융자 등을 정책 방향으로 제시했으나, 취임 이후 구체적인 신규 사업 착수나 예산 확대 보도는 찾지 못함.",
    "source": "https://www.mt.co.kr/policy/2026/07/07/2026070711502938682"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "장인홍",
  "office": "구로구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "전임 구청장 사퇴 후 중단됐던 '재개발·재건축 사업 지원단'을 부활시켜 전문가 3명을 민간위원으로 위촉하고 실제 찾아가는 상담을 운영 중이며, 구로차량기지 이전은 제5차 국가철도망계획 반영을 위해 국토부·서울시와 협의 중임.",
    "source": "http://dosijeongbi.com/10134"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "구로사회서비스재단 설립은 하반기 추진계획 수립을 시작으로 내년 타당성조사를 거쳐 2029년 출범을 목표로 하는 초기 검토 단계에 머물러 있음.",
    "source": "https://go.seoul.co.kr/news/newsView.php?id=20260622021001"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "민선 9기 첫 결재로 '2026년 구로사랑상품권 확대 발행계획'에 서명했고, 7월 1일 80억원 규모 상품권을 최대 10% 할인 조건으로 실제 발행함.",
    "source": "https://www.dailybizon.com/news/articleView.html?idxno=68133"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "공공체육시설 이용 형평성을 높이는 '구민우선접수제'는 시행됐으나, 생태하천 복원이나 체육시설 신축 등 핵심 사업의 구체적 착수·예산 반영은 확인되지 않음.",
    "source": "https://www.sisadays.co.kr/news/480422"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "개봉3동 주민센터에 AI 상담(자동화) 서비스를 실제 도입해 운영 중이며 효과분석을 거쳐 확대할 계획임. 주민자치회 관련 별도 진전은 확인되지 않음.",
    "source": "https://www.seonamtoday.com/m/view.php?idx=35881"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "최기찬",
  "office": "금천구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "'수출의 다리' 정체 구간 정비 등 30분 통근도시 구상을 공약으로 제시했으나, 취임 후 예산 반영이나 노선 조정 등 구체적 착수 보도는 확인되지 않음.",
    "source": "https://www.gcinnews.com/news/articleView.html?idxno=14266"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "'금천형 달빛어린이병원' 지정 확대를 공약했으나, 취임 후 복지부 지정 신청이나 의료기관 협약 체결 등 구체적 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "'금천 학습진단성장센터' 구축은 공약 단계에 머물러 있고, 취임 후 착수 보도는 확인되지 않음(평생학습도시 우수 선정은 기존 사업 성과로 신규 착수와 무관).",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "우범지역 노후 CCTV 교체·LED 조명 확충은 공약 수준이며, 취임 후 예산 반영이나 설치 착수는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "공군부대 부지는 서울시 주도 '공간혁신구역 선도사업'으로 기존에 진행돼 온 광역사업이며, 신임 구청장의 별도 정비사업 TF 설치나 신규 조치는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10456820"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "서준오",
  "office": "노원구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "서울시 G3기획위원회에 S-DBC 사업 비전을 설명하고 국토부장관에게 건의했으나, 서울시·국토부 주도 사업으로 구청장의 독자적 착수 조치는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10837949"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "광운대역세권 개발은 기존에 진행되던 사업으로 '속도감 있게 추진하겠다'는 언급 외에 신임 구청장의 신규 조치는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10827328"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "민선 9기 취임 1호 결재로 구청장 직속 '재건축 쾌속추진단(TF)'을 실제 출범·가동시켰고, 신속통합기획 자문 접수 등 컨설팅 기간을 평균 1년에서 6개월로 단축하는 지원체계를 운영 중.",
    "source": "https://biz.heraldcorp.com/article/10807602"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "GTX-C 및 SRT 의정부 연장은 국토부·전임 구청장 주도로 추진돼 온 광역사업으로, 신임 구청장의 별도 착수나 신규 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "당현천 상류구간 복원 및 4호선 방음터널 설치와 관련해 취임 후 구체적 착수나 예산 반영 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "김동욱",
  "office": "도봉구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "'창동경제엔진추진단'을 실제 출범시켜 주민·전문가와 함께 서울아레나 개관에 대비한 상권·야간경제 활성화 방안을 논의 중.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=436283"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "하반기 현안업무 보고회에서 화학부대·성대야구장 부지 개발을 속도감 있게 추진하겠다고 밝혔고, 소방학교 이전부지 복합개발사업은 설계공모가 진행 중.",
    "source": "https://www.newspim.com/news/view/20260715001041"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-C·경원선 지하화·우이-방학경전철은 국토부·서울시 주도 사업으로, 신임 구청장은 서울시에 턴키 방식 추진 등을 요청하는 수준에 그침.",
    "source": "https://biz.heraldcorp.com/article/10855496"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "'도봉 스마트 돌봄 3.0' 추진의 일환으로 통장 14명을 대상으로 한 현장 발굴 교육(8~9월)과 건강보험공단 빅데이터를 활용한 통합돌봄이 실제 운영되고 있음.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=435580"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "취임 1호 결재로 '구민 제안 100대 과제 프로젝트'를 추진 중이며, 7월 15~24일 14개 동을 순회하는 주민소통간담회를 실제 완료함.",
    "source": "https://biz.heraldcorp.com/article/10795354"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "최동민",
  "office": "동대문구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "전농·청량리 고밀도 업무지구 조성은 내년까지 마스터플랜을 마련하겠다는 계획 단계이며, 구체적 착수는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10854622"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "10분 출퇴근 역세권 순환버스 신설은 인수위원회의 검토 과제 수준에 머물러 있으며, 구체적 착수는 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260616000064"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "주민참여예산 확대와 모바일 소통 플랫폼 도입은 인수위 검토 과제로 제시된 수준이며, 구체적 시행은 확인되지 않음.",
    "source": "https://www.seoul.co.kr/news/politics/local-election2026/2026/06/16/20260616500038"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "산후조리비 대폭 인상이나 취약계층 의료비 후불제 도입과 관련해 최동민 구청장의 구체적 조치나 예산 반영 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "동대문구청 종합민원실에 AI 시각보조기를 실제 도입해 2026년 7월 24일부터 상시 운영 중이며, 의료·복지 현장 AI 활용 확대를 위한 실무협의체도 운영함.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=433795"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "류삼영",
  "office": "동작구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 1호 결재로 '재개발·재건축 등 사업촉진 방안'을 승인, 구역별 사업촉진TFT(전문가·이해당사자·서울시매니저·구청담당자) 구성과 '정비사업 열린 상담실'을 실제로 설치·운영 중이다.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=432168"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "수협중앙회와 동작구가 '노량진 수협부지 복합개발사업 협력' 업무협약을 실제 체결해 랜드마크 개발 협의에 착수했다.",
    "source": "https://suhyup.co.kr/bbs/suhyup/64/16046/artclView.do"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "용양봉저정 부지 '동작타워'(63빌딩급) 건립 구상과 옛 노량진수산시장 부지 개발 방향이 언급되었으나, 공모·민간투자사업 착수 등 구체적 절차 진행은 확인되지 않는다.",
    "source": "https://www.news1.kr/local/moi/6208655"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "노후 경로당을 활용한 권역별 시니어 문화센터 조성 계획이 공약·업무보고에서 재확인되었을 뿐, 부지 선정이나 설계 착수 등 구체적 진전은 보도되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "역세권 용도지역 상향 및 상업기능지역 확대와 관련해 취임 후 구체적 추진 소식은 확인되지 않았다.",
    "source": ""
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "박운기",
  "office": "서대문구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "유진상가·인왕시장 재개발은 '주민 의견부터'라며 청취 단계이고, 서부선·강북횡단선 등은 정부·서울시에 건의하는 수준에 머물러 구청장의 독자적 착수는 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10841836"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "청년 간담회 '청년 로그인'에서 나온 제안을 바탕으로 청년기업 공공 실증지원 및 제품·용역 우선구매 활성화 방안을 실제로 마련해 관련 부서와 추진 중이다.",
    "source": "https://biz.heraldcorp.com/article/10822346"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "구청장이 '홍제천 지킴이'로 알려져 있으나, 취임 후 안산·홍제천·불광천 생태축 복원이나 햇빛발전소 사업의 구체적 착수 보도는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "의료·건강·주거 등 복합 어려움을 겪는 주민을 선제 발굴하는 '통합돌봄 우선발굴필요군' 집중발굴 및 예방 중심 통합돌봄 체계가 실제로 운영되고 있다.",
    "source": "https://biz.heraldcorp.com/article/10810515"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "취임 1호 결재로 '주민자치회 활성화 추진계획'을 승인했고, 14개 전 동 주민자치회 위원을 8월6일~9월7일 공개모집해 10월 추첨, 11월 출범을 목표로 실제 절차가 진행 중이다.",
    "source": "https://biz.heraldcorp.com/article/10828608"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "전성수",
  "office": "서초구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "경부간선도로·반포대로 지하화는 한국개발연구원(KDI) 민자적격성 조사가 실제 진행 중이며 올해 12월 결과가 나올 예정으로, 국가 주도 절차이지만 구체적 심사 단계에 들어섰다.",
    "source": "https://biz.heraldcorp.com/article/10855422"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "동 단위 적십자봉사회를 개청 이래 최대 규모로 결성하는 등 서초형 돌봄체계·복지 프로그램이 실제로 운영되고 있다.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=427273"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "'서초 100km 걷기(Walking Through Seocho)' 등 보행 네트워크 사업과 보행권 확보 행정이 이미 실행 단계로 운영되고 있다.",
    "source": "https://www.newsis.com/view/NISX20251212_0003439433"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "양재 AI미래융합혁신특구(지정 완료)에 서울 AI허브·국가 AI연구거점이 이미 개관해 기업 유치가 실제 진행 중이며, 도시첨단물류단지 등 개발사업도 추진되고 있다.",
    "source": "https://www.ajunews.com/view/20260516125630066"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "AICT벨트를 통한 약 3700개 일자리·1조5000억원 경제효과 추진과 별개로 어르신 일자리 2057개(107억원)를 실제 운영하는 등 일자리 사업이 진행 중이다.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=408109"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "유보화",
  "office": "성동구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "왕십리 신행정타운·삼표부지 79층 복합개발·서울숲 공연장 등은 인수위·자문위 검토 및 서울시에 제안하는 단계로, 구체적 착수(부지 확정, 예산 반영 등)는 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10817197"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 1호 결재로 '재개발·재건축 신속관리추진단'을 설치하고 기존 주거정비과를 '정비사업신속추진과'로 개편해 4개팀→6개팀으로 실제 확대했다.",
    "source": "https://biz.heraldcorp.com/article/10792168"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "동북선 금호역 연장, 신강남선 성수역 신설 등은 구청장의 의지 표명 수준이며, 구체적 사업 착수나 관계기관 승인 등은 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "'성동교육지원센터', 'AI 미래교육벨트' 등은 후보 시절 공약으로 제시되었을 뿐 취임 후 구체적 설립·착수 소식은 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "서울숲 2000석 공연장은 서울시에 제안하는 단계이며, 청계천 마장교 에어로빅장 개선 등도 계획 수준으로 구체적 착수는 확인되지 않았다.",
    "source": "https://biz.heraldcorp.com/article/10817197"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "이승로",
  "office": "성북구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "취임 1호 사업으로 저소득 어르신 생활불편을 신속 해결하는 '성북해드림센터'를 실제 개소·운영 중이며, 방문간호사·경찰 협업 통합돌봄 프로그램도 시행되어 신청 건수가 전월 대비 2.8배 증가했다.",
    "source": "https://biz.heraldcorp.com/article/10794694"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "삼선·정릉2·정릉3동 공용청사 신축 및 길음2·장위2동 청사 조기 준공·완공이 진행되는 등 권역별 생활인프라 확충 사업이 실제 시행 단계에 있다.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=433349"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "강북횡단선 '임기 내 착공'을 목표로 밝혔고 동북선 관련 5개 자치구 협의체 구성을 추진 중이나, 실제 착공이나 협의체 출범 등 구체적 결과는 아직 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10801277"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "910억원 규모 '성북사랑상품권'을 최대 10% 할인 혜택으로 실제 운영 중이며 추석을 앞두고 200억원 규모를 조기 발행하는 등 상권 지원 사업이 진행되고 있다.",
    "source": "https://biz.heraldcorp.com/article/10845554"
   },
   {
    "order": 5,
    "percent": 80,
    "note": "개운산근린공원 '숲속도서관(책쉼터)'이 지난해 10월 착공해 올해 8월 준공을 목표로 공사가 진행 중이며, 월곡 복합체육센터·구립 노인종합복지관도 2026년 완공을 앞두고 있다.",
    "source": "https://www.munhwa.com/article/11564312"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "서강석",
  "office": "송파구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "취임 1호 결재로 잠실주공5단지 사업시행계획인가를 승인했고, 이어 부구청장 단장의 '재건축·재개발 신속추진 TF'(14개 부서)를 실제 가동해 8월 5일 첫 회의를 열고 67개 정비사업 점검에 들어갔다. 인허가 기간 단축 등 실행 조치가 보도됨.",
    "source": "https://biz.heraldcorp.com/article/10828436"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "잠실 스포츠·MICE 복합단지는 서울시 주도로 민투심 통과 등 진행되고 있으나 이는 시 사업이며, 문정이노베이션센터·ICT보안클러스터·복정역세권·성동구치소 부지개발 등 구청장 고유의 신규 착수는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "송파대로 가락시장사거리 일대 6,700㎡ 규모 '걷고 싶은 가로정원' 조성이 실제 시공 중이며, 석촌호수 '더 스피어' 등 문화·휴식 공간도 함께 조성되고 있어 정원도시 사업이 실질적으로 진행 중임.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=433879"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "송파문화재단이 '2026 송파 문화예술 활성화 지원사업' 등 기존 문화 지원사업을 운영 중이나, 석촌호수 연계 계절별 컬쳐데이 등 공약에 특정된 신규 프로젝트 착수는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "청년행정인턴 모집, 문정비즈밸리 온라인 채용관 운영 등 기존 일자리 정보 제공은 있으나, 공약에 담긴 'ICT 청년지원센터'나 '송파청년센터' 신규 조성에 대한 구체적 착수 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "이기재",
  "office": "양천구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "목동선(서남선) T자 재설계, 강북횡단선, 2호선 신정지선 연장 등은 취임사에서 재차 강조됐으나, 이는 서울시·국토부가 주도하는 광역철도 사업으로 구청장의 독자적 신규 착수 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 10,
    "note": "'중단 없는 패스트트랙' 및 이주안정지원센터 설치는 선거 기간 공약으로 반복 제시됐으나, 취임 이후 재건축·재개발 전담부서 신설이나 센터 개소 등 구체적 조치가 보도된 바는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "목동운동장·유수지 일대 '목동MICE 단지' 개발은 서울시와 공동 기본계획·타당성조사 용역 단계이며, 이는 선거 이전부터 진행되던 용역으로 취임 후 신규 착수 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "재산세 시세분 감면 확대, 전기료 1개월 추가 지원, 냉방기 선조치 후 비용 청구, 심야운항시간 단축 등은 후보 시절 공약으로 제시됐으나 취임 후 실제 시행 여부를 뒷받침하는 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "장난감도서관 등 기존 보육 서비스는 계속 운영 중이나, 공약에 담긴 원어민 특별활동 지원 확대나 '온라인신청-집앞 배송' 등 신규 서비스 착수에 대한 근거는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "김미경",
  "office": "은평구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "민선9기 1호 과제로 고양은평선 '신사고개역 신설'을 발표했고 4월 보완용역으로 경제성을 확보했다고 밝혔으나, 이는 취임 전 진행된 용역이며 철도 사업 자체는 서울시·철도공단이 주도해 구청장의 별도 착수 조치는 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260714000676"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "골목상권·전통시장 활성화 지원 사례는 있으나 최근 시점의 신규 조치는 확인되지 않으며, 창업지원센터 2호점 등 공약과 직접 연결되는 구체적 착수 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "녹번·응암 중학교 신설 관련 주민 서명운동은 과거(2021년경) 진행된 사안으로 확인되며, 민선9기 취임 이후 부지 검토나 관계기관 협의 등 신규 진전에 대한 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "러너스테이션, 자전거문화거점, 무장애숲길 등 공약과 관련한 취임 이후의 구체적 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "복지예산 전체의 60% 이상을 계속 투입하며 '백세콜', '아이맘택시' 등 기존 돌봄 서비스를 이어가고 생애주기별 정책을 강화하겠다는 방침을 밝혔으나, 진관동 공공재활병원 등 신규 시설 착수에 대한 구체적 진전은 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260714000676"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "김길성",
  "office": "중구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "충무아트센터 복합 재개발을 위한 연구용역 예산을 편성했고, 이를 중구 균형발전기금과 연계해 장충체육관 재건축 등을 추진하겠다고 밝혀 예산 반영이라는 실질적 첫 단계가 확인됨.",
    "source": "https://biz.heraldcorp.com/article/10803523"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "부구청장을 단장으로 한 '내편청년정책추진TF'(3개 반, 13개 부서)를 실제 가동해 33개 청년정책을 총괄하고 있으며, '청년센터 중구'는 개관 4개월 만에 4,000명이 방문하는 등 서비스가 실질적으로 운영 중임.",
    "source": "https://www.mt.co.kr/policy/2026/08/10/2026081009101968503"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "IB 교육과정 도입과 장충동 대형 구립도서관 건립을 추진하겠다는 계획이 인터뷰를 통해 제시됐으나, 실제 착수(부지 확정, 설계 착수 등)를 뒷받침하는 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "65세 이상 전 어르신 교통비 지원을 계속 운영하며 '내편 콜택시', '내편 도시락' 도입과 '어르신 헬스케어센터' 2호점 조성을 실제 추진 중으로, 기존 복지 서비스가 실질적으로 운영·확대되고 있음.",
    "source": "https://www.sijung.co.kr/news/articleView.html?idxno=407739"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "남산자락숲길 여가 프로그램 등 기존 인프라 활용 사업은 계속되고 있으나, 반려동물 복합지원센터·어울림스퀘어·휴머노이드 민원응대 등 공약에 담긴 신규 사업의 구체적 착수는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10781348"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "류경기",
  "office": "중랑구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "교육경비를 140억원으로 증액했고, 천문과학관(2027년 준공 목표)과 사가정도서관(2026년 하반기 준공 목표), 제2방정환교육지원센터 등 교육 인프라 건립 공사가 실제 진행 중임.",
    "source": "https://www.munhwa.com/article/11593190"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "SH공사 본사의 신내동 이전을 위한 서울시의회 출자 시행 동의안이 6월 24일 의결돼 복합개발사업 추진의 제도적 기반이 마련됐으나, 2027년 착공 목표로 아직 착공 전 단계임.",
    "source": "https://biz.heraldcorp.com/article/10792132"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "면목선 경전철에 대해 8월 서울시와 공동으로 기본계획 공청회 및 전략환경영향평가 설명회를 개최하는 등 절차가 실제 진행 중이나, 사업 자체는 서울시 주도이며 2034년 개통 목표로 착공 전 단계임.",
    "source": "https://www.newsis.com/view/NISX20260814_0003749465"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "2026년 어르신 일자리 및 사회활동 지원사업 참여자를 4,060명(역대 최대 규모, 총 174억원 투입) 모집해 운영하는 등 어르신 복지 프로그램이 실질적으로 확대·운영되고 있음.",
    "source": "https://biz.heraldcorp.com/article/10630512"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "21km 순환형 '중랑동행길' 조성을 위해 현장조사와 서울시 AI 협업 기반 데이터 분석을 바탕으로 보행환경 정비에 착수했으며, 3년 내 완료를 목표로 추진 중임.",
    "source": "https://www.hankyung.com/article/2026063073481"
   }
  ],
  "region": "서울특별시"
 },
 {
  "name": "박상준",
  "office": "강서구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 직후 구청장 직속 교통해결TF를 실제로 가동해 버스 노선 조정 등 단기 과제부터 추진 중임이 언론 인터뷰로 확인됨. 다만 대저대교 등 국책 교량·도시철도 조기착공은 아직 가시적 성과 없음.",
    "source": "https://www.newsis.com/view/NISX20260713_0003706480"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 후 전임 구청장과 함께 '해양수산부 신청사 강서구 유치 추진위원회'를 실제 발족(7/30)하고 부지 371억원 무상제공 등 파격 조건을 제시했으나, 8월초 공모 결과 최종 부지는 동구로 확정되어 유치는 무산됨.",
    "source": "https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260807.99099001946"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "부울경 메가시티 거점도시 육성 구상을 인터뷰 등에서 반복 언급했으나, 별도의 지역협의체 구성이나 구체적 착수 사례는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260713170307598"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "구청 신도시 이전을 위한 용역 추진 및 구청장 직속 TF 신설 계획을 당선인 시절부터 밝혔으나, 취임 이후 TF 실제 구성이나 용역 발주가 완료됐다는 보도는 찾지 못함.",
    "source": "https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260610.22008002326"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "교육국제화특구 지정 관련 방향은 공약에 제시됐으나, 취임 이후 구체적 신청 준비나 행정절차 착수 보도는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "윤일현",
  "office": "금정구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "민선 9기 청사진 발표에서 노후 주거지역 재개발·재건축 신속 지원과 행정절차 지원 강화 방침을 제시했으나, 패스트트랙 도입이나 전담 조직 구성 등 구체적 착수 사례는 확인되지 않음.",
    "source": "https://www.mhns.co.kr/news/articleView.html?idxno=752051"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "통학로 정비, 돌봄 확충 등 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 30,
    "note": "금정구 4개 대학(부산대·부산외대·부산가톨릭대·대동대)과의 청년 협력사업(청년 고독사 예방 '우리들의 로드맵')이 실제 운영 중이고, 2026 금정 청년정책네트워크 위원 모집 등 청년 거버넌스 관련 활동이 이어지고 있음. 다만 청년창업 인큐베이팅센터 등 신규 인프라 조성은 아직 확인되지 않음.",
    "source": "https://www.fnnews.com/news/202504081114253895"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "파크골프장 등 생활체육 인프라 확충이나 어르신 복지 관련 구체적 신규 조치 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "침례병원 정상화는 윤 구청장 스스로 '구청장 단독으로 해결할 수 없고 여당·정부와 함께 가야 한다'고 밝힌 사안으로, 취임 이후 독자적인 실질 조치는 확인되지 않음.",
    "source": "https://busanmbc.co.kr/article/aFU1LypCrm?idx=268281"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "우성빈",
  "office": "기장군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "정관선 조기착공과 기장일광선 예타면제를 정부·부산시에 요청하겠다는 방침을 인터뷰에서 밝혔으나, 실제 면담이나 예타면제 확정 등 구체적 진전 보도는 확인되지 않음.",
    "source": "https://www.newsis.com/view/NISX20260713_0003707568"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "취임과 함께 'AI데이터센터 기장군 유치위원회' 발족 구상을 밝혔으나, 구성과 활동방향은 '담당부서·인수위 의견을 모아 구체화할 예정'이라는 단계로 실제 위원회 출범은 확인되지 않음.",
    "source": "https://v.daum.net/v/20260701070159983"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "우성빈 군수와 동남권원자력의학원장이 실제로 만나 동남권 거점병원 역할 협력에 뜻을 모으는 협약성 합의를 맺어(7/13), 응급이송체계·야간진료 협력망 구축 등을 함께 추진하기로 함.",
    "source": "https://v.daum.net/v/20260713181142464"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "청년 일자리·주거·창업을 묶은 '정주 패키지' 구상은 공약 단계에 머물러 있고, 청년전담지원단 설치 등 구체적 조직 신설 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "파크골프장·캠핑숲 등 관광 인프라 조성은 공약으로만 제시됐고, 취임 이후 착수 보도는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "박재범",
  "office": "남구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "민선 9기 공약사업 예산에 청년기본소득 26억5300만원이 실제 편성되어, 오륙도페이로 지급하는 방안이 구체화됨.",
    "source": "https://www.ajunews.com/view/20260723175934755"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "오륙도페이 캐시백 확대(최대 15%)를 위한 예산 17억원이 편성되었고, 추석 명절을 맞아 오륙도페이 캐시백 이벤트가 실제 운영되는 등 사업이 진행 중임.",
    "source": "http://www.jeongpil.com/2650299"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "남구민 우선 체육시설 예약제는 선거 공약 단계에 머물러 있고, 취임 이후 시행 관련 구체적 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "만 6세 이하 아동 병원비 지원, 달빛어린이병원 확대 등은 공약으로 제시됐으나 취임 이후 조례 제정이나 예산 반영 등 구체적 착수 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "취임 직후 민선 9기 2호 결재로 어르신 생활불편 해소를 위한 '그냥해드림 사업'을 실제 승인했으나, 기동대 편성·본격 운영 개시 보도는 아직 확인되지 않음.",
    "source": "https://www.smartbizn.com/news/articleView.html?idxno=147503"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "강철호",
  "office": "동구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "동구청이 실제로 '북항 돔구장 전담 TF'를 출범시켰고, 최대 현안이었던 해양수산부 신청사 부지도 8월 공모에서 동구로 최종 확정되는 등 관련 사업이 실질적으로 진행되고 있음.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026071518161292031"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "취임사와 당선 직후 인터뷰에서 범일·좌천 재개발을 위한 구청장 직속 TF 구성 계획을 밝혔으나, 실제 TF 구성 완료나 운영 개시를 확인하는 보도는 찾지 못함.",
    "source": "https://www.viva100.com/article/20260701501302"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "경부선 철도지하화는 이미 2025년 국토부 시범사업(부산~부산진역 구간)으로 선정된 국가 주도 사업으로, 신임 구청장의 별도 착수나 신규 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "산복도로 고도제한 완화나 빈집 정비 관련 구체적 착수 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "명품 교육도시 조성 관련 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "장준용",
  "office": "동래구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "금강공원 재정비를 통한 'AI 과학교육센터·숲속 어린이도서관' 조성 등을 대표공약으로 제시했으나, 취임 3개월 시점 설계·예산 반영 등 구체적 착수 보도는 확인되지 않는다.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026060418341816170"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "동래·수안인정시장 연계 '동래본가 한바퀴' 사업, 노포 브랜드 육성·미슐랭 식당 지원 등 상권 활성화 구상을 밝혔으나 실제 사업 발주나 예산 편성 등 구체적 착수는 확인되지 않는다.",
    "source": "https://www.imaeil.com/page/view/2026060216210031295"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "'대한민국 교육 1번지 동래' 조성을 목표로 미래형 AI교육센터, 권역별 '내 집 앞 도서관' 구축 계획을 밝혔으나 아직 방향 제시 단계이며 구체적 착공·예산 반영 보도는 없다.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026070118190516911"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "동래읍성 역사축제 세계화 등 역사문화 관광 거점화 방향은 제시됐으나, 취임 이후 구체적 신규 사업 착수나 예산 반영 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "안전 행정 관련 별도의 취임 이후 구체적 조치나 사업 착수 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "김영욱",
  "office": "부산진구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "부전역 KTX 정차 및 복합환승센터 개발을 최우선 과제로 제시했으나, 이는 국토부·부산시가 최종 결정권을 가진 광역 현안으로 구청 차원의 서명운동·건의 외에 신임 임기 중 독자적인 착수 조치는 확인되지 않는다.",
    "source": "https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260624.22009007085"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "공공산후조리원 건립, 청년·신혼부부 행복주택 공급 등에 대해 취임 이후 구체적 부지 확정이나 예산 반영 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "레일스포츠파크·엄광체육공원 조성, 노후 주민센터 리모델링 등에 대한 취임 이후 구체적 착수 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "동서고가도로 철거는 부산시 공론화위원회가 결정할 광역 현안이고, 동천 수질개선도 부산시 주도 사업으로 부산진구 자체의 신규 착수 조치는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "의료관광 성장세, 부산이스포츠경기장에서의 전국대회 개최 등 기존 인프라를 활용한 성과가 언급되지만, 이는 기존 시설·이전 임기 실적 성격이 강해 신규 공약 이행으로 보기 어렵고 별도의 신규 착수 보도는 없다.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026070518231614734"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "정명희",
  "office": "북구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "취임 첫날인 7월 1일부터 '돌봄SOS센터'(신청 후 1시간 내 출동), '365일 AI·디지털 돌봄', '여성 안심 홈키트', '하교 안심지원 도우미' 등 여러 생애주기 돌봄 서비스가 실제로 가동을 시작했다.",
    "source": "https://www.viva100.com/article/20260618500470"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "자영업자 심폐소생기금 조성을 취임 초 단계적 이행 대상으로 제시했으나, 구체적인 금융기관 협약이나 대출 실행 등 착수 단계의 보도는 확인되지 않는다.",
    "source": "https://localsegye.co.kr/news/view/1065572726286188"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "돌봄 인력과 노인일자리 탈락자 매칭 등 '무한일자리 책임제' 구상이 제시됐지만, 별도의 센터 설치나 실제 매칭 시행에 대한 구체적 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "거점형 문화향유 플랫폼 지정은 내년 상반기, 유네스코 글로벌 학습도시 네트워크 가입은 2027년 신청을 목표로 하고 있어 아직 계획 단계이며 실제 지정·가입은 이뤄지지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "취임 '1호 지시'로 의성로·백양대로·덕천로 교통체계 개선 용역을 실제로 발주해 추진 중이나, 덕천역 에스컬레이터·강변도로 회차로 등 다른 세부 사업의 착수는 확인되지 않는다.",
    "source": "https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260703.99099001044"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "서태경",
  "office": "사상구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "괘법동 창업문화혁신지구 조성 등 '사상 크리에이티브 밸리' 구상을 제시했으나, 부지 확정이나 앵커시설 유치 등 구체적 착수 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 10,
    "note": "구립 '사상형 키즈카페' 1호점 설치를 복지 공약으로 제시했으나, 취임 이후 부지 선정이나 설치 착수에 대한 구체적 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "공공인강 학습지원사업이나 방학 스포츠캠프 운영에 대한 취임 이후 구체적 시행 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "75세 이상 어르신 월 2만원 품위유지비 지원에 대한 조례 제정이나 예산 반영 등 구체적 착수 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "취임 '1호 결재'로 '1370 바로민원' 시스템을 도입해 구청장 비서실 내 전담 민원실을 설치, 실제로 연중 상시 운영을 시작했다.",
    "source": "https://www.koreaunionnews.com/2198336"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "김태석",
  "office": "사하구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "AI 기반 민원 자동분류·정책반영 시스템 도입 구상을 취임 인터뷰에서 밝혔으나, 이는 아직 계획 발표 단계이며 구체적 개발·시행 보도는 확인되지 않는다. (기존 '국민신문고 민원알림 자동화 시스템'은 2026년 2월 전임 임기에 구축된 것으로 별개 사업이다.)",
    "source": "https://www.fnnews.com/news/202607151102179231"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "학교밖청소년지원센터를 통한 1:1 대입 컨설팅 프로그램을 8월 25일부터 실제 운영하고, 9월 1일 청소년정책실천가 네트워크 협력회의를 개최하는 등 청소년 지원 사업이 실행되고 있다.",
    "source": "https://www.kookje.co.kr/news2011/asp/newsbody.asp?key=20260827.99099008074"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "생활밀착형 복지·안전 도시 조성과 관련한 취임 이후 구체적 사업 착수 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "명품 주거도시 조성(재개발·재건축 등)과 관련한 취임 이후 구체적 착수 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "을숙도~다대포를 잇는 해양생태관광벨트 구상을 취임 인터뷰에서 제시했으나, 을숙도 국가도시공원 지정은 부산시 주도의 광역 사업으로 사하구 자체의 신규 착수 조치는 확인되지 않는다.",
    "source": "https://www.nocutnews.co.kr/news/6550703"
   }
  ],
  "region": "부산광역시"
 }
];

async function main() {
  for (const m of mayors) {
    const politician = await prisma.politician.findFirst({
      where: { level: "mayor", region: m.region, name: m.name, office: m.office },
    });
    if (!politician) {
      console.warn(`mayor not found: ${m.name} (${m.office}, ${m.region})`);
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
