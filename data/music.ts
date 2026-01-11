export interface Track {
  id: string
  filename: string
  directory: string
  dateCreated: string
  tags: string[]
  description?: string
  duration?: string
}

export const tracks: Track[] = [
  {
    id: "1",
    filename: "shortwork_jazz.mp3",
    directory: "/audio/shortwork_jazz.mp3",
    dateCreated: "30-11-2025 @ 1:07",
    tags: ["jazz", "short", "demo", "warmup"],
    description: "A short jazz piece made to test out audio libraries",
    duration: "0:23"
  },
  {
    id: "2", 
    filename: "taxi_sampled.mp3",
    directory: "/audio/taxi_sampled_2.mp3",
    dateCreated: "23-11-2025 @ 13:59",
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
  }
]

export function getAllTracks(): Track[] {
  return tracks
}

export function getTrackById(id: string): Track | undefined {
  return tracks.find(track => track.id === id)
}