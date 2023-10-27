import React from "react";
import Image from "next/image";

const WelcomeScreen: React.FC = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: 'url("/assets/iStock-1366076847 1.png")' }}
    >
      <h1 className="text-white text-3xl font-normal mb-4">Welcome to</h1>
      <Image
        src="/assets/immer logo_white.png"
        alt="Logo"
        width={235}
        height={80}
      />
    </div>
  );
};

export default WelcomeScreen;
