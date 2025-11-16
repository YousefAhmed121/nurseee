
import React from 'react';
import type { Quiz, UserAnswer } from '../types';

interface ResultsViewProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  timeTaken: number;
  onReview: () => void;
  onBack: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ quiz, userAnswers, timeTaken, onReview, onBack }) => {
  const score = userAnswers.filter(a => a?.isCorrect).length;
  const total = quiz.questions.length;
  const percentage = (score / total) * 100;

  const getMessage = () => {
    if (percentage >= 90) return "ممتاز! أحسنت.";
    if (percentage >= 75) return "جيد جداً، استمر.";
    if (percentage < 50) return "تحتاج للمزيد من المراجعة. بالتوفيق المرة القادمة!";
    return "نتيجة جيدة!";
  };

  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
      <h3 className="text-3xl font-bold text-blue-900 mb-4">انتهى الاختبار!</h3>
      <div className="text-6xl font-extrabold text-blue-500 my-5">{score} / {total}</div>
      <p className="text-xl text-gray-600 font-semibold mb-4">{getMessage()}</p>
      <p className="text-lg text-gray-500 mb-8">الوقت المستغرق: {formattedTime}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onReview}
          className="bg-gradient-to-r from-blue-500 to-sky-500 text-white border-none py-3 px-8 rounded-full text-lg cursor-pointer font-bold transition-transform hover:scale-105"
        >
          مراجعة الإجابات
        </button>
        <button
          onClick={onBack}
          className="bg-gray-600 text-white border-none py-3 px-8 rounded-full text-lg cursor-pointer font-bold transition-colors hover:bg-blue-900"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
};
