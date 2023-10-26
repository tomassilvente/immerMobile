import Image from "next/image";
import React from "react";

const subs = [
  {
    img: "./assets/subs1.png",
    name: "Sheryl Green",
  },
  {
    img: "./assets/subs2.png",
    name: "Rich Wallace",
  },
  {
    img: "./assets/subs3.png",
    name: "Arn Scoba",
  },
  {
    img: "./assets/subs4.png",
    name: "Glenn Marcs",
  },
];

const Subscriptions = () => {
  return (
    <div className="my-5 flex flex-col gap-3">
      {subs.map((sub, index) => (
        <div className="flex gap-5 items-start" key={index}>
          <Image
            className="w-[3em] h-full"
            src={sub.img}
            height={0}
            width={0}
            alt="sub"
          />
          <div className="text-[#333] flex flex-col gap-1">
            <p className="font-semibold text-sm">{sub.name}</p>
            <p className="text-xs">{sub.name}</p>
          </div>
          <button className="ml-auto px-4 py-2 text-white text-xs rounded bg-[#FF6C00]">
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
