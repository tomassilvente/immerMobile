export interface FormData {
  email: string
  password: string
}

export interface FeedProps {
  buttonText: string
  title: string
  title2: string
  isFeedOpen: boolean
  setFeedClose: () => void
  link: boolean
}
