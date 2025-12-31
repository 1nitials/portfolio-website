export interface Project {
  filename: string
  description: string
  date: string
  tags: string
  link: string
  category: 'music' | 'art' | 'code' | 'games'
}

export interface FeaturedProject {
  filename: string
  description: string
  link: string
  category: 'music' | 'art' | 'code' | 'games'
}

export const featuredProjects: FeaturedProject[] = [
  { filename: 'SUGA GAMES STORE', description: 'Full stack e-commerce store made with Node.js + React', link: 'https://www.sugagamestore.com/', category: 'code'},
  { filename: 'Quiz Quest', description: 'AI quiz generator, winner for Hackwknd 2024', link: 'https://quizquest.codex-source.com/index_quiz.html', category: 'code'},
  { filename: 'Safedrive Insurance', description: 'Year 2 Database and Concepts Design project', link: 'https://github.com/1nitials/safedrive-insurance', category: 'code'},
  { filename: 'Slap Chop!', description: 'Rhythm minigame made for the Solo Dev Jam 4', link: 'https://1nitials.itch.io/slap-chop', category: 'games'},
]

export const projects: Project[] = [

]

export const getIcon = (category: string) => {
  switch(category) {
    case 'music': return '🎵'
    case 'art': return '🎨'
    case 'code': return '💻'
    case 'games': return '🎮'
    default: return '📄'
  }
}