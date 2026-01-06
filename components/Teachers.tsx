
import React from 'react';

const Teachers: React.FC = () => {
  const staff = [
    {
      name: 'Sarah Kim 원장',
      title: '고등부 전임 / 입시 컨설팅',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGLBr78M4MKmAeWIoV_77pivCgaCFy81i9X3Rq1b8sdmM2isE6TI_pV501ZU3J3uHa9P-Fo_h6dXLKNzTR2_VyN-Tl9YK1_HYLA_p6LeUVYTUZAbSqiDU7ZqqEAsrjwP-yMCb73469Irv_SeHiA_HDrWeTvx0-QIArnBP9B8ijjJK2bdc6T6ZxL2ycv4WmLYosCZ_x_Uef4NjQoMS5eZdDpvFCnPHXlDHJGs1cxGFm647B__4bOhgUOvxS0FIsENWUeBiX6onEtws',
      career: [
        '연세대학교 영어영문학과 졸업',
        '대치동 대형 어학원 7년 경력',
        '수능 영어 1등급 배출 다수'
      ]
    },
    {
      name: 'James Lee 팀장',
      title: '중등부 전임 / 문법·독해',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlHVhYGeUGJQVu0jCJ8tIuB8VbhbZc7StuRsNo6SN-hZy5_KK9DGtp4aI_OQaIYo36dKFjPpqU0QnN1ytr8z5KEWpBFfIhzpiBesXvQnLLCHqbdfSqoIquGFrPBQJVdOivwyID-vlukiSm2VguDDxIaEtFT4qXFODQHnQbZacDUorOIYZ4ptqRzYd2crioof46J0vgItkgJG92QG_2OPm-RqzTjYyxWQkQDHB6sJOQO9MonkujB6_NklYoEjoZGxRHqGKpRwOlumM',
      career: [
        '한국외국어대학교 영어교육과 졸업',
        '중등 내신 만점 제조기',
        '꼼꼼한 관리와 피드백'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="teachers">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">최고의 강사진</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {staff.map((member, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-800 transition-transform hover:-translate-y-2 w-full md:w-1/2 lg:w-1/3">
              <div 
                className="aspect-[4/3] w-full bg-cover bg-top grayscale group-hover:grayscale-0 transition-all duration-500" 
                style={{ backgroundImage: `url('${member.img}')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.title}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {member.career.map((line, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
