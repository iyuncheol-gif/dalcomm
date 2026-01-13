'use client';

import { useState } from 'react';
import { CONTACT } from '@/constants';

export default function Consultation() {
  const PHONE_REGEX = /^010-?([0-9]{3,4})-?([0-9]{4})$/;

  const [formData, setFormData] = useState({
    name: '',
    school: '선택해주세요',
    grade: '선택해주세요',
    phone: '',
    inquiry: '',
    privacy: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    privacy: false,
  });

  const getGradeOptions = () => {
    if (formData.school === '초등학교')
      return ['1학년', '2학년', '3학년', '4학년', '5학년', '6학년'];
    if (formData.school === '중학교' || formData.school === '고등학교')
      return ['1학년', '2학년', '3학년'];
    return [];
  };

  const handlePhoneBlur = () => {
    if (formData.phone.trim() && !PHONE_REGEX.test(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: true }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sequential validation
    if (!formData.name.trim()) {
      setErrors({ name: true, phone: false, privacy: false });
      return;
    }
    if (!formData.phone.trim() || !PHONE_REGEX.test(formData.phone)) {
      setErrors({ name: false, phone: true, privacy: false });
      return;
    }
    if (!formData.privacy) {
      setErrors({ name: false, phone: false, privacy: true });
      return;
    }

    setErrors({ name: false, phone: false, privacy: false });
    alert(`${formData.name}님의 상담 신청이 완료되었습니다. 곧 연락드리겠습니다!`);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Branding & Info */}
            <div className="bg-[#0f291e] p-12 text-white lg:w-2/5 flex flex-col justify-between relative overflow-hidden border-r border-white/5">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-accent opacity-10 blur-3xl"></div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
                  Free Level Test
                </span>
                <h2 className="text-4xl font-black leading-tight mb-6 word-keep-all">
                  지금 무료 레벨테스트를
                  <br />
                  신청하세요!
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-10 word-keep-all opacity-90">
                  하루 10분 투자로 자녀의 정확한 영어 실력을 확인하고, 맞춤형 학습
                  로드맵을 받아보세요.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: 'analytics',
                      text: '4대 영역 정밀 진단 리포트 무료',
                      color: 'bg-primary',
                    },
                    {
                      icon: 'savings',
                      text: '상담 당일 등록시 첫 달 수강료 10% 할인 혜택',
                      color: 'bg-primary',
                    },
                    {
                      icon: 'support_agent',
                      text: '1:1 심층 학습 상담',
                      color: 'bg-primary',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <div
                        className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <span className="material-symbols-outlined text-white text-xl">
                          {item.icon}
                        </span>
                      </div>
                      <span className={`font-semibold text-[15px] ${i === 0 ? 'whitespace-nowrap' : ''}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-sm text-slate-400 relative z-10 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <a
                    href={`tel:${CONTACT.PHONE}`}
                    className="flex items-center gap-2 font-medium hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary-light text-base text-accent">
                      call
                    </span>{' '}
                    문의: {CONTACT.PHONE}
                  </a>
                  <a
                    href={`mailto:${CONTACT.EMAIL}`}
                    className="flex items-center gap-2 font-medium hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary-light text-base text-accent">
                      mail
                    </span>{' '}
                    이메일: {CONTACT.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-10 lg:w-3/5 lg:p-14 bg-white dark:bg-slate-900">
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300"
                      htmlFor="student-name"
                    >
                      학생 이름
                    </label>
                    <input
                      className={`block w-full rounded-xl border py-3.5 px-4 shadow-sm focus:ring-primary dark:bg-slate-800 transition-all ${errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 focus:border-primary dark:border-slate-700'
                        } dark:text-white`}
                      id="student-name"
                      placeholder="예: 홍길동"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                      }}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">
                        이름을 입력하세요.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300"
                      htmlFor="school"
                    >
                      학교
                    </label>
                    <div className="relative">
                      <select
                        className={`block w-full rounded-xl border-slate-200 bg-slate-50/50 py-3.5 px-4 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 appearance-none bg-none transition-all ${formData.school === '선택해주세요'
                          ? 'text-slate-400'
                          : 'text-slate-900 dark:text-white'
                          }`}
                        id="school"
                        style={{
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          appearance: 'none',
                        }}
                        value={formData.school}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            school: e.target.value,
                            grade: '선택해주세요',
                          });
                        }}
                      >
                        <option disabled>선택해주세요</option>
                        <option className="text-slate-900">초등학교</option>
                        <option className="text-slate-900">중학교</option>
                        <option className="text-slate-900">고등학교</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300"
                      htmlFor="grade"
                    >
                      학년
                    </label>
                    <div className="relative">
                      <select
                        className={`block w-full rounded-xl border-slate-200 bg-slate-50/50 py-3.5 px-4 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 appearance-none bg-none transition-all disabled:opacity-50 ${formData.grade === '선택해주세요'
                          ? 'text-slate-400'
                          : 'text-slate-900 dark:text-white'
                          }`}
                        id="grade"
                        style={{
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          appearance: 'none',
                        }}
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        disabled={formData.school === '선택해주세요'}
                      >
                        <option disabled>선택해주세요</option>
                        {getGradeOptions().map((opt) => (
                          <option key={opt} className="text-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="sm:col-span-3 space-y-2">
                    <label
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300"
                      htmlFor="phone"
                    >
                      학부모 연락처
                    </label>
                    <input
                      className={`block w-full rounded-xl border py-3.5 px-4 shadow-sm focus:ring-primary dark:bg-slate-800 transition-all ${errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 focus:border-primary dark:border-slate-700'
                        } dark:text-white`}
                      id="phone"
                      placeholder="010-0000-0000"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9-]/g, '');
                        setFormData({ ...formData, phone: value });
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
                      }}
                      onBlur={handlePhoneBlur}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">
                        {!formData.phone.trim()
                          ? '연락처를 입력하세요.'
                          : '올바른 휴대폰 번호 형식을 입력해주세요. (예: 010-0000-0000)'}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3 space-y-2">
                    <label
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300"
                      htmlFor="inquiry"
                    >
                      문의 내용 / 고민사항
                    </label>
                    <textarea
                      className="block w-full rounded-xl border-slate-200 bg-slate-50/50 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white py-3.5 px-4 transition-all"
                      id="inquiry"
                      placeholder="예: 문법 기초가 부족합니다. 상담 받고 싶어요."
                      rows={3}
                      value={formData.inquiry}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiry: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div
                    className={`flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border transition-all ${errors.privacy
                      ? 'border-red-500'
                      : 'border-slate-100 dark:border-slate-800'
                      }`}
                  >
                    <div className="flex h-6 items-center">
                      <input
                        required
                        className="h-5 w-5 rounded-md border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer"
                        id="privacy"
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            privacy: e.target.checked,
                          });
                          if (errors.privacy)
                            setErrors((prev) => ({ ...prev, privacy: false }));
                        }}
                      />
                    </div>
                    <label
                      className="text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer select-none"
                      htmlFor="privacy"
                    >
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-500 mt-1 ml-1">
                      개인정보 수집 및 이용에 동의해주세요.
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    className="w-full flex justify-center items-center gap-3 rounded-2xl bg-[#1a4332] py-5 px-6 text-xl font-bold text-white shadow-xl shadow-primary/20 hover:bg-[#123024] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all transform active:scale-[0.98] group"
                    type="submit"
                  >
                    무료 상담 신청하기
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="mt-4 text-center text-[13px] text-slate-400 font-medium">
                    신청 후 24시간 이내에 원장 선생님이 연락드립니다.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
