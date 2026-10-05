export type Course = {
  id: 'ielts' | 'pte' | 'spoken' | 'academic' | 'abroad'
  title: string
  description: string
  points: string[]
}

export const courses: Course[] = [
  {
    id: 'ielts',
    title: 'IELTS Preparation',
    description: 'Complete training for Academic and General Training IELTS.',
    points: ['Listening, Reading, Writing, Speaking', 'Band score strategies', 'Mock tests with feedback'],
  },
  {
    id: 'pte',
    title: 'PTE Preparation',
    description: 'Focused preparation for the PTE Academic computer-based test.',
    points: ['All question types covered', 'Scoring tricks and templates', 'Regular mock practice'],
  },
  {
    id: 'spoken',
    title: 'Spoken English',
    description: 'Build confidence and fluency for everyday and professional conversation.',
    points: ['Fluency and pronunciation', 'Vocabulary building', 'Speaking practice sessions'],
  },
  {
    id: 'academic',
    title: 'Academic English',
    description: 'Strengthen your English skills for study, research and university life.',
    points: ['Academic writing', 'Grammar and structure', 'Reading and comprehension'],
  },
  {
    id: 'abroad',
    title: 'Study Abroad',
    description: 'Guidance on the English test and score you need to study abroad.',
    points: ['IELTS / PTE score planning', 'Choosing the right test', 'Support from preparation to test day'],
  },
]
