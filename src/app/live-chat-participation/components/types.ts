// types.ts
// Defines the ChatMessage type for representing chat messages
export interface ChatMessage {
  content: string
  user: {
    id: number
    name: string
    image: string
  }
  reportCount: number
  isBlocked: boolean
  reactions: {
    thumbsUp: number
    fire: number
    laughingFace: number
  }
}
