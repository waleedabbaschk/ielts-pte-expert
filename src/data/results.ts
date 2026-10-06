export type Exam = 'PTE' | 'IELTS' | 'Oxford ELLT' | 'LanguageCert'

export type Result = {
  name: string
  exam: Exam
  overall: string
  overallLabel: string
  max: number
  decimals: number
  skills: [string, number][]
}

const pte = (name: string, overall: number, l: number, r: number, s: number, w: number): Result => ({
  name,
  exam: 'PTE',
  overall: String(overall),
  overallLabel: 'Overall',
  max: 90,
  decimals: 0,
  skills: [['Listening', l], ['Reading', r], ['Speaking', s], ['Writing', w]],
})

const ielts = (name: string, overall: number, l: number, r: number, w: number, s: number): Result => ({
  name,
  exam: 'IELTS',
  overall: overall.toFixed(1),
  overallLabel: 'Overall Band',
  max: 9,
  decimals: 1,
  skills: [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s]],
})

const oxford = (name: string, overall: number, l: number, r: number, w: number, s: number): Result => ({
  name,
  exam: 'Oxford ELLT',
  overall: String(overall),
  overallLabel: 'Overall Level',
  max: 12,
  decimals: 0,
  skills: [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s]],
})

const languageCert = (name: string, skills: [string, number][]): Result => ({
  name,
  exam: 'LanguageCert',
  overall: 'B2',
  overallLabel: 'High Pass',
  max: 50,
  decimals: 0,
  skills,
})

export const results: Result[] = [
  // Top picks (shown on the home page)
  pte('Noman Saif Ullah', 90, 90, 77, 90, 86),
  pte('Shumaila Akbar', 85, 77, 66, 90, 63),
  ielts('Ubaid Abdullah', 7.5, 8.5, 7.5, 6.5, 6.5),
  pte('Muhammad Ahsan', 75, 76, 63, 79, 69),
  oxford('Rabia Shehzadi', 9, 9, 9, 9, 8),
  ielts('Saad Akbar Gondal', 7.0, 7.5, 7.0, 6.0, 7.5),

  // PTE
  pte('Ghulam Abbas', 72, 73, 60, 74, 65),
  pte('Tanzeela Rubab', 70, 66, 75, 65, 71),
  pte('Fahad Ali Amjad', 69, 65, 55, 72, 71),
  pte('Azka Batool', 68, 65, 69, 74, 64),
  pte('Nabeel Ahmed', 68, 64, 65, 76, 67),
  pte('Faizan Ali', 67, 64, 64, 71, 62),
  pte('Muhammad Musa Azeem', 67, 68, 66, 67, 69),
  pte('Sheraz Ul Hassan', 66, 65, 58, 64, 67),
  pte('Muhammad Taimoor', 66, 68, 66, 60, 70),
  pte('Tayyab Tahir', 64, 69, 51, 81, 60),
  pte('Muhammad Saad Ali', 61, 63, 60, 71, 57),
  pte('Wajahat Ali Feroze', 60, 60, 61, 60, 58),

  // IELTS
  ielts('Afnan Habib', 6.5, 7.5, 6.5, 6.0, 6.0),
  ielts('Muhammad Saad Raza', 6.5, 7.5, 6.0, 6.5, 5.5),
  ielts('Maria Urooj', 6.5, 7.0, 6.0, 6.0, 6.0),
  ielts('Farwa Shoukat', 6.5, 8.0, 6.5, 5.5, 6.5),
  ielts('Masooma Zahra', 6.0, 6.0, 6.0, 6.0, 6.0),

  // Oxford ELLT
  oxford('Muhammad Abdullah Manzoor', 9, 10, 9, 10, 7),
  oxford('Sana Hafeez', 8, 8, 7, 10, 7),
  oxford('Haseeb Hassan', 8, 8, 8, 7, 7),
  oxford('Syeda Arsha Ali', 8, 10, 8, 7, 7),
  oxford('Lutuf Ur Rehman', 8, 9, 8, 8, 6),
  oxford('Muhammad Rashid', 8, 9, 8, 9, 6),
  oxford('Zubaria Batool', 8, 8, 9, 7, 7),
  oxford('Abdul Basit Mehmood', 7, 6, 9, 6, 7),
  oxford('Muhammad Abdullah Zain', 7, 7, 8, 7, 5),

  // LanguageCert
  languageCert('Ahsan Ali', [['Speaking', 42]]),
  languageCert('Muhammad Haroon', [['Speaking', 38]]),
]
