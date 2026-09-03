import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
 {
  "name": "공한수",
  "office": "서구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "부울경 최초 의료관광특구(글로벌 하이메디허브) 지정이 이미 이루어져 있고, 의료기업 유치·외국인환자 유치 사업이 실제로 진행 중인 것으로 확인됨. 이번 3선 임기에서도 해당 사업을 계속 이어가고 있음.",
    "source": "https://www.khan.co.kr/article/202202221700002"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "부산 서구가 부산해사법원 유치를 위한 타당성 용역에 실제 착수했고, 구청사 부지를 후보지로 제안하는 등 구체적 첫 단계가 진행됨. 다만 법원 설치는 국회·법원행정처 소관으로 구청장의 독자적 실행력은 제한적임.",
    "source": "https://localsegye.co.kr/news/view/1065596433478605"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "송도오션파크 일원 문화회관 건립은 공약으로 언급되었으나, 취임 후 부지 확정이나 예산 반영 등 구체적 착수 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "대신동 생활악취 해결을 위해 공한수 구청장이 박형준 부산시장과 면담하며 BTL(민간투자) 방식을 제안했으나, 이는 예산권을 쥔 부산시에 대한 요청 단계로 실제 사업 착수(협약 체결, 예산 확정)는 확인되지 않음.",
    "source": "https://www.wbcb.co.kr/news/articleView.html?idxno=87842"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "민방위 교육장 부지 어린이 물놀이터 및 공공키즈카페 조성과 관련한 구체적 추진 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "강성태",
  "office": "수영구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "광안리 드론X레이저쇼는 이미 대통령상 수상, 전국 최초 상설 콘텐츠로 자리잡아 실제 운영 중이며, 올해 문화관광재단 출범이 예정되어 있음.",
    "source": "https://v.daum.net/v/20260703155701208"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "다자녀가구 재산세 감면, 복지하나로센터 건립 등은 공약으로 제시되었으나 조례 개정이나 예산 반영 등 구체적 실행 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "동백전 추가 인센티브 지원 등이 정책으로 제시되었으나, 실제 시행(조례·예산 반영) 여부를 뒷받침하는 보도는 찾지 못함. 수영메디컬스트리트 관련 진전 보도도 없음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "핵심 사업인 망미 제2국민체육센터는 문체부 공모사업 선정으로 60억원을 확보, 부지매입을 완료하고 2027년 하반기 준공을 목표로 공사가 실제 진행 중임. 수영고 신설은 교육청과 협의 단계에 머물러 있음.",
    "source": "https://www.busan.com/view/busan/view.php?code=2023091409422453306"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "망미동 도시재생사업이 국토부 특화재생형 사업으로 선정되어 240억원을 확보, 2023~2026년 실제 시행 중이며 2024년 도시재생 종합성과평가에서 대상을 수상함.",
    "source": "http://www.thekorea.kr/bbs/board.php?bo_table=news&wr_id=131903"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "주석수",
  "office": "연제구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "연제종합운동장 건립은 1호 공약으로 제시되었으나, 기본계획 수립조차 2026년 하반기 예정 단계로 아직 착수 전임.",
    "source": "https://v.daum.net/v/20260528204655720"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "레이카운티아파트 대로변 지하보도 설치는 2027년 타당성 조사 예정으로, 현재까지 구체적 착수나 관련 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "배산 유아숲터는 이전에 이미 조성되어 화장실까지 준공되었으나, 이는 현 임기 이전 사업이며 신규 공약인 '영어캠프' 조성에 대한 별도 착수 보도는 확인되지 않음.",
    "source": "https://www.newsro.kr/article243/807817"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "연제문화체육복합센터는 1호 공약으로 추진되어 왔으나 부산시 지방재정투자심사에서 '재검토' 통보를 받아 규모 축소 용역을 진행 중이며, 착공은 지연되고 있음.",
    "source": "https://v.daum.net/v/20260426181954405?f=p"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "거제권역 공공도서관은 2020년부터 추진되어 온 사업으로 관련 절차가 진행 중이나, 부지 소유자(재개발조합)의 토지 제공 지연으로 완공 목표가 2030년으로 미뤄지는 등 실질적 진전은 더딤.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "김철훈",
  "office": "영도구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "청학동 옛 한국타이어 부지 해양신산업 복합단지는 취임 5대 과제 중 하나로 제시되었으나, 범구민추진위 구성 등은 아직 구상·계획 단계이며 실제 착수(부지 매입, 예산 반영 등) 보도는 없음.",
    "source": "https://www.etoday.co.kr/news/view/2610079"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "태종대권 해양관광레저지구 및 오션플라잉 테마파크 조성은 취임사에서 방향이 제시된 수준으로, 구체적 사업 착수 보도는 확인되지 않음.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026080511044862139"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "산복도로 정원벨트 조성은 취임 5대 과제 중 하나로 방향만 제시되었고, 구체적 착수 보도는 없음.",
    "source": "https://www.yeongdo.go.kr/00011.web?amode=view&gcode=1027&idx=332876"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "빈집을 활용한 '영도스테이', 문화예술공간 '어반 캔버스' 조성은 구청이 '검토 중'이라고 밝힌 단계로, 아직 사업 착수는 확인되지 않음.",
    "source": "https://www.mhns.co.kr/news/articleView.html?idxno=752321"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "배리어프리 도시 조성, 1인 가구·고립가구 지원 강화는 취임 시 방향 제시에 그쳤으며 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": "https://www.mhns.co.kr/news/articleView.html?idxno=752178"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "최진봉",
  "office": "중구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "용두산공영주차장 복합개발은 행안부 지방재정투자심사를 최종 통과(총사업비 1522억원)했고 하반기 설계공모를 진행 중으로, 신청사·국민체육센터·주차장 조성이 실제 절차대로 진행되고 있음.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026042214124012733"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "광복로~BIFF광장 거리디자인 사업은 부산시 '거리디자인 시즌2' 대상 구간으로 선정되어 내년 상반기 착공을 목표로 계획이 구체화됨.",
    "source": "https://mobile.busan.com/view/busan/view.php?code=2026051518073974636"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "중구문화예술회관 건립과 관련한 구체적 착수 또는 예산 반영 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "유라리 광장~북항친수공원을 잇는 바다누리길 조성은 공약으로 제시되었으나, 실제 조성 착수 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "중구 일자리통합지원센터 운영과 관련한 구체적 추진 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "김성수",
  "office": "해운대구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 후에도 센텀2지구·53사단 개발 등을 차질 없이 추진하겠다는 언급은 있으나, 기반시설 선제 구축이나 앵커기업 유치 등 구체적 착수 사례는 확인되지 않음.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026060418322658561"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "국토부가 53사단 일대 그린벨트 해제를 추진 중이나 이는 국방부·부산시·국토부가 주도하는 사업이며, 신임 구청장은 부산시와 협력하겠다는 원론적 입장을 밝히는 수준에 머묾.",
    "source": "https://www.cnbnews.com/news/article.html?no=709320"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "2026년 6월 부산시 도시철도망 구축계획이 국토부 최종 승인을 받았으나 이는 부산시·국토부가 주도하는 광역사업으로, 구청장은 조속 추진을 촉구하는 수준에 머묾.",
    "source": "https://v.daum.net/v/20260811143809773"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "취임 이후 어르신 일자리 확충과 관련한 구체적 수치나 신규 사업 추진 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "디지털수목원 루미포레 조성 및 재반~온천천 이음다리 건설 등 구상을 발표했으나 실제 착공이나 예산 반영 등 구체적 조치는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260811143809773"
   }
  ],
  "region": "부산광역시"
 },
 {
  "name": "김진열",
  "office": "군위군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "대구시장 면담에서 군부대 이전, 국도 28호선 확장 등을 건의했으나 이는 국방부·대구시가 주도하는 사업이며 군수 차원의 독자적 조치는 확인되지 않음.",
    "source": "https://www.ajunews.com/view/20260608154745650"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "도시재생사업, 농촌공간 재구조화, 생활SOC 확충 등 정주여건 개선 방향은 제시됐으나 구체적 사업 착수 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "군위군 농업기술센터가 과학영농실증시범포에서 여름철 엽채류 10개 품목 실증재배를 실제로 진행하며 현장평가회를 통한 농가 보급을 추진 중.",
    "source": "https://www.ajunews.com/view/20260623100838738"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "체류형 관광도시, 팔공산 연계 관광벨트 조성 등 비전은 제시됐으나 구체적 착수 사례는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "생애주기별 맞춤형 돌봄체계 강화 방향은 제시됐으나 신규 사업 착수를 뒷받침하는 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "조재구",
  "office": "남구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "남구 내 재개발·재건축 정비사업 현장 30곳과 소규모 정비사업 현장 30곳이 실제로 추진 중이며, 이를 최우선 공약으로 삼아 지속 지원하고 있음.",
    "source": "https://biz.heraldcorp.com/article/10796743"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "1시간 야행길, 호국보훈로드, 앞산 타임스퀘어 프로젝트, 문화관광재단 설립 등을 추진하겠다고 밝혔으나 구체적 착수 사례는 확인되지 않음.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4079569"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "대구 남구가 교육부 평생학습도시 재지정 평가를 통과해 평생학습도시 지위를 유지했음.",
    "source": "https://www.sisa-news.com/news/article.html?no=274642"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "통합돌봄 시행 100일 성과를 점검하는 통합지원협의체를 개최했고, 어르신 6784명을 대상으로 한 전수조사를 실제로 진행하는 등 현장사업이 운영 중.",
    "source": "https://www.sisa-news.com/news/article.html?no=274316"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "스마트 관제 시스템 확대, 신청사 AI 기반 행정시스템 도입 등 계획을 밝혔으나 구체적 착수 사례는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "김용판",
  "office": "달서구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "구청장 직속 '달서 대전환 혁신단(달대혁)'이 실제로 출범해 가동을 시작했고, 화이트보드 브리핑 등 새로운 보고 방식도 시행됨.",
    "source": "http://m.goodnewspaper.kr/view.php?idx=170623"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "네거티브 규제구역 도입, 카페거리 조성 등 DS밸리 구상은 밝혔으나 별도 TF 구성이나 대구시와의 구체적 협의 진전은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 30,
    "note": "대표 축제 '무릉도원 페스타' 조성을 위한 추진단이 실제로 꾸려졌고 복숭아나무 식재 등 준비가 진행 중.",
    "source": "https://www.imaeil.com/page/view/2026072014533960248"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "학산공원의 '달서숲' 조성과 짚라인 설치 등은 공약 발표 단계이며 연구용역 착수나 대구시 협의 등 구체적 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "'우리동네 복지기동대'가 실제 가동 중이고, 찾아가는 통합돌봄 신청 건수가 618건으로 두 배 증가하는 등 사업이 실질적으로 운영되고 있음.",
    "source": "https://www.koreatimenews.com/news/article.html?no=1224949"
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "최재훈",
  "office": "달성군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "대구 제2국가산업단지, 모빌리티 모터 소부장 특화단지 지정, 국가로봇테스트필드 예타 통과 등 국책사업이 실제로 진행 중이며 군은 세부 내실화 작업을 이어가고 있음.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=664016"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "도시철도 1호선 옥포 연장 및 월배·안심차량기지 통합이전 사업이 대구시 도시철도망 계획에 반영되어 2027년 착공, 2032년 준공이 예정된 단계.",
    "source": "https://news.bbsi.co.kr/news/articleView.html?idxno=4016060"
   },
   {
    "order": 3,
    "percent": 80,
    "note": "총사업비 495억원 규모의 달성 비슬도서관이 현풍읍에 2026년 하반기 준공을 목표로 실제 건축이 진행 중.",
    "source": "https://dalseong.daegu.kr/;jsessionid=0E6F505E86AC70E05B5213FDE4F2A94B.tomcat1?menu_id=00000193&menu_link=/icms/bbs/selectBoardArticle.do&bbsId=BBS_00072&nttId=47150&bbsTyCode=BBST03&bbsAttrbCode=BBSA03"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "북부 장애인복지센터, 케어안심주택 '늘봄채' 등 다수 사업이 공약으로 제시됐으나 구체적 착수나 예산 집행을 뒷받침하는 보도는 확인하지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "대구교도소 후적지를 'Re:화원'으로 조성해 산책로·잔디광장 등을 실제로 완공하고 정식 개방함.",
    "source": "https://www.ajunews.com/view/20251106111814369"
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "우성진",
  "office": "동구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "8월 6일 '민선9기 구청장 공약 보고회'에서 7개 분야 50여개 공약 중 하나로 방향과 재원방안을 점검했을 뿐, 봄·가을 통합축제 신설 등 구체적 착수는 확인되지 않음. 9월 최종 확정 예정.",
    "source": "https://www.munhwa.com/article/11608193"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "대구의료원 제2분원 유치는 대구시 협조가 필수인 사업으로, 취임 후 공약 보고회에서 방향 점검 대상에 포함됐을 뿐 별도의 구체적 추진 조치는 확인되지 않음.",
    "source": "https://www.munhwa.com/article/11608193"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "명문중고 건립, 국공립 숲유치원 등에 대한 구체적 사업 착수나 예산 반영 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "금호강~팔공산 파크골프장 조성 등에 대한 구체적 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "안심뉴타운 부지에 대해 대구시·신세계사이먼·대구도시개발공사·동구청이 참여해 프리미엄 아울렛 조성을 위한 토지매매계약을 8월 7일 체결, 2028년 개장 목표로 실행 단계에 진입. 다만 혁신도시 공공기관 2차 이전 등 나머지 부분은 진전 없음.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=664886"
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "이근수",
  "office": "북구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 1호 결재로 '북구 혁신 100일 추진단'(구청장 직속)을 실제로 구성, 도심융합특구·금호워터폴리스 등을 중점 사업으로 지정해 100일 내 로드맵 수립을 추진 중.",
    "source": "https://www.newsis.com/view/NISX20260702_0003693754"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 1호 결재 '혁신 100일 추진단'이 도시철도 4호선을 중점 점검 대상으로 지정해 실제 가동됨. 다만 모노레일 방식 재검토를 위한 별도 TF 발족이나 기술·재정 타당성 검증 결과는 아직 보도되지 않음.",
    "source": "https://www.newsis.com/view/NISX20260702_0003693754"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "칠곡 행정타운 부지가 '혁신 100일 추진단'의 중점 현안 사업으로 실제 지정되어 공공기관 유치 등 검토가 진행 중.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=658909"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "농수산물도매시장 후적지가 '혁신 100일 추진단'의 중점 사업으로 지정돼 '팔달신도시' 재편 구상이 검토되고 있으나, 지구단위계획 수립 등 다음 단계 착수는 아직 확인되지 않음.",
    "source": "https://www.imaeil.com/page/view/2026073110232096804"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "금호워터폴리스가 '혁신 100일 추진단'의 중점 사업으로 실제 지정되어 스마트 산단 조성 방향이 검토 중이나, 구체적 인프라 개량이나 예산 집행은 확인되지 않음.",
    "source": "https://www.newsis.com/view/NISX20260702_0003693754"
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "권오상",
  "office": "서구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 후 염색산단 공동폐수처리장을 방문해 환경개선 협조를 당부하는 등 현장점검은 있었으나, 업종 규제완화나 산업구조 전환을 위한 실질적 조치는 확인되지 않음. 주요 현안은 대구시·중앙부처와 협력해 해결하겠다는 입장.",
    "source": "https://www.imaeil.com/page/view/2026081712523336654"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "7월 30일 서대구역세권 지구단위계획이 고시되며 복합환승센터 부지를 포함한 특별계획구역이 실제로 지정돼 민간 개발 여건이 마련됨. 다만 이는 대구시 주도 사업이며 구청은 협조 역할에 그침.",
    "source": "https://biz.heraldcorp.com/article/10812139"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "취임 후 염색산단 공동폐수처리장을 방문해 '악취 저감 총력'을 강조하고 하수처리장 통합 지하화를 속도감 있게 추진하겠다고 밝혔으나, 실제 착공이나 예산 반영 등 구체적 조치는 확인되지 않음.",
    "source": "https://view.asiae.co.kr/article/2026071717232239519"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "도시철도 5호선·비산역 신설은 국토교통부의 도시철도망 구축계획 고시(하반기 예정) 이후 행정절차를 이행하겠다는 방침만 확인되며, 구청장 차원의 별도 착수는 없음.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4077731"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "공영주차장 확충, 골목 보행환경·야간조명 개선 등에 대한 취임 후 구체적 추진 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "김대권",
  "office": "수성구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "8월 27일 민선9기 공약 77건이 최종 확정되며 '세계가 찾는 문화예술도시'가 8대 미래전략 중 하나로 포함돼 행정절차가 본격 착수됨.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3677512"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "8월 27일 공약 77건 최종 확정 발표에서 '스마트 미래교통 중심도시'가 8대 전략 중 하나로 포함돼 스마트 교통체계 구축 등 행정절차가 공식 착수됨.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3677512"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "공약 77건 최종 확정에서 수성알파시티 기반 AI 신산업(신성장 거점도시) 조성이 8대 전략에 포함돼 행정절차가 본격 착수됨. 제2알파시티 부지의 구체적 개발계획 수립은 아직 확인되지 않음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3677512"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "8월 27일 확정된 공약 77건 중 '미래교육 중심도시'가 포함돼 차별화된 교육기반 강화 방침이 공식 확정, 행정절차 착수 단계.",
    "source": "https://www.hankookilbo.com/news/article/A2026082714380002884"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "공약 77건 확정에서 권역별 복지관 확충과 통합돌봄 체계 고도화를 포함한 복지 전략이 공식 확정돼 행정절차가 착수됨.",
    "source": "https://tk.newdaily.co.kr/site/data/html/2026/08/28/2026082800175.html"
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "류규하",
  "office": "중구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임사에서 데이터·AI 기반 '생활밀착형 스마트시티' 조성 방향을 재확인했으나, 재난예측·AI안심 네트워크 구축 등에 대한 구체적 착수(TF·예산)는 확인되지 않음.",
    "source": "https://n.news.naver.com/mnews/article/088/0001017169"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "동성로 대백 본점을 중구청 신청사 이전 후보지로 검토 중이며, 연내 TF 구성·내년 기초연구용역 계획이 보도됐으나 아직 실제 TF 발족이나 협의 확정은 이뤄지지 않음(대백 측도 '구체적 협의 미착수' 확인).",
    "source": "https://www.imaeil.com/page/view/2026071410453092216"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "'AI·AX 청년창업지원센터' 설립 계획을 취임 전후 반복적으로 발표했으나, 부지 확정이나 착공·예산 반영 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.g-enews.com/view.php?ud=20260708133927763b403c0c360_1"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "구립 공공도서관 건립을 교육 인프라 확충 공약으로 지속 언급하고 있으나, 부지·설계·예산 확정 등 구체적 착수 근거는 찾지 못함.",
    "source": "https://www.yeongnam.com/web/view.php?key=20260707022013052"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "저장강박가구·다문화가구 통합돌봄서비스나 '펫 워킹 맵' 등 구체적 사업에 대한 취임 후 착수 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "대구광역시"
 },
 {
  "name": "박용철",
  "office": "강화군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "강화경제자유구역은 산업부에 지정 신청서를 제출하고 6차례 사전협의를 마쳤으나 최종 지정은 아직 확정되지 않음. 인구감소지역 대응기금 평가에서 수도권 최초 S등급으로 88억원을 확보하고 인구증대담당관을 신설하는 등 구체적 조치가 일부 확인됨.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3423905"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "골목형상점가 지정 추진, 풍물시장 노외주차장 조성 등 소상공인 지원 조치가 진행되고 있으나 대규모 사업 완료 보도는 확인되지 않음.",
    "source": "https://www.asiaa.co.kr/news/articleView.html?idxno=235930"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "강화군 최초 파크골프장(총사업비 37억원, 양도면 건평리)이 실제 착공식을 갖고 공사 중. 시니어친화형 국민체육센터, 화도 다목적체육관 등 나머지 시설은 아직 계획 단계.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3548388"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "어르신 무상택시 시행, 인공관절 수술비 지원 대상을 중위소득 150%까지 확대, 노인복지관 별관 건립(117억원) 추진, 스마트헬스케어경로당 111개소로 확대 등 실제 운영 중인 사업이 다수 확인됨.",
    "source": "https://www.kyeonggi.com/article/20251016580303"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "강화~계양 고속도로 착공, 영종~강화 연륙교 등은 인천시·국토부 주도 사업으로 올해 목표로만 언급되고 있으며, 신임 군수 차원의 독자적 착수 사례는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "김진규",
  "office": "검단구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "GTX-D, 서울지하철 5호선 검단연장 등은 국토부·인천시 주도 광역사업으로, 구청장은 국가계획 반영을 위한 협의체 구성을 요청하는 수준이며 별도 착수 사례는 확인되지 않음.",
    "source": "https://www.kyeongin.com/article/1763881"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "인천시교육청 방문 및 도성훈 교육감 면담을 통해 과밀학급·통학안전 개선을 건의했으나, 구체적 예산 반영이나 학교 신설 등 실질적 조치는 확인되지 않음.",
    "source": "https://www.kmaeil.com/news/articleView.html?idxno=644397"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "대형 종합병원 유치는 후보 시절부터 공약으로 제시됐고 검단신도시 내 의료부지(약 1만5천평)가 조성돼 있으나, 취임 후 병원 유치 협약이나 사업자 선정 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.kihoilbo.co.kr/news/articleView.html?idxno=3029365"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "검단구가 7월 1일 공식 출범해 동하동 임시청사(LH·IH 무상임대 모듈러 건물)에서 실제 행정서비스를 운영 중. 다만 아라2동 행정복지센터 착공, 검단경찰서 준공 등 나머지 세부 사업은 아직 확인되지 않음.",
    "source": "https://www.incheon.go.kr/IC010205/view?repSeq=DOM_0000000013574513"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "‘검단 AI밸리’, 검단형 청년창업 거점 조성 등은 구상·계획 발표 단계이며, 조직 설립이나 예산 반영 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.livesnews.com/news/article.html?no=59927"
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "박형우",
  "office": "계양구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "계양테크노밸리 앵커기업 조기 유치를 강조했으나, 구체적 기업 유치 협약이나 계약 체결 등 실질 성과는 아직 확인되지 않음.",
    "source": "https://www.kyeongin.com/article/1765205"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "GTX-D, 대장홍대선 계양 연결은 국토부·인천시 주도 광역철도 계획으로, 구청장 차원의 연결 요청 외 별도 착수 사례는 확인되지 않음.",
    "source": "https://news.ifm.kr/news/articleView.html?idxno=474170"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "계양산성 복원사업은 2020년 국가문화재 지정 이후 이미 진행 중인 다년간 사업으로, 박형우 구청장이 계양산성 복원정비 현장을 직접 방문하는 등 지속 추진되고 있음.",
    "source": "https://www.anewsa.com/detail.php?number=2047182"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "계양e음 지역화폐는 이미 발행·운영 중인 프로그램이며, 박형우 구청장이 재개장한 홈플러스 작전점을 직접 찾아 이용 활성화 캠페인을 펼치는 등 실제 운영이 지속되고 있음.",
    "source": "https://www.dongbangilbo.co.kr/news/articleView.html?idxno=101871"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "취임사에서 '계양형 생애주기별 통합돌봄 체계 구축'을 선언했으나, 구체적 조직 신설이나 예산 반영 등 후속 조치는 아직 확인되지 않음.",
    "source": "https://v.daum.net/v/20260701115120436"
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "이병래",
  "office": "남동구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임식에서 4대 목표·6대 약속을 통해 '혁신경제도시 남동' 방향을 제시하고 남동산단 K-뷰티화 구상을 밝혔으나, 구체적 사업 착수나 예산 반영은 확인되지 않음.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=778372"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "기존 주민참여예산제를 보완해 2027년 제안사업 공모부터 반영하겠다는 계획을 밝혔으나 아직 시행 전 단계임.",
    "source": "https://www.kgnews.co.kr/mobile/article.html?no=906546"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "AI·IoT를 활용한 위기가구 발굴 등 '기본사회도시' 정책 방향을 제시했으나, 구체적 시스템 구축이나 예산 집행 사례는 확인되지 않음.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1285732"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "소래습지·소래포구·인천대공원을 잇는 생태·문화·교육 관광벨트, 마을·학교 연계 교육생태계 조성 등을 공약으로 제시했으나 취임 후 구체적 착수 사례는 확인되지 않음.",
    "source": "https://m.inews24.com/v/1959944"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "'지속가능 생활도시 남동' 관련 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "김정식",
  "office": "미추홀구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "미추홀구가 승학산둘레길, 수봉공원길 등 기존 숲길 5곳에 도로명을 부여해 안전·편의성을 높였으나, 인천대로 중앙부 신규 숲길이나 사계절 정원길 벨트 조성 등 신규 사업 착수는 확인되지 않음.",
    "source": "http://www.focusincheon.com/news/articleView.html?idxno=9997"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "DCRE 기부채납 부지에 신청사 기본설계가 진행 중이며, 층수를 9층에서 6층으로 낮추는 대신 500석 공연장 등 주민 문화공간을 확대하는 방향으로 설계를 조정해 10월 설계안 공개를 앞두고 있음. 다만 최종 확정이나 착공은 아직 이뤄지지 않음.",
    "source": "https://www.inews24.com/view/2000304"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "DCRE 기부채납 부지 10만평 체육공원화 관련 4자협의체 구성이나 기본구상 수립 등 구체적 진전 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "승기천 물길 복원과 관련한 타당성조사나 국비 확보 등 구체적 조치 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "승학산 예비군훈련장 이전과 관련해 국방부·인천시와의 협의 진전이나 구체적 조치 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "차준택",
  "office": "부평구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "굴포천 생태하천 복원사업(1단계)이 공정률 82%로 9월 완공을 목표로 백마교 교량·호안·산책로 조성 등 실제 공사가 진행 중이다. 2단계 구상 용역 등 후속 계획은 아직 확인되지 않는다.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3288853"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "재개발·재건축 원스탑 지원센터는 선거 공약 발표 단계에 머물러 있으며, 취임 후 실제 센터 설치나 운영 개시 보도는 찾지 못했다.",
    "source": "https://www.dailian.co.kr/news/view/1645589/%EC%B0%A8%EC%A4%80%ED%83%9D-%EB%B6%80%ED%8F%89-%EB%AF%B8%EB%9E%98%EC%84%B1%EC%9E%A5-%EA%B3%B5%EC%95%BD-%EB%B0%9C%ED%91%9C-%E2%80%9C%EB%8F%84-2026"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "부평역 GTX-B 복합환승센터는 기본·실시설계 용역이 마무리 단계로 내년 착공을 목표로 실제 설계 작업이 진행 중이다.",
    "source": "https://www.incheontoday.com/news/articleView.html?idxno=250427"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "1113공병단 부지는 우선협상대상자 및 토지매입 예비시행자(교보증권 컨소시엄) 선정이 완료돼 관계기관 협의와 도시개발구역 지정 절차가 실제 진행 중이다.",
    "source": "https://www.incheonnews.com/news/articleView.html?idxno=417819"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "캠프마켓 신촌문화공원(44만㎡) 조성은 타당성조사 대상 선정이 완료돼 중앙투자심사 등 절차가 진행 중이며, 2026년 식물원 1단계 사업을 시작으로 단계적 추진 계획이 확정됐다.",
    "source": "https://www.incheontoday.com/news/articleView.html?idxno=307385"
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "구재용",
  "office": "서구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "AI 대전환·AI 상황실 등은 취임 인터뷰에서 방향만 제시된 상태이며, 취임 후 조직 신설이나 예산 반영 등 구체적 착수 보도는 확인되지 않는다.",
    "source": "https://www.newsis.com/view/NISX20260701_0003691885"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "인천대로·경인고속도로 지하화는 국토부·인천시 주도의 기존 광역사업으로 이미 별도 일정(2027~2028년 착공)이 진행 중이며, 신임 구청장의 독자적 착수나 신규 조치는 확인되지 않는다.",
    "source": "https://www.khan.co.kr/article/202503251439011"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "핵심 공약인 '서해구 청년청' 관련 첫 단계로 8월 제4기 청년정책위원회·청년참여단 발대식이 실제 개최돼 청년 거버넌스가 출범했다.",
    "source": "https://www.viva100.com/article/20260807500455"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "어르신 복지·시니어타운 관련 취임 후 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "가정·신현·석남·가좌동 중심 재개발·재건축 통합지원센터 설치 및 이음카드 캐시백 확대는 아직 계획·공약 발표 단계로, 실제 설치나 시행 보도는 확인되지 않는다.",
    "source": "https://www.thepublic.kr/news/articleView.html?idxno=309804"
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "이재호",
  "office": "연수구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "송도 분구 추진을 위해 정부·인천시에 타당성 건의문을 실제 전달했고 여론 수렴을 위한 분구추진위원회 구성을 진행 중이나, 법적 절차(행안부 승인 등)는 아직 초기 단계다.",
    "source": "https://www.hankyung.com/article/2026081149161"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "연수·선학지구 용적률 상향(287%→340%) 및 신속통합지원 전담팀 신설은 계획 발표 단계이며, 취임 후 전담팀이 실제 구성됐다는 보도는 확인되지 않는다.",
    "source": "https://www.kyeonggi.com/article/20260604580194"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-B 청학역 신설은 2025년 말 국토부 차원에서 이미 확정된 광역사업으로, 구청장은 환영 입장을 밝혔을 뿐 별도의 독자적 조치는 확인되지 않는다.",
    "source": "https://www.kyeongin.com/article/1756971"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "국가 양자클러스터 지정 공모는 인천시가 충북·강원과 함께 초광역 컨소시엄을 구성해 추진 중인 인천시 주도 사업으로, 연수구청장의 독자적 착수 사례는 확인되지 않는다.",
    "source": "https://www.kyeongin.com/article/1764087"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "AI 스마트 행정(AX) 전담조직 신설, 마음봄센터 등 관련 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "손화정",
  "office": "영종구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 전 인수위원회가 GTX-D·E 관련 로드맵 마련에 착수했으나, 노선 결정 권한은 국토부·인천시에 있고 아직 계획 수립 단계에 머물러 있다.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3408921"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "영종 공공종합병원도 인수위 로드맵 착수 단계로, 정부·인천시와의 협의를 거쳐야 하는 사안이며 아직 구체적 사업 착수는 확인되지 않는다.",
    "source": "https://www.khan.co.kr/article/202606301454001/"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "공항경제권 연계 항공정비(MRO) 인력양성과정과 항공보안요원 양성과정을 실제 운영해 각각 20명, 22명의 수료생을 배출하는 등 프로그램이 실행 중이다.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=786903"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "환승관광 활성화 및 관광특구 지정은 취임 초 비전 제시 단계이며, 구체적 지정 절차나 사업 착수 보도는 확인되지 않는다.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3408921"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "행정타운 조성은 주요 추진 과제로 언급됐을 뿐, 부지나 예산 등 구체적 착수 내용은 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "장정민",
  "office": "옹진군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "인천~백령항로 2000톤급 대형카페리 신조를 위해 인천시·고려고속훼리·옹진군 등이 공동협약(MOU)을 체결하고 우선협상대상자 선정까지 마쳐, 2028년 취항을 목표로 실제 절차가 진행 중이다.",
    "source": "https://www.incheonin.com/news/articleView.html?idxno=110430"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "해상풍력 주민 이익공유제는 조례 제정 등 공약 발표 단계이며, 취임 후 실제 조례 제정이나 조합 구성 등 착수 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "AI 스마트 양식 확대 등 농·어업 육성 관련 취임 후 구체적 시범사업 착수 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "해양관광 자원 개발은 취임사에서 방향이 제시된 수준이며, 각 섬 관광 인프라 조성 등 구체적 착수 사례는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "응급의료헬기(메디온) 상주 배치, 병원선 확대 등은 공약 발표 단계이며 취임 후 실제 배치나 협약 체결 보도는 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "김찬진",
  "office": "제물포구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "동인천역·인천역 역세권 개발 신속 추진 의지를 지속 밝혔으나, 취임 3개월 시점 별도 전담 TF 신설이나 신규 착수 보도는 확인되지 않음. 기존 동구 시절 통합준비 TF의 연장선일 뿐임.",
    "source": "https://www.kyeonggi.com/article/20260522580234"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "제물포구가 2028년 개원 예정인 해사국제상사법원의 임시청사(옛 중구의회 청사) 유치에 실제로 성공했으며, 본원 내항 유치도 이어서 추진 중. 다만 벤처밸리·해양레저클러스터 등 나머지 사업은 구상 단계.",
    "source": "https://biz.heraldcorp.com/article/10787174"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "교육국제화특구 지정 추진과 제2 어린이영어도서관 건립을 공약사업 보고회에서 핵심 과제로 재확인했으나, 추진위 구성이나 교육부 건의 등 구체적 착수 사실은 보도되지 않음.",
    "source": "https://www.kookjeilbo.com/news/article.html?no=103275"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "민선9기 공약사항 추진계획 보고회에서 송림고가교 철거, 순환3·4호선, KTX 인천역 연장 등 교통 공약 9건을 재확인했으나 모두 국토부·인천시 소관 광역사업으로, 구청장 차원의 신규 착수는 확인되지 않음.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=789299"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "월미도·차이나타운·개항장 등을 잇는 관광벨트 브랜드화 비전을 취임 초 강조했으나, 통합 브랜드 개발이나 상상플랫폼 상설화 등 구체적 사업 착수 보도는 찾지 못함.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=778724"
   }
  ],
  "region": "인천광역시"
 },
 {
  "name": "박병규",
  "office": "광산구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "광주송정역 환승역세권 개발, AI산업벨트, 황룡강 수변공원 등을 통합특별시·중앙정부에 건의하는 수준으로, 광산구 자체의 독립적 착수나 예산 반영은 확인되지 않음.",
    "source": "https://www.getnews.co.kr/news/articleView.html?idxno=870480"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "골목상권 디지털특공대, 청년 일자리모델 등 세부 사업에 대한 구체적 시행 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "의료·복지·주거를 잇는 통합돌봄망 구축을 위해 3개 소위원회가 실제 가동 중이며, 휴블런스(병원동행)·마을밥카페 등 광산형 통합돌봄 서비스가 이미 상시 운영되고 있음.",
    "source": "https://www.joongangenews.com/news/articleView.html?idxno=543837"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "월곡동 로컬브랜딩 종합계획을 수립 완료하고, 방치된 폐파출소를 마을 거점으로 리모델링하는 사업을 실제로 추진 중.",
    "source": "http://www.newsworker.co.kr/news/articleView.html?idxno=381532"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "민선9기 취임 1호 결재로 '시민정책참여단 구성 및 운영계획'을 실제 승인했고, 전통 취임식 대신 시민출범식을 개최함.",
    "source": "https://www.nocutnews.co.kr/news/6541383"
   }
  ],
  "region": "광주광역시"
 },
 {
  "name": "임택",
  "office": "동구",
  "pledges": [
   {
    "order": 1,
    "percent": 0,
    "note": "스마트버스정류장·공영주차장 확충 등에 대한 구체적 사업 착수 보도를 찾지 못했으며, 오히려 임택 청장은 주차 공간이 부족하지 않다는 입장을 밝힘.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 10,
    "note": "AI 헬스케어밸리 조성, AI 돌봄테크 실증센터 구축, 조선대 도심캠퍼스 유치 등을 민선9기 핵심 비전으로 제시했으나, 아직 '추진할 계획' 단계로 구체적 착수 사실은 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260703000345"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "국립현대미술관 광주관 부지로 신양파크호텔 부지가 후보지 중 하나로 거론되고 있으나, 문체부·미술관 주도의 부지선정 경쟁이 진행 중일 뿐 동구 확정이나 별도 착수는 없음.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=841042"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "맘택시·행복동구택시 확대, 24시간 돌봄, 스마트경로당 조성 등을 6대 분야 60개 공약으로 재확인했으나 구체적 시행 시점이나 예산 반영 보도는 찾지 못함.",
    "source": "https://www.fieldnews.co.kr/news/articleView.html?idxno=227309"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "기후위기 대응 및 주민 부담 경감을 위해 태양광 설비 설치 관련 규제를 실제로 완화하는 조치를 취함.",
    "source": "https://view.asiae.co.kr/article/2026090214100353387"
   }
  ],
  "region": "광주광역시"
 },
 {
  "name": "신수정",
  "office": "북구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "'주민주권도시 북구' 공약으로 일반시 전환, 새 이름(무등구 등) 공모, 정책투표 상시화를 발표하고 인수위 및 '북구톡톡' 플랫폼을 운영 중이나, 공식 공론화위원회 구성이나 타당성 연구용역 착수는 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260528000920"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "광주역을 복합교통허브로 재편하겠다는 방향을 밝혔으나, 임시버스터미널 전환을 위한 협의체 구성 등 구체적 착수 보도는 찾지 못함.",
    "source": "https://www.geconomy.co.kr/news/article.html?no=321944"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "31사단 부지를 AI 국방혁신클러스터로 개발하는 기본구상 수립 용역과 3단계 로드맵이 이미 마련됐으나, 이는 전임 구청장 시기(2025년 말) 완료된 것으로 신수정 취임 이후의 별도 신규 조치는 확인되지 않음.",
    "source": "https://www.mdns.co.kr/news/articleView.html?idxno=29445"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "패밀리랜드 사파리월드 리모델링 등 체류형 생태관광 공약을 제시했으나, 예산 반영이나 사업 착수 사실은 확인되지 않음.",
    "source": "https://www.jnilbo.com/news/articleView.html?idxno=90000044349"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "취임식을 취소하고 침수 취약지를 직접 점검했으며, 서방천·석곡천 하천기본계획 수립 용역(사업비 약 3.4억원)에 9월 초 실제 착수함.",
    "source": "http://www.civilreporter.co.kr/news/articleView.html?idxno=542762"
   }
  ],
  "region": "광주광역시"
 },
 {
  "name": "김찬술",
  "office": "대덕구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "노후 대전산단을 스마트그린산단으로 전환하겠다는 비전을 후보 시절부터 제시했으나, 취임 이후 대덕구 차원의 별도 신규 착수 보도는 확인되지 않음(기존 대전시·산단공 통합관제센터 사업과는 별개).",
    "source": "https://www.timenews.co.kr/article/1698419"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "대청호·계족산을 연계한 생태관광 및 대덕형 RC복합레저파크 구상을 제시했으나, 글램핑장·DRT 등 세부 사업의 구체적 착수 사실은 찾지 못함.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1250580"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "취임 직후 '미래전략TF'를 가동해 민선9기 5대 정책프로젝트를 추진 중이며, 재개발·재건축 신속추진 지원센터를 통한 주민교육·컨설팅·갈등조정 지원 체계 마련을 위한 정책간담회를 개최함.",
    "source": "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003256472"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "보도 턱 낮추기, 저상버스 승하차 시스템, 점자블록 정비 등 무장애 인프라 계획을 발표했으나 '시범운영 후 확대' 단계로, 아직 실제 착수는 확인되지 않음.",
    "source": "https://www.newsfreezone.co.kr/news/articleView.html?idxno=684646"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "S-BRT 도입과 무장애 인프라를 통한 교통체계 전환을 제시했으나, 신탄진IC 개선이나 천변고속화도로 통행료 관련 구체적 착수·협의 진전은 확인되지 않음.",
    "source": "https://www.newsfreezone.co.kr/news/articleView.html?idxno=684646"
   }
  ],
  "region": "대전광역시"
 },
 {
  "name": "황인호",
  "office": "동구",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "취임 직후 첫 현장행보로 대전역세권 복합2구역 개발사업과 대전역 미래형 환승센터 조성 현장을 직접 점검함. 해당 사업은 이미 실제 개발이 진행 중인 프로젝트로 구체적 실행 활동이 확인됨.",
    "source": "https://www.ccdn.co.kr/news/articleView.html?idxno=1086403"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "당초 2024년 착공·2026년 완공 목표였던 시립병원(대전의료원)은 공사비 상승 등으로 지연 중이며, 신임 구청장은 조기 착공 의지를 밝혔을 뿐 실제 착공이나 예산 확정 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.ccnnews.co.kr/news/articleView.html?idxno=410441"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "대전역세권 20층 규모 빵타워 및 관광벨트 조성은 선거 기간 구상 발표 단계에 머물러 있으며, 취임 후 부지 확보나 사업 착수 등 구체적 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "성남동 구성지구 중학교 이전 설립은 선거 공약 발표 시점에 LH 부지 확보가 현실적 과제로 지적된 상태이며, 취임 후 진전된 후속 조치 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "동별 행정복지센터 신축, 공영주차장 및 파크골프장 조성 등은 선거 공약 단계에 머물러 있으며, 취임 후 예산 반영이나 착공 등 구체적 진행 보도는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "대전광역시"
 },
 {
  "name": "전문학",
  "office": "서구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "'MY서구 앱' 구축은 취임사에서 구민주권·디지털 소통 행정의 방향으로 제시되었으나, 앱 개발 착수나 예산 반영 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=271935"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "취임 후 첫 행보로 환경정화 활동을 진행했으나 이는 통상적 환경미화 활동에 가깝고, 유휴시설을 활용한 '그린 오아시스' 조성 사업 자체의 착수(부지 조사, 예산 확보 등)는 확인되지 않음.",
    "source": "https://www.anewsa.com/detail.php?number=3174033"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "아픈 아이 병원동행, 돌봄 마음지킴이 등 대상별 맞춤형 돌봄 사업은 선거 공약 발표 단계에 머물러 있으며, 취임 후 사업 개시나 예산 편성 등 구체적 근거는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "서구 농인 쉼터(청각장애인 복합 커뮤니티센터) 조성과 관련해 취임 후 부지 선정이나 착수 관련 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "은퇴 전문가 활용 '서구 베테랑주식회사' 설립은 선거 공약 단계에 머물러 있으며, 법인 설립이나 조직 구성 등 취임 후 구체적 진전은 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "대전광역시"
 },
 {
  "name": "정용래",
  "office": "유성구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "민선9기 취임 첫날 1호 사업으로 500억원 규모 '지역투자(창업혁신)펀드 조성'을 결재해 추진 방침을 확정했으나, 실제 펀드 결성이나 운용사 선정 등 집행 단계까지는 이르지 못함.",
    "source": "https://www.khan.co.kr/article/202607301515001/"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "마을 커뮤니티 공간 확충 등 주민자치도시 관련 정책은 취임사에서 방향이 재확인된 수준이며, 취임 후 신규 공간 조성 착수나 예산 집행 등 구체적 진전은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "햇빛복지마을, 스마트복합쉼터, 도로안전통합센터 등 기후·안전 공약은 선거 공약 발표 단계에 머물러 있으며, 취임 후 구체적 착수 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "상상놀이터, 제2장애인종합복지관, 시니어주택 등 복지 인프라 공약은 애초 임기 내(2026~2030) 단계적 추진 계획이며, 취임 3개월 시점 부지 확정이나 착공 등 구체적 진전은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "'2026 유성구 테크아트 거버넌스 협의체' 첫 회의를 열어 테크아트 도시 조성 기본계획 실행 로드맵과 미디어경관 조성 방안을 논의하는 등 조례 기반 협의체가 실제 가동을 시작함.",
    "source": "https://www.cctoday.co.kr/news/articleView.html?idxno=2219253"
   }
  ],
  "region": "대전광역시"
 },
 {
  "name": "김제선",
  "office": "중구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "주민참여예산을 8억원에서 34억원 규모로 확대하고 주민자치회를 전면 시행하겠다는 구상이 선거 과정에서 제시됐으나, 취임 후 예산 실제 반영이나 조례 개정 등 구체적 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 55,
    "note": "지역화폐 '중구통'은 이미 모바일 앱 기반으로 관내 다수 가맹점에서 실사용되는 운영 중인 사업으로, 재선 이후에도 고도화 방침 하에 계속 운영되고 있음. 다만 혁신산업단지 신규 조성 등은 확인되지 않음.",
    "source": "https://www.newsfreezone.co.kr/news/articleView.html?idxno=620408"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "정비사업 신속지원센터가 이미 설치·운영되어 재개발·재건축 관련 간담회 등을 이어가고 있으나, 추정분담금 검증위원회 구성 등 이번 임기 신규 조치는 구체적으로 확인되지 않음.",
    "source": "https://www.ccdn.co.kr/news/articleView.html?idxno=1017162"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "경로당을 거점으로 돌봄·건강·배움 서비스를 통합한 '우리동네 3·4·5 통합돌봄 플랫폼'을 선화3·석교·남부·본동 등 4개 경로당에서 시범 운영하며 실제 가동을 시작함.",
    "source": "http://www.daejeontoday.com/news/articleView.html?idxno=746407"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "평생학습관 확대 이전, 청년 취·창업 지원체계 구축 등 기본교육도시 공약은 방향 제시 수준이며, 취임 후 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "대전광역시"
 },
 {
  "name": "임현철",
  "office": "남구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 전 발표한 태화강역·삼산달동·옥동무거 3대 권역 개발 구상이 여전히 비전 제시 수준이며, 취임 후 도시관리계획 재정비나 민간투자 협력체계 구축 등 구체적 착수는 확인되지 않음.",
    "source": "https://news.bbsi.co.kr/news/articleView.html?idxno=4096264"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "레저·관광벨트, 수소융복합밸리 투자유치 등 3대 벨트 구상을 제시했으나, 글로벌 투자유치단 구성이나 민생경제 전담조직 신설 등 실제 조치는 확인되지 않음.",
    "source": "https://www.hankookilbo.com/news/article/A2026072909430004244"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "민선 9기 첫 조직개편을 입법예고해 7국→6국으로 관리기구는 줄이되 복지·안전 등 현장대응 인력은 실제로 증원하는 안을 마련, 9월 남구의회 의결을 앞두고 있음.",
    "source": "https://biz.heraldcorp.com/article/10841004"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "울산시·시교육청과의 보육 협의체 구성이나 연차별 추진계획에 대한 구체적 진전은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "취임 1호 결재로 '민생경제 119기동팀'을 실제 가동, 소상공인·자영업자 현장을 직접 찾아가 3주 만에 130여 건의 민원을 접수·해결하는 등 운영 중.",
    "source": "https://www.hankyung.com/article/2026083146631"
   }
  ],
  "region": "울산광역시"
 },
 {
  "name": "천기옥",
  "office": "동구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "원·하청 임금격차 해소를 위한 노사민정협의회 정례화, 구청장 직속 노동특보 신설 등을 밝혔으나 실제 기구 구성이나 위촉이 확인되는 보도는 찾지 못함.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1064029"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 후 제1호 결재로 '24시간 긴급돌봄센터 운영' 사업을 실제 결재하고, 기존 돌봄시설을 활용한 거점형 시범 운영 계획을 구체화함.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1064861"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "청년자립수당, 원스톱 창업지원, 빈 점포 활용 창업공간 조성 등을 공약·강조했으나 취임 후 별도 예산 편성이나 전담조직 신설 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1064029"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "대왕암공원 케이블카·콘도, 바다버스 등 해양관광 인프라 공약은 확인되나 취임 이후 구체적 추진 절차나 예산 반영 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "집중호우 피해 발생 시 현장을 직접 점검하고 위험지역 관리를 약속하는 등 안전행보는 있었으나, 경로당 환경개선·차고지 확충 등 공약사업 자체의 착수는 확인되지 않음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3680139"
   }
  ],
  "region": "울산광역시"
 },
 {
  "name": "이동권",
  "office": "북구",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "아동 간식 바우처, 중고생 교통비 지원, 공공산후조리원 이용료 지원 확대 등을 취임사에서 강조했으나 조례 제정이나 예산 반영 등 구체적 착수 보도는 확인되지 않음.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1064087"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "취임 제1호 결재로 '북구 교통혁신 종합계획 수립 추진계획'을 결재하고 공무원·전문가·주민이 참여하는 구청장 직속 '북구 교통혁신 TF'를 실제 구성했으며, 공약에 포함된 농소~강동 연결도로도 이미 착공해 실제 공사가 진행 중임.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026072018162666134"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "EV·수소 산업클러스터 조성, 공공기관·공공의료원 유치 등 5000개 일자리 창출을 약속했으나 취임 후 투자유치 TF 운영이나 협약 체결 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1064087"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "울산숲 시설 보강, 강동권 해양관광 거점 육성이 핵심과제로 제시됐으나 취임 3개월 시점 구체적 사업 착수나 예산 반영 보도는 찾지 못함.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1063627"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "산업재해 예방과 노동복지 강화를 위한 노동·안전 정책 협의체 구성을 하기로 했다고 밝혔으나, 실제 협의체 구성이나 버스노선 개편 시행이 완료됐다는 보도는 확인되지 않음.",
    "source": "https://www.iusm.co.kr/news/articleView.html?idxno=1067203"
   }
  ],
  "region": "울산광역시"
 },
 {
  "name": "이순걸",
  "office": "울주군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "군비 150억원 등 총 1000억원 규모 청년성장펀드 조성 계획을 재선 공약과 취임 후 인터뷰에서 재확인했으나, 실제 모펀드 결성이나 출자 협약 체결 등 착수 사실은 확인되지 않음(울산시가 별도로 조성한 500억원 규모 미래성장펀드와는 별개 사업).",
    "source": "https://www.hankyung.com/article/2026080323011"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "권역별 통합돌봄 인프라 중 남부권 육아종합지원센터는 설계공모 당선작('별별놀이터')이 선정되고 실시설계 및 근로자복지회관 병행 용역이 진행되는 등 구체적 착수 단계에 있음(착공은 2028년 예정).",
    "source": "https://www.asiae.co.kr/article/2025091711352288656"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "고교생 대상 '천원의 아침밥'을 1호 공약으로 내걸고 우선 고등학생부터 시범 시행하겠다고 밝혔으나, 취임 후 실제 급식 시행이 개시됐다는 보도는 확인되지 않음.",
    "source": "http://www.fnnews.com/news/202605072200250960"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "농기계 지원, 친환경 농자재 지원, 한우 유전데이터지원센터 건립 등이 공약에 포함돼 있으나 취임 후 관련 신규 예산 편성이나 착공 등 구체적 진행 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "농촌·교통취약지역 대상 AI 기반 수요응답형 버스(DRT) 도입 구상을 밝혔으나 사업 자체가 2027년 국토부 공모 추진을 전제로 하고 있어 현재는 구상 단계에 머물러 있음.",
    "source": "https://www.fnnews.com/news/202605042026272774"
   }
  ],
  "region": "울산광역시"
 },
 {
  "name": "김영길",
  "office": "중구",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "재선 취임 제1호 결재로 '어린이 복합문화공간(전용도서관·키즈카페)' 조성을 실제 결재하고, 종갓집도서관 옆 부지 매입과 층별 시설 배치를 담은 로드맵까지 구체화함(착공 전 단계).",
    "source": "https://www.ksilbo.co.kr/news/articleView.html?idxno=1061017"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "선거 과정에서 구청·조합·시공사 등이 참여하는 재개발·재건축 지원 TF 구성을 공약했으나, 취임 후 해당 TF가 실제로 구성·운영되고 있다는 보도는 확인되지 않음.",
    "source": "https://www.ksilbo.co.kr/news/articleView.html?idxno=1057500"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "민선 9기 5대 분야 123개 공약사업 추진 기본계획에 개발제한구역 해제가 포함돼 방향은 제시됐으나, 국토부 등과의 협의를 요하는 사안으로 실제 해제나 총량 확보 등 진전은 확인되지 않음.",
    "source": "https://www.ksilbo.co.kr/news/articleView.html?idxno=1061326"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "성안·약사 일반산업단지 조성도 공약이행 기본계획에 포함돼 추진 방향이 재확인됐으나, 취임 후 그린벨트 해제 협의나 사업시행자 지정 등 구체적 착수 보도는 찾지 못함.",
    "source": "https://www.ksilbo.co.kr/news/articleView.html?idxno=1061326"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "다운동 도심융합특구는 정부 지정을 거쳐 민선 8기부터 이어져 온 사업으로, 인근 민간 아파트 분양 홍보에도 활용될 만큼 지구계획이 가시화돼 있는 등 실질적으로 추진 중인 사업임.",
    "source": "https://www.ksilbo.co.kr/news/articleView.html?idxno=1058888"
   }
  ],
  "region": "울산광역시"
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
