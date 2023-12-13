export interface homeScreenProps {
  location: string
}

export interface CardProps {
  eventDay: string
  eventTime: string
  eventLocation: string
  eventImg: string
  eventOrganizer: string
  eventPrice: number
}

export interface CardRecommendedProps {
  eventDay: string
  eventTime: string
  eventLocation: string
  eventImg: string
}

export interface Story {
  storyId?: string
  live: boolean
  profilePic: string
  user: string
}

export interface SubscriptionsProps {
  stories: Story[]
}
