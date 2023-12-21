'use client'
import React, { useEffect, useState } from 'react'
import WelcomeScreen from '../../components/OnboardingScreens/WelcomeScreen'
import OnboardingScreen from '../../components/OnboardingScreens/OnboardingScreen'

const onboardingData = [
  {
    title: 'Empower Your Entertainment Journey',
    description: 'Connect, create, control with Immer',
    backgroundImage: '/assets/Rectangle 4243.png'
  },
  {
    title: 'Live Events Today',
    description: 'It is time to free creativity and offer genuine experiences.',
    backgroundImage: '/assets/image 1_1.png'
  },
  {
    title: 'Introducing a New Era',
    description:
      'With Immer, control and creativity return to the rightful hands: Yours.',
    backgroundImage: '/assets/iStock-1366076847 1.jpg'
  }
]

const OnboardingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    if (currentPage === 0) {
      const timeout = setTimeout(() => {
        setCurrentPage(1)
      }, 3000)
      return () => { clearTimeout(timeout) }
    }
  }, [currentPage])

  const handleSkipClick = (): void => {
    const lastPageIndex = onboardingData.length
    setCurrentPage(lastPageIndex)
  }

  const handleNext = (): void => {
    if (currentPage < onboardingData.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="h-screen relative">
      <div
        className={`h-screen absolute top-0 left-0 w-full ${
          currentPage === 0 ? 'slide-active' : 'slide-exit'
        }`}
      >
        <WelcomeScreen />
      </div>

      {onboardingData.map((data, index) => (
        <div
          key={index}
          className={`h-screen absolute top-0 left-0 w-full ${
            currentPage === index + 1 ? 'slide-active' : 'slide-exit'
          }`}
        >
          <OnboardingScreen
            title={data.title}
            description={data.description}
            pageNumber={index + 1}
            totalPages={onboardingData.length}
            onNext={handleNext}
            onSkipClick={handleSkipClick}
            backgroundImage={data.backgroundImage}
            isLastScreen={currentPage === onboardingData.length}
          />
        </div>
      ))}
    </div>
  )
}

export default OnboardingPage
