"use client"
//Icons
import Link from "next/link";
import SvgBackButton from "../../public/assets/Icons/BackButton";
import SvgLikeButton from "../../public/assets/Icons/LikeButton";
import SVGShare from "../../public/assets/Icons/shareButton";
import SvgRedHeart from "../../public/assets/Icons/RedHeart";
import { useState } from "react";
import SvgLikeButtonWhite from "../../public/assets/Icons/LikeButtonWhite";
import SvgBackVectorWhite from "../../public/assets/Icons/BackVectorWhite";

export default function  EventHeader({ eventImg, openShare}: any) {

  const [LikeButton, setLikeButton] = useState(false)

  function setLiked(){
      setLikeButton(!LikeButton)
  }

  return (
    
    <div
      className={` h-[300px] grid grid-cols-12 place-items-end content-start`}
      style={{
        backgroundImage: `url(${eventImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
     <Link href='/content-discovery' className="col-start-2 mr-6"> <SvgBackVectorWhite height={40} width={40}/> </Link>
      <div className="col-start-11 mr-7" onClick={setLiked}>
      {
                            LikeButton
                            ?
                            <SvgRedHeart width={35} height={53} />
                            :<SvgLikeButtonWhite width={35} height={53} />
                        }
      </div>
      <SVGShare onClick={openShare} className="col-start-12 mr-3 " width={45} height={40} />
    </div>
  );
}
