export interface Question {
  q: string;
  type: 'mcq' | 'tf';
  options?: string[];
  a: number | boolean;
}

// Add a type discriminator to distinguish between Quiz and Section
export interface Quiz {
  type: 'quiz';
  id: string;
  title: string;
  questions: Question[];
}

export interface Section {
  type: 'section';
  id: string;
  name: string;
  content: (Quiz | Section)[]; // Recursive structure
}

export interface Subject {
  id: string;
  name: string;
  content: (Quiz | Section)[];
}

export interface UserAnswer {
  answer: number | boolean;
  isCorrect: boolean;
}
