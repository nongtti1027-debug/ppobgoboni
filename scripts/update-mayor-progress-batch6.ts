import { prisma } from "@/lib/db";

type Judgment = { order: number; percent: number; note: string; source: string };
type MayorJudgment = { name: string; office: string; region: string; pledges: Judgment[] };

const mayors: MayorJudgment[] = [
  {
    "name": "이응우",
    "office": "계룡시",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "계룡 제2산단 내 공공임대형 지식산업센터(총사업비 253억원, 국비 160억원)가 중앙투자심사를 통과하고 설계공모 당선작까지 선정돼 착공 준비 단계에 있음. 다만 착공은 2027년 목표로 실제 시공은 아직 시작되지 않음.",
        "source": "https://www.k-kica.org/press/116"
      },
      {
        "order": 2,
        "percent": 0,
        "note": "선거 공약으로 하대실지구 부지에 어린이 복합문화공간 조성을 발표했으나, 취임 이후 구체적 설계·예산 반영이나 착수 관련 보도는 확인되지 않음.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 10,
        "note": "K-국방컨벤션센터는 국가사업 선정이 필요한 단계로, 신도안 등 여러 후보지를 검토 중이나 부지가 확정되지 않았고 국방부 등 중앙정부에 국가사업 지정을 요청하는 수준에 머물러 있음.",
        "source": "https://www.naewoeilbo.com/news/articleView.html?idxno=2322482"
      },
      {
        "order": 4,
        "percent": 55,
        "note": "향적산 자연휴양림(약 50ha, 55억원)이 실시설계를 마치고 2026년 12월 준공을 목표로 웰에이징센터·숙박시설 등 조성이 실제로 진행 중임.",
        "source": "https://www.localtoday.co.kr/news/articleView.html?idxno=214495"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "2029 계룡세계군문화엑스포는 정부의 국제행사 승인을 받기 위한 연구용역이 진행돼 중간보고회가 열렸고 주제어·SNS 공모 등 실제 준비 활동이 이뤄지고 있으나, 아직 정부 승인 자체는 나지 않음.",
        "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1279668"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "최원철",
    "office": "공주시",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "옥룡동 침수관리지역 정비, 전막 우수유출저감시설 조기 준공 등을 시정 로드맵에 담아 방향을 제시했으나, 실제 준공이나 착공을 확인할 구체적 보도는 찾지 못함.",
        "source": "https://m.ekn.kr/view.php?key=20260113029327987"
      },
      {
        "order": 2,
        "percent": 30,
        "note": "유구산업단지, 탄천 제2산단, 송선·동현 산업단지 조기 조성 및 기업유치를 민선9기 경제정책 핵심으로 추진 중이나, 신규 착공·분양 등 완결된 성과는 아직 확인되지 않음.",
        "source": "https://www.gukjenews.com/news/articleView.html?idxno=3479873"
      },
      {
        "order": 3,
        "percent": 55,
        "note": "'2026 공주페스티벌', '공주 별빛만찬' 등 야간관광 특화도시 사업이 실제로 개최·운영되고 있으며 '캔들라이트 공주온밤' 등 후속 브랜드도 추진 중임.",
        "source": "http://www.daejeontoday.com/news/articleView.html?idxno=737861"
      },
      {
        "order": 4,
        "percent": 55,
        "note": "2026년까지 3년간 100억원이 투입되는 교육발전특구 시범사업이 실제로 운영 중이며, 시범사업 성과를 바탕으로 정식 특구 지정을 추진하고 있음.",
        "source": "https://www.m-i.kr/news/articleView.html?idxno=1370285"
      },
      {
        "order": 5,
        "percent": 55,
        "note": "청년정책 5개년 기본계획(총 52개 과제)을 수립해 월세 지원·공유주택·일자리 연계 주택 등을 우선 추진하고 있으며, 아이돌봄 자부담금 100% 지원 등도 실제 시행 중임.",
        "source": "https://www.gukjenews.com/news/articleView.html?idxno=3315152"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "문정우",
    "office": "금산군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "추경 편성에 800~900억원 규모 지방채 발행이 필요한 상황에서도 지방채를 발행하지 않고 재정을 정상화하겠다는 방침을 실제로 적용해 예산을 운영 중임.",
        "source": "https://www.newsis.com/view/NISX20260709_0003702774"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "귀농·귀촌 지원 등 기존 인구시책이 이어지고 있으나, 문정우 군수 취임 이후 인구 5만 회복을 위한 새로운 구체적 조치나 예산 반영은 확인되지 않음.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 10,
        "note": "교육발전특구 지정 추진과 기존 장학기금 200억원 유지 방침을 밝혔으나, 특구 지정이나 신규 사업 착수 등 구체적 진전은 아직 보도되지 않음.",
        "source": "https://www.m-i.kr/news/articleView.html?idxno=1370285"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "기존 연례행사인 제44회 금산세계인삼축제(10월 개최) 준비는 진행 중이나, 공약인 별도의 '인삼엑스포' 신규 유치를 위한 구체적 행보는 확인되지 않음.",
        "source": "http://www.daejeontoday.com/news/articleView.html?idxno=745256"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "군유지를 활용한 '햇빛연금' 도입 구상을 밝힌 단계로, 조례 제정이나 예산 반영 등 실행 착수 근거는 찾지 못함.",
        "source": ""
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "백성현",
    "office": "논산시",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "방산혁신클러스터 지정을 기반으로 총사업비 1607억원 규모 국방국가산업단지(2029년 준공목표)와 2969억원 규모 국방미래기술연구센터(2030년 목표) 조성이 실제로 추진되고 있음.",
        "source": "https://news.tf.co.kr/read/national/2332302.htm"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "탑정호 복합문화휴양단지, 강경 한옥호텔 등 체류형 관광 구상을 시정연설 등에서 밝혔으나, 부지 확정이나 착공 등 구체적 실행 단계는 확인되지 않음.",
        "source": "https://www.gukjenews.com/news/articleView.html?idxno=3444960"
      },
      {
        "order": 3,
        "percent": 55,
        "note": "논산공공산후조리원 기공식이 열렸고 미래광장에는 어린이 장난감도서관·돌봄센터가 개소를 앞두고 있으며 청년꿈키움광장도 조성 중으로, 여러 사업이 실제 진행되고 있음.",
        "source": "https://www.ajunews.com/view/20260708151930358"
      },
      {
        "order": 4,
        "percent": 55,
        "note": "부적면 농업기술센터에 '과학영농종합분석센터' 기공식을 열어 2026년 9월 완공을 목표로 실제 공사가 진행됐으며, 스마트팜 보급 지원도 이어지고 있음.",
        "source": "https://www.news1.kr/local/daejeon-chungnam/6214319"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "특별교부세 38억원을 확보해 딸기엑스포 및 안전 인프라 구축 예산으로 반영한 사실이 확인됨.",
        "source": "https://www.news1.kr/local/daejeon-chungnam/6214319"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "김기재",
    "office": "당진시",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "제2서해대교 국가계획 반영을 5대 공약으로 제시하고 중앙정부·국회·충남도와 원팀 체계로 추진하겠다고 밝혔으나, 국가계획 반영 등 실질적 진전은 아직 확인되지 않음.",
        "source": "http://www.djtimes.co.kr/news/articleView.html?idxno=112007"
      },
      {
        "order": 2,
        "percent": 0,
        "note": "당진읍 2대대 등 시내 군부대 이전은 오랜 숙원사업으로 '답보 상태'라는 보도가 있었고, 취임 이후 새로운 진전 사항은 확인되지 않음.",
        "source": "http://www.djtimes.co.kr/news/articleView.html?idxno=85408"
      },
      {
        "order": 3,
        "percent": 30,
        "note": "해양경찰인재개발원(합덕읍, 총사업비 약 1837억원)이 세 번째 도전 끝에 기획재정부 예비타당성조사 대상사업으로 선정됐으나, 예타 통과 자체는 아직 이뤄지지 않음.",
        "source": "https://www.jeonmae.co.kr/news/articleView.html?idxno=1237756"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "24시간 소아청소년진료센터 구축 등 5대 세부과제를 제시했으나, 취임 이후 구체적 착수나 협약 등 실행 근거는 확인되지 않음.",
        "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=447635"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "공약대로 '생태호수공원 시민참여단' 30명을 실제로 모집해 9월부터 두 달간 설계 의견 수렴 활동을 시작하는 등 구체적 절차가 착수됨.",
        "source": "https://www.naeponews.co.kr/news/articleView.html?idxno=64572"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "엄승용",
    "office": "보령시",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "취임 직후 '민선 9기 100일 시정혁신 비전 선포식'을 열고 시장 직속 '시정혁신 TF팀'(2030 청년공무원 중심)과 'AI 혁신자문단'을 실제로 구성해 인구·생활인구 정책 로드맵 수립에 착수했다.",
        "source": "https://cc.newdaily.co.kr/site/data/html/2026/07/22/2026072200157.html"
      },
      {
        "order": 2,
        "percent": 0,
        "note": "예비후보 시절 'K-미래인재 융합파크(가칭)' 조성을 공약으로 발표했으나, 취임 이후 부지 확정이나 예산 반영 등 구체적 후속 조치는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 0,
        "note": "주거밀집지역 스마트 주차타워 관련 부지 확정, 국토부 스마트시티 챌린지 연계 등 취임 후 구체적 추진 보도는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 0,
        "note": "소상공인 원스톱 지원·컨설팅 센터 설립과 관련한 취임 후 구체적 조치나 예산 반영 보도는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 5,
        "percent": 10,
        "note": "엄 시장은 언론 인터뷰에서 보령머드의 브랜드 가치를 사계절 치유산업으로 확대하겠다는 방향을 제시했으나, 이는 기존 축제(방문객 162만여 명)의 연장선상 구상 발표 수준으로 별도 조직 신설이나 예산 확정 등 구체적 착수 단계는 확인되지 않는다.",
        "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260820010006559"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "이용우",
    "office": "부여군",
    "pledges": [
      {
        "order": 1,
        "percent": 0,
        "note": "규암 자온로가 부여군 1호 골목형상점가로 지정되는 등 상권 활성화 사례가 있으나 이는 이용우 군수 취임(2026.7.1) 이전인 4월에 이뤄진 조치로, 취임 후 그의 별도 착수 사업은 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 2,
        "percent": 0,
        "note": "생애주기별 종합정책과 스마트 정밀농업 전환은 취임사에서 5대 군정목표로 제시됐을 뿐, 구체적 사업 착수나 예산 반영 보도는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 0,
        "note": "맨발걷기 황토길, 장애인 통합돌봄, 햇빛연금 확대 등 개별 공약에 대한 취임 후 구체적 추진 보도는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 10,
        "note": "'백제왕도 핵심유적 보존·관리에 관한 특별법'이 2026년 5월 국회를 통과해 향후 12개 핵심유적에 총 1조4028억원이 투입될 국가사업 기반이 마련됐으나, 이는 국회·중앙정부 주도 사업이며 이용우 군수의 별도 시행 TF 구성 등 신규 조치는 확인되지 않는다.",
        "source": "https://www.ajunews.com/view/20260512101630142"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "취임식에서 '공직사회 대혁신 공동선언'(6대 혁신과제)을 체결했고, 이후 군의회 총무위원회가 '문화체육복지국·안전건설경제국' 분리 등 1국 3과 7팀을 신설하는 조직확대 개편 조례안을 실제 가결해 내년 1월 시행을 앞두고 있다.",
        "source": "https://www.dtnews24.com/news/articleView.html?idxno=779260"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "이완섭",
    "office": "서산시",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "서산시가 지난 7월 국토부에 신청서를 제출해 8월 28일 전국 두 번째로 '산업위기 선제대응지역'에 실제 지정됐고, 중소기업 이차보전·특례보증·긴급경영안정자금 등 지원 프로그램이 11월까지 5개 은행에서 실제 접수·시행 중이다.",
        "source": "https://v.daum.net/v/20250930133913268"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "서산공항·철도망은 국토부·충남도 주도의 국가/광역 사업으로, 이완섭 시장은 충남도지사·국회의원 등에 조기 반영을 지속 건의하는 수준이며 시 차원의 독자적 착수나 예산 확보 등 새 조치는 확인되지 않는다.",
        "source": "https://www.joongdo.co.kr/web/view.php?key=20260724010007129"
      },
      {
        "order": 3,
        "percent": 0,
        "note": "국제규격(10레인) 수영장 건립을 위한 부지 매입 협의나 예산 반영 등 취임 후 구체적 진행 보도는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 0,
        "note": "장애인 보조견 동행 제도, 장애인 문화예술지원센터 신설 등은 선거 기간(2026년 5월) 공약 발표 수준에 머물러 있으며, 취임 후 구체적 후속 조치는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 5,
        "percent": 30,
        "note": "잠홍동 공동묘지 부지(3만6008㎡)를 가족·어린이 중심 '(가칭)아이행복타운'으로 조성하는 방향으로 민관협력 추진단이 실제 가동 중이며, 유연분묘 정비 완료에 이어 무연분묘 이장도 진행되고 있다.",
        "source": "https://www.khan.co.kr/article/202605201018001/"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "유승광",
    "office": "서천군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "민선 9기 취임 후 제1호 결재로 '서천특화시장 재건축 신속 추진 및 종합 활성화 추진계획'을 확정하고 재건축사업 협력체계(TF)를 실제 운영하며 인허가 절차 단축과 임시시장 활성화 사업을 병행하고 있다.",
        "source": "https://www.ajunews.com/view/20260702113012330"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "금강하구 해수유통·생태복원은 환경부 등 중앙정부가 주도하는 국가사업으로, 유 군수는 이전 시민단체 활동 경력을 바탕으로 지속 촉구하는 수준이며 서천군 차원의 독자적 신규 착수는 확인되지 않는다.",
        "source": "http://www.daejeontoday.com/news/articleView.html?idxno=713656"
      },
      {
        "order": 3,
        "percent": 0,
        "note": "서천형 기본소득(햇빛연금·서천페이 전환 등)은 선거 기간 공약 발표 단계에 머물러 있으며, 취임 후 조례 제정이나 예산 반영 등 구체적 착수 보도는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 30,
        "note": "인수위 운영을 거쳐 '전략기획실' 신설을 포함한 '1실 3국' 조직개편을 예고하고 7월 조직진단에 착수했으며, 실제로 223명 규모의 인사를 단행하는 등 공정 인사·협업행정 개편이 진행 중이다.",
        "source": "https://www.goodmorningcc.com/news/articleView.html?idxno=449057"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "서천군농업기술센터가 청년농업인 스마트팜 사관학교 등 기존 스마트팜 청년창업 지원 프로그램을 계속 운영 중이나, 'S-푸드 스마트밸리'나 서천 김 클러스터 등 신규 공약 사업의 착수는 확인되지 않는다.",
        "source": "https://www.ccnnews.co.kr/news/articleView.html?idxno=373071"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "오세현",
    "office": "아산시",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "지역화폐 아산페이가 2025년 누적 3,723억원으로 역대 최고 실적을 기록하며 실제 안정적으로 발행·유통되고 있고, 2026년에도 약 4,000억원 규모 발행이 진행 중이어서 임기 내 1조원 목표를 향해 운영 중인 사업이다.",
        "source": "https://www.startuptoday.co.kr/news/articleView.html?idxno=569041"
      },
      {
        "order": 2,
        "percent": 30,
        "note": "약 1조원 규모 'AI 모빌리티 실증단지' 조성사업이 산업부·과기정통부의 '예비타당성 대체 구조화 R&D사업' 심사 대상으로 선정되며 청신호가 켜졌으나, 아직 최종 예타 통과나 예산 확정 전 단계다.",
        "source": "https://www.hdnews.co.kr/news/articleView.html?idxno=356428"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "5만석 규모 스포츠·공연 돔과 아산 예술의전당 건립은 신년사·공약 등을 통해 지속적으로 방향이 제시되고 있으나, 부지 확정이나 예산 반영 등 구체적 착수 단계 보도는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 55,
        "note": "357만㎡ 규모 아산탕정2 도시개발사업이 실시계획 인가를 마치고 2026년 착공을 목표로 실제 사업이 진행 중이며, 17개 산업단지 조성도 오 시장의 핵심 시정과제로 병행 추진되고 있다.",
        "source": "https://www.ccnnews.co.kr/news/articleView.html?idxno=386691"
      },
      {
        "order": 5,
        "percent": 55,
        "note": "만 65세 이상 어르신 대상 효도우대권(1인당 10매)이 하반기에도 실제 배부되고 있고, 연령별 시내버스 무료 이용 지원도 시행 중인 등 생애주기별 복지 프로그램이 실제 운영되고 있다.",
        "source": "https://news.tf.co.kr/read/national/2219686.htm"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "최재구",
    "office": "예산군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "재선 이후 그린바이오 벤처캠퍼스·메디푸드 연구지원센터 현장과 5개 산업단지 조성 방침을 재확인했으나, 민선9기 들어서의 구체적인 신규 계약·착공·예산 반영 등 검증 가능한 진전은 확인되지 않아 착수 단계로 판단했다.",
        "source": "https://www.yesan.go.kr/bbs/BBSMSTR_000000000047/view.do?nttId=B000000177388Cy6vO8"
      },
      {
        "order": 2,
        "percent": 55,
        "note": "보건진료소 관할구역을 10개 마을·937명으로 확대하고 진료대행의사를 신규 채용하는 등 지역 밀착형 의료·복지 서비스가 실제 운영 중이다.",
        "source": "https://www.yesan.go.kr/bbs/BBSMSTR_000000000047/view.do?nttId=B000000177550Jo1bJ7"
      },
      {
        "order": 3,
        "percent": 55,
        "note": "신양·삽교 임대형 스마트팜과 청년농 정착지원을 현안사업으로 점검했고, 7월 말 스마트농기계교육장을 개소해 8월부터 실습교육을 운영하고 있다.",
        "source": "https://yesan.go.kr/bbs/BBSMSTR_000000000254/view.do?nttId=B000000178142Zs9lH9"
      },
      {
        "order": 4,
        "percent": 55,
        "note": "K-773 문화·관광 소득기반시설 조성이 2024~2027년 계속사업으로 진행 중이며, 민관협력 사업과 연계한 웰컴센터·공공보행로·주차장 등 기반시설을 조성하고 있다.",
        "source": "https://yesan.go.kr/bbs/BBSMSTR_000000000047/view.do?nttId=B000000177972Hi3aQ6"
      },
      {
        "order": 5,
        "percent": 55,
        "note": "취임 후 첫 현장 일정으로 6개 재해복구사업장을 점검했고, 공공시설 복구율 95%와 1588억원의 복구비 확보가 확인됐다.",
        "source": "https://v.daum.net/v/20260702115920449"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "장기수",
    "office": "천안시",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "취임 1호 결재로 '공공시설 365일 운영'을 승인한 뒤, 도서관·박물관·체육·청소년시설 등 36개소를 10월까지 단계적으로 확대 개방하는 사업이 실제 추진 중이다.",
        "source": "https://m.joongdo.co.kr/view.php?key=20260817010004523"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "철도 지하화·GTX-C·외곽순환도로 등은 중앙정부·관계기관과의 협의가 필요한 사업으로, 취임 후 신규 예산 확정·협약·공사 착수는 확인되지 않았다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 10,
        "note": "500억원 규모 민생 추경과 천안사랑카드 확대 방향을 밝혔으나 확인된 자료는 편성·확보 예고 단계이며, 민생펀드나 AI 산업 세부사업의 집행은 미확인이다.",
        "source": "https://mobile.newsis.com/view/NISX20260619_0003675679"
      },
      {
        "order": 4,
        "percent": 0,
        "note": "24시간 소아진료·야간돌봄, 다자녀 임대주택, 무장애 도시 등 핵심 사업의 취임 후 실행 조치나 예산 반영을 확인하지 못했다.",
        "source": ""
      },
      {
        "order": 5,
        "percent": 0,
        "note": "AI행정 추진본부·천안형 GPT, 공공부문 주 4.5일제, 먹거리재단 설립의 전담조직·조례·예산 등 구체적 착수 근거를 확인하지 못했다.",
        "source": ""
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "김홍열",
    "office": "청양군",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "포레스트 골드타운을 5대 군정 비전으로 제시하고 부지·인허가·예산을 검토했으나, 도시계획 변경이나 민간사업자 공모 등 실제 착수는 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260610143747841"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "햇빛연금을 민선9기 핵심 비전으로 재확인했으나 마을협동조합 설립, 발전소 인허가, 예산 확정 등의 후속 조치는 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260610143747841"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "AI 농사로봇 실증단지 조성을 발표했지만, 국책 R&D 선정·부지 확보·관제센터 구축 등 구체적 진척은 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260610143747841"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "AI 효도인형·감지센서와 24시간 안심케어 구상을 발표했으나, 취임 후 보급 확대나 안심연계망 신규 운영은 미확인이다.",
        "source": "https://v.daum.net/v/20260420090222924"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "미래교육특구 '청빛 프로젝트'를 군정 비전으로 제시했으나, 특구 공모 신청·정착수당·돌봄센터 시행 근거는 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260610143747841"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "윤희신",
    "office": "태안군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "취임 후 군수 직속 세일즈 기획단 TF를 실제 가동하고 부서별 주요업무 추진상황 보고회를 개최했다. 전담 TF 구성이 확인된 착수 단계다.",
        "source": "https://v.daum.net/v/20260720131047010"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "태안~안성 고속도로 조기 추진을 업무보고에서 재확인했으나 국가 교통망 사업으로서 신규 반영·예산·착공은 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260720131047010"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "국방미래항공연구센터와 연계한 미래항공·드론 기업 유치 방향을 점검했으나, 첨단산업단지 지정·부지조성 진척은 미확인이다.",
        "source": "https://v.daum.net/v/20260720131047010"
      },
      {
        "order": 4,
        "percent": 0,
        "note": "반려식물 박람회 정례 개최나 식물산업 기반 조성을 위한 조례·예산·추진조직 근거를 찾지 못했다.",
        "source": ""
      },
      {
        "order": 5,
        "percent": 10,
        "note": "화력폐지지역 지원 특별법과 정의로운전환 특구 지정을 정부·국회에 건의하고 있으나, 지정권은 상급기관에 있고 특구 지정은 확정되지 않았다.",
        "source": "https://v.daum.net/v/20260720131047010"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "박정주",
    "office": "홍성군",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "원도심 활성화와 지역경제 개선 과제를 제시했으나, 일자리·투자 분야의 신규 협약·예산 집행·사업 운영은 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260812115142991"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "축산 악취 저감 종합대책 수립을 지시했으나 현재는 계획 수립 단계로, 시설 설치·예산 집행 등 구체적 실행 성과는 미확인이다.",
        "source": "https://v.daum.net/v/20260812115142991"
      },
      {
        "order": 3,
        "percent": 0,
        "note": "문화·체육·관광 28개 분야 공약을 검토했지만 취임 후 신규 착수·운영 사례를 확인하지 못했다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 55,
        "note": "일상 일정보고와 형식적 간부회의를 폐지하고 전자결재·모바일 메신저를 활성화했다. 1호 결재로 효도택시 도입과 2027년 통학버스 시행 계획을 승인하는 등 행정·복지 개편이 실제 추진 중이다.",
        "source": "https://v.daum.net/v/20260812115142991"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "154개 공약의 부서 지정과 1차 검토를 완료했지만, 읍·면별 균형발전 사업의 실제 예산 반영·착수는 확인되지 않았다.",
        "source": "https://m.ctnews.kr/article.php?aid=1782092556451942037"
      }
    ],
    "region": "충청남도"
  },
  {
    "name": "심덕섭",
    "office": "고창군",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "농어촌기본소득 선도도시를 공약으로 내세워 '2028년 정부사업 반영'을 목표로 제시했으나, 취임 이후 시범지역 실제 선정이나 예산 반영 등 구체적 착수 사실은 확인되지 않는다.",
        "source": "https://www.pressian.com/pages/articles/2026061118192324577"
      },
      {
        "order": 2,
        "percent": 55,
        "note": "공약에 포함된 삼성전자 스마트허브(물류센터)가 고창신활력산단에서 2025년 11월 착공식을 열어 2027년 준공을 목표로 실제 공사가 진행 중이며, 심덕섭 군수도 착공식에 참석했다.",
        "source": "https://www.fnnews.com/news/202511101447089278"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "고창종합테마파크, 명사십리 등 대형 관광클러스터 공약과 관련해 취임 이후 별도의 착공·투자유치 등 구체적 진전 보도는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 30,
        "note": "노을대교는 2026년 2월 기획재정부가 총사업비 4217억원을 확정했고 같은 해 2월 실시설계 용역업체가 최종 선정돼 설계 착수 단계에 들어갔으나, 사업 주체는 익산지방국토관리청으로 착공은 2028년 목표다.",
        "source": "https://www.newsis.com/view/NISX20260303_0003533218"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "출산축하금을 첫째 500만원까지 확대하고 '둥지센터'를 신설하겠다는 공약을 발표했으나, 취임 후 실제 지원금 인상이나 시설 착공 등 집행 사실은 확인되지 않는다.",
        "source": "https://www.eroun.net/news/articleView.html?idxno=81010"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "김재준",
    "office": "군산시",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "새만금 RE100 산업생태계 구축을 위해 새만금개발청에 산업용지 확대 등 현안을 건의하는 등 요청 활동에 그치고 있으며, '원스톱 기업유치단(TF)' 신설 등 자체 조치는 확인되지 않는다.",
        "source": "https://www.ajunews.com/view/20260729141140167"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "현대차 그룹 투자와 연계한 로봇부품클러스터·물류센터 등 4개 사업을 2027년 국가예산에 반영해달라며 국회를 방문해 건의했으나, 예산 확보나 착공 등 실제 집행 단계에는 이르지 못했다.",
        "source": "https://www.todaygunsan.co.kr/news/articleView.html?idxno=23394"
      },
      {
        "order": 3,
        "percent": 30,
        "note": "HD현대중공업과 제이오션중공업이 군산조선소 자산 양수도 본계약을 체결(2026년 6월)했고 김재준 시장(당선인)도 체결식에 참석해 지지 의사를 밝혔는데, 이는 실제 계약이 성사된 구체적 milestone이다.",
        "source": "https://www.newspim.com/news/view/20260626000732"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "1인당 10만원(취약계층 15만원)의 '비상경제민생지원금' 공약이 군산시의 열악한 재정 여건으로 지급에 제동이 걸려 '빨간불'이 켜졌다고 보도됐다.",
        "source": "https://www.jjan.kr/article/20260708500011"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "시장실을 시청 1층으로 이전하겠다는 공약에 따라 옌타이 홍보관 사무실 등이 이전 후보지로 검토되고 있으나 아직 실제 이전은 이뤄지지 않았고, 패스트트랙 전담부서 신설 등도 확인되지 않는다.",
        "source": "http://www.todaygunsan.co.kr/news/articleView.html?idxno=23140"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "정성주",
    "office": "김제시",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "구)김제공항 부지의 K-종자 산업혁신클러스터 조성사업이 기획재정부 예비타당성 심의를 통과해 국비 1683억원을 확보했으며, 2028~2032년 사업으로 실제 재정 반영이 이뤄진 구체적 진전이 확인된다.",
        "source": "https://www.gukjenews.com/news/articleView.html?idxno=3419411"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "'우리동네 희망설계 플랜'은 읍면동 시민기획단을 통한 주민주도 발전모델로 제시된 방향이며, 취임 이후 실제 기획단 구성이나 사업 실행 사례는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 10,
        "note": "정성주 시장은 2026년 9월 새만금신항 관할권을 김제로 결정해달라며 삭발 시위를 벌였으나, 최종 결정 권한은 행정안전부 중앙분쟁조정위원회에 있어 시장이 독자적으로 관철시킨 조치는 아니다.",
        "source": "https://view.asiae.co.kr/article/2026090315074280867"
      },
      {
        "order": 4,
        "percent": 30,
        "note": "공설추모공원은 성덕면 일원 3만6000㎡ 부지·시설 규모가 확정된 상태에서 당정이 공동으로 국비 등 재원 확보에 나서는 단계로, 착수 수준의 진전이 있다.",
        "source": "http://www.sjnews.co.kr/news/articleView.html?idxno=75332"
      },
      {
        "order": 5,
        "percent": 0,
        "note": "'행복온도 100℃' 프로젝트의 세부사업(근로자 한끼 지원, 반값택배 등)과 관련해 취임 후 구체적 시행이나 예산 반영 보도는 찾지 못했다.",
        "source": ""
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "양충모",
    "office": "남원시",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "국립의학전문대학원 설립을 위한 부지 매입이 전체 면적의 55.1%까지 진행된 상태를 양충모 시장(당선인)이 현장 점검했으나, 이는 정부·전북도 주도 사업으로 시장은 예산 건의와 진행 상황 점검 수준에 머문다.",
        "source": "https://www.betanews.net/article/view/beta202606150111"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "데이터센터·AI 영상스튜디오 등 5500억원 규모 민간투자 계획을 제시했으나, 실제 투자계약 체결이나 자금조달 구조의 실체에 의문이 제기되는 보도가 나왔을 뿐 확정된 계약은 확인되지 않는다.",
        "source": "https://www.newspim.com/news/view/20260902000063"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "모노레일 사태 해결을 위한 재정건전성 회복 시민위원회 구성을 공약했고 인수위 단계에서 최우선 과제로 논의됐으나, 취임 후 실제 위원회 구성이나 구상권 청구 등 조치는 확인되지 않는다.",
        "source": "http://news.lghellovision.net/news/articleView.html?idxno=540686"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "남원 문화관광재단 설립을 문화관광 산업화의 핵심으로 제시했으나, 아직 업무보고·구상 단계이며 실제 재단 설립 절차 착수는 확인되지 않는다.",
        "source": "https://v.daum.net/v/20260611155900641"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "남원의료원 진료역량 강화와 통합돌봄 의료체계 구축의 필요성을 보건소 업무보고에서 강조했으나, 구체적 시행 사업이나 예산 반영은 확인되지 않는다.",
        "source": ""
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "황인홍",
    "office": "무주군",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "무주군이 농어촌기본소득 시범사업 대상지로 최종 선정됐고, 등록·실거주 주민을 대상으로 2026년 8월부터 2027년 12월까지 매월 15만원의 무주상품권을 지급하는 실제 집행 계획이 확인된다.",
        "source": "https://www.mjjnews.net/news/article.html?no=57236"
      },
      {
        "order": 2,
        "percent": 55,
        "note": "무주군은 현대로템·전북도와 항공우주산업 클러스터 조성 투자협약을 체결(2026년 3월)했고, 국토부 '2026년 투자선도지구' 공모에도 최종 선정(6월)돼 적상면 일원 23만평 규모(3488억원)의 산업단지 조성이 실제로 추진되고 있다.",
        "source": "https://www.naewoeilbo.com/news/articleView.html?idxno=2373552"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "국제태권도 관련 기관·아카데미 유치를 위해 국회를 방문해 지원을 건의하는 등 요청 활동 단계이며, 글로벌 태권도 인재양성센터 완성 등 구체적 착수는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 30,
        "note": "무풍면에서 고랭지 청년 임대형 스마트팜 단지 조성을 위한 주민설명회가 열렸고, 계절근로자 인력이 실제 농가에 배치돼 운영되는 등 착수 단계의 진전이 확인된다.",
        "source": "https://www.todayan.com/news/articleView.html?idxno=568885"
      },
      {
        "order": 5,
        "percent": 55,
        "note": "반딧불축제 30주년 행사가 2026년 9월 4일부터 12일까지 실제 개최되며 특별 전야제도 이미 성황리에 진행되는 등, 사계절 관광 공약 중 핵심 사업이 실행 단계에 있다.",
        "source": "https://www.sisajournal.com/news/articleView.html?idxno=385953"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "권익현",
    "office": "부안군",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "부안형 기본사회 1단계로 전 군민 대상 민생안정지원금(농어촌기본소득 준비금) 30만원을 무기명 선불카드로 지급하기로 확정, 9월 16~18일 집중 지급을 실제 진행 중이다.",
        "source": "https://www.ajunews.com/view/20260806113710848"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "새만금개발청·국무총리 등에 농생명용지의 산업용지 전환 및 RE100 국가산단 조성을 지속 건의하고 있으나, 새만금 기본계획 변경은 정부·새만금개발청이 주도하며 군수의 독자적 착수 조치는 확인되지 않는다.",
        "source": "https://www.ibuan.com/news/articleView.html?idxno=56414"
      },
      {
        "order": 3,
        "percent": 30,
        "note": "민선9기 100일 실행계획·공약 실천계획 보고회를 열어 25개 부서의 체감형 과제 127건과 공약사업 72건을 점검하며 기본사회 실행안을 구체화했고, 그중 기본소득 준비금 지급은 이미 실행 단계에 들어갔다.",
        "source": "https://www.betanews.net/article/view/beta202607290066"
      },
      {
        "order": 4,
        "percent": 30,
        "note": "부안 제3농공단지에 DH그룹과 1500억원 규모 3단계 투자협약을 체결했으나, 스마트팩토리 착공은 2027년 예정으로 아직 이루어지지 않았다.",
        "source": "https://www.wikitree.co.kr/articles/1124654"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "서해안철도·영호남내륙철도의 제5차 국가철도망 구축계획 반영을 위해 국토교통부에 지속적으로 건의하고 있으나, 최종 반영 여부는 정부 결정에 달려 있고 군 차원의 별도 조치는 없다.",
        "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260819010005996"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "최영일",
    "office": "순창군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "320개 마을 중 100개 '햇빛소득마을' 조성을 목표로 기존 기본소득 성과를 정부에 공유하며 제도개선을 건의했으나, 신규 마을 협동조합 설립 등 구체적 착수 사례는 확인되지 않는다.",
        "source": "https://www.asiatoday.co.kr/kn/view.php?key=20260821010007101"
      },
      {
        "order": 2,
        "percent": 0,
        "note": "인근 강천힐링스파·강천산군립공원이 계속 운영되며 방문객이 늘고 있으나, 이는 기존 시설이며 웰컴센터·힐링정원 등 신규 조성에 대한 구체적 사업 착수 보도는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 55,
        "note": "장류 기반 '순창삼합' 미식관광이 이미 매출 1억8000만원을 돌파하며 실제 운영 중이고, 9월부터 장류벨트 기반 체험형 프로그램을 확대할 계획이다.",
        "source": "https://www.sentv.co.kr/article/view/sentv202508040150"
      },
      {
        "order": 4,
        "percent": 30,
        "note": "순창 미생물 농생명산업지구가 전북도 공모에 최종 지정되어 사업비 50억원(총 850억원 규모)을 우선 확보했으나 아직 착공 전 단계다.",
        "source": "https://www.asiatoday.co.kr/kn/view.php?key=20251211010006233"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "행복콜버스·마을택시 등 기존 교통복지 서비스가 62개 마을을 대상으로 실제 운영 중이며, 농어촌버스 전면무료화와 마을택시 이용횟수 확대(4→6회)는 검토 단계다.",
        "source": "https://www.mhns.co.kr/news/articleView.html?idxno=753313"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "유희태",
    "office": "완주군",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "'완주 햇빛연금마을' 조성 계획을 발표하고 사전 수요조사에서 39개 마을이 참여 의사를 밝혔으나, 협동조합 설립 등 실제 사업 착수 사례는 아직 확인되지 않는다.",
        "source": "https://www.newsis.com/view/NISX20260210_0003509778"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "이서면 일원에 국내 최초 피지컬AI 클러스터를 조성하겠다는 방향은 제시됐으나, 구체적 부지조성이나 예산 반영 등 착수 단계의 근거는 찾지 못했다.",
        "source": ""
      },
      {
        "order": 3,
        "percent": 30,
        "note": "완주 수소특화 국가산단은 2023년 국토부 최종 후보지로 선정돼 예비타당성조사가 진행 중이며 2026년 하반기 지정을 목표로 하지만, 이는 정부·LH 주도 사업으로 신임 군수의 별도 조치는 확인되지 않는다.",
        "source": "https://www.thefairnews.co.kr/news/articleView.html?idxno=64243"
      },
      {
        "order": 4,
        "percent": 55,
        "note": "완주 AI데이터센터(총 2.7~2.8조원, 테크노그린·한전KDN·LG전자 참여) 구축 협약이 2026년 2월 체결되고 전력계통영향평가도 통과해 실제 사업이 진행 중이다.",
        "source": "https://www.electimes.com/news/articleViewAmp.html?idxno=365651"
      },
      {
        "order": 5,
        "percent": 30,
        "note": "전북방산혁신클러스터가 방위사업청 공모에 최종 선정돼 국비 245억원 포함 총 490억원을 확보했고 완주 국가산단이 사업부지로 포함됐으나 아직 착공 전이다.",
        "source": "https://v.daum.net/v/20260612102740181?f=p"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "최정호",
    "office": "익산시",
    "pledges": [
      {
        "order": 1,
        "percent": 10,
        "note": "취임사에서 KTX 익산역 중심 광역복합환승센터 구축을 핵심 과제로 제시했으나, 국토교통부·국가철도공단이 주도하는 국가사업으로 시 차원의 구체적 착수 근거는 확인되지 않는다.",
        "source": "https://www.etoday.co.kr/news/view/2599243"
      },
      {
        "order": 2,
        "percent": 55,
        "note": "국가식품클러스터 2단계(2028년까지 207만㎡ 조성) 사업이 이미 실제 추진 중이며, 신임 시장도 조기 추진 방침을 재확인했다.",
        "source": "https://www.pressian.com/pages/articles/2025102806190046889"
      },
      {
        "order": 3,
        "percent": 30,
        "note": "청년월세지원·창업투자상담·주택구입 이자지원 등 기존 청년정책이 계속 운영 중이며, 국비 45%·저리기금 50% 구조로 설계된 '청년 만원주택'도 구체화됐으나 실제 선정·착공 등 후속 조치는 확인되지 않는다.",
        "source": "https://www.newspim.com/news/view/20260108000275"
      },
      {
        "order": 4,
        "percent": 30,
        "note": "중기부 주관 스마트농업 광역연계형 규제자유특구 공모에 최종 지정돼 익산 왕궁농공단지가 포함됐고 전북에 137억원(2027~2030년)이 배정됐다.",
        "source": "https://www.etoday.co.kr/news/view/2620757"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "'익산형 시민건강주치의제'는 1단계 대상(약 9만명)과 소요 예산(약 190억원)을 추계하는 구상 단계이며, 실제 시행에 들어갔다는 근거는 찾지 못했다.",
        "source": ""
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "한득수",
    "office": "임실군",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "임실형 농어촌기본소득 시범사업에 추경 72억원을 편성하고 9월 7일부터 신청·접수를 시작해 1인당 30만원을 임실사랑상품권으로 지급하는 실행 단계에 있다.",
        "source": "https://www.thepennews.net/news/article.html?no=44038"
      },
      {
        "order": 2,
        "percent": 30,
        "note": "농업예산 비중을 18.6%에서 25%로 확대하기로 하고 추경으로 농업·기본소득 재원 769억원을 증액했으며, 임대형 스마트팜 예비계획 수립 등 착수 단계에 들어갔다.",
        "source": "https://www.betanews.net/article/view/beta202608140022"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "'어르신 일자리 통합 플랫폼'은 후보 시절 공약으로 발표된 단계이며, 취임 이후 실제 플랫폼 구축이나 매칭시스템 시행에 대한 근거는 확인되지 않는다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 30,
        "note": "임실군 자체 타당성조사에서 KTX 임실역 정차의 비용대비편익(B/C)이 1.71로 경제성이 확보됐고 시설개량비 361억원 확보를 목표로 국토부·철도공단에 건의 중이나 최종 결정은 정부 소관이다.",
        "source": "https://www.pressian.com/pages/articles/2026041313463769913"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "총 640억원 규모의 전국 이·통장 연수원 건립을 위해 국비 확보에 힘쓰겠다고 밝혔으나, 타당성 용역 발주나 예산 반영 등 구체적 착수 근거는 확인되지 않는다.",
        "source": "https://www.jbjnews.com/news/articleView.html?idxno=320839"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "최훈식",
    "office": "장수군",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "장수군이 농어촌 기본소득 추가 시범지역으로 선정됐고 120억원의 지방소멸대응기금을 확보해 기본소득과 연계하고 있다. 군민 설명회도 실제 운영 중이다.",
        "source": "https://www.jangsu.go.kr/mayor/board/list.jangsu?boardId=BBS_0000134&menuCd=DOM_000000301001000000&paging=ok&startPage=3"
      },
      {
        "order": 2,
        "percent": 55,
        "note": "신품종 사과 시험재배 등 현장연구가 실제 진행 중이며 군수가 직접 농가를 찾아 생육·시장성 확보 상황을 점검하는 등 실행 단계에 있다. 다만 공약에 포함된 유통공사 설립은 아직 착수 근거가 없어, 이 부분을 제외한 현장연구·점검 실적만을 근거로 판단했다.",
        "source": "https://www.jangsu.go.kr/mayor/board/list.jangsu%3Bjsessionid%3D9D02DEC01EFB636B1CA4628C1DDFBC4E.tomcat1?boardId=BBS_0000134&contentsSid=444&cpath=%2Fmayor&menuCd=DOM_000000301001000000"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "의료·돌봄·교육·임대주택을 연계한 기본사회 방향을 제시했으나, 민선9기 신규 세부사업의 예산 반영·시행 근거는 확인되지 않았다.",
        "source": "https://www.nspna.com/country/?mode=view&newsid=819346"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "체류형 관광도시 조성을 핵심공약으로 제시했으나, 취임 후 신규 시설 착공·콘텐츠 운영 등 구체적 진척은 확인되지 않았다.",
        "source": "https://www.jjan.kr/article/20260520500216"
      },
      {
        "order": 5,
        "percent": 55,
        "note": "2026년 군민과의 대화와 농어촌 기본소득 설명회를 읍·면별로 운영하고, 군수와 간부들이 현장에서 건의사항에 답변하는 소통 체계를 가동했다.",
        "source": "https://www.jangsu.go.kr/mayor/board/list.jangsu%3Bjsessionid%3D9D02DEC01EFB636B1CA4628C1DDFBC4E.tomcat1?boardId=BBS_0000134&contentsSid=444&cpath=%2Fmayor&menuCd=DOM_000000301001000000"
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "조지훈",
    "office": "전주시",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "취임 1호 결재로 '재정혁신 특별위원회 구성·운영계획'을 승인해 전담 기구를 실제 구성했다. 지출구조 개편은 착수 단계로 판단했다.",
        "source": "https://www.news1.kr/amp/local/jeonbuk/6231960"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "새만금~전주 연구·생산·실증 벨트와 피지컬AI 특별도시 구상을 발표했으나, 취임 후 전담조직·예산·기업 협약 등 구체적 착수는 미확인이다.",
        "source": "https://www.news1.kr/amp/local/jeonbuk/6231960"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "한옥마을·한식·한지·영화를 산업화해 아시아 5대 문화산업도시로 조성하는 방향을 제시했으나 신규 집행 성과는 확인되지 않았다.",
        "source": "https://www.news1.kr/amp/local/jeonbuk/6231960"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "돌봄·복지에 재정을 우선 배분하겠다는 방침을 밝혔으나, 시민돌봄 책임도시 공약의 신규 서비스·조례·예산 확정은 미확인이다.",
        "source": "https://www.news1.kr/amp/local/jeonbuk/6231960"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "신속한 도시개발을 5대 핵심 비전으로 제시했지만, 취임 후 인허가 단축·개발사업 착공 등 검증 가능한 후속 조치는 찾지 못했다.",
        "source": ""
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "이학수",
    "office": "정읍시",
    "pledges": [
      {
        "order": 1,
        "percent": 30,
        "note": "365억원 규모 바이오 지식산업센터 건립을 2026년 국가예산 중점사업으로 발굴해 예산 확보 절차를 추진 중이다. 다만 100실 창업·보육공간의 실제 착공은 미확인이다.",
        "source": "https://jeonbuktimes.co.kr/pdf/_0407.pdf"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "내장호 사계절 자연치유 관광지 조성을 민선9기 핵심공약으로 발표했으나, 취임 후 설계·예산 확정·착공은 확인되지 않았다.",
        "source": "https://v.daum.net/v/20260702204710253"
      },
      {
        "order": 3,
        "percent": 0,
        "note": "정읍형 치유농업 건강플랫폼의 신규 시스템 구축·서비스 운영·예산 반영 근거를 찾지 못했다.",
        "source": ""
      },
      {
        "order": 4,
        "percent": 0,
        "note": "청년부부 첫걸음 웨딩 패키지 지원이 실제 신청·지급 단계에 들어갔다는 근거를 찾지 못했다.",
        "source": ""
      },
      {
        "order": 5,
        "percent": 0,
        "note": "정읍 거점형 체육관 건립의 부지 확정·설계용역·예산 확보·착공 근거를 찾지 못했다.",
        "source": ""
      }
    ],
    "region": "전북특별자치도"
  },
  {
    "name": "전춘성",
    "office": "진안군",
    "pledges": [
      {
        "order": 1,
        "percent": 55,
        "note": "농어촌 기본소득 시범사업 신청자가 1만5808명에 달했고, 읍·면별 기본소득위원회가 실거주를 심의해 8월 31일 빠망카드 첫 지급을 준비하는 실행 단계에 있다.",
        "source": "https://www.newspim.com/news/view/20260723000745"
      },
      {
        "order": 2,
        "percent": 10,
        "note": "부자농촌·선진농업을 민선9기 핵심 방향으로 제시했으나, 취임 후 신규 유통·스마트농업 사업의 예산 집행·운영 근거는 미확인이다.",
        "source": "https://www.newspim.com/news/view/20260611000619"
      },
      {
        "order": 3,
        "percent": 10,
        "note": "먹거리 통합지원센터와 선순환 경제도시 구상을 발표했지만, 신규 시설 설치·조직·예산 반영은 확인되지 않았다.",
        "source": "https://www.newspim.com/news/view/20260611000619"
      },
      {
        "order": 4,
        "percent": 10,
        "note": "K-치유 대표도시와 대한민국 1호 국가호수공원 조성을 추진하겠다고 밝혔으나, 지정·예산·착공 등 후속 진척은 미확인이다.",
        "source": "https://www.newspim.com/news/view/20260611000619"
      },
      {
        "order": 5,
        "percent": 10,
        "note": "교육안전망·무상버스·안심주택 확대 등 방향을 제시했으나, 민선9기 신규 제도로서의 시행 근거는 확인되지 않았다.",
        "source": "https://www.newspim.com/news/view/20260611000619"
      }
    ],
    "region": "전북특별자치도"
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
