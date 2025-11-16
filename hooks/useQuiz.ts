
import { useState, useEffect, useCallback } from 'react';
import type { Quiz, Question, UserAnswer } from '../types';

export const useQuiz = (quiz: Quiz) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(() => Array(quiz.questions.length).fill(null));
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [formattedTime, setFormattedTime] = useState('00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    setFormattedTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  }, [secondsElapsed]);

  const selectAnswer = useCallback((answer: number | boolean) => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.a;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = { answer, isCorrect };
    setUserAnswers(newAnswers);
  }, [currentQuestionIndex, quiz.questions, userAnswers]);

  const nextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return {
    currentQuestionIndex,
    userAnswers,
    secondsElapsed,
    formattedTime,
    selectAnswer,
    nextQuestion,
    prevQuestion,
  };
};
