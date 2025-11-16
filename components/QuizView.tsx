
import React from 'react';
import type { Quiz, UserAnswer } from '../types';
import { useQuiz } from '../hooks/useQuiz';

interface QuizViewProps {
  quiz: Quiz;
  onFinish: (answers: UserAnswer[], time: number) => void;
  onBack: () => void;
}

const QuestionCard: React.FC<{ question: any; questionIndex: number; onSelect: (answer: any) => void; userAnswer: UserAnswer | null }> = ({ question, questionIndex, onSelect, userAnswer }) => {
  return (
    <div className="bg-sky-50 rounded-2xl p-6 mb-5 border-r-8 border-blue-500">
      <div className="text-blue-500 font-bold text-lg mb-4">السؤال {questionIndex + 1}</div>
      <div className="text-xl text-blue-900 mb-6 leading-relaxed text-left" dir="ltr">{question.q}</div>
      
      {question.type === 'mcq' && (
        <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
          {question.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full bg-white border-2 p-4 rounded-xl text-lg font-bold text-left transition-all duration-300 ${
                userAnswer?.answer === index
                  ? 'border-blue-500 bg-blue-100 text-blue-900'
                  : 'border-gray-200 text-gray-600 hover:border-blue-500'
              }`}
              dir="ltr"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === 'tf' && (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <button
            onClick={() => onSelect(true)}
            className={`w-full bg-white border-2 p-4 rounded-xl text-lg font-bold text-center transition-all duration-300 ${
              userAnswer?.answer === true
                ? 'border-blue-500 bg-blue-100 text-blue-900'
                : 'border-gray-200 text-gray-600 hover:border-blue-500'
            }`}
          >
            صح
          </button>
          <button
            onClick={() => onSelect(false)}
            className={`w-full bg-white border-2 p-4 rounded-xl text-lg font-bold text-center transition-all duration-300 ${
              userAnswer?.answer === false
                ? 'border-blue-500 bg-blue-100 text-blue-900'
                : 'border-gray-200 text-gray-600 hover:border-blue-500'
            }`}
          >
            خطأ
          </button>
        </div>
      )}
    </div>
  );
};

export const QuizView: React.FC<QuizViewProps> = ({ quiz, onFinish, onBack }) => {
  const {
    currentQuestionIndex,
    userAnswers,
    secondsElapsed,
    formattedTime,
    selectAnswer,
    nextQuestion,
    prevQuestion,
  } = useQuiz(quiz);

  const handleFinish = () => {
    onFinish(userAnswers, secondsElapsed);
  };

  const handleNext = () => {
    if (currentQuestionIndex === quiz.questions.length - 1) {
      handleFinish();
    } else {
      nextQuestion();
    }
  };

  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl relative">
      <div className="absolute top-5 left-5 bg-blue-500 text-white py-2 px-4 rounded-full font-bold text-lg hidden sm:block">
        <span>{formattedTime}</span>
      </div>
      <button onClick={onBack} className="absolute top-5 right-5 bg-gray-600 text-white py-2 px-4 rounded-full font-bold transition-colors hover:bg-blue-900 hidden sm:block">
        → العودة للقائمة
      </button>

      <header className="text-center mb-8 pt-16 sm:pt-0">
        <h2 className="text-blue-900 text-3xl font-bold mb-2">{quiz.title}</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-5">
          <div className="bg-gradient-to-r from-blue-500 to-sky-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-gray-600">السؤال {currentQuestionIndex + 1} من {quiz.questions.length}</p>
        <div className="sm:hidden mt-4 flex justify-center items-center gap-4">
            <div className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold text-lg">
                <span>{formattedTime}</span>
            </div>
            <button onClick={onBack} className="bg-gray-600 text-white py-2 px-4 rounded-full font-bold transition-colors hover:bg-blue-900">
                → العودة للقائمة
            </button>
        </div>
      </header>

      <QuestionCard 
        question={quiz.questions[currentQuestionIndex]}
        questionIndex={currentQuestionIndex}
        onSelect={selectAnswer}
        userAnswer={userAnswers[currentQuestionIndex]}
      />

      <div className="flex justify-between mt-5">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="bg-gray-600 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          السابق
        </button>
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-blue-500 to-sky-500 text-white py-3 px-8 rounded-full font-bold text-lg transition-transform hover:scale-105"
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}
        </button>
      </div>
    </div>
  );
};
