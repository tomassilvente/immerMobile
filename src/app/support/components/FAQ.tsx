"use client"
import React, { useState } from "react";


const FAQ = ({title, desc}:{title:string,desc:string})=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="px-2 py-4 overflow-hidden flex flex-col gap-2.5 font-medium ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={()=>toggleCollapsible()}
      >
        <div className="text-base">{title}</div>
        <svg onClick={toggleCollapsible} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9L12 15L6 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className="py-2.5 text-gray-500">
        {desc}
      </div>
      <div className=" h-[1px] w-full bg-gray-500"></div>
    </div>
  );
}

export default FAQ;