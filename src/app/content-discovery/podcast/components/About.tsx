"use client"
import { useState } from "react"
import SvgStar from "../../../../../public/assets/Icons/Star"
import Image from "next/image"
import Link from "next/link"

type AboutProps = {
    stars: number,
    category: string,
    about: string
}

export default function About({stars, category, about}:AboutProps){

    const [isRateOpen, setIsRateOpen] = useState(false)

    function rating(){
        setIsRateOpen(!isRateOpen)
    }

    return(
        <div >
        <div
            className={`flex m-4`}>
            <div onClick={rating}  className={`border flex mr-3 rounded-full font-light p-1 pl-3 pr-4 text-center bg-primary text-white`}>
                <SvgStar /><p className="ml-1">{stars}</p>
            </div>
            <div className={`border flex-none mr-3 rounded-full font-light p-1 px-4 text-center bg-primary text-white`}>
                <Link href={'/content-discovery/podcast/category'}>{category}</Link>
            </div>
        </div>
        <p className="font-light text-sm m-5">{about}</p>
        {/* {isRateOpen && (
        <div
          onClick={rating}
          className="fixed bottom-0 h-[100vh] left-0 right-0 top-0 w-[100%] z-10 flex items-center"
        >
           <Image src='../assets/Vert3.png' width={200} height={200} alt='...'/>
        </div>
      )} */}
      {isRateOpen && (
        <div
          onClick={rating}
          className="bg-[#ffffffe1] fixed bottom-0 h-[100vh] left-0 right-0 top-0 w-[100%] z-10 pt-[30%] pl-[20%]"
        >
          <Image className="h-[300px] rounded-xl" src='../assets/Vert3.png' width={300} height={400} alt='...'/>
            <p className="text-3xl font-semibold w-[300px] text-center mt-3">How do you rate this podcast?</p>
            <p className="text-primary text-4xl mt-5 w-[300px] text-center">★ ★ ★ ★ ★ </p>
        </div>
      )}
        </div>
    )
}