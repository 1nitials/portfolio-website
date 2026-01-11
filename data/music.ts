export interface Track {
  id: string
  filename: string
  dateCreated: string
  tags: string[]
  description?: string
  duration?: string
}

export const tracks: Track[] = [
  {
    id: "1",
    filename: "shortwork_jazz.mp3",
    dateCreated: "30-11-2025 @ 1:07",
    tags: ["jazz", "short", "demo", "warmup"],
    description: "A short jazz piece recorded during a late night session",
    duration: "2:34"
  },
  {
    id: "2", 
    filename: "ambient_loop.mp3",
    dateCreated: "28-11-2025 @ 3:22",
    tags: ["ambient", "loop", "atmospheric"],
    description: "Atmospheric ambient loop for background music",
    duration: "4:12"
  },
  {
    id: "3",
    filename: "experimental_beat.mp3", 
    dateCreated: "25-11-2025 @ 2:15",
    tags: ["experimental", "beat", "electronic"],
    description: "Experimental electronic beat with unconventional rhythms",
    duration: "3:45"
  }
]

export function getAllTracks(): Track[] {
  return tracks
}

export function getTrackById(id: string): Track | undefined {
  return tracks.find(track => track.id === id)
}