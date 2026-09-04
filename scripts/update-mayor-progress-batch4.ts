import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
 {
  "name": "서태원",
  "office": "가평군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "자라섬 정원 마스터플랜 수립 용역 최종보고회(8월 31일)를 열어 정원 콘텐츠·운영전략 밑그림을 마련했으나, 군수는 국가정원 지정을 서두르지 않고 단계적으로 추진하겠다고 밝혀 아직 지정 신청 등 실질 착수 전 단계.",
    "source": "https://view.asiae.co.kr/article/2026090110344101149"
   },
   {
    "order": 2,
    "percent": 80,
    "note": "2025년 호우 피해 복구사업이 6월 30일 기준 전체 309건 중 300건 준공돼 공정률 97%에 달했고, 하천 6곳에 1460억원을 투입한 개선복구사업도 진행 중이어서 마무리 단계.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1271062"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "청평면 군립의원 건립이 행안부 중앙투자심사를 통과해 2028년 완공을 목표로 설계 등 실제 절차가 진행 중.",
    "source": "https://www.newsro.kr/article243/1097209/"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "가평군 인재육성재단 설립 조례를 제정·공포하고 이사장(군수)과 이사 15명이 참여하는 창립총회를 열어 재단 설립을 위한 조직 기반을 실제로 갖췄다.",
    "source": "https://www.kgnews.co.kr/news/article.html?no=846329"
   },
   {
    "order": 5,
    "percent": 80,
    "note": "9월 11~13일 개최를 앞두고 자원봉사자 발대식 등 준비체계를 갖춰 행사 개최 직전 마무리 단계에 있다.",
    "source": "https://www.newspim.com/news/view/20260731000921"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "민경선",
  "office": "고양시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "연말까지 진행되는 버스노선 체계 개편 연구용역과 별도로 '버스 준공영제 실행방안 수립 용역'이 실제 발주·진행 중이나, 노선 전면 개편 자체는 2027년 상반기 목표로 아직 시행 전.",
    "source": "https://www.dailian.co.kr/news/view/1659836/%EA%B3%A0%EC%96%91%EC%8B%9C-%EC%B2%A0%EB%8F%84%EB%B2%84%EC%8A%A4-%EC%97%B0%EA%B3%84%ED%95%9C-%EA%B5%90%ED%86%B5%EC%B2%B4%EA%B3%84-%EA%B0%9C%EC%84%A0-2026"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "중단됐던 청년기본소득과 고양페이 인센티브를 10월부터 확대 시행하기로 하는 등 예산이 반영된 실제 정책 재개 조치가 이뤄졌다.",
    "source": "https://www.kyeongin.com/article/1768570"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "경기도청·도의회, 국토교통부 장관 등을 잇달아 방문해 창릉지구 공업물량 6만6000㎡ 우선 배정을 건의했으나, 배정 여부는 경기도·국토부 소관으로 아직 확정되지 않았다.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363732162"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "경기도사회서비스원과 '2026년 통합돌봄 지원사업' 업무협약을 체결해 고양형 통합돌봄 모델 구축에 실제 착수했다.",
    "source": "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003258702&PAGE_CD=N0002&BLCK_NO=&CMPT_CD=M0147"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "인수위 단계에서 시청사 주교동 원안 건립 신속 추진과 일산 재건축 용적률 350% 상향 검토를 발표했으나, 아직 구체적 행정절차 착수는 확인되지 않는다.",
    "source": "https://www.metroseoul.co.kr/article/20260623500466"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "신계용",
  "office": "과천시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "선거 과정에서 지정타·막계지구·3기 신도시를 연계한 AX클러스터 조성 비전을 제시했을 뿐, 취임 이후 구체적 착수 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 30,
    "note": "위례과천선 지정타 연장과 신림선 연장이 광역교통 시행계획 후보사업으로 선정돼 국가철도망 반영을 위한 행정력을 집중하고 있으나, 최종 반영 여부는 국토부 광역교통위원회 소관으로 12월 발표 예정.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1161099"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "경마공원-서울대공원-국립현대미술관-과천과학관을 잇는 문화콘텐츠 빌리지 관련 취임 후 구체적 추진 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "현재 시정 역량은 경마공원·방첩사 부지 9800세대 주택공급 철회 요구에 집중돼 있고, 정부청사 앞 유휴지를 시민광장으로 확보·유지하기 위한 별도 조치는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 100,
    "note": "신천지 종교시설 용도변경 거부처분 관련 행정소송 항소심에서 과천시가 승소해 1심을 뒤집고 지자체의 용도변경 거부 권한을 법원이 인정받았다.",
    "source": "https://www.incheonilbo.com/news/articleView.html?idxno=1329445"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "박승원",
  "office": "광명시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "신천-하안-신림선 등을 포괄하는 광역 도시철도망 기본구상 최종보고회를 열어 노선안을 마련했으나, 국가철도망계획 반영 등 확정 절차는 아직 남아있다.",
    "source": "https://www.kihoilbo.co.kr/news/articleView.html?idxno=3007785"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "하안동 K-혁신타운은 기재부·캠코와 협업해 준공 일정을 2년 앞당겨 2028년으로 확정했고, 광명시흥 테크노밸리 도시첨단산업단지도 연내 준공을 앞두는 등 실제 사업이 진행 중이다.",
    "source": "https://www.newsis.com/view/NISX20250829_0003307853"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "광명시흥 3기 신도시에 최대 4만~5만석 규모 K-아레나 건립 기본구상을 완료했으나, 부지 확정·설계 등 후속 절차는 아직 진행 전이다.",
    "source": "https://biz.heraldcorp.com/article/10631980"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "장기요양 재택의료센터·방문돌봄주치의 사업을 수행할 의료기관 5곳과 업무협약을 맺고 전국 최초 돌봄통합지원 조례를 기반으로 통합 방문의료 서비스를 실제 운영 중이다.",
    "source": "https://biz.heraldcorp.com/article/10807370"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "'정원도시 5개년 계획'을 수립해 도덕산 등 4대산 시민정원 조성과 안양천 국가정원(2029년 목표) 추진을 본격화했으나 아직 초기 단계다.",
    "source": "https://www.kyeonggi.com/article/20250827580224"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "박관열",
  "office": "광주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "당선인 시절 경기주택도시공사·광주도시공사 등과 정책협의를 갖고 철도역세권 신도시 개발 구상을 밝혔으나, 공공주택지구 지정 등 취임 후 구체적 착수는 확인되지 않는다.",
    "source": "https://www.dongbangilbo.co.kr/news/articleView.html?idxno=95408"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "태전-분당 직동 제2터널은 기존 시가 추진 중인 율동도로 사업과 사실상 중복된다는 지적이 있고, 취임 후 별도의 신규 착수 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 30,
    "note": "판교~오포(신현·능평) 도시철도가 국토부의 제2차 경기도 도시철도망 구축계획에 총 9500억원 규모로 최종 승인·고시돼 광주시가 이를 환영하며 광주역 연장 등을 추진 중이나 착공 전 단계다.",
    "source": "https://www.kyeonggi.com/article/20251212580062"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "광주형 올빼미버스는 선거 공약 발표 수준에 머물러 있고 취임 후 구체적인 도입 일정이나 착수 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "2026년 1월부터 경안동 달빛어린이병원 1곳과 공공심야약국 2곳이 실제 지정·운영 중이나, 공약이 목표로 한 오포·초월곤지암권 등 권역별 3개소 확대는 아직 이뤄지지 않았다.",
    "source": "http://www.m-i.kr/news/articleView.html?idxno=1321032"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "신동화",
  "office": "구리시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 후 GH 본사를 찾아 '구리이전 추진협의체' 회의를 열고 경기도·GH와 임시사무소 계약 및 내년 상반기 근무 개시 일정을 논의했으며, 서울편입 추진은 공식 철회했다. 경기도도 이전 절차 재개 쪽으로 가닥을 잡았다.",
    "source": "https://www.kyeongin.com/article/1768423"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "국정 설명회에서 정부에 토평2지구 면적을 275만→322만㎡로 확대해달라고 건의했으나, 최종 결정권은 국토부에 있어 구체적 착수 조치는 확인되지 않는다.",
    "source": "https://www.kyeongin.com/article/1769839"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-B 갈매역 추가 정차 및 건설분담금 국비지원을 정부에 건의했으나, 노선 정차 여부는 국토부·철도공단 소관으로 구리시 자체 착수 사항은 없다.",
    "source": "http://www.thesegye.com/news/view/1065593458838102"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "사노동 E-커머스 물류단지는 2026년 1월 LH의 두 번째 예비타당성 조사에서도 사업성 부족 판정을 받았고, 시는 국토부·LH와 협의해 개발방안을 전면 재검토하겠다는 방침만 밝힌 상태다.",
    "source": "https://www.kgnews.co.kr/news/article.html?no=910010"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "취임 기자회견에서 동구릉과 57사단 이전을 연계한 '역사문화특구' 비전을 제시하고 국궁 입문 등 상징적 행보를 보였으나, 구체적 사업 착수나 예산 반영 보도는 없다.",
    "source": "https://www.kyeongin.com/article/1767546"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "한대희",
  "office": "군포시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 첫 결재로 '도시정비국·청년주권실 신설'을 담은 조직개편안을 실제 시행해 재개발·재건축 인허가 업무를 전담 조직에 집중시켰다.",
    "source": "https://www.kyeongin.com/article/1769736"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "군포시-소상공인연합회 협의체 구성과 골목상권 매니저 배치를 추진 중이나, 협의체 정식 출범이나 매니저 실제 배치를 확인해주는 보도는 찾지 못했다.",
    "source": "https://www.ajunews.com/view/20260819134858510"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "취임 첫 결재의 조직개편으로 시장 직속 '청년주권실'이 실제 신설되어 청년 정책·예산 전담 조직이 가동되기 시작했다.",
    "source": "http://www.dmilbo.com/news/articleView.html?idxno=557450"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "취임식에서 출생축하금 단계적 인상 방침을 밝혔으나, 조례 개정이나 예산 반영 등 구체적 집행 단계에 들어갔다는 보도는 확인되지 않는다.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363730303"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "산본 힙플레이스 조성, 호수정원, 실내복합체육관 등과 관련한 취임 후 구체적 착수 보도는 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이기형",
  "office": "김포시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "민선9기 첫 경기도-시군 간담회에서 5호선 연장, GTX-D, 인천2호선 연장, 일산대교 무료화 등을 경기도·정부에 지원 요청했으나, 결정권은 국토부·경기도에 있고 김포시 자체 착수 사항은 없다.",
    "source": "https://www.sedaily.com/article/20070556"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "통일부 장관에게 평화경제특구 추가 지정을 공식 건의했으나 지정 여부는 통일부 소관이며, 아직 승인이나 착수 소식은 없다.",
    "source": "https://www.gitimes.com/160415"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "달빛어린이병원 연계 24시간 소아의료체계, 공공산후조리원 설립 등을 민선9기 공약으로 재확인했으나, 취임 후 구체적 신규 착수 보도는 확인되지 않는다.",
    "source": "https://www.kyeongin.com/article/1763955"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "풍무역세권 인하대 메디컬캠퍼스 조성과 관련해 김포도시관리공사가 제시한 '토지 무상공급+100억원 지원' 조건을 인하대 측이 최근 대표협의체 회의에서 수용하기로 하면서 사업이 실질적으로 진전됐다.",
    "source": "https://v.daum.net/v/3WDvdCqFYV?f=p"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "대명항 국가어항 사업은 2024년 이미 예비지정된 기존 정부·해수부 주도 사업이며, 통진여울 복합문화교류센터 등은 '차질 없이 추진하겠다'는 방침 수준으로 신임 시장의 별도 착수 조치는 확인되지 않는다.",
    "source": "https://gimpomaru.gimpo.go.kr/1124"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "최현덕",
  "office": "남양주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "개발이익 지역 환원을 위한 제도적 근거를 정비하겠다는 방침을 밝혔으나, '개발이익 환수 조례'나 '시민은행 설립 조례' 제정이 실제로 완료됐다는 보도는 없다.",
    "source": "https://www.ajunews.com/view/20260805165501388"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "기획재정부·국토부 등에 GTX 조기 추진과 광역교통망 확충을 건의했으나, 노선 승인·예산 반영 권한은 중앙정부에 있어 남양주시 자체 착수 조치는 확인되지 않는다.",
    "source": "https://www.ajunews.com/view/20260827161752398"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "'현장시장실'을 별내면·화도읍·진접읍 등지에서 실제 정례 운영하며 장기민원을 직접 처리하는 프로그램을 가동했다. 다만 '반값 관리비'를 위한 시립 공동주택 관리공단 설립은 아직 방침 수준이다.",
    "source": "https://www.ajunews.com/view/20260716172213247"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "보건복지부 장관을 면담해 경기동북부 공공의료원 조속 추진을 건의했으나, 예타 면제나 설립 여부는 정부·경기도 소관으로 남양주시 자체 착수 조치는 없다.",
    "source": "https://www.kgnews.co.kr/news/article.html?no=905739"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "왕숙천을 따라 광릉·홍유릉·사릉을 잇는 '조선로열 이음(IEUM)' 프로젝트 비전을 제시했으나, 구체적 사업 착수나 예산 반영 보도는 찾지 못했다.",
    "source": "https://www.kyeongin.com/article/1764999"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "박형덕",
  "office": "동두천시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "국가산업단지 2단계는 LH·국토부 주도 사업으로, 앞선 기업 수요조사에서 투자수요가 개발면적 대비 크게 부족했던 상태가 이어지고 있어 신임 임기 내 별도의 착수 조치는 확인되지 않는다.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363730269"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "동두천중앙역 일대 노후주거지 정비와 청년·신혼부부 공공임대주택 건립사업이 실제 추진되고 있다.",
    "source": "https://segye.com/newsView/20260706521279"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-C 노선 연장 조기착공과 광역환승센터 조성을 공약으로 재강조했으나, 노선 반영·착공 여부는 국토부·철도공단 소관 사항으로 시 자체 착수 조치는 없다.",
    "source": "https://www.newsis.com/view/NISX20260513_0003628331"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "글로벌 교육도시 관련 구체적 사업 착수나 유관기관 협업체계 구축을 확인해주는 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "소요산 일원 약 50만㎡에서 2030년까지 25개 세부사업을 추진 중이며, 옛 축산물브랜드육타운을 개조한 관광거점시설 '소요사이'가 2026년 10월 개장을 앞두는 등 실제 공사와 개장이 진행되고 있다.",
    "source": "https://v.daum.net/v/20260609143700002"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "조용익",
  "office": "부천시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "2025년 5월부터 상동특별계획구역 복합개발 TF가 운영 중이며, 2026년 2월 2차 사업협약 변경합의(사업명칭·핵심기업·협약기간)가 이뤄졌다. 도시관리계획 변경 절차도 진행 중이다.",
    "source": "https://www.bucheon.go.kr/site/homepage/menu/viewMenu?menuid=148006005009003"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "5중 역세권 부천종합운동장역 일대를 도시혁신구역(화이트존)으로 조성하겠다는 구상을 발표했으나, 국토교통부 지정이나 돔구장 후보지 공모사업 선정 등 확정된 조치는 아직 확인되지 않는다.",
    "source": "https://www.kyeongin.com/article/1764112"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "부천일드림센터 등 기존 청년공간을 운영 중이며 원종동에 청년통합플랫폼 공간을 내년 상반기 조성할 계획이라고 밝혔으나, 착공 등 구체적 진행은 확인되지 않는다.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363673307"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "부천시 스마트도시계획에 영유아형·통합형 키즈카페 2곳을 순차 개관할 계획이 포함됐으나, 취임 이후 부지 확정이나 예산 집행에 대한 구체적 보도는 찾지 못했다.",
    "source": "https://smartcity.go.kr/wp-content/uploads/2026/01/%EB%B6%80%EC%B2%9C%EC%8B%9C-%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%8F%84%EC%8B%9C%EA%B3%84%ED%9A%8D_26.1.pdf"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "취임 3개월 시점, 동부천IC 부지를 활용한 반려견 테마파크 조성과 관련한 구체적 행정절차 개시나 보도는 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "신상진",
  "office": "성남시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "노후계획도시정비 특별법이 2026년 8월 4일 분당까지 확대 시행됨에 따라, 성남시는 분당 2955억원·수정·중원 6937억원 규모의 기반시설비 지원 계획을 확정해 발표했다.",
    "source": "https://www.hankookilbo.com/news/article/A2026041415050001708"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "위례 포스코 글로벌센터가 최근 기공식을 갖고 실제 착공에 들어갔으며, 오리역 제4테크노밸리 등을 잇는 다이아몬드형 산업벨트 조성이 진행되고 있다.",
    "source": "https://www.kyeonggi.com/article/20260223580126"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "신생아 1인당 100만원 자산형성 계좌 개설 방안이 검토되고 있으나, 이를 뒷받침할 출산장려지원 조례 개정 등 제도화는 아직 이뤄지지 않았다.",
    "source": "https://www.m-i.kr/news/articleView.html?idxno=1370760"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "민선8기 시범사업이던 생애말기 돌봄을 전체 시민 대상으로 확대하며, 자택에서 임종할 경우 의사가 방문해 사망진단서를 발급하는 절차를 실제로 도입해 운영 중이다.",
    "source": "https://www.joseilbo.com/news/htmls/2026/04/20260425567243.html"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "SRT 오리역, 판교동역 등 다수 철도역 신설과 경기남부광역철도 유치를 취임사에서 핵심 과제로 제시했으나, 대부분 국가철도망 계획 반영이 필요한 사안으로 구체적 착수는 확인되지 않는다.",
    "source": "https://www.ajunews.com/view/20260814084055676"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이재준",
  "office": "수원시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "화성행궁~수원역, 광교호수공원 등을 순환하는 '수원투어 무상버스' 1·2호선이 이미 운영되고 있으며, 70세 이상 무상교통도 내년 시행 예정이다.",
    "source": "https://www.suwon.go.kr/sw-www/saebitinfo/saebitinfo-01.jsp"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "탑동 이노베이션밸리가 2029년 7월 준공을 목표로 착공했으며, 수원은 경기경제자유구역 후보지로 선정돼 내년 산업통상자원부에 지정 신청을 준비하고 있다.",
    "source": "https://www.munhwa.com/article/11514431"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "정조대왕 능행차를 K컬처로드 글로벌 축제로 키우고 수원돔구장·K팝아레나를 조성하겠다는 구상을 발표했으나, 아직 구체적 착수나 예산 집행은 확인되지 않는다.",
    "source": "https://segye.com/newsView/20260811525820"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "GTX-C가 2026년 4월 실착공하는 등 관련 광역철도 사업이 진행 중이지만, 이는 국토교통부·민간사업자가 주도하는 광역사업으로 수원시 자체의 별도 조치는 확인되지 않는다.",
    "source": "https://www.newskorea.ne.kr/news/articleView.html?idxno=20327"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "수원시는 기존 '1인가구 포털 쏘옥'을 통해 48개 사업을 운영 중이나, 공유주방·세탁시설을 갖춘 44개소 규모의 신규 생활커뮤니티 공간 조성에 대한 구체적 착수 보도는 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이민근",
  "office": "안산시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "안산선(4호선) 지하화 통합개발사업이 선정돼 총사업비 1조7311억원 규모로 2034년까지 추진 계획이 확정됐고, 안산사이언스밸리(ASV)는 2026년 1월 경기경제자유구역으로 정식 지정됐다.",
    "source": "https://www.etnews.com/20260115000093"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "저소득층 6~18세 아동을 대상으로 분기별 최대 2만원의 교통비 지원을 새로 시작했으나, 월정한도액 도입 등 전면적 대중교통비 경감책은 아직 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 30,
    "note": "관내 43개교를 대상으로 학교당 최대 3천만원 규모의 휴머노이드 로봇 교육 지원사업 예산이 확정돼 내년부터 시행될 예정이다.",
    "source": "https://www.kyeongin.com/article/1769768"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "한양대·한양대의료원과 첨단의료복합클러스터 조성을 위한 실무협의체 첫 회의가 2026년 3월 열려 종합병원·암센터 건립 논의가 본격화됐다.",
    "source": "https://www.1gan.co.kr/news/articleView.html?idxno=351985"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "청년창업펀드 1~3호(총 1446억원) 조성이 완료돼 운영 중이며, 연 500억 규모의 4호 펀드 조성을 위한 행정절차가 준비되고 있다.",
    "source": "https://www.asiae.co.kr/article/2026052511102297750"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "김보라",
  "office": "안성시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "JTX(중부권 광역급행철도) 민자적격성 조사가 국토교통부·KDI 주도로 진행 중이며, 김보라 시장은 국회 토론회 참석 등으로 조기 추진을 촉구하는 수준에 머물러 있다.",
    "source": "https://view.asiae.co.kr/article/2026071317341492822"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "안성도시공사(가칭) 설립 타당성 용역 중간보고회가 열렸으나, 2021년 이후 세 번째 도전으로 아직 조례 제정이나 공사 출범에는 이르지 못했다.",
    "source": "https://gnews.gg.go.kr/briefing/brief_sigun_view.do?BS_CODE=s017&number=45094"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "안성맞춤 푸드플랜과 먹거리통합지원센터 건립을 통한 생산-가공-유통-소비 선순환체계 구축을 추진 중이라고 밝혔으나, 구체적 착공이나 예산 집행 보도는 확인되지 않는다.",
    "source": "https://www.ajunews.com/view/20260730133125190"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "2026년 4월 제2차 안성시청년정책기본계획 착수보고회를 열어 실태조사와 정책분석에 착수했다.",
    "source": "http://www.assm.co.kr/35138"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "취임 이후 안성형 햇빛연금과 관련한 구체적 기본계획 수립이나 부지 조사 등 착수 보도는 찾지 못했으며, 기존 소동산 태양광마을 사례가 있을 뿐이다.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "최대호",
  "office": "안양시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "최대호 시장이 위례과천선·서울서부선 안양권 연장을 국토교통부 장관에게 건의했으나, 노선 확정은 국토부의 제5차 국가철도망 구축계획에 달려 있어 시 차원의 독자적 착수 사례는 확인되지 않는다.",
    "source": "http://bgchang.co.kr/m/view.php?idx=109223"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "안양시가 국방부로부터 박달스마트시티 사업시행자로 공식 지정받아 계획단계를 넘어 실행 단계에 진입했으며, 내년 상반기 기본·실시설계 착수, 2027년 착공을 목표로 하고 있다.",
    "source": "https://www.anyang.go.kr/main/selectPressRelease.do?key=4107&bbsNo=1687&nttNo=417484"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "안양시가 14년간 준비해온 경부선 지하화가 국토부 철도지하화 선도사업 대상지에서 배제되어 유감을 표명하고 종합계획 재제출 및 공동성명서 서명 등 촉구 활동에 그치고 있어, 새로운 자체 착수 조치는 확인되지 않는다.",
    "source": "https://www.khan.co.kr/article/202502201730001"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "평촌신도시 노후계획도시 정비 선도지구 3개 구역(5,460세대)이 이미 선정되어 특별정비계획안 접수가 시작됐고, 최대호 시장이 국토부 장관과 함께 선도지구 현장점검을 실시하는 등 실제 정비 절차가 진행 중이다.",
    "source": "https://www.khan.co.kr/article/202512031645001"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "안양천 유역 4개 시 협의체를 통해 지방정원 조성 절차가 진행 중이며 2026년 지방정원 등록, 2030년 국가정원 승격 신청을 목표로 하고 있으나 아직 지방정원 지정조차 완료되지 않았다.",
    "source": "https://news.tf.co.kr/read/national/2217806.htm"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "정덕영",
  "office": "양주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "GTX-C, 7호선 연장, 3호선 연장 등은 국토부·경기도가 주도하는 광역철도 사업으로, 정덕영 시장은 적기 추진을 강조하는 수준이며 양주시 자체의 새로운 착수 조치는 확인되지 않는다.",
    "source": "https://www.ikld.kr/news/articleView.html?idxno=254110"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "정덕영 시장 취임 이후 은남산업단지에 로지스밸리 1조원 투자를 유치해 AI 물류허브 조성을 추진하는 등 구체적인 투자유치 성과가 실제로 보도됐다.",
    "source": "https://www.ajunews.com/view/20260723115138852"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "정덕영 당선인이 경기도교육감 당선인에게 양주교육지원청 분리·신설을 건의하고 협력을 요청한 단계로, 신설 결정이나 예산 반영 등 구체적 착수는 아직 확인되지 않는다.",
    "source": "https://www.kyeonggi.com/article/20260620580060"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "정덕영 시장이 국가유산청장 면담, 유네스코 세계유산위원회 참석 및 현지 홍보관 운영 등 회암사지 세계유산 등재를 위한 실질적 외교·홍보 활동을 벌이고 있으나 최종 등재는 유네스코 결정 사항으로 남아 있다.",
    "source": "https://www.ajunews.com/view/20260720170257270"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "경기북부 혁신형 공공의료원 설립과 서부보건소 신설은 인수위 단계에서 핵심 현안으로 제시된 수준이며, 구체적 부지 확정이나 예산 반영 등 착수 단계 조치는 아직 보도되지 않았다.",
    "source": "https://www.edaily.co.kr/News/Read?newsId=03362006645453840"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "전진선",
  "office": "양평군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "전진선 군수는 강하IC 포함 노선안 반영을 국토부에 지속 촉구하고 있으나, 노선 확정 권한은 국토부에 있어 군 차원의 독자적 착수는 확인되지 않는다.",
    "source": "https://www.sentv.co.kr/article/view/sentv202601280169"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "양평군이 '양평군립병원 설립 추진단(TF)'을 실제로 출범시켜 설립 타당성 연구용역, 지방재정 투자심사 등 절차를 단계적으로 수행하고 있다.",
    "source": "https://www.mt.co.kr/policy/2026/07/03/2026070311204450576"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "양평군이 용문산 사격장 이전 및 경마공원 유치를 위한 범군민 서명운동을 시작하고 한국마사회를 직접 방문해 유치 협의에 나서는 등 구체적 행동이 시작됐으나 다자간 협약 체결 등 후속 단계는 아직이다.",
    "source": "https://www.kukinews.com/article/view/kuk202607310104"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "수도사업소 등 군 기관의 용문 이전은 공약으로 제시된 수준이며, 이전 타당성 검토나 조직진단 착수 등 구체적 조치가 보도된 바는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "양평군 종합장사시설(추모문화공원) 입지타당성 조사 용역과 주민숙의단 운영을 통해 후보지 선정 절차가 실제로 진행 중이며 2032년 개원을 목표로 하고 있다.",
    "source": "https://view.asiae.co.kr/article/2026053022211345804"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이충우",
  "office": "여주시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "여주시 신청사 건립이 올해 말 부지 조성 완료, 2029년 4월 준공을 목표로 실제 공정이 진행 중이고 원도심 도시재생 사업도 본격 추진되고 있다.",
    "source": "https://www.ajunews.com/view/20260708182234722"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "수도권자연보전권역 최초로 일반산업단지 16곳을 조성해 2조3,550억원 투자유치와 약 8,750명 고용기반을 마련하는 등 산단·관광 연계 경제도시 사업이 진행 중이다.",
    "source": "https://v.daum.net/v/20260205084103064"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "다함께돌봄센터 1호점을 역세권 여주초교로 확장 이전하고 공공산후조리원 다자녀 감면 지원사업 등을 실제로 운영하며 아이 키우기 좋은 환경 조성 사업이 진행 중이다.",
    "source": "https://www.ajunews.com/view/20260708182234722"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "경로당 냉·난방비 및 양곡 지원, 고령노인 목욕·이미용 지원, 무상교통지원, 돌봄통합지원사업 등 어르신 복지 프로그램이 실제로 운영되고 있다.",
    "source": "https://www.ajunews.com/view/20260708182234722"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "출렁다리 연계 신륵사관광지~금은모래공원 체류형 관광지 조성, 이포보·당남리섬 체험레저지구 지정 등은 구상 단계로 제시됐을 뿐 구체적 착공이나 예산 집행 보도는 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "김덕현",
  "office": "연천군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "서울~연천 고속도로 연장 구간이 정부 국정과제로 채택됐으나 예비타당성조사 통과 여부가 남아 있고, 김덕현 군수의 활동은 기재부·국토부 관계자 면담 등 건의 수준에 그친다.",
    "source": "https://news.mt.co.kr/mtview.php?no=2025011615362066259"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "전곡 에듀헬스케어센터는 전곡읍 온골유치원 인근 부지에 지하1층·지상3층 규모로 총사업비와 설계가 확정돼 2028년 완공을 목표로 추진되는 등 구체적 착수가 확인된다.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=771509"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "연천군이 경기도, KIST, 동국대, 한미양행 등 10개 기관·기업과 '경기북부(연천) 그린바이오 클러스터 조성 업무협약'을 실제로 체결해 산업화지원센터 구축을 추진 중이다.",
    "source": "https://governor.gg.go.kr/governor-news/press/?pageid=31&mod=document&uid=15228"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "2029 연천 세계 구석기 엑스포가 기획재정부 국제행사심사위원회에서 국제행사로 최종 승인받아 국비 지원 대상으로 확정됐고 기본계획 주민보고회까지 개최되는 등 실질적 진전이 있다.",
    "source": "https://www.kyeongin.com/article/1768625"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "임진강 댑싸리 정원이 이미 조성돼 운영 중이며 2030년 국가정원 지정을 목표로 세계생태평화정원 조성이 본격 추진되고 있으나, 국가정원 지정 자체는 아직 이루어지지 않았다.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1168241"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "조용호",
  "office": "오산시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "세교3지구를 AI·반도체 K-벨트로 연계하겠다는 비전과 다낭 AI콘퍼런스 기조발표 등 대외 홍보는 있었으나, AI특구 지정이나 예산 반영 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.etoday.co.kr/news/view/2606334"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "국토교통부 제2차관에게 분당선 세교2·3연장, 수원발 KTX, GTX-C를 패키지로 조속 추진해달라 건의했을 뿐, 오산시가 독자적으로 착수한 사업은 없음.",
    "source": "https://www.ajunews.com/view/20260828180823594"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "오산AI코딩에듀랩, 미래교육지원센터 설립 등 계획을 제시하고 부서별 추진시기를 구체화하는 단계이나, 실제 설립이나 예산 반영은 확인되지 않음.",
    "source": "https://www.ajunews.com/view/20260720175502351"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "공공산후조리원 건립, 달빛어린이병원 확대 등을 공약대로 추진하겠다고 밝혔으나 부지 선정 등 착수는 확인되지 않으며, 기존 오산 1호 달빛어린이병원은 2023년에 이미 지정된 것으로 신임 시장의 성과가 아님.",
    "source": "https://www.ajunews.com/view/20260720175502351"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "취임 이후 야맥축제·독산성 문화제 등 관련 신규 조치나 예산 반영에 대한 구체적 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이상일",
  "office": "용인시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "처인구 이동·남사읍 국가산단(삼성전자)과 원삼면 일반산단(SK하이닉스) 조성 공사가 실제 진행 중이며, 시는 전력·용수 적기 공급을 위해 정부에 지속 협조를 요청하는 등 실무 대응을 이어가고 있음.",
    "source": "https://www.incheonilbo.com/news/articleView.html?idxno=1330566"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "국가산단~이동읍 반도체 특화신도시를 잇는 국도45호선 대촌~장서 12.5㎞ 구간을 4→8차로로 넓히는 확장 공사가 실제 진행 중.",
    "source": "https://www.ajunews.com/view/20260602000005"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "지역주민을 돌봄인력으로 양성하는 '든든용인 돌봄파트너' 사업이 발대되어 운영 중이며, IoT 기반 'ON(溫) 홈케어'가 전국 최초로 처인장애인복지관에서 실제 시작됨.",
    "source": "https://www.asiae.co.kr/article/2026070916482323953"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "골목형 상점가를 매년 추가 지정(2025년 6개소 추가)하고 특례보증 확대 등 소상공인 지원사업이 실제 시행 중.",
    "source": "https://www.etnews.com/20260602000005"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "총사업비 10억4000만원을 들여 용인초 등 어린이보호구역을 시작으로 AI 기반 스마트 횡단보도 설치 공사가 9월까지 실제 진행 중.",
    "source": "https://www.yonginilbo.com/news/article.html?no=109772"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "김성제",
  "office": "의왕시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "고천 행복타운·초평 신혼희망타운 등 공공주택지구 조성이 단계적으로 진행 중이며, 인근 내손체육공원 '내손애 행복센터'는 연내 착공을 앞두는 등 관련 사업이 실제 추진되고 있음.",
    "source": "https://www.mt.co.kr/policy/2026/08/18/2026081817165498286"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "포일동 제2산업단지는 개발행위허가 제한기간 연장과 그린벨트 해제 등 행정절차가 진행 중이나 착공은 이뤄지지 않았고 2032년 준공 전망으로, 아직 초기 단계임.",
    "source": "https://www.kyeongin.com/article/1677602"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "인덕원~동탄선(인동선)·월곶~판교선(월판선) 의왕구간이 실제 착공해 2029년 개통을 목표로 공사가 진행 중.",
    "source": "https://www.obsnews.co.kr/news/articleView.html?idxno=1452009"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "내손동 729번지 일원에 총사업비 473억원 규모의 '의왕 미래교육센터'가 착공해 2028년 상반기 준공을 목표로 실제 건립 공사가 진행 중.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363721365"
   },
   {
    "order": 5,
    "percent": 80,
    "note": "장기 숙원사업이던 문화예술회관이 '의왕예술의전당'으로 명칭이 확정되고 2026년 말 준공을 목표로 마무리 단계에 있음.",
    "source": "https://www.g-enews.com/article/General-News/2026/08/202608061030064437e99a18c428_1"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "김원기",
  "office": "의정부시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "캠프 스탠리 탄약고 부지를 직접 방문해 신속 반환을 요구하는 등 관심은 보였으나, 반환 권한은 미군·국방부에 있고 시 차원의 독자적 착수 사업은 확인되지 않음.",
    "source": "https://view.asiae.co.kr/article/2026090100492103993"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "8호선(별내선) 의정부 연장을 위해 시민 서명부를 국토부 장관에게 전달하고 대광위·기획예산처를 잇달아 방문해 반영을 요청했으나, 결정권은 정부에 있고 착공 등 실질적 진전은 없음.",
    "source": "https://www.dailian.co.kr/news/view/1670403"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "24시간 긴급돌봄체계 구축을 공약대로 추진 중이라 밝혔으나, '그냥 해드림 센터' 설치 등 구체적 착수(예산·부지 확정)는 확인되지 않음.",
    "source": "https://womannews.net/detail.php?number=451793&thread=22r12r01+style%3D"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "IB 인증학교 확대, 공공온라인 교육플랫폼 구축 등을 공약으로 제시했으나 취임 이후 구체적 설립이나 예산 반영 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "취임 1호 결재로 지역화폐 '의정부사랑카드' 인센티브를 8%→10%, 월 구매한도를 25만→40만원으로 실제 확대했고, 공공배달앱 연계 할인도 시행 중.",
    "source": "https://www.mt.co.kr/policy/2026/07/01/2026070114263574970"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "성수석",
  "office": "이천시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "역세권 개발을 총괄할 '이천도시공사' 설립 의지를 취임사와 인터뷰에서 거듭 밝혔으나, 실제 설립 조례 제정이나 공사 출범 등 착수 단계 근거는 확인되지 않음.",
    "source": "https://www.ajunews.com/view/20260705092015070"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "시장 직속 '이천ICON(이천혁신센터)' 운영 구상과 세라믹기술원 방문을 통한 반도체 기업 지원 의지를 밝혔으나, 조직 신설이나 예산 반영 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.hankookilbo.com/news/article/A2026071921130004180"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "24시간 아이돌봄센터 권역별 설치, 공공산후조리원 건립, 달빛어린이병원 유치 등을 임기 내 공약으로 재확인했으나, 취임 3개월 시점 구체적 착수 보도는 찾지 못함.",
    "source": "https://www.womennews.co.kr/news/articleView.html?idxno=279557"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "서울 양재 화훼유통센터의 이천 이전을 경기도지사에게 건의했으나, 결정권은 서울시·경기도 등에 있고 시 차원의 독자 착수 사업은 없음.",
    "source": "https://www.joongboo.com/news/articleView.html?idxno=363710191"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "인수위 단계에서 부서별 업무보고회를 개최하고 시민거버넌스위원회 구성 등 시정 투명성 강화 방침을 밝혔으나, 실시간 온라인 중계 등 구체적 시행 근거는 확인되지 않음.",
    "source": "https://www.gnnnews.kr/173927"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "손배찬",
  "office": "파주시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 후 민선9기 첫 조직개편으로 시장 직속 '핵심현안TF팀'을 실제로 신설(7월 결재)하여 철도망 확충(3호선 연장 포함)과 종합병원 유치 등을 전담시켰다. 다만 제5차 국가철도망 계획 반영 여부는 아직 결정되지 않았다.",
    "source": "https://www.incheonilbo.com/news/articleView.html?idxno=1327582"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "파주메디컬클러스터 종합의료시설용지에 500병상 규모 대학병원을 유치하기로 하고 조선대학교를 사업 우선협상대상자로 선정했다. 내년 상반기 사업협약 체결을 목표로 후속 절차가 진행 중이다.",
    "source": "https://www.pressian.com/pages/articles/2026072409180600624"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "취임 전후로 금촌·금릉 역세권 개발 공약은 제시됐으나, 마스터플랜 수립이나 민간참여 착수 등 구체적 사업 진행을 확인할 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 30,
    "note": "GTX-H 문산 출발, KTX 파주연장도 같은 시장 직속 '핵심현안TF팀' 소관으로 제5차 국가철도망 구축계획 반영을 위해 총력전을 펼치고 있으나, 실제 계획 반영 여부는 미정이다.",
    "source": "https://www.kyeongin.com/article/1767531"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "과천경마장(렛츠런파크) 유치는 경기북부 6개 지자체가 경쟁 중인 사안으로, 파주시는 문산읍 미군반환공여지를 후보지로 유치에 주력한다고 밝혔으나 취임 이후 별도의 전담 TF 구성이나 새로운 조치가 확인되지 않는다.",
    "source": "https://www.kyeonggi.com/article/20260727580267"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "최원용",
  "office": "평택시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "국토교통부 제2차관 면담 등을 통해 GTX-A·C 연장, 신안산선 안중연장, KTX 경기남부역사 신설을 건의했으나, 사업 결정권은 국토부에 있고 시 차원의 독자적 착수 조치는 확인되지 않는다.",
    "source": "https://www.incheonilbo.com/news/articleView.html?idxno=1329213"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "국방부가 알파탄약고 일원 133만㎡ 군사시설보호구역을 실제로 해제하여 '메모리얼 문화벨트' 조성의 실질적 걸림돌이 제거됐다. 다만 반환절차·환경조사·부지매입 등 후속 절차가 남아 있어 본격 개발은 이후 단계다.",
    "source": "https://www.pressian.com/pages/articles/2026072215471150534"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "KAIST 유치를 통한 반도체·바이오 R&D 허브 구상을 밝혔으나, 이는 시장의 구상·발언 단계이며 실제 유치 협약이나 예산 반영 등 구체적 착수는 확인되지 않는다.",
    "source": "https://www.hankyung.com/article/2026081275081"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "현대차그룹·기아·현대글로비스와 평택시, 평택항만공사, 평택지방해양수산청 등 6개 기관이 '탄소중립 수소항만 구축' 업무협약(MOU)을 체결했다. 다만 협약은 신임 시장 취임 이전(2025년 11월) 체결된 것으로, 취임 후 새로운 진전 보도는 확인되지 않는다.",
    "source": "http://www.haesanews.com/news/articleView.html?idxno=143298"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "평택호가 국가 '중점관리저수지'로 최종 선정되어 수질개선·생태복원에 대한 국가 차원 지원 근거가 마련됐다. 진위천·안성천 등 상류 수계 관리와 생태하천 복원 등은 계획 단계다.",
    "source": "http://www.m-i.kr/news/articleView.html?idxno=1264037"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "백영현",
  "office": "포천시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "재선 시장으로 취임 전부터 추진해 온 '솔모루 근린공원 흙향기길' 조성 등 생활밀착형 정원 조성 사업이 실제로 진행 중이며, 100세 건강도시 실현을 목표로 사업이 이어지고 있다.",
    "source": "https://www.dailian.co.kr/news/view/1645458/%ED%8F%AC%EC%B2%9C%EC%8B%9C-%E2%80%98%EC%86%94%EB%AA%A8%EB%A3%A8-%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90-%ED%9D%99%ED%96%A5%EA%B8%B0%EA%B8%B8%E2%80%99-2026"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "'경기국방벤처센터' 유치가 확정되어 대진대 산학협력관 내 설립이 예정되어 있고, 드론 실증체계 구축 등 방산단지 조성 작업도 진행 중이나, K-AI 특화단지 지정 등 큰 틀의 사업은 아직 초기 단계다.",
    "source": "https://www.newswhoplus.com/news/articleView.html?idxno=43983"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "교육발전특구 시범지역 지정을 바탕으로 맞춤형 교육정책이 계속 추진되고 있으나, 평화경제특구 지정은 아직 이뤄지지 않았고 '전략'으로 강조되는 구상 단계에 머물러 있다.",
    "source": "https://www.kyeonggi.com/article/20260326580549"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "약 130만㎡ 규모 스마트축산단지 조성이 민선9기 5대 핵심공약으로 제시됐으나, 부지 확보나 예산 반영 등 구체적 착수를 확인할 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "포천~철원 고속도로 예비타당성조사 통과를 위해 경기도지사·강원도지사·철원군수와 함께 관계기관 업무협약을 실제로 체결(9월)했다. 다만 예타 결과는 10월 발표 예정이며, 송우IC 신설 등 다른 도로 사업의 구체적 진전은 확인되지 않는다.",
    "source": "https://www.kgnews.co.kr/news/article.html?no=909848"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "이현재",
  "office": "하남시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "국토교통부·대도시권광역교통위원회에 GTX-D 황산·교산 경유, 위례신사선 하남 연장, 3·9호선 적기개통 등을 건의했으나 결정권은 국토부·서울시 등에 있고 하남시의 독자적 착수 조치는 확인되지 않는다.",
    "source": "https://www.ajunews.com/view/20260828164441374"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "재선 시장으로, 이미 추진해 온 교산신도시 자족용지 AI 클러스터(3조원 규모)에 KT클라우드·포스텍·카네기멜론대·싱가포르국립대 컨소시엄이 선정되어 실질적으로 사업이 진행 중이다.",
    "source": "https://v.daum.net/v/GsAO4ou5yz"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "위례·감일·미사·원도심을 잇는 학생통학 순환버스가 실제 운행을 시작했고, 미사4고 신축공사 관련 워킹스쿨버스 노선도 시장이 직접 점검하며 운영 중이다.",
    "source": "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003209286"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "민선9기 취임 후 '1호 결재'로 'K-컬처 문화도시 TF'를 실제로 구성해 K-스타월드·국가정원 조성 구상에 착수했고, 국회의원 면담 등 지원 요청도 이어가고 있다.",
    "source": "https://www.ajunews.com/view/20260710135234280"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "장애인·비장애인 통합형 '반다비 체육센터' 건립 추진 계획을 발표했으나, 부지 확정이나 예산 반영 등 구체적 착수 단계 보도는 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10703647"
   }
  ],
  "region": "경기도"
 },
 {
  "name": "정명근",
  "office": "화성시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "재선 시장으로 이미 'HAI-MATE' 등 AI 행정비서가 실제 운영 중이며, 자율주행 실증 등 AI 행정서비스가 8개 분야에 적용되는 등 관련 사업이 계속 진행되고 있어 '코리봇' 공약의 기반이 실질적으로 가동 중이다.",
    "source": "https://www.kyeongin.com/article/1768288"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "'(가칭)화성동행기구'를 10월 출범 목표로 국정설명회 등에서 소개했으나, 아직 시민사회 의견수렴과 조직위원회 구성, 조례 제정 등 준비 단계로 정식 출범 전이다.",
    "source": "https://www.ajunews.com/view/20260828165553395"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "재선 시장으로 이미 재임 기간 지역화폐 2조5000억원을 발행했고, 올해도 1조원 규모 발행이 실제로 진행되고 있는 계속 사업이다.",
    "source": "https://www.etnews.com/20260602000007"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "국토부 대광위와 협의해 출퇴근 광역버스 증차를 건의했고, 광역급행버스 M4130·M4137번의 주말 증차 운행을 실제로 시행하는 등 일부 구체적 조치가 이뤄졌다.",
    "source": "https://www.kifuture.com/news/article.html?no=173500"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "화성미래비전위원회 산하 '화성순환철도구축 구상 TF팀'이 실제로 구성되어 2027년 초 타당성조사 용역 착수를 준비 중이나, 용역 자체는 아직 시작되지 않았다.",
    "source": "https://view.asiae.co.kr/article/2026070716221925029"
   }
  ],
  "region": "경기도"
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
