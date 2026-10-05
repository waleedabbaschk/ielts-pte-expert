export type Exam = 'PTE' | 'IELTS'

export type Result = {
  name: string
  exam: Exam
  overall: number
  skills: [string, number][]
}

const pte = (name: string, overall: number, l: number, r: number, s: number, w: number): Result => ({
  name,
  exam: 'PTE',
  overall,
  skills: [['Listening', l], ['Reading', r], ['Speaking', s], ['Writing', w]],
})

const ielts = (name: string, overall: number, l: number, r: number, w: number, s: number): Result => ({
  name,
  exam: 'IELTS',
  overall,
  skills: [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s]],
})

export const results: Result[] = [
  pte('Noman Saif Ullah', 90, 90, 77, 90, 86),
  pte('Shumaila Akbar', 85, 77, 66, 90, 63),
  ielts('Ubaid Abdullah', 7.5, 8.5, 7.5, 6.5, 6.5),
  pte('Ghulam Abbas', 72, 73, 60, 74, 65),
  pte('Tanzeela Rubab', 70, 66, 75, 65, 71),
  ielts('Afnan Habib', 6.5, 7.5, 6.5, 6.0, 6.0),
  pte('Fahad Ali Amjad', 69, 65, 55, 72, 71),
  pte('Azka Batool', 68, 65, 69, 74, 64),
  pte('Nabeel Ahmed', 68, 64, 65, 76, 67),
  pte('Faizan Ali', 67, 64, 64, 71, 62),
  pte('Muhammad Musa Azeem', 67, 68, 66, 67, 69),
  pte('Muhammad Taimoor', 66, 68, 66, 60, 70),
  ielts('Muhammad Saad Raza', 6.5, 7.5, 6.0, 6.5, 5.5),
  pte('Tayyab Tahir', 64, 69, 51, 81, 60),
  pte('Muhammad Saad Ali', 61, 63, 60, 71, 57),
]
