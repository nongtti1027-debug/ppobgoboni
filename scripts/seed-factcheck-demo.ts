import { prisma } from "../src/lib/db";

async function main() {
  const president = await prisma.politician.findFirst({ where: { level: "president" } });

  await prisma.factCheck.create({
    data: {
      politicianId: president?.id,
      politicianName: "이재명",
      claim: "국정과제 만족도가 7점 만점에 4.77점으로 역대 최고치를 기록했다",
      context: "2026년 이재명 정부 출범 1주년 국정과제 추진현황 발표",
      contextSource: "https://www.korea.kr/multi/visualNewsView.do?newsId=148964963",
      verdict: "mostly_true",
      explanation:
        "직전 3개 정부의 같은 국정과제 만족도 조사와 비교한 결과, 이재명 정부 1년차 4.77점은 문재인 정부(평균 4.65점, 최고 2년차 4.74점), 윤석열 정부(평균 4.55점, 1년차 4.48점), 박근혜 정부(평균 4.17점)의 어느 해 기록보다도 높아 '최근 정부 대비 최고'라는 취지는 사실로 확인됩니다.\n\n다만 '역대'라는 표현이 이 세 정부보다 이전 정부(이명박·노무현 등)까지 포괄하는지는 확인되지 않았고, 문재인 정부의 정확한 1년차 수치와의 직접 비교 자료도 찾지 못해 완전한 '역대 전체 1위'라고 단정하기는 어렵습니다. 그래서 '사실'이 아닌 '대체로 사실'로 판정합니다.",
      sources:
        "대한민국 정책브리핑 - 이재명 정부 출범 1주년 국정과제 추진현황 (https://www.korea.kr/multi/visualNewsView.do?newsId=148964963)\n문재인·윤석열·박근혜 정부 국정과제 만족도 비교 보도 (검색 결과 종합, 개별 언론사 표로 재확인 필요)",
    },
  });

  console.log("팩트체크 데모 1건 생성 완료");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
