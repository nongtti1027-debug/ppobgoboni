import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
 {
  "name": "강진원",
  "office": "강진군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "강진군이 농어촌 기본소득 법률안 통과와 시범사업 추가 선정을 국회에 건의했으나, 선정 여부는 정부 공모에 달려 있어 아직 착수 단계는 아니다.",
    "source": "https://www.ajunews.com/view/20260904133950270"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "3.3조원 규모 300MW급 AI데이터센터 유치 MOU를 체결했고 SDN이 실제 인프라 구축 사업에 착수하는 등 관광·AI산업 거점화가 실질적으로 진행 중이다.",
    "source": "https://www.newspim.com/news/view/20260604000917"
   },
   {
    "order": 3,
    "percent": 80,
    "note": "강진-광주 고속도로가 연내 개통을 앞두고 있어 군이 28개 부서 참여 대응전략 보고회를 여는 등 마무리 단계의 SOC 사업으로, 광주-강진 경제공동체 기반이 실제로 갖춰지고 있다.",
    "source": "https://www.asiae.co.kr/article/2026020915561047844"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "AI데이터센터·산업단지 조성 등 신산업 융복합 기반 사업이 실제로 착수됐으나, 1~4차 산업혁명 융복합이라는 포괄적 목표 자체에 대한 별도의 구체 조치는 확인되지 않아 pledge 2와 동일한 사업의 초기 단계로 판단된다.",
    "source": "https://www.fnnews1.com/news/articleView.html?idxno=107935"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "화산지구 다목적 농촌용수 개발(국비 166억원 확보), 벼 경영안정자금 추가 편성 등 농수산업 투자 확대 예산이 실제로 집행·운영되고 있다.",
    "source": "https://m.joongdo.co.kr/view.php?key=20260427010007529"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "공영민",
  "office": "고흥군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "제2우주센터 유치는 우주항공청에 건의하는 수준에 그치지만, 국내 첫 드론산업 특화단지(198억원, 2026년 준공 목표, 34개사 입주의향)와 스마트팜혁신밸리가 실제 조성·운영되고 있어 3대 전략산업 중 핵심 사업이 진행 중이다.",
    "source": "https://kjmbc.co.kr/NewsArticle/1407020"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "어선건조진흥단지 부지 95% 매입 완료 후 김 수출전문단지 조성을 추진 중이고 중국·몽골 수출개척단 활동으로 실제 계약 성과(300만 달러)를 냈다.",
    "source": "https://www.ngonews.kr/news/articleView.html?idxno=236299"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "국립 다도해 산림치유원은 2026년 예비타당성조사 용역비 5억원이 반영된 국가 주도 사업으로, 아직 예타 단계이며 고흥군 자체의 독립적 착수 조치는 확인되지 않았다.",
    "source": "https://www.dailybizon.com/news/articleView.html?idxno=60858"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "2026년 노인일자리 및 사회활동 지원사업이 역대 최대 규모(5,200여명)로 실제 시행되는 등 어르신 돌봄 정책이 지속 운영되고 있다.",
    "source": "https://www.dailybizon.com/news/articleView.html?idxno=60859"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "고흥읍 도시침수 예방정비 사업(총사업비 482억원)의 실시설계 용역(12억원)이 실제 추진되는 등 재해위험지구 정비가 진행 중이다.",
    "source": "https://www.kookjeilbo.com/news/article.html?no=101230"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "조상래",
  "office": "곡성군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "첨단농업 복합단지·노후 농업기술센터 신축 등은 취임 인터뷰에서 방향만 제시됐을 뿐, 취임 3개월 시점 구체적 착공이나 예산 반영 보도는 확인되지 않았다.",
    "source": "http://www.kwangju.co.kr/article.php?aid=1784592000801402141"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "골목상권 활성화, 곡성몰 입점 확대, 청년로컬가게 조성 등은 취임 후 인터뷰에서 '추진하겠다'는 계획 수준으로만 언급되었고 실제 사업 착수 근거는 찾지 못했다.",
    "source": "https://n.news.naver.com/mnews/article/001/0016175614?sid=102"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "2031 국제정원박람회는 아직 유치가 확정되지 않았으나 '국제정원박람회유치TF' 팀장이 실제 임명되는 등 전담조직이 구성되어 착수 단계로 볼 수 있다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=916239"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "스마트 안전돌봄, 장애인쉼터, 신재생에너지마을 등은 선거 공약 목록에서만 확인되며 취임 후 구체적 추진 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "경정장 중심 수상레포츠 관광단지는 아직 유치가 확정되지 않은 사업이지만 '수상레포츠유치TF' 팀장이 실제 임명되어 전담조직 구성이라는 착수 단계 조치가 확인된다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=916239"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "박성현",
  "office": "광양시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 직후 전남광주특별시·여수광양항만공사·포스코플로우와 북극항로 대응 에너지 물류허브 구축 업무협약을 실제로 체결해 동북아 거점항 육성이 착수 단계에 들어갔다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=917674"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "시민 공감토크에서 AI가 논의 주제로 언급된 정도이며, 'AI 실전 창업 프로그램' 관련 구체적 사업 착수나 창업팀 선발 등의 보도는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "동천 파크골프장에 18홀 규모 신규 구장이 실제 조성 중이며 2026년 하반기 개방 예정으로, 파크골프장 확충 사업이 실질적으로 진행되고 있다.",
    "source": "https://www.nspna.com/news/?mode=view&newsid=764502"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "'생활안심 48시간 보장제'는 후보 시절 발표된 공약으로, 취임 후 센터 설치나 긴급대응체계 구축 등 구체적 시행 근거는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "도심형 가족 캠핑장은 취임 전 정책보고서·구상 단계에서만 언급되었고, 취임 후 부지 선정이나 착공 등의 구체적 조치는 확인되지 않았다.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "장길선",
  "office": "구례군",
  "pledges": [
   {
    "order": 1,
    "percent": 0,
    "note": "타운홀미팅, 주민총회, 전자주민투표, 인사권 독립 등 소통·통합 공약과 관련해 취임 후 구체적 시행 보도는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 55,
    "note": "구례군이 정부 농어촌 기본소득 시범사업에 선정되어 국비 15만원에 군비 15만원을 더해 실제로 월 30만원을 지급 중이며, 그 경제효과로 하나로마트 개점까지 이어지는 등 사업이 실질적으로 운영되고 있다.",
    "source": "https://www.seoul.co.kr/news/publicnews/2026/07/21/20260721500224"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "월 25만원 성장지원금(인재소득) 공약은 후보 시절 언급된 이후 취임 후 구체적 시행이나 예산 반영에 대한 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "서시교 존치·랜드마크화, K-봄 클러스터, 문화관광재단 설립 등 관광 공약과 관련해 취임 후 구체적 추진 근거는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "농산물 최저가격 보장제, 태양광 협동조합, AI 스마트 축산 클러스터 등은 취임 후 구체적 착수 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "윤병태",
  "office": "나주시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "2025년 12월 유치 확정 이후 취임 직후인 7월경 예비타당성조사 대응을 위한 전담조직을 설치하고 핵융합 특구 지정 등 특별법 특례 활용을 추진 중이나, 착공은 2028년 예정으로 아직 초기 단계다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=843895\nhttps://www.khan.co.kr/article/202607081539011/\nhttps://www.thefairnews.co.kr/news/articleView.html?idxno=64897"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "정부의 공공기관 2차 지방이전 방침에 대해 나주시가 환영 입장을 밝히고 유치 활동을 예고했으나, 농협중앙회 등 유치 여부는 정부 결정에 달려 있어 아직 구체적 착수 단계로 보기 어렵다.",
    "source": "https://www.fnnews.com/news/202609041011146418\nhttps://www.getnews.co.kr/news/articleView.html?idxno=879834"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "선거 기간 중 빛가람혁신도시 내 대학병원 부설 산모·어린이 종합병원 유치 구상을 발표했으나, 취임 이후 타당성 검토나 예산 반영 등 구체적 후속 조치는 확인되지 않는다.",
    "source": "https://www.geconomy.co.kr/news/article.html?no=318307"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "취임과 함께 7월 햇빛소득마을TF추진단을 신설했고, 행안부 공모 1차에서 월양1리·오계2리 2개 마을이 선정돼 1.7MW 규모 태양광 조성이 추진 중이며 9개 마을이 참여한 2차 공모 결과도 대기 중이다.",
    "source": "https://www.metroseoul.co.kr/article/20260804500288\nhttps://www.betanews.net/article/view/beta202608040085\nhttps://www.thefairnews.co.kr/news/articleView.html?idxno=84098"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "9월 한 달간 나주읍성 일대에서 달빛산책, 달빛러닝, 야간공연 등 체류형 야간관광 프로그램이 실제로 운영되고 있어 사업이 가시적으로 진행 중이다.",
    "source": "https://www.dtoday.co.kr/news/articleView.html?idxno=789523\nhttps://www.fieldnews.co.kr/news/articleView.html?idxno=234288"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "박종원",
  "office": "담양군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임사와 인수위 활동을 통해 AI 스마트농업도시 비전과 농업예산 증액 방침을 밝혔으나, 첨단농업과 신설이나 예산 반영 등 구체적 착수 사실은 아직 확인되지 않는다.",
    "source": "https://www.getnews.co.kr/news/articleView.html?idxno=872092"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "달빛내륙철도 담양역 설치는 국가철도망 사업으로 이미 노선에 반영돼 있으나 정부·철도공단 주도 사업이며, 취임 이후 군수 차원의 별도 착수 조치는 확인되지 않는다.",
    "source": "https://v.daum.net/v/20250501050238259"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "민선 9기 5대 비전 중 하나로 탄소중립 생태도시가 제시됐으나, 구체적 사업 착수나 예산 반영은 확인되지 않았다.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260702010000592"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "전남광주통합특별시 출범 이후 담양군은 북부권 상생발전을 위한 '첨단4지구 기업형 도시' 조성을 통합시에 제안했으나, 아직 채택 여부가 결정되지 않은 제안 단계다.",
    "source": "https://biz.heraldcorp.com/article/10850088\nhttps://www.therealnews.co.kr/26373"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "담양교육발전특구는 2024년 교육부 시범지역으로 선정돼 19개 세부사업이 이미 운영 중이며, 박종원 군수 취임 이후에도 해당 사업이 계속 추진되고 있다(다만 특구 지정 자체는 전임 임기 성과임).",
    "source": "https://www.metroseoul.co.kr/article/20240801500187\nhttp://dymaeil.kr/damyang/4577"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "강성휘",
  "office": "목포시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "청년정책을 일원화할 '청년청' 신설 공약을 여러 차례 밝혔으나, 취임 이후 실제 조직개편을 통한 청년청 신설 사실은 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10763449"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "김 산업 관련 수출단지·마른김거래소 조성이 2026년 개장을 목표로 추진 중이며, 목포수협이 600억 규모 마른김 가공·유통시설을 실제 착공하는 등 관련 인프라 구축이 실질적으로 진행되고 있다.",
    "source": "https://www.newsfreezone.co.kr/news/articleView.html?idxno=697834\nhttps://v.daum.net/v/20260706074014614"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "'목포대전환 100일 프로젝트'의 일환으로 공영주차장 5000면 확충 로드맵을 마련했고, 상동 원형2공영주차장 등 구체적 부지에 주차타워 조성이 추진되고 있다.",
    "source": "https://www.betanews.net/article/view/beta202607070088\nhttps://www.geconomy.co.kr/mobile/article.html?no=311493"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "취임 첫 결재로 목포사랑상품권 1,000억원 발행 확대를 추진했고, 실제로 9월 월 발행규모를 13억원에서 65억원으로 5배 늘리는 등 사업이 실질적으로 운영되고 있다.",
    "source": "https://www.fieldnews.co.kr/news/articleView.html?idxno=228046\nhttps://www.sisadn.com/12644"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "강성휘·김산·박우량 3개 지자체장이 전남광주통합특별법 제23조를 근거로 '무안반도 광역생활권 제1호 지정'을 공동 제안하는 등 구체적 협의가 시작됐으나, 아직 통합특별시 차원의 공식 지정은 이뤄지지 않았다.",
    "source": "https://www.greened.kr/news/articleView.html?idxno=341414\nhttps://www.kpinews.kr/newsView/1065595783483978"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "김산",
  "office": "무안군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "김산 군수가 민형배 통합특별시장과 직접 협의하며 이전 조건을 조율했고, 8월 말 국토교통부가 실제로 이전 후보지(무안군 현경면 인근)를 결정하는 등 12년간 표류하던 사업이 실질적으로 진전됐다.",
    "source": "http://www.kwangju.co.kr/article.php?aid=1788103200802802074\nhttp://www.kwangju.co.kr/article.php?aid=1787923800802778004"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "RE100 분산에너지 특화 국가산단 조성과 전군민 기본소득 지급은 취임 이후에도 방향 제시 수준에 머물러 있으며, 부지 확정이나 산단 지정 등 구체적 착수는 확인되지 않는다.",
    "source": "https://www.pressian.com/pages/articles/2026080214400927848"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "국가 농업AX 플랫폼 우선협상자로 선정돼 실증센터·데이터센터 등 총사업비 1,150억원 규모 사업이 국비에 반영됐고, 2026년부터 단계적으로 시설이 들어설 예정으로 실질적 추진 단계에 있다.",
    "source": "https://view.asiae.co.kr/article/2026042917035994008\nhttps://www.jnilbo.com/news/articleView.html?idxno=90000018894"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "출산축하금 상향과 달빛어린이병원, 그냥해드림센터 등은 취임사에서 반복적으로 제시됐으나, 실제 조례 개정이나 센터 개소 등 구체적 이행 증거는 확인되지 않는다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=914371"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "AI 재난 예경보 시스템 구축 등 스마트안전도시 구상이 취임사에서 여러 차례 언급됐으나, 아직 시스템 구축 등 구체적 착수 사실은 확인되지 않는다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=916783"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "김철우",
  "office": "보성군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "취임 첫날 제1호 결재로 농어촌기본소득 시행계획에 서명했고, 8월부터 전 군민에게 월 20만원을 실제 지급하는 시범사업이 운영되고 있다.",
    "source": "https://www.thepowernews.co.kr/view.php?ud=202607151119276581a0cbf1ed16_7\nhttps://news.dealsitetv.com/articles/173047"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "전국 최대 규모 주월산 복합 실버타운 조성이 민선 9기 핵심 공약으로 제시됐고, 최근 전남연구원 정책보고서에서 구상이 구체화됐으나 아직 사업 착수 단계는 아니다.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=922114"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "전국 최초 숙박·체류형 스마트팜 관광단지 조성이 민선 9기 핵심 사업으로 반복 제시되고 있으나, 부지 확정이나 예산 반영 등 구체적 착수 증거는 확인되지 않는다.",
    "source": "http://www.mdilbo.com/detail/EHdc4G/758486"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "KTX 보성역·벌교역 역세권 복합개발이 경전선 개통에 대비한 핵심 공약으로 제시됐으나, 취임 이후 구체적 설계나 예산 반영 등의 진전은 확인되지 않는다.",
    "source": "https://www.sentv.co.kr/article/view/sentv202607160046"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "농축산물 가격안정기금 150억원 조성이 선거 공약과 민선 9기 청사진에 포함됐으나, 취임 이후 조례 제정이나 기금 조성 등 구체적 이행 증거는 확인되지 않는다.",
    "source": "https://www.polinews.co.kr/news/articleView.html?idxno=733126"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "손훈모",
  "office": "순천시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 후 신성장산업과의 '반도체팀'을 폐지하고 방산 전담 조직을 신설하는 조직개편을 실제로 단행했으며 방위산업 육성 조례 제정을 추진 중이나, 특화단지 지정 자체는 아직 확정되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10841626"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "선거 시기 1호 공약으로 발표됐으나, 취임 후 조례 제정이나 소상공인 실태조사 등 구체적 후속조치 보도는 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "당선 전후 단양관광공사를 방문해 벤치마킹한 사례는 있으나, 타당성 검토 용역 발주나 설립추진단 구성 등 공식 착수 근거는 확인되지 않음.",
    "source": "https://www.dominilbo.com/news/articleView.html?idxno=271875"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "순천 성가롤로병원의 권역응급의료센터 4회 연속 지정은 기존 제도에 따른 것으로 신임 시장이 새로 추진한 소아응급 거점센터 지정이나 협약 등의 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 30,
    "note": "취임 후 '공정·탕평'을 내세운 첫 정기인사를 실제로 단행해 순환보직 관행 개선 등 인사 원칙을 반영했으나, 인사검증위원회 등 제도적 장치 신설은 확인되지 않음.",
    "source": "https://www.newsis.com/view/NISX20260709_0003703100"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "김태성",
  "office": "신안군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "기존 도서지역 택배 추가운임 지원사업(연 최대 40만원)이 운영되고 있으나, 택배사 통합협약이나 공동 물류센터 구축 등 취임 이후 새 조치는 확인되지 않음.",
    "source": "https://www.kjilbo.co.kr/news/articleView.html?idxno=104488"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "취임 이후 어르신 택시비 지원 관련 구체적 추진 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "취임 이후 농수산물 통합 직거래 유통·판매센터 관련 구체적 추진 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "기존 '1만원의 집' 빈집 리모델링 지원사업이 있으나, '0원 입주' 등 새 정책의 별도 시행 근거는 확인되지 않음.",
    "source": "https://www.news1.kr/local/gwangju-jeonnam/5712671"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "신안군은 이미 해상풍력 상생협약과 '햇빛연금' 이익공유제를 운영 중이나 이는 전임 군수 때 마련된 제도이며, 취임 후 신규 대기업 유치나 이익환원 확대에 관한 조치는 확인되지 않음.",
    "source": "https://www.newsro.kr/article243/1154002/"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "서영학",
  "office": "여수시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "모펀드·자펀드 구조와 출자 방식을 설계 중이며 1년 내 조성을 목표로 밝혔으나, 아직 펀드 조성이나 운용사 선정 등 완료된 절차는 확인되지 않음.",
    "source": "https://www.polinews.co.kr/news/articleView.html?idxno=738600"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "8월까지 국·소별 검토를 거쳐 하반기 중 조례안을 시의회에 제출할 계획이라고 밝혔으나, 아직 '지역업체 우선 발주 조례'는 제정되지 않음.",
    "source": "https://www.polinews.co.kr/news/articleView.html?idxno=739018"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "취임 직후인 7월부터 매주 금요일 현안점검 간부회의를 유튜브로 실시간 공개하고 시장 직통 시민소통문자폰을 운영하는 등 실제로 지속 가동 중.",
    "source": "http://www.kwangju.co.kr/article.php?aid=1787376067802538277"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "취임 후에도 가장 먼저 추진하고 싶은 1호 사업으로 계속 언급되고 있으나, 지역 소아과 의원과의 협약 체결이나 실제 조기개원 시행 보도는 확인되지 않음.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3421903"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "선거 공약 단계에 머물러 있으며, 취임 이후 교육부·전남도교육청과의 협의 등 구체적 진전 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "장세일",
  "office": "영광군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "영광군은 2025년 12월 정부의 '분산에너지 특화지역'으로 지정됐고 민선8기부터 이어온 사업을 재선 군수가 계속 추진 중이나, 산업부의 수소특화단지 최종 지정 여부는 아직 확정되지 않음.",
    "source": "https://www.m-economynews.com/news/article.html?no=63119"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "재선인 장세일 군수가 민선8기 시범사업을 기반으로 민선9기 들어 '햇빛·바람 기본소득'을 본격화하며, 당정협의회를 통해 전력계통 확대 등 제도개선을 지속 추진 중.",
    "source": "http://www.srtimes.kr/news/articleView.html?idxno=208659"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "농어민 지원 확대 방향은 제시됐으나, 농기계 지원 규모 확대(120→160대) 등 공약에 담긴 구체적 예산 반영 보도는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "영광사랑카드의 구매한도와 할인율을 실제로 조정하는 등 소상공인 지원사업이 운영되고 있음.",
    "source": "https://www.cnbnews.com/news/articleView.html?idxno=1009818"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "백수 해안노을 관광지 조성 등에 필요한 국·시비 확보를 당정협의를 통해 요청 중이나, 착공이나 예산 확정 등 구체적 진전은 아직 확인되지 않음.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260826010008601"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "우승희",
  "office": "영암군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "재선 군수로서 민선8기부터 이어온 정책을 발전시켜 2026년 상반기와 하반기에 전 군민에게 1인당 10만원씩 지역화폐 '월출페이'로 농촌기본수당을 실제 지급하는 등 운영 중.",
    "source": "https://www.news1.kr/local/gwangju-jeonnam/6279184"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "정부로부터 인정받은 기존 영암형 통합돌봄 모델을 재선 이후에도 지속 운영하며, 8월에 제24차 통합돌봄 지원회의를 여는 등 실질적으로 가동 중.",
    "source": "https://www.geconomy.co.kr/news/article.html?no=322911"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "군수 스스로 '지금 설계를 하는 중'이라고 밝힌 검토 단계로, 아직 조례 제정이나 설립추진단 구성 등 공식 착수 단계에는 이르지 못함.",
    "source": "https://www.ikbc.co.kr/article/view/kbc202607270046"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "대학 등록금 전액 지원 등을 설계 중이라고 밝혔으나, 아직 조례 제정이나 실제 지원 시행 보도는 확인되지 않음.",
    "source": "https://news.tf.co.kr/read/national/2361094.htm"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "90대 핵심공약 실행계획 정비 과정에서 버스·택시 통합서비스 실행계획을 구체화하고 있으나, 추진단 설치나 조례 제정 등 공식 착수 근거는 아직 확인되지 않음.",
    "source": "https://www.namdonews.com/news/articleView.html?idxno=921422"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "김신",
  "office": "완도군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "해양수산부·전남도·완도군·전복산업연합회가 2026년 7월 총 300억원 규모 '전복산업 살리기 종합대책'(가두리시설 5만칸 감축 100억, 대형 산지가공시설 200억)에 합의했고 취임 후 전복·수산업 위기극복 TF가 가동됐다.",
    "source": "https://www.newspim.com/news/view/20260724000409"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "300병상 규모 공공의료원 유치는 선거 공약으로 반복 제시됐으나, 취임 이후 구체적 유치 절차나 예산 반영 등 실질 조치가 보도되지 않았다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "약산~금일 연도교는 2026년 8월 기획재정부 예비타당성조사를 통과했지만 이는 국회의원(박지원)과 기재부 주도의 광역사업이며, 김신 군수는 취임 초 교통 인프라 지원을 건의한 수준에 그쳤다.",
    "source": "https://view.asiae.co.kr/article/2026083110401293838"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "호텔·리조트 유치나 4천억 규모 투자협약은 전임 군수(신우철) 시기의 발표이며, 김신 취임 이후 새로운 유치 성과나 협약 체결은 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "완도군의 '제2차 청년정책 기본계획(2026~2030)'은 전임 군정 시기에 수립된 것으로, 김신 취임 이후 이 공약과 관련한 독자적인 신규 조치는 확인되지 않았다.",
    "source": "https://www.m-i.kr/news/articleView.html?idxno=1339259"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "김한종",
  "office": "장성군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "장성호를 가로지르는 424m 규모 제3출렁다리 건설이 예산 확보 및 설계를 마치고 2026년 하반기 착공 계획으로 실제 추진되고 있다.",
    "source": "https://www.m-i.kr/news/articleView.html?idxno=1395358"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "장성읍 대창지구 도시재생사업에 국·도·군비 270억원이 배정되어 편백큰푸름센터·창의목공예센터 건립을 위한 실시설계 공모가 진행 중이며(2028년 완공 목표), 정주환경 재생사업도 실시설계 단계에 있다.",
    "source": "http://www.shinailbo.co.kr/news/articleView.html?idxno=2171889"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "RE100 산업단지는 정부(산업부) 주도의 국정과제로 2026년 착공·2030년 가동을 목표로 하며, 장성군은 145건 내년도 신규사업 중 하나로 계획을 보고한 단계에 머물러 있다.",
    "source": "https://biz.heraldcorp.com/article/10803885"
   },
   {
    "order": 4,
    "percent": 100,
    "note": "장성군은 2026년 8월 3일부터 대상포진 예방접종 지원 대상을 기존 65세 이상에서 60세 이상으로 확대하고 1인당 최대 10만원을 지원하는 사업을 실제로 시행했다.",
    "source": "https://www.mt.co.kr/policy/2026/07/30/2026073015003985791"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "마을회관 및 주민공동시설 개선 지원사업에 대한 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "사순문",
  "office": "장흥군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "인수위 단계의 '뉴장흥 정책협의회'는 가동됐으나, 취임 이후에도(7월 인터뷰) 통합특별시 대응 TF는 \"구성하겠다\"는 계획 표명 단계에 머물러 있고 실제 구성은 확인되지 않았다.",
    "source": "https://n.news.naver.com/mnews/article/660/0000113215"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "군민 1인당 30만원의 민생안정지원금을 장흥사랑상품권(지역화폐)으로 2026년 8월 31일부터 실제 지급하기 시작했으며 사순문 군수가 현장을 직접 점검했다.",
    "source": "https://www.ajunews.com/view/20260902143140625"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "청년미래수당, 청년임대주택 200호 등에 대한 취임 이후 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "AI 어르신 건강안심 시스템, 무릎·고관절 수술비 지원 확대 등에 대한 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "무장애 시설, 저상버스 확대, 여성 안심귀갓길 등과 관련한 취임 이후 구체적 조치 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "이재각",
  "office": "진도군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임사에서 진돗개 기반 펫산업을 연 6조원 규모 신성장동력으로 육성하고 대규모 박람회·펫올림픽을 정례화하겠다고 밝혔을 뿐, 구체적 엑스포 개최나 특화단지 조성 등 실질 조치는 확인되지 않았다.",
    "source": "https://www.mhns.co.kr/news/articleView.html?idxno=750772"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "진도군의 '글로벌 김 클러스터 구축사업'이 2026년 7월 국토부 투자선도지구로 최종 선정되어 국비 70억원 포함 총 100억원이 투입될 예정이며, 이재각 군수가 직접 성과로 언급했다.",
    "source": "https://www.ajunews.com/view/20260702160958934"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "해상풍력 집적화단지 지정 자체는 산업부와 국회의원(박지원) 주도의 광역사업으로, 이재각 군수는 배후도로(지방도 801호선) 건설을 건의하는 수준에 그쳤다.",
    "source": "https://www.polinews.co.kr/news/articleView.html?idxno=736409"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "온라인 판매 확대 지원사업, 스마트상점 기술보급 등 기존 소상공인 지원사업은 확인되나, 공약이 제시한 '홈페이지 제작·관리 지원'에 해당하는 신규 조치는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "진도군의 2025년 인구정책 우수기관 선정은 전임 군정 시기 성과이며, 이재각 취임 이후 인구정책 대전환과 관련한 새로운 조치는 확인되지 않았다.",
    "source": ""
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "이남오",
  "office": "함평군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "함평군이 정부의 농어촌기본소득 시범사업에 선정되어 2026년 8월 28일 첫 지급을 시작했으며, 공약 이행 논란에 대해 군은 '현재도 추진 중인 사업'이라고 공식 반박했다.",
    "source": "https://www.ekn.kr/web/view.php?key=20260827027147180"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "4년제 대학 함평캠퍼스 유치, 청년 반값 주거, 청년임대주택 등에 대한 취임 이후 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "함평군은 2026년에도 '건강드림 행복버스'(양·한방·치과 진료, 기초검진)와 경로당 중심 찾아가는 보건복지 서비스를 연중 운영하고 있어, 공약이 목표로 한 찾아가는 의료·돌봄 서비스가 실제로 가동 중이다.",
    "source": "http://www.newsmaker.or.kr/news/articleView.html?idxno=172949"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "함평천지한우 명품화나 유전자원센터 구축과 관련한 취임 이후 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "황금박쥐 프로젝트, 해양치유 웰니스 관광특구는 후보 시절(2026년 4월) 공약으로 발표된 수준이며, 취임 이후 구체적 착수나 예산 반영은 확인되지 않았다.",
    "source": "http://www.weeklytoday.com/news/articleView.html?idxno=773478"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "명현관",
  "office": "해남군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "국립농식품기후변화대응센터(국비 594억원)가 삼산면 평활리에 2027년 준공을 목표로 부지·예산이 확정되어 추진 중이며, 명 군수는 농림축산식품부 등을 찾아 조기 건립을 촉구하고 있다. 다만 실제 착공 보도는 아직 확인되지 않아 예산 확보·부지 확정 단계로 판단.",
    "source": "https://www.ajunews.com/view/20260701195816527\nhttps://www.geconomy.co.kr/news/article.html?no=322643\nhttps://www.sisadn.com/12221"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "솔라시도 국가AI컴퓨팅센터가 2026년 8월 3일 실제 착공식을 갖고 총사업비 약 2조5천억원 규모로 2028년 준공을 목표로 건설이 진행 중이다. 해남군이 인허가 절차를 1개월로 단축하는 원스톱 지원체계를 가동해 조기 착공을 실질적으로 뒷받침한 점이 확인된다.",
    "source": "https://v.daum.net/v/ta3CDHXSW2\nhttps://www.newspim.com/news/view/20260803001139\nhttps://v.daum.net/v/20260727201709619"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "해남 북일~강진 도암 국지도 55호선이 10년 만에 예비타당성조사를 통과해 2027년 실시설계 착수를 앞두고 있으며, 명 군수는 국토교통부에 완도~강진 고속도로 해남IC 위치 조정 등을 건의했다. 예타 통과라는 실제 마일스톤은 있으나 다수 사업이 여전히 건의·계획 반영 단계에 머물러 있다.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3428235\nhttps://www.sentv.co.kr/article/view/sentv202608060148"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "해남공고를 호남권 최초 AI·반도체 마이스터고로 전환하는 사업이 MOU 체결, 교육부 현장실사를 거쳐 국·도비 178억원 등 총 207억원 예산이 확보되었고 2028년 개교를 목표로 진행 중이다. 노인 돌봄·국제학교 유치 등 다른 복지 항목은 취임사 수준의 언급 외 구체적 후속 조치가 확인되지 않아, 가장 앞선 마이스터고 사업 단계를 기준으로 판단했다.",
    "source": "https://www.kns.tv/news/articleView.html?idxno=1005295\nhttps://www.siminilbo.co.kr/news/newsview.php?ncode=1160307277905407\nhttps://www.asiaa.co.kr/news/articleView.html?idxno=235185"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "땅끝마을 일대 '초콜릿 거리' 조성 사업이 이미 운영 중으로, 2025년 점포 평균 매출이 전년 대비 16.8% 증가하는 등 실질적 성과가 보도되었다. 재선(3선) 군수로서 전임기부터 이어온 관광 인프라 사업이 실제 가동되고 있다는 근거가 확인된다.",
    "source": "https://v.daum.net/v/20260801071256685"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "임지락",
  "office": "화순군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "임 군수는 국회 상임위·예결위 소속 의원실 15곳을 찾아 광주~화순 광역철도의 제5차 국가철도망 구축계획 반영, 광주3순환도로 등을 건의했으나, 이는 국토교통부·국가계획 소관 사항으로 군 차원의 독자적 착수(TF 구성, 예산 확보 등)는 확인되지 않는다.",
    "source": "https://www.joongangenews.com/news/articleView.html?idxno=545433\nhttps://view.asiae.co.kr/article/2026090413210034766"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "바이오·백신 특구를 '지역첨단의료복합단지'로 지정받겠다는 구상을 밝히고 정부·특별시에 지정 지원을 요청한 단계로, 지정 권한이 중앙정부에 있어 군수의 요청 이상의 구체적 조치는 확인되지 않는다.",
    "source": "https://m.fortune.ajunews.com/bbs/view/news/S1N17/5456999"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "폐광지역을 스마트팜·AI 기반 농업혁신 거점으로 만들겠다는 공약 구상(면역·항암 특화작물, 권역별 특화작목 육성 등)이 취임 이후에도 반복 언급되고 있으나, 실제 단지 조성이나 예산 반영 등 구체적 착수 보도는 확인되지 않는다.",
    "source": "http://www.newsworker.co.kr/news/articleView.html?idxno=428508"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "체류형 관광 활성화를 위해 공영 숙박시설을 확보하겠다는 방침을 밝혔으나, 부지 선정이나 예산 편성 등 구체적 후속 조치는 아직 보도되지 않아 구상 제시 단계에 머물러 있다.",
    "source": "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003220590"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "조기폐광지역 경제진흥사업이 적기에 추진되도록 사업부지 제공 등 지원방안을 정부·특별시에 건의하는 단계이며, 공공 햇빛·바람 발전소, 영농형 태양광 등도 구상 수준으로 언급되었을 뿐 실제 착수(협약·예산 확보) 근거는 확인되지 않는다.",
    "source": "http://www.newsworker.co.kr/news/articleView.html?idxno=428508\nhttps://www.sidaeilbo.co.kr/1251597"
   }
  ],
  "region": "전라남도"
 },
 {
  "name": "조현일",
  "office": "경산시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "산업통상부 '2026년 로봇 플래그십 지역거점 구축사업' 공모에 최종 선정돼 국비 9억5천만원을 확보하고 AI 팩토리로봇 기반 실증 특화거점 조성사업을 추진 중이나, 경산 5산업단지 조성과 경산-울산 고속도로 건설 자체는 아직 계획·건의 단계임.",
    "source": "https://biz.heraldcorp.com/article/10828402"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "아이행복재단 설립 및 24시 안심보육시스템은 민선 9기 공약으로 재확인됐으나, 조례 제정이나 재단 출연 예산 편성 등 구체적 착수 근거는 확인되지 않음.",
    "source": "https://www.polinews.co.kr/news/articleView.html?idxno=733982"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "공공 키즈카페 부지 확보나 설계 등 구체적 진행에 관한 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "현대프리미엄아울렛(경산 지식산업지구)이 한무쇼핑과 분양계약을 체결하고 실시설계에 착수해 2026년 착공, 2028년 개점을 목표로 총 3,580억원 규모 사업이 실제 진행 중임.",
    "source": "https://www.getnews.co.kr/news/articleView.html?idxno=807743"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "장애인 생애주기별 '경산 안심 케어' 관련 구체적 사업 착수나 예산 반영 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "주낙영",
  "office": "경주시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "신라왕경 14개 핵심유적 복원사업에 2026년 예산 약 327억원이 투입되고 있고, 문무대왕릉 성역화 사업도 6월부터 역사문화공원 조성 본공사에 착수하는 등 실제 공사가 진행 중임(3선 시장으로서 계속 추진).",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4073676"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "SMR 국가산업단지는 2026년 하반기 지정 완료를 목표로 절차가 진행 중이고, i-SMR도 표준설계인증 신청 등 실질적 인허가 절차에 들어가는 등 국가 차원의 사업이 실제로 진행 중임.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4062401"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "KTX 경주역세권 개발은 국토교통부에 투자선도지구 지정 신청서를 제출해 심의가 진행 중이고 복합환승센터는 기본구상 용역 단계로, 아직 지구 지정 승인이나 착공 전임.",
    "source": "https://www.fnnews.com/news/202511251512229368"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "퇴원 후 돌봄 공백 해소를 위한 '케어안심주택'과 '지역이음바우처'가 실제로 운영되고 있고 2026년 상반기 적극행정 우수사례로 선정되는 등 통합돌봄 서비스가 가동 중임.",
    "source": "https://www.sentv.co.kr/article/view/sentv202606250062"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "해양수산부 '2026년 어촌신활력증진사업' 공모에 최종 선정돼 대본항·연동항 정비에 국비 70억원 등 총 103억원 예산이 확보됐으나 2029년까지 진행되는 초기 단계 사업임.",
    "source": "https://economist.co.kr/article/view/ecn202511060061"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "이남철",
  "office": "고령군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "낙동강 생태문화벨트 조성 등 7대 공약을 22개 추진전략으로 구체화했다고 밝혔으나 독자적 사업 착수나 예산 반영 근거는 확인되지 않고, 경북도 주관 '럭키세븐 경북여행' 이벤트 참여 실적 정도만 확인됨.",
    "source": "https://view.asiae.co.kr/article/2026072611242335426"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "청년 정착 및 일자리 관련 고령군 자체의 구체적 사업 추진 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "상권 활성화 및 스마트농업 관련 고령군 자체의 구체적 사업 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "재선 군수로서 전임기부터 이어온 다산 곽촌지구 개발사업, 좌학지구 공동주택 조성, 대가야읍 뉴빌리지 사업 등 정주여건 개선 사업이 실제로 계속 진행 중임.",
    "source": "https://www.wikitree.co.kr/articles/1010814"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "생애주기별 복지 정책 수립을 위해 '제6기 고령군 지역사회보장계획 수립 TF팀'을 실제로 구성해 8월 중간보고회를 열고 59개 사업을 제시하는 등 계획 수립 절차가 착수됨.",
    "source": "https://www.ajunews.com/view/20260827201548939"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "김장호",
  "office": "구미시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "구미-군위 고속도로는 예비타당성조사를 통과했고, 취임 직후 자화전자 5천억원 투자협약 체결과 국가산단 5단지 부지 평당 천원 분양 제안 등 반도체 팹 유치와 투자 유치가 실제로 진행 중임(재선 시장으로서 계속 추진).",
    "source": "https://n.news.naver.com/mnews/article/079/0004169134?sid=102"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "구도심 재개발·재건축 촉진 및 원룸빌라 밀집지역 소규모주택정비 등과 관련한 구체적 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "구미보 수변레저파크 등 낙동강 4대 권역 하천정비사업이 이미 실제로 조성·운영되고 있으며 재선 시장으로서 계속 추진 중임.",
    "source": "https://www.yeongnam.com/web/view.php?key=20250101010000107"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "강동지역 벼 건조저장시설, 농업근로자 기숙사 등 농업혁신 관련 구체적 사업 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "K-온누리패스, 소상공인 로컬팩 지원, 자율상권활성화, New Venture 창업지원 등 관련 예산이 2026년도에 실제 편성돼 사업이 운영 중임.",
    "source": "http://www.shinailbo.co.kr/news/articleView.html?idxno=2151364"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "배낙호",
  "office": "김천시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "황금정수장 확장·이전은 2025년 11월 수도정비계획 변경이 승인되고 국비 확보 노력이 이어지는 등 실질적 행정 절차가 진행 중이나 아직 착공 전 단계임.",
    "source": "http://www.hidomin.com/news/articleView.html?idxno=604181"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "김천역 주변 정비, 어린이 전문 통합의료센터 건립 등과 관련한 구체적 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 30,
    "note": "김천김밥축제가 문화체육관광부 지정 '문화관광예비축제'로 선정되고 롯데백화점과 홍보 협약을 체결하는 등 '대한민국 대표 축제' 목표를 향한 구체적 진전이 확인됨.",
    "source": "https://www.m-i.kr/news/articleView.html?idxno=1356695"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "광역 단위 농산물 종합유통센터, 김천 스마트농업타운 등과 관련한 구체적 착수 보도를 찾지 못함.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 10,
    "note": "차세대 모빌리티 특구는 2026년 8월 국토교통부에 지정 제안서를 건의한 단계로, 정부의 승인이나 예산 반영 등 후속 조치는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "김학홍",
  "office": "문경시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 1호 결재로 '도시가스 TF팀' 설치·운영을 실제로 시행했고, 9월에는 시장이 직접 영남에너지서비스 구미지사를 방문해 협력 회의를 여는 등 후속 행보가 이어지고 있다.",
    "source": "https://www.sidaeilbo.co.kr/1245693\nhttp://uljintimes.co.kr/553733"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "오미자 생산자단체와의 정책 간담회 등 산업 관계자 소통은 확인되나, 첨단유통센터(사과공판장) 부지 확보나 예산 반영 등 착수 단계의 조치는 보도되지 않았다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "'어르신 삼시세끼 프로젝트'는 후보 시절 공약 설명이 반복 보도될 뿐, 취임 이후 실제 사업 착수나 예산 편성에 대한 보도는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "국제 규격 종합체육관 건립은 취임 전후 공약·구상 발표 수준에 머물러 있고, 부지 선정이나 국비 공모 신청 등 구체적 절차 착수는 확인되지 않았다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 0,
    "note": "구도심 복합주거단지 개발과 관련해 시의원이 주상복합 조성을 제안한 기사는 있으나, 시장 본인의 별도 착수 조치는 확인되지 않았다.",
    "source": ""
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "최기영",
  "office": "봉화군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 인터뷰에서 'AI·6차산업으로 봉화 대전환'을 강조하며 방향을 제시했으나, 거점 농업복합센터 등 구체적 착수 조치는 확인되지 않았다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4077574"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "'산림 치유 관광혁신'을 위한 행보가 보도되었으나 아직 방향 제시 수준이며, 거점 조성이나 시설 착공 등 구체적 진전은 확인되지 않았다.",
    "source": "http://www.dmilbo.com/news/articleView.html?idxno=557419"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "취임 첫날 전통시장을 방문해 상인들과 소통했으나, 이는 상징적 현장 행보이며 시설 현대화나 예산 반영 등 실질 착수는 확인되지 않았다.",
    "source": "https://www.ajunews.com/view/20260702045646607"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "취임 청사진에서 예방·치료·돌봄이 연계된 공공의료 통합서비스 구축을 강조했으나, 보건지소 기능 확대 등 구체적 조치는 아직 보도되지 않았다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4077101"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "봉화군개발공사 설립과 관련한 타당성 검토나 추진 계획에 대한 보도를 찾지 못했다.",
    "source": ""
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "안재민",
  "office": "상주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "경북도-상주시 '경제원팀 전략회의'에서 국가식품클러스터 조성 및 식품대기업 유치 지원을 경북도에 건의했으나, 아직 요청·건의 단계이며 독자적 착수 조치는 없다.",
    "source": "https://view.asiae.co.kr/article/2026073118321849623"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "체류형 관광도시 조성 관련 경천대·낙동강 연계 구상을 밝히고 도남지구 관광휴양 기반시설 관련 지원을 경북도에 건의했으나, 아직 요청 단계에 머물러 있다.",
    "source": "https://www.news2day.co.kr/article/20260801500009"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "취임사에서 스포츠 메가시티 프로젝트 구상을 밝히고 경북도에 스포츠관광 활성화 지원을 건의했으나, 구체적 착수 조치는 확인되지 않았다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4077363"
   },
   {
    "order": 4,
    "percent": 0,
    "note": "심뇌혈관·소아응급센터 구축은 취임사의 5대 과제로 언급되었을 뿐, 구체적 사업 착수나 예산 반영 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 5,
    "percent": 55,
    "note": "외국인 계절근로자를 올해 2,823명(829개 농가)까지 확대 투입해 실제로 운영 중이며, 2027년도 프로그램 준비를 위한 실무 교육까지 진행하는 등 사업이 활발히 가동되고 있다.",
    "source": "https://www.ajunews.com/view/20260730104300813\nhttps://www.kbmaeil.com/article/20260730500308"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "전화식",
  "office": "성주군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "정부세종청사를 방문해 참외 시설현대화 등에 대한 국비 지원을 요청했으나, 참외유통과 신설이나 대중국 수출 등 자체적 착수 조치는 확인되지 않았다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4080308\nhttps://www.kbsm.net/news/view.php?idx=529323"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "기자간담회에서 70세 이상 어르신 이·미용비 지원, 경로당 회장 수당, 24시간 돌봄체계 구축 계획을 발표했으나, 아직 계획 발표 단계이며 실제 시행 보도는 확인되지 않았다.",
    "source": "https://www.seongjuro.co.kr/news/view.php?idx=60627"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "핵심사업인 성주3일반산업단지 조성이 부지 보상과 행정절차를 실제로 밟으며 진행 중이고 조기착공 의지도 밝혀, 실질적 추진 활동이 확인된다.",
    "source": "https://www.seongjuro.co.kr/news/view.php?idx=60723"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "전국 최고 수준 출산지원금 및 대학등록금 지원은 5대 공약으로 반복 발표되고 있으나, 취임 후 조례 제정이나 예산 반영 등 구체적 집행 보도는 확인되지 않았다.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=664866"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "성주호·가야산·낙동강을 잇는 체류형 관광벨트 조성을 여러 차례 강조했으나, 아직 구상·계획 발표 단계이며 구체적 착공이나 사업자 유치 성사는 확인되지 않았다.",
    "source": "https://www.ekn.kr/web/view.php?key=20260729023067066"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "권기창",
  "office": "안동시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "투자유치자문단을 출범시켜 국립경국대 의과대학 설립 추진과 연계한 의료·바이오 기반 확충을 과제로 다뤘으나, 보건복지부 정원 확보나 설립 승인 등 실질적 진전은 확인되지 않았다.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=665248"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "풍산읍 노리 일원 100만㎡ 규모로 조성 중인 안동바이오생명 국가산업단지를 중심으로 바이오·백신 앵커기업 유치 활동이 실제로 진행되고 있어 사업이 활발히 추진 중이다.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=557598\nhttps://www.dkilbo.com/news/articleView.html?idxno=552251"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "청년 천원주택 100호 공급은 5대 핵심공약으로 반복 강조되고 있으나, 부지 확보나 착공 등 구체적 착수 보도는 아직 확인되지 않았다.",
    "source": "https://biz.heraldcorp.com/article/10845901?ref=naver"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "초중고 반값 교통비 지원은 조례까지 제정됐으나 예산이 '0원'으로 편성되어 있어 실제 시행되지 못하고 있다는 보도가 있어, 제도적 틀만 있고 집행은 이뤄지지 않은 상태다.",
    "source": "https://kjmbc.co.kr/NewsArticle/1529250"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "재선인 권기창 시장이 전임기부터 이어온 외국인 계절근로자 사업이 실제로 운영되며 규모가 매년 확대되고 있고(2025년 1,288명→2030년 2,000명 목표), 숙소 활용 방안까지 실무적으로 검토되는 등 사업이 지속 가동 중이다.",
    "source": "https://view.asiae.co.kr/article/2026072014592530217\nhttps://www.idaegu.co.kr/news/articleView.html?idxno=553614"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "조주홍",
  "office": "영덕군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임식에서 \"예산·투자 1조원 시대\"를 목표로 선언했으나, 취임 2개월 시점 구체적 로드맵이나 실제 예산 반영 보도는 확인되지 않는다.",
    "source": "https://biz.heraldcorp.com/article/10800015"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "선거 공약 단계에서 신재생에너지 수익을 공유하는 '영덕에너지개발공사' 설립을 제시했을 뿐, 취임 후 실제 법인 설립이나 조례 제정 등 후속 조치는 확인되지 않는다.",
    "source": "https://www.getnews.co.kr/news/articleView.html?idxno=869343"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "'스마트 실버 클러스터' 관련 별도 사업 착수나 계획 발표를 찾지 못했다. 영덕군의 기존 '스마트 경로당'(52개소)은 이 공약과 무관한 별개 사업이다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "산불 복구로 발생한 지방채 693억원 조기 상환을 군정 최우선 과제로 제시하고 연도별 상환 로드맵을 공개하겠다고 밝혔으나, 실제 상환 집행이나 구체적 로드맵 확정 보도는 아직 없다.",
    "source": "https://www.imaeil.com/page/view/2026070613590659431"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "영덕군이 8월 27일 ㈜메르센트리조트와 총사업비 2400억원 규모의 고래불 관광호텔(객실 150실, 컨벤션센터 등) 개발 투자협약을 실제로 체결했다. 연내 행정절차 마무리 후 2027년 착공이 목표다.",
    "source": "https://www.ajunews.com/view/20260829044232832"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "오도창",
  "office": "영양군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임사와 민선9기 공약실천계획 보고회에서 '전 군민 평생연금'을 핵심 비전으로 제시했으나, 아직 실행계획 보완 및 시민배심원단 구성(검증) 단계로 실제 지급이나 조례 제정은 확인되지 않는다.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260702010000775"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "10대 공약 중 하나로 태양광 기반 '햇빛연금 소득마을' 조성을 제시했으나, 행안부의 전국 햇빛소득마을 공모에 영양군이 선정되었다는 보도는 확인되지 않아 구상 단계에 머물러 있다.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=660463"
   },
   {
    "order": 3,
    "percent": 0,
    "note": "옛 현대연립 부지를 활용한 임대주거단지 조성과 관련한 구체적 추진 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 0,
    "note": "영양컨벤션센터 건립이 선거 공약으로 제시되었을 뿐, 취임 후 타당성 조사나 부지 확정 등 구체적 착수 보도는 확인되지 않는다.",
    "source": "http://www.enewstoday.co.kr/news/articleView.html?idxno=2432309"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "산림청 주관으로 국비 75억원이 전액 확보되어 2026년부터 기본계획 수립과 설계 용역이 실제로 시작됐으며 2029년 완공을 목표로 조성 중이다. 오도창 군수의 직전 임기(재선)부터 이어진 사업이 실제로 진행 중인 사례다.",
    "source": "http://www.enewstoday.co.kr/news/articleView.html?idxno=2364137"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "황병직",
  "office": "영주시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "인수위가 '공설시장 부지 주상복합아파트 건립'을 25대 핵심공약으로 확정했으나, 취임 후 사업 승인이나 예산 반영 등 구체적 착수 보도는 확인되지 않는다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4076704"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "취임 후 청사 주차장을 직원 중심에서 시민 중심으로 전환하고 차량 5부제를 강화하는 등 실제 운영 개선을 시행했고, 국토부와 함께 '영주동 거점주차장 조성사업'(총사업비 70억원, 지상 3층)도 추진 중이다.",
    "source": "https://www.sisa-news.com/news/article.html?no=275398"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "첨단베어링 국가산단 연계 기업유치 연구용역 최종보고회를 7월 29일 실제로 개최했고 경북도에 기회발전특구 지정 등 8대 핵심사업 지원을 건의했다. 다만 특구 지정 권한은 산업부·경북도에 있어 아직 지정 자체는 이뤄지지 않았다.",
    "source": "https://www.eroun.net/news/articleView.html?idxno=86471"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "황병직 시장이 케이블카 설치를 \"반드시 추진하겠다\"고 재확인했으나, 국립공원 내 사업으로 환경부·국립공원공단의 환경영향평가 등 절차가 남아 있고 새로운 착수 조치는 확인되지 않는다.",
    "source": "https://www.yjinews.com/news/articleView.html?idxno=88408"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "9월 1일부터 시장과 간부공무원이 직접 민원창구에 서는 '1일 민원담당관제'를 실제로 운영 시작했으며, 부시장·국장 순번제와 19개 읍면동 확대까지 구체적으로 시행되고 있다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4082818"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "김병삼",
  "office": "영천시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "8월 기사에서 기존 문화예술회관 건립 계획을 재검토하고 민자유치 방식의 K-POP 돔으로 방향을 재조정 중인 것으로 나타나, 부지 확정이나 기본계획 수립 등 실제 착수 단계에는 이르지 못했다.",
    "source": "https://www.yeongnam.com/web/view.php?key=20260819023422650"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "제2탄약창 이전 및 부지 활용 방안에 대한 연구용역을 시가 실제로 발주해 진행 중이며 시의회도 특위를 가동했다. 다만 탄약창 부지는 여전히 군사시설로 국방부 소관이라 실제 해제·착공은 이뤄지지 않았다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4079400"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "지역기업 혜성이 영천하이테크파크지구에 전기차 배터리시스템(BSA) 생산시설을 신축하기로 하는 100억원 규모 투자협약을 실제로 체결했다(8월 19일, 신규 채용 100명 이상 계획).",
    "source": "https://www.kukinews.com/article/view/kuk202608190174"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "기존 자동차부품산업과 하이테크파크지구 R&D 인프라를 연계한다는 구상 수준이며, 경부고속도로 축 특정 부지의 산업단지 지정이나 착공 등 구체적 조치는 확인되지 않는다.",
    "source": "https://www.nongmin.com/article/20260708500372"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "'아이 1억 책임도시'를 인구정책 핵심으로 추진한다는 방향과 방과후 돌봄 확대, 산후조리비 지원 등 구상이 여러 인터뷰에서 반복 제시됐으나, 조례 제정이나 실제 지급 개시 등 구체적 집행 보도는 아직 없다.",
    "source": "https://www.kbmaeil.com/article/20260714500713"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "안병윤",
  "office": "예천군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "공약에 담긴 '군수 직속 신도시 개발 전담 조직'에 해당하는 '도청신도시 활성화 전담협의체'가 7월 30일 실제로 출범해 정주여건 개선과 기업유치 후속 정책을 추진 중이다.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4079754"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "공약의 '국립의대 유치' 항목과 관련해 부군수를 책임자로 한 18명 규모의 '국립경국대 의과대학 유치 지원 TF팀'이 7월 23일 실제로 발족해 첫 회의를 열었고 범군민 유치협의체도 구성됐다.",
    "source": "https://www.idaegu.co.kr/news/articleView.html?idxno=554886"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "민선9기 공약실천계획 보고회가 7월 열려 실행계획을 보완하고 시민배심원단을 통한 객관적 검증을 다음 달 진행하겠다는 단계로, 원스톱 민원체계나 갈등조정소통위원회 등 구체적 조직 신설은 아직 확인되지 않는다.",
    "source": "https://www.viva100.com/article/20260727501435"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "예천군농업기술센터의 기존 라이브커머스 교육 등 통상적 농업지원 활동은 계속되고 있으나, 스마트농업 교육센터 신설이나 노지사과 스마트단지 등 공약에 명시된 신규 사업 착수는 확인되지 않는다.",
    "source": "https://www.yna.co.kr/view/AKR20260731104900061?input=1195m"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "경북도·예천군·경북테크노파크·경도요양병원이 컨소시엄을 구성해 '2026년 산부인과·소아과 ONE-hour 진료체계 구축 사업'을 8월 26일까지 목표로 실제 추진 중으로, 의료 안전망 강화 공약과 관련한 구체적 실행 사례다.",
    "source": "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202608190746489650428"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "남한권",
  "office": "울릉군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "곤돌라(로프택시), 자율주행 콜버스, 스마트 수화물 패스 등은 취임 후 8대 분야 55개 공약으로 재발표된 상태이며, 용역·예산 편성 등 구체적 착수 근거는 확인되지 않음.",
    "source": "https://biz.heraldcorp.com/article/10795126"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "2026년 8월 신안군과 '국토외곽 먼섬 지원 특별법' 개정 및 정주생활지원금 신설 등을 위한 공동 대응에 실제 합의하고 정부·국회 공동 건의를 추진하기로 함.",
    "source": "https://www.ajunews.com/view/20260806172932246"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "케이블카, 카지노, 미디어아트 숲길 등은 취임 비전에서 방향 제시된 수준이며 구체적 착공이나 예산 반영 보도는 찾지 못함.",
    "source": "https://www.getnews.co.kr/news/articleView.html?idxno=830616"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "재선인 남한권 군수가 이어온 마을단위 LPG배관망 구축사업(총 330억원, 1380가구 대상)이 2026년 1월 저장탱크 첫 가스 충전을 마치는 등 실제 시공이 진행 중(일부 부실시공 논란도 존재).",
    "source": "https://www.newsfreezone.co.kr/news/articleView.html?idxno=667959"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "전 생애 돌봄·복지 공약은 8대 분야 55개 공약 중 하나로 방향만 제시됐고, 구체적 사업 착수 보도는 확인되지 않음.",
    "source": "http://www.dmilbo.com/news/articleView.html?idxno=557440"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "황이주",
  "office": "울진군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 첫 결재로 '울진행복 에너지연금 추진계획'을 승인하고 '추진단'을 구성해 조례 제정·시행계획 수립 등 행정절차에 착수함(첫 지급 목표는 2027년 2월).",
    "source": "https://www.imaeil.com/page/view/2026070115485277538"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "고준위 방폐장 부지 선정은 산업통상자원부 주도의 국가 절차이며, 황이주 군수는 군민 동의를 전제로 유치를 지지한다는 입장을 밝힌 수준으로 공식 유치 신청 등 자체 조치는 확인되지 않음.",
    "source": "https://www.newspim.com/news/view/20220518000851"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "취임사에서 '울진군시설관리공단' 설립에 박차를 가하겠다고 언급했을 뿐, 조례 제정이나 설립 절차 착수 근거는 찾지 못함.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=663304"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "가칭 '에너지개발공사'를 통해 태양광 등 신재생에너지 사업을 직접 운영하겠다는 계획 단계이며, 조례 제정이나 공사 설립 착수 근거는 확인되지 않음.",
    "source": "https://www.hankookilbo.com/news/article/A2026062910240005783"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "원전 무탄소 전력과 수소 국가산단을 내세워 기회발전특구 지정을 강력히 추진 중이나, 2026년 9월 현재 지정 확정 등 구체적 성과는 확인되지 않음.",
    "source": "https://www.hankookilbo.com/news/article/A2026062910240005783"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "최유철",
  "office": "의성군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "의성군의 기존 경로당 통합관리시스템(전임 군정에서 구축)을 기반으로 AI 스마트경로당을 확대하겠다는 공약을 제시했으나, 취임 후 별도의 예산 반영이나 착수 보도는 확인되지 않음.",
    "source": "https://www.viva100.com/article/20260420500050"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "데이터 기반으로 복지 사각지대를 줄이겠다는 방향을 제시했으나 구체적 신규 사업 착수 근거는 확인되지 않음.",
    "source": "https://www.kyongbuk.co.kr/news/articleView.html?idxno=4078539"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "AI·드론·위성 기반 스마트농업 확산 계획을 밝혔으나, 의성군은 이미 전임 군정에서 노지 스마트농업 시범사업을 운영 중이었고 최유철 군수 취임 후 새로운 착수 근거는 확인되지 않음.",
    "source": "https://www.imaeil.com/page/view/2026042915245989089"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "대구경북통합신공항 화물터미널은 대구시·경북도·국토부가 주도하는 광역사업으로, 최유철 군수는 조기 추진과 경북도·시군 협력을 지속적으로 요청하는 수준에 머물러 있음.",
    "source": "https://n.news.naver.com/mnews/article/018/0006314199?sid=100"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "재생에너지 이익공유 모델은 비전 발표 단계이며, 협의체 구성이나 조례 등 구체적 착수 근거는 확인되지 않음.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=664097"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "박권현",
  "office": "청도군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 즉시 '농산물 유통 시스템 대혁신 및 군수 직속 세일즈단 구성'을 결재하겠다고 밝혔으나, 실제 세일즈단 구성이나 유통허브 착수를 확인해주는 취임 후 보도는 찾지 못함.",
    "source": "https://www.discoverynews.kr/news/articleView.html?idxno=1091300"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "공약인 미래교육지구 조성이 실제로 선정되어 4년간 16억원이 투입되는 것으로 확인됨(청년·귀농인 대상 '만원주택' 등 정착 지원도 확대 중).",
    "source": "https://n.news.naver.com/mnews/article/586/0000135749?sid=102"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "대구권 광역철도 청도역 연장 등은 상급기관(대구시·국가철도공단) 주도 사업으로 취임 후 요청 수준에 머물러 있으며, 자체 착수 근거는 확인되지 않음.",
    "source": "http://www.weeklytoday.com/news/articleView.html?idxno=770550"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "기존 '청도형 통합돌봄' 체계를 지속·고도화하겠다는 방침을 밝혔으나, 이는 이미 운영되던 사업의 연속 표명으로 신임 군수의 별도 신규 착수 근거는 확인되지 않음.",
    "source": "https://n.news.naver.com/mnews/article/662/0000099129?sid=102"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "취임 이후 행정쇄신(원스톱 민원 등) 관련 구체적 추진 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "윤경희",
  "office": "청송군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "4선인 윤경희 군수가 이어온 황금사과 연구단지·스마트 사과농업 정책이 실제로 운영 중이며, 2026년 8월 스마트과원 특화단지 조성(30억원)과 연구단지 표준화(5억원) 등 신규 예산 투입과 실제 조성공사가 진행되고 있음.",
    "source": "https://n.news.naver.com/mnews/article/277/0005805004?sid=102"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "청송군보건의료원이 지방소멸대응기금 27억원을 확보해 건강증진센터·치유재활센터 건립을 추진해 온 바 있으나(민선8기), 2026년 시점의 준공·운영 관련 최신 보도는 확인되지 않음.",
    "source": "http://www.idaegu.com/newsView/idg202311290140"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "주왕산 체류형 관광벨트 관련 54홀 파크골프장, 140억원 규모 이색숙박시설(소형호텔·글램핑) 조성 등이 실제로 공사 진행 중이며, 기존 파크골프장에서는 이미 정례 대회(황금사과기 파크골프대회)가 열리는 등 운영 중.",
    "source": "https://www.straightnews.co.kr/news/articleView.html?idxno=305752"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "2026년 7월 '특화 공공임대주택' 공모에 선정되어 75억원 예산을 확보하는 등 실질적 착수 단계에 진입함.",
    "source": "https://n.news.naver.com/mnews/article/586/0000132832?sid=102"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "군민배심원단 등 군민참여형 공약 이행·평가 시스템이 실제로 운영되고 있으며, 이 성과로 2026년 8월 '매니페스토 약속대상'을 수상함.",
    "source": "http://www.metroseoul.co.kr/article/20260825500106"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "김재욱",
  "office": "칠곡군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "북삼오평일반산업단지가 승인 고시되고 국토부·LH 공공택지 비축사업 대상지로 선정돼 개발이 본궤도에 올랐으며, 중리지구 도시개발사업도 2024년 구역 지정·개발계획 승인 후 2029년 준공을 목표로 실제 시행 중이고 매원지구도 병행 추진되는 등 여러 사업에서 실질적 진행이 확인된다.",
    "source": "https://www.sidaeilbo.co.kr/1245505"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "유아기후환경교육관과 어린이 과학체험공간이 각각 정부 공모사업에 선정돼 국비·도비를 포함한 실제 예산(4억원, 12억원 규모)이 확보됐고 2026년 하반기 완공을 목표로 조성 중이나, 반려동물 복합문화공간 등 다른 세부 사업은 아직 계획 단계에 머물러 있다.",
    "source": "https://www.kbmaeil.com/article/20260420500379"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "꿀맥 페스티벌이 2026년에도 실제로 개최(7월 11~12일, 왜관 칠곡평화분수 일원)되는 등 지역 대표 축제가 매년 실제 운영되고 있으나, 럭키칠곡 스카이파크나 특화거리 조성 등 신규 사업의 구체적 착수 근거는 확인되지 않았다.",
    "source": "https://biz.heraldcorp.com/article/10769052"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "라오스와의 협약에 기반한 외국인 계절근로자 프로그램이 2026년에도 156명 입국 등 실제로 계속 운영되고 있고, AI 기반 참외 스마트팜(챠트록톡) 시스템도 정부 지원사업으로 선정돼 수십억원 규모 예산으로 실증이 진행 중이다.",
    "source": "https://www.idaegu.com/news/articleView.html?idxno=663649"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "청년·신혼부부 대상 월 3만원 수준 '천원주택'이 왜관에서 30가구 규모로 실제 공급되어 입주자 모집이 진행되는 등 공약이 실질적으로 운영되고 있음이 확인된다.",
    "source": "https://v.daum.net/v/tSwi0bRfCD"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "박용선",
  "office": "포항시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "착한가격업소 이용 시 포항사랑카드 최대 15% 추가 할인 등 소상공인 매출 지원책이 실제로 시행 중이며, 2026년 9월 제2회 추경 810억원 증액 편성에도 소상공인·중소기업 지원 예산이 반영되는 등 실질적 집행이 확인된다.",
    "source": "https://www.eroun.net/news/articleView.html?idxno=88851"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "하반기 조직개편을 통한 철강산업과 신설은 아직 계획 단계이지만, 200억원 규모 수소발전 투자 유치(2026.9)와 'K-차세대 전기추진선박' 글로벌 혁신특구 지정(2026.7) 등 신산업 육성 목표에서 실제 성과가 확인된다.",
    "source": "http://www.enewstoday.co.kr/news/articleView.html?idxno=2466006"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "2026년 8월 24일 '포항 ALL GOOD 통합돌봄' 체계가 실제로 출범해 8억7400만원 예산을 투입, 포항의료원 등 5개 의료·복지기관과 협약을 맺고 방문의료·요양 연계 서비스를 가동하는 등 정부 통합돌봄정책이 실질적으로 시행되고 있다.",
    "source": "https://www.hankyung.com/article/2026082521131"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "취임 후 외식업계 등과의 '현장소통 오찬간담회'가 실제로 개최되어 소상공인 맞춤형 지원정책 등 건의사항이 수렴되는 등 유관기관·업계 협의가 실행 단계에 들어섰으나, '공감·소통의 날' 정례화 등은 아직 계획 발표 수준이다.",
    "source": "https://www.ksmnews.co.kr/news/view.php?idx=616223"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "포항의 숙원 SOC인 영일만대교는 올해 확보된 국비 485억원을 바탕으로 노선 갈등을 조정해 조기 착공을 추진 중이나, 국토부 등 상위 기관과의 공동 사업 성격이 강하고 아직 실제 착공에는 이르지 못했다.",
    "source": "https://www.ksmnews.co.kr/news/view.php?idx=612066"
   }
  ],
  "region": "경상북도"
 },
 {
  "name": "변광용",
  "office": "거제시",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "서일준 국회의원과 정책소통 간담회를 열어 거제~통영 고속도로, 남부내륙철도, 거가대교 통행료 인하 등 지역 현안에 대해 정부 지원과 협력을 요청한 수준이며, 국토부·경남도 주도 사업이라 실질적 착공이나 통행료 추가 인하 등 새 조치는 확인되지 않는다.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=939987"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "변광용 시장이 삼성중공업·한화오션 등 양대 조선소에 내국인·청년 채용 확대와 외국인 인력 의존도 완화를 반복적으로 공식 요청·촉구했으나, 쿼터 자체를 축소하거나 채용 할당제가 실제 도입된 사례는 아직 확인되지 않는다.",
    "source": "https://www.moneys.co.kr/article/2025092214022510408"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "거제시와 삼성중공업·한화오션이 지역상생발전 협약을 체결하고 약 1000억 규모 '문화선도산단' 조성을 정부 공모로 추진 중이라는 보도가 있어, 협약 체결이라는 구체적 착수 단계에 진입했다.",
    "source": "https://www.etoday.co.kr/news/view/2601065"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "1조 3900억 규모 거제 기업혁신파크(장목)는 통합개발계획 수립·국토부 제출, 성공추진 선포식 개최, 네이버클라우드 투자 연계 등 실제 집행 활동이 진행 중인 것으로 확인된다.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3431273"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "산림청 주관 한아세안 국가정원 재기획 기본구상 용역이 실제로 착수됐고 2026년 정부예산에 용역비 5억원이 반영됐으나, 사업 자체는 산림청·경남도가 주도하며 예비타당성조사 재통과가 남아있어 초기 착수 단계로 판단된다.",
    "source": "https://www.asiatoday.co.kr/kn/view.php?key=20251211010006411"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "이홍기",
  "office": "거창군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "민선 9기 비전으로 AI·로봇·드론 전략기술 실증기반 조성과 실증특구 지정을 제시했으나, 취임 이후 국가 실증센터 유치나 실증특구 지정 등 구체적 착수 사례는 확인되지 않는다.",
    "source": "https://www.hankookilbo.com/news/article/A2026070921560000068"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "가조온천 일대를 글로벌 온천테마파크로 개발하겠다는 구상이 민선 9기 비전으로 제시됐지만, 부지 확장이나 민간자본 유치 협약 등 실질적 착수 단계의 조치는 아직 보도되지 않았다.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=641832"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "거창읍 대평리 일원 200억 규모 스마트농업 육성지구 조성사업이 2026년 실시설계 단계로 실제 추진 중이며, 광역 농특산물 복합물류센터 건립도 함께 추진되고 있어 예산·부지가 확보된 착수 단계로 판단된다.",
    "source": "https://www.naewoeilbo.com/news/articleView.html?idxno=2230890"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "거창창포원은 국가정원 지정 요건인 면적 30만㎡를 이미 충족했고, 제2창포원 조성사업(210억 규모) 준공, 생태관광문화복합사업 등이 실제 진행 중이며 5개 주제정원 중 일부가 완료돼 2027년 국가정원 지정을 목표로 착실히 진행되고 있다.",
    "source": "https://www.newsgn.com/news/articleView.html?idxno=482026"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "거창군이 위테크와 260억원 규모 투자협약을 체결해 승강기 전문농공단지 내 신규 생산공장 건립을 추진하는 등 승강기산업 고도화 관련 실제 투자 협약이 성사됐으나, 농어촌기본소득·물류메가스테이션 등 다른 세부 항목은 아직 공모 준비 단계다.",
    "source": "https://view.asiae.co.kr/article/2026090113263320568"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "하학열",
  "office": "고성군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "'코어고성 333 비전'의 성장 분야로 우주항공·방산 거점 조성을 제시했고 취임 후 SK오션플랜트 매각 철회를 촉구하는 등의 행보는 있었으나, 클러스터·배후도시 조성을 위한 구체적 착수 조치는 확인되지 않는다.",
    "source": "https://www.busan.com/view/busan/view.php?code=2026080218094957162"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "친환경 농림축수산 가공유통 클러스터 조성과 G-푸드 수출 지원 체계 구축이 선거공약과 취임 인터뷰에서 반복 제시됐으나, 실제 부지 조성이나 예산 반영 등 착수 단계 증거는 찾지 못했다.",
    "source": "http://www.gnmaeil.com/news/articleView.html?idxno=589141"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "대학등록금 전액 지원, 준공영제 산후조리원 등 '고성형 교육 투자' 방향이 인터뷰에서 제시됐지만 취임 2개월 시점에 조례 제정이나 예산 편성 등 구체적 실행 보도는 확인되지 않는다.",
    "source": "https://www.newsgn.com/news/articleView.html?idxno=565327"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "중장년 의료비 연 최대 100만원 지원(H-Care), 어르신 안심동행서비스 등을 추진하겠다는 계획이 여러 인터뷰에서 반복 언급됐으나 실제 사업 개시나 예산 확정 보도는 아직 없다.",
    "source": "http://www.gnmaeil.com/news/articleView.html?idxno=592325"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "기업유치 전담조직 가동과 동해면 경제자유구역 편입 절차 착수 의지를 밝혔으나, 실제 전담조직 신설이나 기업유치 성과에 대한 별도 보도는 확인되지 않는다.",
    "source": "https://www.newsgn.com/news/articleView.html?idxno=565327"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "정영두",
  "office": "김해시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "김해시가 시민 1인당 10만원 민생회복지원금 545억원을 포함한 추경예산안을 8월 21일 시의회에 제출했고 9월 11일 의결을 앞두고 있어, 취임 100일 이내 지급 목표에 맞춰 예산 편성이라는 구체적 착수 단계에 있다.",
    "source": "https://www.ziksir.com/news/articleView.html?idxno=143954"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "정영두 시장은 KTX 김해역 신설과 광역교통망 확충을 국가계획에 반영하겠다는 의지를 인터뷰에서 밝혔으나, 국토부 철도망 계획 반영이나 부지 지정 등 구체적 진전은 아직 확인되지 않는다.",
    "source": "https://n.news.naver.com/mnews/article/009/0005720845?sid=102"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "정영두 시장이 취임 후 시장 직속 태스크포스(TF)를 꾸려 장유여객터미널의 운영협약·재정 지원 방식·법률적 쟁점을 재검토하는 등 실제 조직이 가동되고 있어 착수 단계로 판단된다.",
    "source": "https://n.news.naver.com/mnews/article/009/0005720845?sid=102"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "동부경남 김해공공의료원 건립은 부지 확정이 지연되며 사업이 사실상 원점으로 돌아갔다는 보도가 있어, 경상남도 주도 사업의 특성상 새 시장의 부지 제시나 협의 외에는 구체적 진전이 확인되지 않는다.",
    "source": "https://mbcgn.kr/01_new/new01_view.asp?idx=409567"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "김해시가 7월 초 경상남도에 시 직영 유기동물보호소(동물보호센터)와 반려동물 복지센터 건립을 신청하는 등 구조·치료·입양·교육을 연계한 원스톱 동물복지 체계 구축을 실제로 추진하기 시작했다.",
    "source": "https://n.news.naver.com/mnews/article/082/0001390426?sid=102"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "류경완",
  "office": "남해군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "남해군이 '정원의 섬' 공약과 연계해 지역 조경자원 데이터베이스 구축, 남해읍 여행자거리 조성, 조경수 공공사업 활용 등을 실제로 추진하고 있어 구체적 착수 단계에 들어섰다.",
    "source": "https://n.news.naver.com/mnews/article/003/0014163255?sid=102"
   },
   {
    "order": 2,
    "percent": 0,
    "note": "남해-대전선 철도건설을 제5차 국가철도망 구축계획에 반영하겠다는 공약 외에 취임 이후 7개 지자체 협의체 구성이나 예타 면제 추진 등 구체적 행보를 확인하지 못했다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 0,
    "note": "남해읍·서면의 광양만권 경제자유구역 편입 추진과 관련해 취임 이후 경상남도·광양만권경제자유구역청과의 실질적 행정 협의나 진전 보도를 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 10,
    "note": "정부 '햇빛소득마을' 사업 후보지로 남해군 16곳이 선정된 바 있으나, 취임 이후 주민 발전수익 배당체계 구축이나 소형 ESS 보급 등 구체적 실행 조치는 아직 확인되지 않는다.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=2003716"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "남해군은 농어촌기본소득 국가 시범사업 지역으로 이미 선정돼 실제 운영 중이며 인구 증가, 지역 상권 활성화 등 성과가 보고되고 있고, 류경완 군수도 본사업 전환과 지급액 확대의 필요성을 지속 강조하고 있다.",
    "source": "https://n.news.naver.com/mnews/article/421/0009045732?sid=102"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "안병구",
  "office": "밀양시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "밀양 나노융합국가산단 내 '수소환경 소재·부품 기업지원센터'(총사업비 466억원) 착공 등 나노·수소산업 인프라가 실제 조성 중이며, 재선 시장으로서 기존 사업이 계속 운영되고 있다.",
    "source": "https://www.gasnews.com/news/articleView.html?idxno=117787"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "초등돌봄 '다봄센터'가 이미 개관해 실제 운영 중이며(2025년 27억원 투입), 초등 4학년까지 확대 운영 계획도 발표됐다.",
    "source": "https://www.newsro.kr/article243/777538"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "'2026 밀양국가유산 야행' 등 체류형 관광 프로그램은 계속 운영되고 있으나, 공약에 명시된 K-아리랑 세계화 엑스포 개최나 유네스코 창의도시 가입 등 신규 조치는 확인되지 않는다.",
    "source": "https://www.weeklyseoul.net/news/articleView.html?idxno=85789"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "만 6~18세 버스요금 무료화 등을 포함한 '밀양형 통합 대중교통 체계' 개편안이 확정돼 10월 시범운행 후 2027년 전면 시행 예정으로, 구체적 실행 계획이 수립됐다.",
    "source": "http://www.knnews.co.kr/news/articleView.php?idxno=1546985"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "인·허가 사전컨설팅이 매일 실제 운영 중이고 스마트도시계획 수립 용역 중간보고회도 진행돼 AI 행정 혁신이 실질적으로 추진되고 있다.",
    "source": "https://www.ajunews.com/view/20260707155939712"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "박동식",
  "office": "사천시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "특별법이 2025년 발의돼 2026년 국토위 법안심사소위에 회부됐고, 사천시장이 고흥군수와 함께 국회를 방문해 조기 제정을 촉구하는 등 절차가 진행 중이나 최종 통과는 국회 소관으로 아직 이뤄지지 않았다.",
    "source": "https://www.viva100.com/article/20260903500978"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "우주항공산업진흥원 유치를 위한 범시민 서명운동이 목표 5만명 중 6월 기준 3만8528명을 달성하는 등 실질적으로 진행 중이며 하반기 국회·부처 전달을 앞두고 있다.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=956545"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "남일미래·남일마레 지역활력타운 사업(총사업비 645억원, 2025~2027년)이 향촌동 부지에서 본격 추진되고 있다.",
    "source": "https://www.news4000.com/news/articleView.html?idxno=50771"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "삼천포 무지갯빛 생태탐방로(늑도~신도, 186억원)가 계획대로 착공해 2028년 8월 준공을 목표로 실제 공사가 진행 중이다.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3502175"
   },
   {
    "order": 5,
    "percent": 30,
    "note": "먹거리통합지원센터 건립을 위한 용역 최종보고회가 완료돼 부지(용현면 신복리)와 사업비(100억원) 방향이 정해졌고, 2026년 행정절차가 진행 중이다.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3451600"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "유명현",
  "office": "산청군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "산청군이 자체 재원으로 '산청형 기본소득' 시범사업(월 5만원, 지역상품권)을 위한 전담조직을 구성했고 10~12월 시행을 앞두고 있으며, 정부 공모 선정을 위해 중앙부처 방문도 이어가고 있다.",
    "source": "https://n.news.naver.com/mnews/article/658/0000154024?sid=102"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "취임사에서 우주항공 배후산단·세라믹특화단지 조성과 투자유치자문위 운영 계획을 밝혔으나, 산업단지 지정이나 기업유치 등 구체적 착수를 보여주는 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 10,
    "note": "지방소멸대응기금을 활용한 임대형 스마트팜 온실 조성은 선거 공약 단계에 머물러 있으며, 취임 후 구체적 착수 보도는 찾지 못했다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 30,
    "note": "지리산 케이블카(중산리~장터목)는 경남도가 주관해 노선 단일화 등 실제 절차가 진행 중인 사업으로, 산청군은 이를 요청·협력하는 입장이며 취임 이후 별도의 신규 조치는 확인되지 않는다.",
    "source": "http://www.knnews.co.kr/news/articleView.php?idxno=1476422"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "동의보감촌을 제1호 치유관광산업지구로 지정·육성하겠다는 구상은 선거 기간 반복 발표됐으나, 취임 후 지정 신청이나 예산 반영 등 후속 조치는 확인되지 않는다.",
    "source": ""
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "나동연",
  "office": "양산시",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "부울경 광역철도는 2025년 7월 예비타당성조사를 통과해 기본계획 수립 절차가 진행 중이며, 나동연 시장도 국비 확보를 위해 지속적으로 중앙부처를 방문하고 있다.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=941464"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "부울경 행정통합청사 유치는 반복적으로 의지가 표명돼 왔으나, 2026년 들어 추진위원회 구성이나 부지 확보 등 구체적 진전을 보여주는 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 3,
    "percent": 55,
    "note": "황산공원 내 '황산 지방정원' 조성 공사가 2026년 8월 착공해 예산이 집행되고 있으며, 2028년 지방정원 등록을 거쳐 국가정원 승격을 추진 중이다.",
    "source": "https://www.kukinews.com/article/view/kuk202608250139"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "증산신도시(증산지구) 개발은 제일건설 컨소시엄이 우선협상대상자로 선정됐고 2026년 내 PFV 설립과 사업시행자 지정을 목표로 절차가 진행 중이나, 착공은 2028년 예정이다.",
    "source": "https://www.newsis.com/view/NISX20250929_0003348075"
   },
   {
    "order": 5,
    "percent": 80,
    "note": "양산도시철도(노포~북정)는 운송사업면허 취득과 시운전이 진행 중이며 2026년 12월 개통을 목표로 마무리 단계에 있다.",
    "source": "https://www.newsis.com/view/NISX20260720_0003715291"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "오태완",
  "office": "의령군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "남북6축 고속도로 의령 연장을 위해 범군민 추진위원회 발대식과 서명운동이 실제로 진행되고 있으나, 국가도로망종합계획 반영 여부는 국토교통부 소관으로 아직 확정되지 않았다.",
    "source": "http://news.lghellovision.net/news/articleView.html?idxno=548118"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "의령군은 정부 농어촌기본소득 시범사업 대상지로 선정돼 2026~2027년 18개월간 월 15만원을 실제 지급하는 사업이 진행 중이다.",
    "source": "http://www.gndomin.com/news/articleView.html?idxno=474926"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "다자녀 튼튼수당을 1자녀 가정까지 확대하는 방안은 취임 인터뷰에서 핵심 과제로 제시됐으나, 조례 개정이나 예산 반영 등 구체적 시행 보도는 확인되지 않는다.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "의령읍 동동택지지구 청년 임대아파트 100세대(총사업비 315억원)가 2026년 2월 착공해 2028년 준공을 목표로 공사가 진행 중이다.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=630007"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "서동행정타운 내 시니어 친화형 국민체육센터가 2026년 5월 착공해 건립 공사가 진행 중이다.",
    "source": "https://www.asiatoday.co.kr/view.php?key=20260402010000622"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "조규일",
  "office": "진주시",
  "pledges": [
   {
    "order": 1,
    "percent": 80,
    "note": "핵심 계속사업인 미래항공기체(AAV) 실증센터가 올해 4월 건축공사를 완료하고 장비 점검·안정화 단계를 거쳐 연말 운영을 목표로 완공을 눈앞에 두고 있음.",
    "source": "https://www.ajunews.com/view/20260127162005126"
   },
   {
    "order": 2,
    "percent": 55,
    "note": "시청 일부 부서 원도심 이전, 원도심 활성화 조례 제정, 국·시비 38.4억원 투입한 거리경관·창업공간 조성사업이 실제로 집행 중이며 청년허브하우스가 8월 준공됨.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=644170"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "경남진주혁신도시 완성과 발전공기업 통합본사 유치를 촉구하고 있으나 이는 중앙정부·공공기관 소관 사항으로 진주시의 독자적 착수 조치는 확인되지 않음.",
    "source": "https://www.gnnews24.kr/news/articleView.html?idxno=33806"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "2022년부터 이어온 '구슬모음 어린이집' 협력보육 사업이 2026년에도 9개 모음 45곳 선정, 11억원 예산으로 계속 운영되고 있음.",
    "source": "https://www.newscj.com/news/articleView.html?idxno=3376085"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "2025~2027년 문화산업 생태계 조성사업이 계속 추진 중이며 2026년 대한민국 문화도시 공모사업을 통해 9월부터 시민 문화행사가 실제로 개최될 예정임.",
    "source": "https://www.newsprime.co.kr/news/article/?no=722811"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "성낙인",
  "office": "창녕군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "기회발전특구 지정 이후 앵커기업 유림테크를 포함한 16개 기업이 투자를 공식화하고 약 7만2000평 부지에 대한 MOU가 체결되는 등 영남일반산업단지 조성사업이 실제로 진행 중임.",
    "source": "https://biz.heraldcorp.com/article/10625784"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "취임 인터뷰에서 소아청소년과 진료 확충, 청소년 복합문화공간 조성 등 세대별 정책 방향을 제시했을 뿐 구체적 착수(예산 반영, TF 구성 등) 근거는 확인되지 않음.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=642489"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "AI 기반 과학영농 종합시설 건립 계획을 여러 인터뷰에서 밝혔으나 착공이나 예산 편성 등 구체적 진전은 확인되지 않음.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=642489"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "부곡온천 현대화, 화왕산·우포늪 연계 관광벨트 조성 등을 취임사와 인터뷰에서 여러 차례 밝혔으나 실제 착수나 예산 편성 등 구체적 조치는 확인되지 않음.",
    "source": "https://www.hankookilbo.com/news/article/A2026070611450002664?did=NA"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "취임 다음날 정부세종청사를 방문해 국비 확보를 위한 '세일즈 행정'에 나섰으나, 실제 예산 성과나 AI 행정시스템 도입 등 구체적 결과는 아직 확인되지 않음.",
    "source": "https://www.pennmike.com/news/articleView.html?idxno=123032"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "강기윤",
  "office": "창원시",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "마산자유무역지역·봉암공단 대상 '산업단지 에너지 자급자족형 인프라 구축' 사업이 산업통상부 공모에 선정돼 국비 200억원을 확보하는 등 실제 재원 확보가 이뤄짐.",
    "source": "http://www.gnmaeil.com/news/articleView.html?idxno=593472"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "창원시와 경남도가 실무협의체를 구성해 공식 협상 테이블에 착석하는 등 협상이 실제로 시작됐으나 아직 무료화 합의나 시행에는 이르지 못함.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=643960"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "인수위원회가 신축 대신 유휴 건축물 활용 방안을 제시했으나 마산청사 예산 문제와 진해청사 후보지 경쟁 등으로 구체적 착수 단계에 이르지 못함.",
    "source": "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260720.22010005520"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "창원시와 경남교육청이 내년 하반기 시행을 목표로 지원 대상과 재원 규모 등을 검토 중이나 조례 제정 등 구체적 착수 근거는 아직 없음.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=2010231"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "선거 공약으로 발표됐을 뿐 취임 이후 예산 편성이나 조례 제정 등 시행을 위한 구체적 조치에 대한 보도는 확인되지 않음.",
    "source": ""
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "강석주",
  "office": "통영시",
  "pledges": [
   {
    "order": 1,
    "percent": 100,
    "note": "시의회 의결을 거쳐 8월 31일부터 시민 1인당 35만원(당초 33만원에서 증액)의 민생회복지원금 지급을 실제로 시작해 9월 초 4차 지급까지 진행됨.",
    "source": "https://www.gukjenews.com/news/articleView.html?idxno=3680103"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "한산대첩교 조기착공과 통영KTX 임기내 개통을 지속적으로 촉구하고 있으나 국토부·정부 주도 사업으로 예비타당성 면제 등 실제 진전은 확인되지 않음.",
    "source": "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260730.22008008275"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "노후거점산업단지 경쟁력강화사업지구 선정을 통해 재원을 확보하겠다는 계획을 밝혔을 뿐 실제 선정이나 착수 근거는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 4,
    "percent": 55,
    "note": "통영시인재육성기금을 통한 대학생 등록금 전액지원사업이 계속 운영 중이며 2026년 제3회 추경에서 기금 전출금 18억원이 추가 편성돼 2학기 지원 접수가 진행됨.",
    "source": "https://www.knnews.co.kr/news/articleView.php?idxno=1549919"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "선거 공약 및 취임 인터뷰에서 유치 의지를 밝혔을 뿐 이후 구체적 협상이나 유치 진전에 대한 보도는 확인되지 않음.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=2007235"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "김현수",
  "office": "하동군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "국도 2·19호선 확장 등은 전임 군수 때부터 국토부에 건의해온 광역 사업으로, 취임 이후 새로운 독자적 조치는 확인되지 않음.",
    "source": ""
   },
   {
    "order": 2,
    "percent": 55,
    "note": "농림축산식품부의 AI 기반 농촌교통모델 실증사업(전국 5개 군)에 하동군이 선정돼 화개면 등에서 관광연계형 수요응답 교통체계(DRT) 도입이 실제로 착수·운영되고 있음.",
    "source": "https://www.yna.co.kr/view/AKR20260725045200030?input=1195m"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "하동군이 글로벌 티 브랜드 '차지코리아'와 하동말차 공급·홍보 협약(MOA)을 실제로 체결하는 등 판로 확대를 위한 구체적 계약이 성사됨.",
    "source": "http://www.metroseoul.co.kr/article/20260902500582"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "기존부터 이어온 전지훈련 유치 정책을 계속 운영해 2026년 상반기에만 연인원 4만2000여 명의 선수단을 유치하는 등 실제 운영 성과가 있으나, 메디컬 웰니스 리조트나 트로트 전수관 등 신규 사업 착수 근거는 없음.",
    "source": "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202607261325363550531"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "취임 후 첫 업무보고회에서 원스톱 민원 해결체계와 '하동군민지원청' 중심 행정체계 구축 방침을 밝혔으나 아직 조직 신설 등 구체적 착수 근거는 확인되지 않음.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=641482"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "차석호",
  "office": "함안군",
  "pledges": [
   {
    "order": 1,
    "percent": 30,
    "note": "취임 후 실제로 경남도·함안군·비에이치아이㈜·항공우주방산단조와 550억원 규모 첨단산업(항공우주·방산) 투자협약(MOU)을 체결(2026.8.31)해 45명 이상 신규 일자리 창출이 예정됨. 다만 RE100 산단 자체나 1.5조원 규모 물류거점 조성은 아직 계획 발표 수준.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=2013757"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "함안군농업기술센터가 민선9기 농업 공약 조기이행 및 2027년 국·도비 확보를 위해 경남도 관련 기관을 방문해 예산 지원을 요청하는 등 초기 대응 단계이며, 바이오 첨단 농업복합단지 자체의 착수(부지선정, 예산반영 등) 근거는 확인되지 않음.",
    "source": "http://www.knnews.co.kr/news/articleView.php?idxno=1546735"
   },
   {
    "order": 3,
    "percent": 10,
    "note": "함안군이 한국도로공사를 방문해 칠원 하이패스IC·천주산터널 등 도로사업 반영을 건의하고 국회의원이 코레일에 KTX 함안역 정차 재개를 요청했으나, 모두 상급기관에 대한 건의·요청 단계이며 달빛어린이병원 지정이나 실제 착공 등 확인된 조치는 없음.",
    "source": "https://localsegye.co.kr/news/view/1065577697524583"
   },
   {
    "order": 4,
    "percent": 10,
    "note": "차석호 군수는 취임 전부터 '함안군 특별자치권 유지'를 전제로 한 창원·함안 행정통합을 장기 과제로 계속 주장하고 있으나, 스스로도 시간이 오래 걸린다고 밝혔고 통합추진 공동위원회 등 실제 기구 구성 근거는 확인되지 않음.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=639054"
   },
   {
    "order": 5,
    "percent": 10,
    "note": "말이산 고분군 세계유산축전, 제7회 말이산 별축제 등 기존 행사가 계속 운영되고 있으나, 문화관광재단 설립이나 낙화놀이 상설화, 웰니스 관광휴양단지 조성 등 신규 착수 근거는 확인되지 않음.",
    "source": "https://www.chosun.com/national/2026/08/13/7JJB6PY5JZGH7OSSQWWSK232FU/"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "진병영",
  "office": "함양군",
  "pledges": [
   {
    "order": 1,
    "percent": 55,
    "note": "재선인 진병영 군수의 전임기부터 이어온 지리산 풍경길(대한민국 1호 관광도로)과 대봉산휴양밸리 등 관광 인프라가 실제 운영 중이며 2025년 방문객 877만명으로 경남 최고 증가율을 기록하는 등 사업이 실질적으로 가동되고 있음.",
    "source": "https://www.idomin.com/news/articleView.html?idxno=955553"
   },
   {
    "order": 2,
    "percent": 30,
    "note": "1조3800억원 규모 함양 AI데이터센터(오리드코리아, 휴천일반산단)가 2026년 4월 인허가를 완료해 2027년 착공·2028년 운영을 목표로 하는 등 실제 절차가 진행 중이나, 신관지구 산업물류단지 확장이나 공공기관 유치는 아직 발전포럼에서 논의되는 계획 단계.",
    "source": "http://www.knnews.co.kr/news/articleView.php?idxno=1539205"
   },
   {
    "order": 3,
    "percent": 55,
    "note": "함양읍과 연접한 거면·인당지구가 농림축산식품부 2026년 농촌공간정비사업에 선정돼 170억원을 투입, 돈사·우사·폐축사를 단계적으로 철거하는 실제 공사가 진행 중임(재선 전임기부터 이어진 사업으로 계속 추진).",
    "source": "https://www.idomin.com/news/articleView.html?idxno=2002818"
   },
   {
    "order": 4,
    "percent": 55,
    "note": "함양읍 백연리 스포츠파크 부지 7만4000㎡에 36홀 규모 함양파크골프장 조성 공사가 실제 진행 중이며 진병영 군수가 현장점검을 실시하는 등 사업이 가동되고 있음.",
    "source": "http://www.gnmaeil.com/news/articleView.html?idxno=588480"
   },
   {
    "order": 5,
    "percent": 55,
    "note": "산악관광 브랜드 '오르GO 함양'이 이미 실제 운영 중으로 대표 캐릭터 '마루&올라'가 토이어워드 특별상을 수상하고 신규 도숭산 코스를 개방하는 등 지속적인 콘텐츠 확장이 이뤄지고 있음.",
    "source": "https://www.cnbnews.com/news/articleView.html?idxno=1008602"
   }
  ],
  "region": "경상남도"
 },
 {
  "name": "김윤철",
  "office": "합천군",
  "pledges": [
   {
    "order": 1,
    "percent": 10,
    "note": "취임 후 민선9기 공약 실행방안 점검회의를 열었으나, 농민수당·면세유 지원 확대와 관련한 구체적 예산 반영이나 신규 조치 보도는 확인되지 않음.",
    "source": "http://www.metroseoul.co.kr/article/20260731500271"
   },
   {
    "order": 2,
    "percent": 10,
    "note": "진천-합천 고속도로는 국토부의 제2차 국가도로망계획(2021)에 이미 반영된 광역 국책사업으로 군 자체의 신규 착수는 없고, 108홀 규모 도립 파크골프장도 취임 인터뷰에서 '유치를 추진하겠다'는 계획 수준에 머물러 있음.",
    "source": "https://www.gnnews.co.kr/news/articleView.html?idxno=641736"
   },
   {
    "order": 3,
    "percent": 30,
    "note": "재선인 김윤철 군수의 전임기부터 추진해 온 두무산 양수발전소(900MW, 2.5조원)가 2023년 우선사업자로 선정된 데 이어 발전사업허가 취득, 예타 통과, 환경영향평가·실시계획 등 행정절차가 실제로 진행 중이며 2027~2028년 착공을 목표로 함. 다만 물리적 착공 전 단계.",
    "source": "https://www.imaeil.com/page/view/2026082511040299380"
   },
   {
    "order": 4,
    "percent": 30,
    "note": "미래 전략기반의 핵심인 두무산 양수발전소는 위와 동일하게 발전사업허가·예타통과 등 실질적 절차가 진행 중이나, 합천 운석충돌구 지질공원 조성은 8월말 중앙부처에 후보지 선정을 요청한 단계로 아직 승인되지 않음.",
    "source": "https://www.knnews.co.kr/news/articleView.php?idxno=1549749"
   },
   {
    "order": 5,
    "percent": 0,
    "note": "결재·보고체계 간소화나 공무직 정년 연장 논의와 관련한 구체적 추진 보도를 찾지 못함.",
    "source": ""
   }
  ],
  "region": "경상남도"
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
