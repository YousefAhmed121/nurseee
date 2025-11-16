import React from 'react';
import type { Section } from '../types';

interface SectionCardProps {
  section: Section;
  onEnter: () => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section, onEnter }) => {
  const quizzes = section.content.filter(item => item.type === 'quiz').length;
  const sections = section.content.filter(item => item.type === 'section').length;

  let contentDescription = '';
  if (quizzes > 0 && sections > 0) {
    contentDescription = `${quizzes} اختبار, ${sections} قسم`;
  } else if (quizzes > 0) {
    contentDescription = `${quizzes} اختبار`;
    if (quizzes === 1) contentDescription = `اختبار واحد`;
    else if (quizzes === 2) contentDescription = `اختباران`;
    else if (quizzes > 2 && quizzes < 11) contentDescription = `${quizzes} اختبارات`;
  } else if (sections > 0) {
    contentDescription = `${sections} قسم`;
     if (sections === 1) contentDescription = `قسم واحد`;
    else if (sections === 2) contentDescription = `قسمان`;
    else if (sections > 2 && sections < 11) contentDescription = `${sections} أقسام`;
  } else {
    contentDescription = 'فارغ';
  }


  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out cursor-pointer border-4 border-transparent hover:transform hover:-translate-y-1.5 hover:shadow-xl hover:border-sky-500 flex flex-col justify-between"
      onClick={onEnter}
    >
      <div>
        <h3 className="text-sky-900 text-2xl font-bold mb-4 text-center">{section.name}</h3>
        <p className="text-gray-600 text-center mb-5 flex-grow">
          يحتوي على: {contentDescription}
        </p>
      </div>
      <button 
        className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-none py-3 px-6 rounded-full text-base cursor-pointer w-full transition-all duration-300 font-bold mt-2.5 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(14,165,233,0.4)]"
      >
        ادخل القسم
      </button>
    </div>
  );
};
