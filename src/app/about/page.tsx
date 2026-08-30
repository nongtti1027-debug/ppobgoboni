import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "사이트 소개",
  description: `${SITE_NAME} 소개 — 공약 데이터 출처와 제작 방식`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-black">사이트 소개</h1>
      <p className="mb-8 text-sm text-foreground/40">{SITE_NAME}가 하는 일</p>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="mb-2 text-lg font-bold">무엇을 하는 사이트인가요</h2>
          <p>
            {SITE_NAME}는 대통령, 광역·기초자치단체장 등 선출직 공직자가 선거 당시 내걸었던
            공약을 한곳에 모아 보여주는 비영리 정보 사이트입니다. 유권자가 &ldquo;그때 한
            약속이 지금 어디까지 왔는지&rdquo;를 쉽게 확인할 수 있도록 돕는 것을 목표로
            합니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">데이터 출처</h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>중앙선거관리위원회 선거공약 정보 API</strong> — 후보자가 선관위에
              공식 제출한 선거공약서 원문(목표, 이행방법, 이행기간, 재원조달방안)을
              가져옵니다.
            </li>
            <li>
              <strong>한국매니페스토실천본부</strong> — 후보자가 자발적으로 제출한 10대
              핵심공약 답변서를 보충 자료로 함께 제공합니다. 선관위 자료와 출처가 다르므로
              페이지 내에서 항상 구분해 표시합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">이행 여부 판정에 대해</h2>
          <p>
            공약 이행 여부는 정부기관의 공식 인증이 아니라, 정부 자료·언론 보도 등 공개된
            출처를 근거로 저희가 자체적으로 내린 판단입니다. 미국 팩트체크 매체
            PolitiFact의 &ldquo;Truth-O-Meter&rdquo; 판정 방식과 공약 이행 연구
            (Thomson et al. 2017; Mellon et al. 2023)를 참고해 아래 기준을 세웠으며,
            판정마다 근거 자료 출처를 함께 표기하는 것을 원칙으로 합니다.
          </p>
          <ul className="ml-5 mt-3 list-disc space-y-1">
            <li>완료 — 공약대로 실현됨</li>
            <li>정상추진 — 예산·조직이 갖춰져 실질적으로 진행 중</li>
            <li>일부이행 — 방향은 맞지만 축소·변형되어 진행</li>
            <li>지연·보류 — 진행이 멈추거나 늦어짐</li>
            <li>미이행 — 폐기·철회되었거나 진행 근거를 찾을 수 없음</li>
            <li>판정 전 — 아직 판단할 근거가 부족함</li>
          </ul>
          <p className="mt-3">
            공약마다 표시되는 진도율(%)은 판정을 대체하는 수치가 아니라, 진행 단계를 한눈에
            보기 위한 보조 지표입니다. 공약의 &ldquo;이행방법&rdquo;이 여러 세부 항목으로
            나뉘는 경우, 항목별로 근거를 찾아 0% · 33% · 66% · 100%로 채점한 뒤 평균 내
            표시합니다. 100%는 신설·제정·시행·설치처럼 끝이 정해진 목표가 실제로
            발효됐을 때만 부여하며, &ldquo;육성·확대·강화·전환&rdquo;처럼 끝이 정해지지
            않은 목표는 예산 투입이나 좋은 실적이 있어도 최대 66%(본격추진중)까지만
            인정합니다. 근거를 찾지 못한 세부 항목은 &ldquo;미이행(0%)&rdquo;이 아니라
            평균 계산에서 제외합니다 — 저희가 못 찾은 것과 실제 진행이 없는 것은 다르기
            때문입니다. 세부 항목이 아직 정리되지 않은 공약은 판정 전 0% · 검토·계획수립중
            10% · 제도적착수 30% · 본격추진중 55% · 마무리단계 80% · 완료 100%의 6단계
            기준을 사용합니다. 지연·보류는 마지막으로 도달한 단계의 수치를 유지하고,
            폐기·철회는 0%로 표시합니다.
          </p>
          <p className="mt-3">
            &ldquo;투자 금액이 충분한가&rdquo;처럼 숫자만으로 판단하기 어려운 항목은,
            대통령 전체 국정 지지율이 아니라 해당 정책 분야에 한정된 여론조사(예: 검찰개혁에
            대한 찬반, 외교 분야 평가 등)가 실제로 존재할 때만 참고자료로 함께 표기합니다.
            전체 지지율은 그 공약과 무관한 다른 이슈들이 섞여 있어 사용하지 않으며, 해당
            분야의 여론조사가 없는 경우 억지로 추정하지 않고 근거 자료만으로 판정합니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">운영 및 문의</h2>
          <p>
            개인이 운영하는 비영리 정보 서비스입니다. 데이터 오류 신고, 정정 요청은 아래
            이메일로 보내주시면 확인 후 반영하겠습니다.
          </p>
          <p className="mt-2">
            이메일:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
