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
            현재 공개된 공약은 원문 그대로를 제공하는 단계이며, &ldquo;완료/추진중/미이행&rdquo;
            등 이행 상태 판정은 근거 자료와 함께 순차적으로 반영할 예정입니다. 판정 기준과
            근거는 항상 공개된 출처를 함께 표기하는 것을 원칙으로 합니다.
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
