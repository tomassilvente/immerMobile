export interface OnboardingScreenProps {
  title: string
  description: string
  pageNumber: number
  totalPages: number
  onNext: () => void
  onSkipClick: () => void
  isLastScreen: boolean
  backgroundImage: string
}
