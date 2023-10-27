import Image from "next/image";
import React from "react";

const interests = [
  {
    img: "./assets/concert.png",
    title: "Concerts",
  },
  {
    img: "./assets/djs.png",
    title: "DJs",
  },
  {
    img: "./assets/comedy.png",
    title: "Comedy",
  },
  {
    img: "./assets/sports.png",
    title: "Sports",
  },
];

const Interests = () => {
  return (
    <div className="mt-5 mb-2 flex gap-2 justify-around flex-wrap">
      {interests.map((interest, index) => (
        <div className="flex flex-col" key={index}>
          <Image
            className="h-full w-full"
            src={interest.img}
            alt="interest"
            width={0}
            height={0}
          />
          <p className="text-base py-2 text-center">{interest.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests;
