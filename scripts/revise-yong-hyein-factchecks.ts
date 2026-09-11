/**
 * Rewrites 용혜인's factchecks after user pushback: the first draft only
 * captured "her explanation is plausible" for all 3 claims, reading as if
 * defending her. The fix isn't inflating verdicts artificially — it's
 * surfacing the material a real accountability piece would lead with: her
 * own past statements/positions directly contradicting her present conduct
 * (겸직 회피 vs her own 2023 attack on 김행 for doing exactly that;
 * 위성정당 비판 vs personally riding one into office twice), and other
 * politicians' sharpest criticism, rather than leading with her camp's
 * defense.
 *
 * Usage: npx tsx scripts/revise-yong-hyein-factchecks.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/revise-yong-hyein-factchecks.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const UPDATES = [
  {
    match: "국회의원의 국무위원 겸직은 법률이 허용하는 원칙이다",
    claim: "국회의원의 국무위원 겸직은 법률이 허용하는 원칙이다",
    context: "2026년 9월, 여성가족부 장관 후보자 지명 후 의원직 겸직 논란에 대한 반박",
    contextSource: "https://www.ajunews.com/view/20260910152352332",
    verdict: "half_true",
    explanation:
      "정작 본인은 2024년 총선을 앞두고 더불어민주당 주도 위성정당(더불어민주연합)에 올라타 국회에 입성했다 — 오랫동안 스스로 '정치 개혁을 가로막는 꼼수'라 비판해 온 바로 그 방식이다. 진중권 동양대 교수는 '원칙을 저버리고 기회주의적 행동을 하면 보상을 받는다'며 이 점을 직접 겨냥했고, 정의당 양경규 대표는 '위성정당을 통해 두 차례 국회에 입성한 정치인을 국무위원으로 발탁한 건 위성정당 정치에 사실상 면죄부를 주는 일'이라 비판했다. 국회의원의 국무위원 겸직이 법적으로 허용된다는 설명 자체는 사실이지만, 이는 '왜 비례대표가 사퇴해 온 관례를 이번만 벗어나는가'라는 질문에는 답이 되지 못한다. 안철수 국민의힘 의원은 '장관이 돼도 의원직을 유지하겠다며 귀족 행세를 하고 있다'고 비판했고, 더불어민주당 내부에서도 '이중삼중 특혜'라는 지적이 나왔다.",
    sources:
      "머니투데이(위성정당이 낳은 비례대표…거대양당 야합 '꼼수 정치'의 부메랑)\nhttps://www.mt.co.kr/politics/2026/09/02/2026090211442732145\n문화일보(\"기회주의적 행동…끔찍\" 진중권의 용혜인 비판 다시 주목)\nhttps://www.munhwa.com/article/11614420\n프레시안(민주당에서도 용혜인 비판...\"이중삼중 특혜\")\nhttps://www.pressian.com/pages/articles/2026090215061212421",
  },
  {
    match: "김포공항 귀빈실은 공항공사 안내에 따라 정상적으로 승인받아 이용했다",
    claim: "겸직 논란을 무겁게 듣고 있으며 필요한 부분을 설명해나가겠다",
    context: "2026년 9월 11일, 겸직·각종 의혹에 대한 입장 표명",
    contextSource: "https://www.khan.co.kr/article/202609111048031/",
    verdict: "mostly_false",
    explanation:
      "MBC 보도에 따르면 용 후보자는 겸직 논란 관련 구체적 질문에 '전례가 없다'는 답변만 반복하며 정면 답변을 피했다. 더 뼈아픈 건 본인의 전례다 — 2023년 초선 의원이던 용 후보자는 김행 당시 여성가족부 장관 후보자가 출근길 문답을 닷새 만에 중단하자 '소명할 수 없어서 도망가는 걸로 해석할 수밖에 없다'고 직격했다. 지금 본인이 같은 여성가족부 장관 후보자로서 각종 의혹(귀빈실 이용, 고액 당비·세액공제 등)에 대해 침묵과 회피로 일관하면서, 정작 자신이 세운 그 잣대는 스스로 지키지 않고 있다는 지적이 나온다. 귀빈실 이용 관련해서는 시민단체가 직권남용 혐의로 경찰에 고발해 수사 중이며, 운영 규정상 이용자의 부모는 이용 대상이 아니라는 점도 별도로 확인이 필요하다.",
    sources:
      "경향신문(용혜인 \"겸직 논란 무겁게 듣고 있어···필요한 부분 설명해나갈 것\")\nhttps://www.khan.co.kr/article/202609111048031/\nMBC('겸직 논란' 질문 피한 용혜인‥\"전례 없어\" 논란 후끈)\nhttps://imnews.imbc.com/news/2026/politics/article/6848514_36911.html\n헤럴드경제(\"소명 못해 도망쳐\"…과거 자신의 돌직구 발언에 맞는 용혜인)\nhttps://biz.heraldcorp.com/article/10868764\n이데일리(가족여행 때 '공항 귀빈실' 이용한 용혜인…직권남용 혐의 고발)\nhttps://www.edaily.co.kr/News/Read?newsId=03811366645576184",
  },
  {
    match: "5년간 1억9507만원의 당비를 낸 것은 절세 목적이 아니다",
    claim: "5년간 1억9507만원의 당비를 낸 것은 절세 목적이 아니다",
    context: "2026년 9월, 정치자금기부금·세액공제 논란에 대한 인사청문회준비단 해명",
    contextSource: "https://www.daily25news.com/news/articleView.html?idxno=6793",
    verdict: "unverifiable",
    explanation:
      "용 후보자는 '국민 70%는 낸 것보다 더 받는다, 상위 30%만 증세 부담을 더 지면 된다'는 등 부유층 증세와 재분배를 앞세운 정치를 해 왔다. 그런 그가 정작 본인은 5년간 정당에 1억9507만원을 내고 근로소득세 3633만원을 감면받은 사실이 알려지며 '꼼수 절세' 비판을 자초했다 — 재분배를 주장하며 본인의 세 부담은 합법적 수단을 통해 줄인 모양새다. 후보자 측은 절세가 목적이었다면 세액공제(3633만원)보다 훨씬 큰 당비(1억9507만원) 자체를 줄이는 편이 합리적이라 반박하는데, 액수 비교로만 보면 일리 있는 논리다. 정치자금기부금 세액공제 자체는 합법적 제도이지만, 거액의 당비가 구체적으로 어떤 기준으로 산정됐고 정당 회계에서 어떻게 처리됐는지는 인사청문회를 통해 공개될 자료로 가려질 사안이라 현재로서는 진위를 단정하기 어렵다.",
    sources:
      "데일리25(자기 당에 1억9500만원 낸 용혜인…세금 3600만원 감면에 \"절세 목적 아냐\")\nhttps://www.daily25news.com/news/articleView.html?idxno=6793\n헤럴드경제([속보] 용혜인, '1억9000만원 당비·3600만원 세액공제' 논란에 \"꼼수 절세 아냐\")\nhttps://biz.heraldcorp.com/article/10863586",
  },
];

async function main() {
  let updated = 0;
  for (const u of UPDATES) {
    const res = await prisma.factCheck.updateMany({
      where: { politicianName: "용혜인", claim: u.match },
      data: {
        claim: u.claim,
        context: u.context,
        contextSource: u.contextSource,
        verdict: u.verdict,
        explanation: u.explanation,
        sources: u.sources,
      },
    });
    updated += res.count;
  }
  console.log(`Updated ${updated} factcheck(s).`);
}

main().finally(() => prisma.$disconnect());
