
import React from 'react';
import type { Quiz, UserAnswer, Question } from '../types';

interface ReviewViewProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  onBackToResults: () => void;
  onBackToHome: () => void;
}

const ReviewOption: React.FC<{ text: string; isCorrect: boolean; isUserChoice: boolean; wasUserWrong: boolean }> = ({ text, isCorrect, isUserChoice, wasUserWrong }) => {
  let baseClasses = "border-2 p-4 rounded-xl text-lg font-bold text-left w-full mb-2.5 opacity-80";
  let stateClasses = "bg-white border-gray-200";

  if (isCorrect) {
    stateClasses = "bg-green-100 border-green-500 opacity-100";
  } else if (isUserChoice && wasUserWrong) {
    stateClasses = "bg-red-100 border-red-500 opacity-100 line-through";
  }

  return <div className={`${baseClasses} ${stateClasses}`} dir="ltr">{text}</div>;
};

const ReviewQuestion: React.FC<{ question: Question; userAnswer: UserAnswer; index: number }> = ({ question, userAnswer, index }) => {
  const wasUserWrong = userAnswer && !userAnswer.isCorrect;

  return (
    <div className="bg-sky-50 rounded-2xl p-6 mb-5 border-r-8 border-gray-300">
      <div className="text-blue-500 font-bold text-lg mb-4">السؤال {index + 1}</div>
      <div className="text-xl text-blue-900 mb-6 leading-relaxed text-left" dir="ltr">{question.q}</div>

      {question.type === 'mcq' && question.options?.map((option, i) => (
        <ReviewOption
          key={i}
          text={option}
          isCorrect={i === question.a}
          isUserChoice={userAnswer?.answer === i}
          wasUserWrong={wasUserWrong}
        />
      ))}

      {question.type === 'tf' && (
        <>
          <ReviewOption
            text="صح"
            isCorrect={question.a === true}
            isUserChoice={userAnswer?.answer === true}
            wasUserWrong={wasUserWrong}
          />
          <ReviewOption
            text="خطأ"
            isCorrect={question.a === false}
            isUserChoice={userAnswer?.answer === false}
            wasUserWrong={wasUserWrong}
          />
        </>
      )}
    </div>
  );
};

export const ReviewView: React.FC<ReviewViewProps> = ({ quiz, userAnswers, onBackToResults, onBackToHome }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl relative">
      <h2 className="text-blue-900 text-3xl font-bold text-center mb-6">مراجعة الإجابات</h2>
      <button 
        onClick={onBackToResults}
        className="absolute top-5 right-5 bg-gray-600 text-white py-2 px-4 rounded-full font-bold transition-colors hover:bg-blue-900 hidden sm:block">
        → العودة للنتائج
      </button>

      <div className="sm:hidden flex justify-center mb-6">
        <button 
            onClick={onBackToResults}
            className="bg-gray-600 text-white py-2 px-4 rounded-full font-bold transition-colors hover:bg-blue-900">
            → العودة للنتائج
        </button>
      </div>

      <div>
        {quiz.questions.map((q, index) => (
          <ReviewQuestion key={index} question={q} userAnswer={userAnswers[index]} index={index} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onBackToHome}
          className="bg-gradient-to-r from-blue-500 to-sky-500 text-white border-none py-3 px-8 rounded-full text-lg cursor-pointer font-bold transition-transform hover:scale-105"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
};
