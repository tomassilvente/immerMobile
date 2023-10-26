'use client'
import React, { useEffect, useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import OnboardingScreen from './OnboardingScreen';

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
    description: 'With Immer, control and creativity return to the rightful hands: Yours.', 
    backgroundImage: '/assets/iStock-1366076847 1.jpg' 
  },
];

const OnboardingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    if (currentPage === 0) {
      const timeout = setTimeout(() => {
        setCurrentPage(1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentPage]);

  const handleSkipClick = () => {
    const lastPageIndex = onboardingData.length;
    setCurrentPage(lastPageIndex);
  };
  

  const handleNext = () => {
    if (currentPage < onboardingData.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  

  return (
    <div className="h-screen relative">
      {currentPage === 0 && <WelcomeScreen />}
      {currentPage >= 1 && (
        <OnboardingScreen
            title={onboardingData[currentPage - 1].title}
            description={onboardingData[currentPage - 1].description}
            pageNumber={currentPage}
            totalPages={onboardingData.length}
            onNext={handleNext}
            onSkipClick={handleSkipClick}
            backgroundImage={onboardingData[currentPage  - 1].backgroundImage}
            isLastScreen={currentPage === onboardingData.length}
        />
      )}
    </div>
  );
};

export default OnboardingPage;
