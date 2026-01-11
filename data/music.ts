export interface Track {
  id: string
  filename: string
  directory: string
  dateCreated: string
  tags: string[]
  description?: string
  duration: string
}

export const tracks: Track[] = [
  {
    id: "1",
    filename: "shortwork_jazz.mp3",
    directory: "/audio/shortwork_jazz.mp3",
    dateCreated: "30-12-2025 @ 1:07",
    tags: ["jazz", "short", "demo", "warmup"],
    description: "A short jazz piece made to test out audio libraries",
    duration: "0:23"
  },
  {
    id: "2", 
    filename: "taxi_sampled.mp3",
    directory: "/audio/taxi_sampled_2.mp3",
    dateCreated: "23-12-2025 @ 13:59",
    tags: ["vaporwave", "sample", "remix", "breakbeats"],
    description: "Vaporwave-esque remix sampling a friends song",
    duration: "2:00"
  },
  {
    id: "3",
    filename: "the steps no vocal.mp3",
    directory: "/audio/the steps no vocal.mp3", 
    dateCreated: "3-1-2026 @ 1:48",
    tags: ["experimental", "sample", "remix", "beat", "electronic", "jazz"],
    description: "Experimental beat that is also a remix sampling a friends song",
    duration: "0:48"
  },
  {
    id: "4",
    filename: "iceage.mp3",
    directory: "/audio/iceage.mp3", 
    dateCreated: "1-9-2025 @ 8:56",
    tags: ["vaporwave", "80s", "city pop", "original"],
    description: "Gameplay theme for a game jam a while back, usually you would sample tracks to create vaporwave but I made the original song from scratch then slowed it down.",
    duration: "1:21"
  },
  {
    id: "5",
    filename: "grass_area.mp3",
    directory: "/audio/grass_area.mp3", 
    dateCreated: "3-8-2025 @ 21:23",
    tags: ["chiptune", "pc-98", "city pop", "retro"],
    description: "Gameplay theme for my GMTK Game Jam entry, uses PC-98 soundfont and takes inspiration from the chiptune music of the same soundchip.",
    duration: "1:34"
  },
  {
    id: "6",
    filename: "isnt she lovely test.mp3",
    directory: "/audio/isnt she lovely test.mp3", 
    dateCreated: "27-10-2025 @ 13:28",
    tags: ["electric guitar", "cover", "demo"],
    description: "Short cover to test new recording equipment",
    duration: "0:41"
  }
]

export function getAllTracks(): Track[] {
  return tracks
}

export function getTrackById(id: string): Track | undefined {
  return tracks.find(track => track.id === id)
}