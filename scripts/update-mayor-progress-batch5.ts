import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
 {
  "name": "김중남",
  "office": "강릉시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 기자회견에서 AI 데이터센터 유치와 '강릉 실리콘힐스' 조성을 미래산업 핵심 과제로 제시했으나, 취임 2개월 시점 구체적 예산 반영이나 TF 설치 등 실질 착수 보도는 확인되지 않는다.",
    "source": "https://m.kwnews.co.kr/article/20260809500752"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "강릉·동해·양양 3개 시군의 '영동권 메가시티'를 제안하며 즉각적 행정통합보다 단체장 간 협의체 구성부터 시작하겠다고 밝혔으나, 아직 실제 협의체 구성이나 공동 추진 조치는 확인되지 않는다.",
    "source": "https://www.nspna.com/country/?mode=view&newsid=819075"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "취임사에서 '철학도시' 등 문화창의도시 방향을 제시했으나, 창작레지던스 확장이나 생활문화 플랫폼 구축 등 구체적 사업 착수 보도는 찾지 못했다.",
    "source": "https://v.daum.net/v/20260702134818490"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "취임 1호 결재로 전 시민 1인당 10만원 강릉페이 민생지원금 지급을 승인했고, 강릉페이 월 한도를 30만원에서 50만원으로 실제 상향하고 소상공인 긴급 이자·경영안정자금 지원 등을 가동해 실행 중인 정책이 확인된다.",
    "source": "https://www.news1.kr/local/kangwon/6214313"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "태양광·풍력 기반 시민배당, 청년·청소년·어르신 배당 등 기본사회 공약과 관련해 취임 2개월 시점 구체적 조례 제정이나 재원 마련 등의 보도는 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "함명준",
  "office": "고성군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "태양광·풍력 발전 수익을 주민에게 배분하는 '에너지 연금' 사업을 민선9기 주요 과제로 제시했으나, 에너지기본조례 제정이나 발전시설 착공 등 구체적 조치는 확인되지 않는다.",
    "source": "https://www.mbceg.co.kr/post/137843"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "고성군은 2026년 2월 '고성 원암 웰니스 리조트 조성사업' 투자협약을 체결, 약 11만㎡ 부지에 2032년까지 8800억원을 투입해 관광호텔·휴양콘도 734실을 조성하는 사업이 실제로 계약 체결 단계에 진입했다.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260213010004901"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "해양심층수 국가산업단지 승격을 민선9기 과제로 제시했으나, 취임 2개월 시점 승격 절차 진전이나 기업유치 실적에 대한 구체적 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "고성군 청소년 유럽문화탐방 사업이 2026년 상반기 1·2차로 실제 운영되어 학생들이 동유럽·서유럽을 다녀왔고 결과보고회까지 개최되는 등 프로그램이 실질 운영 중이다.",
    "source": "https://www.seoraktimes.com/24166"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "숙원사업인 고성 제생병원이 2026년 3월 공사를 재개해 공정률 48.56%로 실제 건설이 진행 중이며(2029년 완공 목표), 평화경제특구 지정은 여전히 추진 선언 단계에 머문다.",
    "source": "https://www.bosik.kr/news/articleView.html?idxno=27216"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "이정학",
  "office": "동해시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "정부 AI 데이터센터 메가프로젝트 대상지 포함에 따라 부시장을 단장으로 한 'AI 데이터센터 지원 TF' 구성을 검토 중이나, 아직 TF 구성 완료나 실질 착수 보도는 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10798084"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "예산 1조원 시대를 목표로 국비 확보 체계 강화와 핵심사업 패키지 설계를 구상 중이나, 취임 2개월 시점 전담조직 설치나 실제 국비 확보 성과에 대한 구체적 보도는 찾지 못했다.",
    "source": "https://www.newspim.com/news/view/20260702001156"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GS그룹의 대규모 AI·에너지 투자 및 수소·방위산업 클러스터 조성 구상을 밝혔으나, 아직 협약 체결이나 구체적 산업단지 조성 착수 등은 확인되지 않는다.",
    "source": "https://www.newspim.com/news/view/20260728001005"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "인수위 보건복지분과가 응급의료 30분 체계 구축 방안을 마련 중이라고 밝혔을 뿐, 통합관제센터 설치 등 구체적 착수는 확인되지 않는다.",
    "source": "https://www.newspim.com/news/view/20260702001156"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "생애주기별 돌봄·복지 강화 방향을 제시했으나, 취임 2개월 시점 국공립 어린이집 확충이나 청소년복합센터 건립 등 구체적 사업 착수 보도는 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "박상수",
  "office": "삼척시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "삼척시가 국토부·국토교통과학기술진흥원의 '글로벌 액체수소 공급 인프라 건설 기술개발 사업' 실증 대상지로 최종 선정돼 국비 2668억원이 확정, 2028~2034년 수소액화플랜트 조성이 실제로 추진되고 있다.",
    "source": "https://gw.newdaily.co.kr/site/data/html/2026/02/27/2026022700401.html"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "폐갱도 석탄채움재 사업 등을 통한 전 세대 일자리 창출을 공약했으나, 산업통상자원부와의 구체적 협의 진전이나 사업 착수 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "영월~삼척 고속도로 조기 착공을 공약했고 예비타당성조사 통과는 이전 임기 성과로, 이는 국가 주도 사업이며 취임 이후 착공 등 신규 조치는 확인되지 않는다.",
    "source": "https://www.pinpointnews.co.kr/news/articleView.html?idxno=315890"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "삼척 골드시티(서울시 은퇴자 이주 신도시) 조성사업이 전략환경영향평가 등 실제 절차를 밟고 있고, 국립해양과학관 유치도 추진 중이어서 구체적 사업이 진행 상태에 있다.",
    "source": "https://m.kwnews.co.kr/page/view/2024092316143254866"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "삼척사랑카드 가맹점 결제수수료 지원사업이 실제로 시행 중이고 소상공인 지원 조례 개정안도 시의회에서 논의되는 등 골목상권 지원 정책이 실질 운영되고 있다.",
    "source": "https://www.g1tv.co.kr/news/?mid=1_207_3&newsid=328992"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "이병선",
  "office": "속초시",
  "pledges": [
   {
    "order": 1,
    "percent": 100,
    "note": "1호 공약인 전 시민 민생회복지원금 20만원을 위해 추경에서 173억원을 증액 확보했고, 2026년 7월 신청을 받아 실제 지급이 이뤄져 공약이 완료됐다.",
    "source": "https://www.fnnews.com/news/202607201537266591"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "45~69세 여성 대상 격년 부인과 진료비 20만원 지원 등을 공약했으나, 취임 2개월 시점 관련 조례 제정이나 예산 반영 등 구체적 착수는 확인되지 않는다.",
    "source": "https://news.mtn.co.kr/news-detail/2026051117023952164"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "분산된 소상공인 지원 창구를 일원화할 '자영업자 평생지원센터' 설립을 공약했으나, 실제 센터 개소나 예산 편성에 대한 보도는 아직 확인되지 않는다.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1255347"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "5060 신중년 재취업·창업 컨설팅 및 대형면허 취득 지원 등을 공약했으나, 취임 2개월 시점 사업 실제 시행에 대한 구체적 보도는 찾지 못했다.",
    "source": "https://news.mtn.co.kr/news-detail/2026051117023952164"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "총사업비 37억4천만원을 투입한 속초 파크골프장 확충사업(18홀→27홀)이 완공돼 2026년 7월 2일 개장식을 가졌으며, 대포 제2파크골프장·권역별 체육센터는 아직 계획 단계다.",
    "source": "https://www.ajunews.com/view/20260702180800265"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "김왕규",
  "office": "양구군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임사에서 청년 정착·인구소멸 대응을 핵심 과제로 제시했으나, 손주돌봄수당·청년임대아파트·IB교육과정 등 공약의 신규 조치는 확인되지 않음. 기존 출산장려금(첫째100·둘째200·셋째300만원)이 이어지고 있으나 공약된 증액(1000/2000/3000만원)은 아직 반영되지 않음.",
    "source": "https://www.ajunews.com/view/20260630134147707"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "민선9기 제1호 결재로 외국인 계절근로자 문제 해결을 위한 전담팀(TF) 구성을 실제로 추진, 농가 일손 부족 대응 체계 마련에 착수함.",
    "source": "https://www.ajunews.com/view/20260701192822512"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "원주지방환경청장 면담을 통해 파로호 꽃섬 하늘다리 조성사업 계획 변경에 대한 긍정적 답변을 얻어냈으나, 예산 확보나 착공 등 실질적 진전은 아직 없음.",
    "source": "https://www.sentv.co.kr/article/view/sentv202608060163"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "취임사에서 24시간 돌봄체계, 경로당 급식 지원 확대 등 복지 강화 방향을 제시했으나, 구체적 사업 착수나 예산 반영을 보여주는 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "국회·세종정부청사를 찾아 46번 국도 확장 및 동서고속화철도 용하~야천리 교량 사업의 국비 분담비율 조정을 건의했으나, 사업 주체가 국토부·철도공단이라 군수의 독자적 착수 조치는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10806900"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "김정중",
  "office": "양양군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 후 봄~겨울 테마의 사계절 축제 구상과 '365일 체류형 축제도시' 비전을 밝혔으나, 신규 축제 신설이나 예산 반영 등 구체적 착수 사례는 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20260702000776"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "속초·가평과 함께 접경지역 신규 지정 요건에 부합한다는 행안부 용역 결과를 확인하고 지정 준비에 나섰으나, 결정 권한이 중앙정부에 있어 실제 법 개정이나 지정은 이뤄지지 않음.",
    "source": "https://www.kwnews.co.kr/page/view/2026060450008200000"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "낙산해변-양양읍-남대천을 잇는 '원스톱 경제벨트' 구상을 밝혔으나 구체적 조성 사업 착수 보도는 찾지 못함.",
    "source": "https://www.kwnews.co.kr/page/view/2026060450008200000"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "초·중·고 자기계발비 지원 관련 조례 제정이나 예산 반영 등 구체적 진행 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "추석 명절 연계 고향사랑기부제 특별 이벤트(답례품 추가 증정 등)를 실제로 추진하며 모금 활성화에 나섰으나, 연 100억원 목표 달성 여부를 확인할 자료는 없음.",
    "source": "https://www.cfnews.kr/news/article.html?no=111494"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "김길수",
  "office": "영월군",
  "pledges": [
   {
    "order": 1,
    "percent": 0,
    "note": "취임사에서 군민통합·예산 1조원 시대 등 비전을 제시했으나, 청렴도 제고나 고향사랑기부금 확대를 위한 구체적 신규 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 55,
    "note": "산솔면 녹전리 첨단핵심소재산업단지(기회발전특구)는 2026년 4월 산업단지계획이 승인·고시되고 알몬티 대한중석의 상동광산 재개광과 맞물려 실제 인허가 절차가 진행 중이며 2027년 착공이 예정되는 등 실질적 추진 단계에 있음.",
    "source": "https://kwnews.co.kr/page/view/2025093008541383078"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "영월의료원 이전 부지를 활용한 저가 요양원 운영, 노인회관 확보 등에 대한 구체적 착수 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 30,
    "note": "'왕과 사는 영월' 프로젝트 추진을 위한 TF팀을 실제로 구성해 기존 관광지 편의시설 개선과 단종 관련 관광상품 개발을 진행 중임.",
    "source": "https://www.g1tv.co.kr/news/?mid=1_207_6&newsid=344635"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "영월군농업기술센터가 신규농업인 대상 영농기초기술교육 등 기존 프로그램을 운영 중이나, 청년농업인 지원 확대나 절대농지 해제 등 공약 관련 신규 조치는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "구자열",
  "office": "원주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "강원도지사를 만나 제2첨단의료복합단지 유치와 특별법 개정 지원을 건의했으나, 공약상의 '유치추진단' 구성 등 원주시 자체의 실질적 착수는 확인되지 않음.",
    "source": "https://www.news1.kr/local/kangwon/6252861"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "'원주 1억 아이키움 성장바우처'는 선거 공약 단계의 세부안(교통비·학년별 바우처 등)만 확인되며, 취임 이후 실제 제도 개편이나 예산 반영 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "GTX-D 서원주 연장은 국토교통부의 제5차 국가철도망구축계획 반영 여부에 달린 국가 주도 사업으로, 원주시 자체의 광역협의체 구성 등 별도 착수는 확인되지 않음.",
    "source": "https://www.kukinews.com/article/view/kuk202401250292"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "취임 후 첫 결재로 '시민주권위원회' 구성·운영계획을 승인했으나, 이는 일반 시민참여 기구로 원주교도소부지 관련 시민공론화위원회 운영 등 해당 공약의 구체적 진전은 확인되지 않음.",
    "source": "https://www.sentv.co.kr/article/view/sentv202606070001"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "'원주형 천원주택'은 선거 공약 단계의 재원 조달 방식(강원신보 출연·보증)만 확인되며, 취임 후 조례 제정이나 협약 체결 등 실행 단계 진입 보도는 찾지 못함.",
    "source": ""
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "최상기",
  "office": "인제군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 후 KTX 인제원통역 개통에 대비한 콤팩트시티·정원도시 비전을 제시했으나, '인제부:터'·공공임대주택 100호 등 구체적 사업 착수를 보여주는 보도는 찾지 못함.",
    "source": "https://www.ajunews.com/view/20260701194830523"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "도서관·체육센터 운영시간 확대나 AI 교육 신규 프로그램 도입에 대한 구체적 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "정원도시 네트워크 구상을 밝혔으나, 용대 지방정원·마을정원화 사업 착수 등 구체적 진행 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 30,
    "note": "농림축산식품부의 'AI 기반 수요응답형 교통모델 실증사업' 공모에 최종 선정되어 국비를 확보하며 사업 착수 단계에 들어갔고, 이는 버스요금 무료화에 이은 추가 조치임.",
    "source": "https://www.kukinews.com/article/view/kuk202607190025"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "남면 신남리 LPG배관망 구축사업(80억원, 688세대)이 시공설명회를 거쳐 실제 공급관로 설치가 진행 중이며, 12사단 의무대대 병원 신축은 2027년 착공 예정으로 준비 단계에 있음.",
    "source": "https://www.seoraktimes.com/23686"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "최승준",
  "office": "정선군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "정선군은 강원지역 인구소멸지역 중 유일하게 농어촌기본소득 시범사업에 선정돼 올해 2월부터 주민에게 월 15만원을 지급 중이며, 2026~2027년 총 1167억원을 투입해 연 180만원씩 지속 지급할 계획이 실제로 진행되고 있음.",
    "source": "https://www.kado.net/news/curationView.html?idxno=2019265"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "전국 최초로 전 군민 대상 공영버스 무료화가 이미 시행되고 있고, 정선을 지나는 동서 6축 고속도로가 예비타당성조사를 통과하는 등 광역교통망 확충이 실제로 진행 중.",
    "source": "https://www.100ssd.co.kr/news/articleView.html?idxno=123136"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "가리왕산 국가정원 조성 기본계획 및 타당성 검토 용역을 완료해 산림청에 관련 자료를 제출했으나, 최종 지정 여부는 산림청 소관으로 아직 결정되지 않음.",
    "source": "https://www.kmib.co.kr/article/view.asp?arcid=1724742443"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "강원랜드의 글로벌 복합리조트화를 위한 비카지노 투자 확대와 베팅한도 등 규제 완화를 정부에 지속 건의하는 수준이며, 실제 제도 변경이나 착수 사례는 확인되지 않음.",
    "source": "https://www.news1.kr/local/kangwon/6139332"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "정선군립병원 증축과 기숙사 신축이 마무리 단계에 들어섰고, 노인 일자리 확충·이미용 바우처 등 생애주기 복지사업이 계속 추진되고 있음.",
    "source": "https://m.kwnews.co.kr/page/view/2026060450004200000"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "김동일",
  "office": "철원군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "정부 농어촌기본소득 공모에는 미선정됐으나, 고유가 피해지원금 2차 지급(1인당 20만원, 철원사랑상품권 등)을 실제 집행하는 등 대체 민생지원 대책이 이미 시행되고 있음.",
    "source": "https://www.kitvnews.co.kr/news/article.html?no=1613626"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "취임 직후인 7월 1일부터 '일자리 사전예산심사제'를 실제로 시행 중이며, 이를 상시 제도화하기 위한 운영 조례 제정도 함께 추진하고 있음.",
    "source": "http://www.sydmznews.com/news/articleView.html?idxno=8154"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "철기50 벼 재배단지를 133.7ha에서 214.9ha로 확대하는 등 특화 생산기반 확충은 진행 중이나, 쌀값 안정화 상설기구 설치 등 별도 조치는 보도에서 확인되지 않음.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1285974"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "기존 출산장려금 등 개별 생애주기 복지사업은 유지되고 있으나, 이를 통합한 '생애주기 1억 지원 프로젝트'가 신설·추진되고 있다는 근거는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "포천~철원 고속도로 예비타당성조사 통과를 위해 경기도·강원도·포천시와 함께 관계기관 업무협약을 실제 체결했으나, 최종 결정은 기획재정부·국토부 소관으로 남아있음.",
    "source": "https://www.kado.net/news/articleView.html?idxno=2070643"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "육동한",
  "office": "춘천시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "재선 육동한 시장 하에서 '춘천시 바이오산업위원회'가 산·학·연·관 참여로 실제 개최돼 바이오 대전환 전략안을 의결하는 등 AI·바이오·양자 산업 육성 협의체가 계속 가동 중.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20251028010011178"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "교육발전특구 시범지역에 이미 선정돼 운영 중이고 강원과학기술원 설립 특례를 강원특별법 개정안에 반영하려는 노력이 계속되고 있으나, 특별법 제정 자체는 아직 완료되지 않음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3684324"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "옛 캠프페이지 부지 리본시티 프로젝트와 역세권 개발이 추진되고 있고, 춘천 다목적체육관 사업이 행안부 지방투자분석센터의 정부 타당성조사 대상 과제로 선정되는 등 실제 절차가 진행 중.",
    "source": "https://www.kado.net/news/articleView.html?idxno=2065713"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "'춘천형 통합돌봄' 사업이 올해 3월부터 전담체계를 구축해 실제 운영·확대되고 있으며, 'K-돌봄 선도도시' 비전 하에 복지 인프라 확충이 계속되고 있음.",
    "source": "https://www.dongbangilbo.co.kr/news/articleView.html?idxno=98984"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "춘천 다목적체육관 건립이 정부 타당성조사 대상 과제로 선정되는 등 구체적 절차가 진행 중이나, 국제스케이트장 유치 등은 아직 건의·검토 단계에 머물러 있음.",
    "source": "https://www.news1.kr/local/kangwon/6252763"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "이상호",
  "office": "태백시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "지역화폐 '탄탄페이'의 인센티브를 기존 10%에서 20%로 상향해 상시 지급하는 정책이 실제로 시행되고 있음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3495019"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "태백URL(연구용 지하연구시설) 조성을 위해 원자력환경공단과 상호협력 강화 업무협약을 실제 체결하고 후속 현장 협의도 진행했으나, 2030년 목표의 국책사업 특성상 착공은 아직 이뤄지지 않음.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20250829010014903"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "영월~태백~삼척 고속도로가 예비타당성조사를 통과했으나 태백을 직접 경유하지 않는 노선이 제시돼, 향후 기본·실시설계 단계에서 노선 조정을 추진 중인 단계.",
    "source": "https://www.fnnews.com/news/202511221237235525"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "대학생 지원금을 100만원에서 200만원으로 확대하겠다는 발표는 있었으나, 조례 개정 등 실제 시행을 확인할 수 있는 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "어르신 이미용 바우처 도입과 도로 열선 설치 확대는 강원특별자치도지사에게 건의한 수준이며, 조례 신설이나 예산 반영 등 구체적 착수는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10850608"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "심재국",
  "office": "평창군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "평창군은 정부 농어촌기본소득 시범사업 대상지(7개군 및 추가 5개군)에 포함되지 않았고, 군 자체 재원(신재생에너지 기금 등)을 통한 월 15만원 기본소득 도입은 공약 발표 단계에 머물러 있음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 10,
    "note": "8개 읍면의 관광·문화·산업 자원을 잇는 '평창 N벨트' 구상이 제시됐으나, 예산 반영이나 TF 구성 등 구체적 착수 사례는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260703000739458"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "총사업비 154억원 규모의 반값 농자재 지원사업이 5300여 농가를 대상으로 실제 시행 중이고, 스마트팜 테스트베드·신소득 작물 육성 등도 계속 추진되고 있음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3223595"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "출생부터 대학까지 지원하는 '다 키워드림 1억5000 평창플랜'이 이미 전면 시행 중이며, 어르신 통합돌봄 전담팀 신설과 온마을 키움터 확충 등 3N 복지안전망 사업이 계속 확대되고 있음.",
    "source": "https://www.dailian.co.kr/news/view/1649561/%EC%B6%9C%EC%83%9D-%EB%8C%80%ED%95%99-%EB%8B%A4-%ED%82%A4%EC%9B%8C%EC%A3%BC%EB%8A%94-%ED%8F%89%EC%B0%BD%EC%97%B0%EC%86%8D%EC%84%B1-%EA%B0%95-2026"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "청년 창업가 등이 참여하는 민생현장 간담회는 열렸으나, 청년활력타운 조성이나 청년정책협의체 구성 등 구체적 착수 사례는 보도에서 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "신영재",
  "office": "홍천군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "역세권 개발을 부동산 개발이 아닌 정주형 도시전략으로 접근하겠다는 구상은 재확인됐으나, 전담부서 신설 등 구체적 착수 보도는 확인되지 않음.",
    "source": "https://view.asiae.co.kr/article/2026081211540307492"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "국가항체클러스터 1단계 시설이 이미 준공·가동 중이며 신 군수가 2·3단계 확장을 재선 공약으로 이어가고 있어 실제 사업이 진행 중임.",
    "source": "https://www.seoul.co.kr/news/society/2025/10/27/20251027500223"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "기존 농기계 순회 기술교육 사업은 계속되고 있으나, 박람회 개최나 농기계·농자재 산업 클러스터 등 신규 착수 소식은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "홍천읍 원도심 미니뉴타운 조성 방향은 공약으로 제시됐으나 사업 지정 신청 등 구체적 착수는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260414001115352"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "'홍천형 농촌기본소득수당' 도입을 위한 중장기 로드맵 수립 등 정책 설계 단계이며, 조례 제정이나 지급 개시는 아직 확인되지 않음.",
    "source": "https://www.kwtotalnews.kr/65226"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "김세훈",
  "office": "화천군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "화천형 햇빛연금 추진 의지는 취임사 등에서 계속 강조되고 있으나 조례 제정 등 구체적 제도화 소식은 확인되지 않음.",
    "source": "https://www.ajunews.com/view/20260701141505671"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "농식품부 농어촌기본소득 시범사업 추가 대상지로 선정되어 8월 28일부터 1인당 월 15만원씩 2년간 실제 지급을 시작함.",
    "source": "https://www.khan.co.kr/article/202608281047011/"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "상서면 파크골프장 조성 등 정주여건 개선 공약은 제시됐으나 착공 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3630502"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "국회 방문과 중앙부처 협의 등 목소리를 내는 수준이며, 범군민대책위 구성이나 법 개정 등 실질적 조치는 확인되지 않음.",
    "source": "https://www.ajunews.com/view/20260807104341765"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "역대 최대 규모의 산천어 파크골프 페스티벌 개최, 서울시 파크골프협회와 협약 체결 등 스포츠 마케팅 사업이 실제로 운영되고 있음.",
    "source": "https://www.viva100.com/article/20260804500372"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "장신상",
  "office": "횡성군",
  "pledges": [
   {
    "order": 1,
    "percent": 0,
    "note": "정부 농어촌기본소득 시범사업 추가 대상지 공모에서 횡성군이 탈락해 군수가 사과했고, 재도전 의사만 밝힌 상태로 실제 지급은 이뤄지지 않음.",
    "source": "https://www.pressian.com/pages/articles/2026061513521323955"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 후 전문가 중심의 '횡성 500만 관광시대 위원회'를 실제로 구성해 동치악·태기산·횡성호 관광 허브화 전략을 추진 중.",
    "source": "https://www.smartbizn.com/news/articleView.html?idxno=147550"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "이모빌리티를 넘어 AI로봇 산업으로 확장하겠다는 비전은 제시됐으나, 기존 KCL모빌리티센터는 이전 임기 성과이고 이번 임기 중 신규 착수 조치는 확인되지 않음.",
    "source": "https://www.pressian.com/pages/articles/2026042315595830874"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "수요응답형 대중교통 체계 개편은 공약 단계이며 실제 시행이나 시범 도입 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "둔내 도립파크골프장(72홀) 조성을 강원도에 공식 건의했으나 이는 도유지·도비 사업으로, 군수의 독자적 착수라기보다 건의 단계에 그침.",
    "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1267704"
   }
  ],
  "region": "강원특별자치도"
 },
 {
  "name": "송인헌",
  "office": "괴산군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "민선9기 공약사업 검토보고회에서 괴산 미래농업 혁신타운·스마트팜 조성 등이 논의됐으나 아직 검토 단계로 착공 등 실질 조치는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260716080133654"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "괴강 힐링테마파크(약 1,180억원 규모)는 국토부 공모 등을 통해 추진할 계획이나 공모 선정이나 착공 소식은 아직 확인되지 않음.",
    "source": "https://www.jbnews.com/news/articleView.html?idxno=1504235"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "청안일반산단에 ㈜맑은물에홀딩스와 10만평·3,000억원 규모 식품종합클러스터 투자협약을 체결했고, 괴산사랑상품권 지역화폐도 누적 669억원 발행되며 계속 운영 중.",
    "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=444024"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "365 통합돌봄체계·공공형 산후조리원 건립은 공약 및 검토 단계로, 착공이나 예산 확정 등의 소식은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "괴산형 행복마을 100 등은 민선9기 공약 검토보고회에서 논의된 수준으로 구체적 착수 보도는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260716080133654"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "김문근",
  "office": "단양군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "못골 신도시 및 구) KBS중계소 부지 개발은 구상과 방향 제시 단계로, 실시설계나 사업 지정 신청 등 구체적 착수는 확인되지 않음.",
    "source": "https://v.daum.net/v/20260703060223869"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "별곡 공용주차장(113면)이 이미 준공·운영을 시작했고, 수변로·중앙공원 등 나머지 주차타워도 순차적으로 공사가 진행되는 다년 사업이 실제 추진 중.",
    "source": "https://www.inews365.com/news/article.html?no=883347"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "경로당 현대화 5개년 사업이 추진되고 있고, 2024년부터 운영해온 생활불편처리반이 계속 가동되며 노인 대상 서비스가 실제로 제공되고 있음.",
    "source": "https://www.k-lifetv.co.kr/news/articleView.html?idxno=26489"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "단양읍 공공용지 재구성은 방향 제시 단계이며 1단계 시설 이전 등 구체적 착수 소식은 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "매포 지역 민영아파트 유치를 위한 전담 조직을 구성하고 민간사업자와 부지 협의, 사전 수요조사(152세대 확인) 등을 실제로 진행함.",
    "source": "https://www.inews365.com/news/article.html?no=915599"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "최재형",
  "office": "보은군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "제3일반산업단지는 지식산업센터(150억원) 건립 등 실제 공사가 진행 중이며 2026년 준공을 목표로 함. 제4 AI산단은 민선9기 공약보고회에서 충북도에 지원을 요청한 계획 단계에 머물러 있음.",
    "source": "https://www.inews365.com/news/article.html?no=926782"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "민선9기 공약사업 추진계획 보고회에서 AI산단 조성을 설명하며 충북도의 지원을 요청한 수준으로, 조례 제정이나 예산 반영 등 구체적 착수는 확인되지 않음.",
    "source": "https://www.inews365.com/news/article.html?no=926782"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "탄부면 임한리에 20억원을 투입한 양념채소 스마트팜 건립이 진행 중이며, 최재형 군수는 '보은군 임대형 스마트팜 설치·운영 조례'를 9월 제정하고 10월 스마트농업 육성지구 지정을 농식품부에 신청할 계획이라고 밝힘.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=253454"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "비룡저수지 일원 500억원 규모 풍경단지 조성사업이 2026년 12월 완료를 목표로 1단계 공사(180억여원)를 추진해온 기존 사업으로, 민자(호텔·콘도) 유치는 여전히 대기업 타당성 검토 단계에 머물러 있고 신임 군수의 새로운 조치는 확인되지 않음.",
    "source": "https://www.fnnews.com/news/202207191124243847"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "학습증진사업인 '보은 드림 클래스' 예산을 2억원에서 8억원으로 확대해 시행 중이나, 공약의 핵심인 AI방산기계과 신설(2027년~)이나 '1인1기 다재다능' 프로그램의 구체적 착수는 확인되지 않음.",
    "source": "https://www.jeongpil.com/2479992"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "정영철",
  "office": "영동군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "정부 농어촌기본소득 시범사업 재공모 도전을 위해 233개 경로당 등을 대상으로 부서별 현장홍보반을 편성해 실제 주민 설명에 나섰으며, 탈락 시 군비 분담분(월 5만원가량)만으로 자체 지급하는 방안을 검토 중.",
    "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=450893"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "'힐링ON허브센터'(군립목욕탕) 조성은 정영철 군수의 핵심 공약으로 소개되고 있으나, 부지 확정이나 예산 편성 등 착공 전 구체적 조치는 확인되지 않음.",
    "source": "https://www.newsis.com/view/NISX20260428_0003609089"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "경매기능을 포함한 신규 과수거점 산지유통센터(APC) 건립과 관련해 취임 후 구체적 착수나 예산 반영 보도를 찾지 못함(2021년 준공된 기존 영동 APC와는 별개 사업).",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "소상공인 발전기금 200억원 조성 공약과 관련해 취임 후 기금 조례 제정이나 예산 편성 등 구체적 진척 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "2026년 스마트팜 보급사업 수요조사 등 기존 농업지원사업이 계속되고 있으나, 농업예산을 2000억원까지 확대한다는 목표에 대한 구체적 진척 보도는 확인되지 않음.",
    "source": "https://www.inews365.com/news/article.html?no=875913"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "황규철",
  "office": "옥천군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "교육복지 천국의 구심점인 평생교육관(옥천읍 장야리, 180억원)이 설계공모 당선작 선정을 거쳐 2027년 개관을 목표로 건립이 진행 중이며, 기존 교육경비 지원사업도 계속 운영됨.",
    "source": "https://www.cbnews.kr/news/articleView.html?idxno=228662"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "옛 옥천경찰서 부지(7549㎡)를 매입해 청년임대주택 100세대를 조성하는 계획을 구체화했고, 농어촌버스 전면 무료화는 내년도 시행을 목표로 추진 중이나 아직 시행 전임.",
    "source": "https://www.ccdn.co.kr/news/articleView.html?idxno=1092328"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "농어촌기본소득 시범사업이 실제 시행되어 2~4월 4만6851명에게 204억4400만원이 지급되고 사용률 86.9%, 가맹점도 2510개소→2656개소로 증가하는 등 실질적 성과가 확인됨.",
    "source": "https://www.mindlenews.com/news/articleView.html?idxno=19444"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "충북 첫 군립공원인 '대청호 생태 군립공원' 조성을 위해 군립공원위원회 설치 조례를 제정하고 위원회를 구성했으며 자연생태·경관 조사를 위한 타당성 용역이 착수됨(지정 목표 2027년 상반기).",
    "source": "https://www.jbnews.com/news/articleView.html?idxno=1479721"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "'옥천군 여성친화도시 조성에 관한 조례(안)'를 마련해 입법예고하고 충북도와 함께 '찾아가는 여성친화도시 간담회'를 여는 등 지정 추진을 위한 실질적 절차가 시작됨.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=276479"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "조병옥",
  "office": "음성군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "'4+1 신성장산업' 육성 기조 아래 감곡 상우산업단지 등 산업단지 조성사업이 실제 진행 중이며, 2022~2025년 신성장산업 관련 투자유치 실적이 3조8614억원(18건)에 달해 민선9기 10조원 목표를 향한 추진이 이어지고 있음.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3662095"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "국비 등 총 8억7000만원을 투입한 '24시간 AI 재난종합상황실'(통합관제센터)이 군청 지하에 실제 구축되어 경찰·모니터링요원 12명이 4조3교대로 상시 운영 중임.",
    "source": "http://www.enewstoday.co.kr/news/articleView.html?idxno=2448013"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "'햇빛소득마을 만들기 사업'이 관내 9개 읍·면에서 시범 추진되어(개소당 8000만원, 총사업비 7억2000만원) 실제 태양광 발전시설 설치와 마을기금 조성이 진행 중임.",
    "source": "https://www.khan.co.kr/article/202512241134001"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "음성고가 교육부 자율형 공립고 2.0 3차 공모에 선정되어 지역 산업 맞춤형 교과 개설과 기업 연계 프로그램 운영을 준비 중으로, 교육발전특구 지정을 위한 실질적 기반이 마련됨.",
    "source": "https://www.edpl.co.kr/news/articleView.html?idxno=15239"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "청년정책에 연간 203억원(29개 사업)을 투입하는 등 청년친화도시 기반을 조성하고 있으나, 국무조정실의 공식 '청년친화도시' 지정 자체는 아직 이뤄지지 않음.",
    "source": "https://www.jbnews.com/news/articleView.html?idxno=1473836"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "이상천",
  "office": "제천시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "제천 제3·제4산업단지(각 계획 81만㎡ 이상)의 산업단지 조성계획 수립과 충북도 승인 신청 등 행정절차가 진행 중이나, 아직 부지조성 착공 전 단계임.",
    "source": "https://www.jecheon-3ip.com/"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "제천 '바우처택시' 등 교통약자 이동지원 서비스가 이미 시행·운영 중이나, 효도수당·농어업인 공익수당 확대 등 공약의 다른 세부사업들은 아직 구체적 시행이 확인되지 않음.",
    "source": "https://www.breaknews.com/1172247"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "제천시 공공기관유치 범시민추진위원회가 동북아역사재단, 한국지방세연구원 등을 실제로 방문해 이전 필요성을 설명하는 등 유치 활동을 전개하고 있음.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=270617"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "청년이 직접 예산을 편성·집행하는 '88한 청년자치예산제'를 도입해 연 2억2000만원(4년간 8억8000만원)을 편성했으며, 청년안심주택 100호 공급 등은 아직 계획 단계임.",
    "source": "https://www.khan.co.kr/article/202607271525001/"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "제천시가 1026억원 규모 추경을 편성하며 제천역 역광장 조성 및 주차타워 건립에 6억4000만원을 배정하는 등 공약사업 추진을 위한 예산 반영이 시작됨.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=275887"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "이재영",
  "office": "증평군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "과기정통부 '온디바이스 AI 서비스 실증·확산사업' 공모에 충북도·진천군 등과 컨소시엄으로 선정돼 국비 포함 총 98.8억원을 확보, 어린이집 7곳 온디바이스 AI CCTV·돌봄로봇, 군립도서관 AI안내로봇, 전통시장 야간순찰로봇 도입이 실제 추진되고 있다.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=272023"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "증평3일반산업단지(총사업비 1675억원)가 충북도 계획 승인·고시를 마치고 2026년 8월 공사 착공, 2028년 준공 목표로 추진 중이며, 스마트팜·청년농업인 육성 등은 방향 제시 수준이다.",
    "source": "https://www.timenews.co.kr/web/news/article/1499723"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "통합관광이용권 '증평투어패스'가 좌구산·벨포레·보강천을 연계해 실제 운영 중이며 이용객이 급증했고, 2026년 벨포레 리조트 숙박패키지와 연계한 공동 프로모션(6~12월)도 시행되고 있다.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=268765"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "장뜰전통시장 짐 운반·화재감지 AI서비스, 군립도서관 도서안내·RFID 로봇 배치 등 피지컬 AI 기반 생활밀착 행정이 실제 운영되고 있으며, 태블릿 기반 '종이 없는 회의'도 시행 중이다.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=273983"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "한국교원대 융합교육연구소와 함께 고3 학생 대상 'AI 기반 수시 원서 지원 컨설팅'을 실제 운영했고, 여름방학 AI 에듀테크 프로그램도 시행되는 등 생애주기별 AI교육이 실행 단계에 있다.",
    "source": "https://www.cbdaily.co.kr/news/article.html?no=63486"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "김명식",
  "office": "진천군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "김명식 군수가 충북도지사를 예방해 금곡지구 경제자유구역 지정을 도 전략사업 반영해달라고 협력을 건의하고 타당성 연구가 진행 중이나, SPC 설립이나 구역 지정 신청 등 실제 착수는 확인되지 않는다.",
    "source": "https://okcb.net/116138"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "1만5775명 서명부를 국토교통부에 전달하며 조기 착공을 촉구했으나, JTX는 국토부·KDI가 민자적격성 조사를 진행 중인 국가사업으로 진천군의 독자적 착수나 신규 조치는 확인되지 않는다.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3663329"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "체육계 인사들과 '진천체육특별시' 관련 정책간담회를 개최한 수준이며, 반다비체육센터 건립이나 파크골프장 조성 등 구체적 착공·기관유치 성과는 보도되지 않았다.",
    "source": "https://www.jsisa.com/news/articleView.html?idxno=20470"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "'부자농 100호 프로젝트', '진천형 농민월급제', '햇살연금' 등은 취임 전후 공약·구상 설명 단계이며, 조례 제정이나 예산 반영 등 실제 시행에 들어갔다는 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "수도권 공공기관(국민체육진흥공단, 한국환경공단 등) 유치 방침이 공약 및 인터뷰에서 제시되었으나, 특정 기관과의 협약이나 신청 등 구체적 진전은 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "이장섭",
  "office": "청주시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "이장섭호 첫 성과로 셀트리온제약이 오송에 2조원 규모 바이오생산시설 투자계획을 발표했고, 심텍도 4000억원 투자·100명 고용 계획을 밝히는 등 목표 5곳 중 복수 대기업의 실제 투자유치가 진행되고 있다.",
    "source": "https://www.ccdn.co.kr/news/articleView.html?idxno=1086383"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "오송참사를 계기로 2030년까지 AI CCTV·재난데이터 연계 'AI 도시안전시스템'을 구축하겠다는 비전을 국제무대에서 제시했으나, 아직 계획·비전 발표 단계로 구체적 착수는 확인되지 않는다.",
    "source": "https://www.ajunews.com/view/20260811092216720"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "'메가성장 청주' 선언과 함께 오송·옥산·오창 연계 30만 신도시 등 97개 공약을 확정 발표했으나, 신도시 조성이나 특구 지정 등 구체적 사업 착수 보도는 찾지 못했다.",
    "source": "https://www.thepublic.kr/news/articleView.html?idxno=316955"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "모노레일 도심순환 관광벨트 구상을 제시했으나 모노레일 대신 기존 도로를 활용하는 신교통수단도 검토 중이라는 보도로, 아직 노선 확정이나 예산 반영 등 실제 착수는 확인되지 않는다.",
    "source": "https://www.jbnews.com/news/articleView.html?idxno=1505274"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "청주권 광역교통망인 외평~북이, 진천 초평~청주 북이 등 2개 도로사업이 예비타당성조사를 통과했고, 2026~2035년 스마트교통(ITS) 기본계획 수립 완료보고회도 개최되는 등 실질적 진전이 있다.",
    "source": "https://www.ajunews.com/view/20260829001339828"
   }
  ],
  "region": "충청북도"
 },
 {
  "name": "이동석",
  "office": "충주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "인수위 단계에서 충주관광공사 설립을 예고했으나 이후 '속도 조절' 기조로 전환, 관광과 존치 여부와 정당성 확보를 위한 검토를 거치겠다는 수준이며 설립추진위 구성 등 실제 착수는 확인되지 않는다.",
    "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=449206"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "인수위 보건복지분과가 건국대 충주병원을 방문해 서울 건국대병원과의 전문의 순환근무제 도입 등을 실무 협의했으나, 아직 협약 체결이나 시범 운영 착수는 확인되지 않는다.",
    "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=448047"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "인수위 단계에서 '관광공사·아침 간편식' 공약이 속도 조절 대상으로 거론되었으며, 희망 학교·학생을 대상으로 한 시범 운영 등 실제 착수 보도는 찾지 못했다.",
    "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=449206"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "AI 데이터센터·반도체 기업 여러 곳이 실제 충주를 방문해 부지와 사업 규모를 협의 중이며 345kV 전력망 확보를 추진하고 있으나, 취임 후 정식 투자협약 체결 등 공식 성과는 아직 보도되지 않았다.",
    "source": "https://v.daum.net/v/20260729142038182"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "취임사에서 어르신 무임교통 확대 방침을 밝힌 수준이며, 조례 개정이나 이용 횟수 제한 개편 등 구체적 시행 조치는 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "충청북도"
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
