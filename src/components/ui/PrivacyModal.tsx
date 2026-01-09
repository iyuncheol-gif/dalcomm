'use client';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        <div className="flex items-center justify-between border-b p-6">
          <h3 className="text-xl font-bold text-slate-900">개인정보처리방침</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-6 text-sm leading-relaxed">
          <PrivacyPolicyContent />
        </div>
        <div className="bg-slate-50 px-6 py-4 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300">
      <p>
        <strong>[더달콤영어] 개인정보 처리방침</strong>
        <br />
        더달콤영어(&#39;이하 학원&#39;이라 함)는 이용자의 개인정보를 중요시하며,
        &quot;개인정보 보호법&quot;을 준수하고 있습니다. 학원은 개인정보
        처리방침을 통하여 이용자께서 제공하시는 개인정보가 어떠한 용도와 방식으로
        이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지
        알려드립니다.
      </p>
      <p>본 방침은 2026년 1월 6일부터 시행됩니다.</p>

      <div>
        <h4 className="font-bold mb-2">1. 개인정보의 수집 및 이용 목적</h4>
        <p>학원은 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            학습 상담 및 문의 관리: 입학 문의, 레벨 테스트 예약, 교육 프로그램
            안내, 문의에 대한 답변 및 결과 통보
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">2. 수집하는 개인정보 항목 및 수집 방법</h4>
        <p>
          학원은 상담 신청 및 문의 응대를 위해 아래와 같은 개인정보를 수집하고
          있습니다.
        </p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            수집항목:
            <ul className="list-circle pl-5 mt-1">
              <li>(필수) 이름, 휴대전화 번호</li>
              <li>(선택) 학생 학년, 문의 내용</li>
              <li>(자동 수집) 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</li>
            </ul>
          </li>
          <li>수집방법: 홈페이지 내 상담 문의 작성 폼</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">3. 개인정보의 보유 및 이용 기간</h4>
        <p>
          학원은 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
          지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한
          기간 동안 보존합니다.
        </p>
        <ul className="list-disc pl-5 mt-1">
          <li>보존 항목: 이름, 휴대전화 번호, 상담 이력</li>
          <li>보존 근거: 상담 문의 이력 관리 및 중복 상담 방지, 고객 응대</li>
          <li>
            보존 기간: [1년] (※ 또는 &#39;상담 완료 후 즉시 파기&#39; 등 학원
            내부 방침에 따라 수정 가능)
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">4. 개인정보의 파기 절차 및 방법</h4>
        <p>
          학원은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당
          개인정보를 파기합니다.
        </p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            파기절차: 상담을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및
            기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후
            파기됩니다.
          </li>
          <li>
            파기방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제합니다.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">
          5. 이용자 및 법정대리인의 권리와 그 행사 방법
        </h4>
        <p>
          이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수
          있으며, 개인정보의 삭제를 요청할 수 있습니다. 개인정보 보호책임자에게
          전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-2">6. 개인정보 보호책임자</h4>
        <p>
          학원은 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
          위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <ul className="list-disc pl-5 mt-1">
          <li>개인정보 보호책임자: [원장님 또는 관리자 성함]</li>
          <li>전화번호: 0507-1338-8444</li>
          <li>이메일: goodchef@naver.com</li>
        </ul>
      </div>
    </div>
  );
}
