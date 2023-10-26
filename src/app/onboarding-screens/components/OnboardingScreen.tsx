import React from "react";

interface OnboardingScreenProps {
  title: string;
  description: string;
  pageNumber: number;
  totalPages: number;
  onNext: () => void;
  onSkipClick: () => void;
  isLastScreen: boolean;
  backgroundImage: string;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  title,
  description,
  pageNumber,
  totalPages,
  onSkipClick,
  onNext,
  backgroundImage,
  isLastScreen,
}) => {
  return (
    <div
      className="h-screen w-100 flex flex-col justify-between bg-cover bg-center bg-no-repeat px-5"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="w-100 flex justify-end">
        {pageNumber !== 0 && (
          <button className=" text-white p-12 h-14" onClick={onSkipClick}>
            Skip
          </button>
        )}
      </div>

      <div className="w-100 flex flex-col items-center ">
        <div>
          <h1 className="text-white text-3xl leading-10 text-left font-bold mt-4">
            {title}
          </h1>
          <p className="text-white text-xl text-left font-semibold mt-2">
            {description}
          </p>
        </div>

        <div className=" flex flex-col items-center w-full md:w-[30%] lg:w-[30%]">
          {pageNumber !== 0 && (
            <div className="flex items-center mt-8 mb-8">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 bg-orange-500 rounded-full mx-1 ${
                    index === pageNumber - 1 ? "opacity-100" : "opacity-50"
                  }`}
                />
              ))}
            </div>
          )}
          {!isLastScreen && (
            <button
              className="w-[100%] bg-orange-500  text-white px-6 py-3 h-14  rounded-full mb-8"
              onClick={onNext}
            >
              Next
            </button>
          )}
          {isLastScreen && (
            <button
              className="w-[100%] bg-orange-500 text-white px-6 py-3 h-14  rounded-full mb-8"
              onClick={onNext}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
