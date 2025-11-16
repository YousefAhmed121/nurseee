import type { Subject } from '../types';
import { microbiology } from './microbiology';
import { anatomy } from './anatomy';
import { physiology } from './physiology';
import { clinical } from './clinical';

export const subjects: Subject[] = [
  microbiology,
  {
    id: 'fundamental',
    name: 'Fundamental Bank',
    content: [],
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry Bank',
    content: [],
  },
  anatomy,
  physiology,
  clinical,
];
