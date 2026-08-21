import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${SITE_NAME} 개인정보처리방침`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-black">개인정보처리방침</h1>
      <p className="mb-8 text-sm text-foreground/40">시행일자: 2026년 8월 21일</p>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          {SITE_NAME}(이하 &lsquo;사이트&rsquo;)는 이용자의 개인정보를 중요하게 생각하며,
          「개인정보보호법」 등 관련 법령을 준수합니다. 본 방침은 사이트가 어떤 개인정보를
          수집하고, 어떻게 이용·보관하는지 안내합니다.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-bold">1. 수집하는 개인정보 항목 및 수집 방법</h2>
          <p>
            사이트는 회원가입이나 게시물 작성 기능을 제공하지 않으며, 이용자가 직접 입력하는
            개인정보를 수집하지 않습니다. 다만 서비스 이용 과정에서 아래 정보가 자동으로
            생성·수집될 수 있습니다.
          </p>
          <p className="mt-2">
            IP 주소, 접속 로그, 쿠키, 방문 일시, 브라우저 정보 등 — 서비스 운영을 위한 호스팅
            서버 및 광고 서비스(Google AdSense)를 통해 자동으로 수집됩니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">2. 개인정보의 수집 및 이용 목적</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>사이트 이용 통계 분석을 통한 서비스 개선</li>
            <li>부정 이용 방지 및 서비스 안정적 운영</li>
            <li>맞춤형 광고 게재</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            자동 수집되는 접속 로그 등은 관련 법령에서 정한 기간 또는 서비스 제공에 필요한
            기간 동안 보관 후 파기합니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">4. 개인정보의 제3자 제공</h2>
          <p>
            사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 법령에
            따라 수사기관이 적법한 절차에 의해 요구하는 경우는 예외로 합니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">5. 광고 서비스 및 쿠키 안내</h2>
          <p>
            사이트는 Google AdSense를 통해 광고를 게재하며, 이 과정에서 Google 및 광고
            파트너사가 쿠키를 사용해 맞춤형 광고를 제공할 수 있습니다.
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Google 광고 설정
              </a>
              에서 맞춤 광고 수신을 거부할 수 있습니다.
            </li>
            <li>
              이용 중인 웹 브라우저 설정에서 쿠키 저장을 거부할 수 있으며, 이 경우 일부
              서비스 이용에 어려움이 있을 수 있습니다.
            </li>
            <li>
              Google의 개인정보처리방침은{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                policies.google.com/privacy
              </a>
              에서 확인하실 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">6. 개인정보 보호책임자 및 문의처</h2>
          <p>
            담당: {SITE_NAME} 운영자
            <br />
            이메일:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold">7. 고지의 의무</h2>
          <p>
            본 방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 추가·삭제·수정될 수
            있으며, 변경 시 사이트를 통해 공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
