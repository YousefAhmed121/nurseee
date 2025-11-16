
import React from 'react';
import type { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
  onStart: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, onStart }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out cursor-pointer border-4 border-transparent hover:transform hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500 flex flex-col justify-between"
      onClick={onStart}
    >
      <div>
        <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 text-center">{quiz.title}</h3>
        <p className="text-gray-600 text-center mb-5 flex-grow">
          {quiz.questions.length} سؤال {quiz.questions[0]?.type === 'tf' ? 'صح وخطأ' : 'اختيار من متعدد'}
        </p>
      </div>
      <button 
        className="bg-gradient-to-r from-blue-500 to-sky-500 text-white border-none py-2 px-5 sm:py-3 sm:px-6 rounded-full text-base cursor-pointer w-full transition-all duration-300 font-bold mt-2.5 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(59,130,246,0.4)]"
      >
        ابدأ الاختبار
      </button>
    </div>
  );
};