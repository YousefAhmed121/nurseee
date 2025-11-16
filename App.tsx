
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuizSelection } from './components/QuizSelection';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { ReviewView } from './components/ReviewView';
import type { Quiz, UserAnswer } from './types';

type View = 'selection' | 'quiz' | 'results' | 'review';

const App: React.FC = () => {
  const [view, setView] = useState<View>('selection');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeTaken, setTimeTaken] = useState(0);

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setView('quiz');
  };

  const finishQuiz = (answers: UserAnswer[], time: number) => {
    setUserAnswers(answers);
    setTimeTaken(time);
    setView('results');
  };

  const showReview = () => {
    setView('review');
  };

  const goHome = () => {
    setActiveQuiz(null);
    setUserAnswers([]);
    setTimeTaken(0);
    setView('selection');
  };

  const showResults = () => {
    setView('results');
  };

  const renderView = () => {
    switch (view) {
      case 'quiz':
        return activeQuiz && <QuizView quiz={activeQuiz} onFinish={finishQuiz} onBack={goHome} />;
      case 'results':
        return activeQuiz && <ResultsView quiz={activeQuiz} userAnswers={userAnswers} timeTaken={timeTaken} onReview={showReview} onBack={goHome} />;
      case 'review':
        return activeQuiz && <ReviewView quiz={activeQuiz} userAnswers={userAnswers} onBackToResults={showResults} onBackToHome={goHome} />;
      case 'selection':
      default:
        return <QuizSelection onStartQuiz={startQuiz} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-600 bg-sky-50 flex flex-col">
      <main className="container mx-auto px-4 py-5 flex-grow">
        <Header />
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
