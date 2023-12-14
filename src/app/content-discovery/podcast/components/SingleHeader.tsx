import Link from "next/link"
//Icons
import SvgMoreButton from "../../../../../public/assets/Icons/MoreButton"
import SvgBackButton from "../../../../../public/assets/Icons/BackButton"
import SvgShareCircles from "../../../../../public/assets/Icons/ShareCircles"
import SvgDownload from "../../../../../public/assets/Icons/Download"
import SvgPlayButtonOrange from "../../../../../public/assets/Icons/PlayButtonOrange"


export default function SingleHeader({eventImg, eventTitle, releaseDay, duration, openShare}: any){
    return(
        <div className="h-[350px] grid grid-cols-12 place-items-end content-start"
            style={{
                backgroundImage: `url(${eventImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <Link href='/content-discovery/podcast' className="col-start-2 mr-5 mt-4"> <SvgBackButton height={45} width={45}/></Link>
                <div className="col-start-1 col-end-6 mt-[170px]  text-white">
                    <p className="text-3xl">{eventTitle}</p>
                    <p className="text-sm font-light">{releaseDay} | {duration} min</p>
                    <div className="flex mt-5">
                        <SvgShareCircles onClick={openShare} width={35} height={35}/>
                        <SvgDownload className="ml-3" width={35} height={35}/>
                        <SvgMoreButton className="ml-3" width={35} height={35}/>
                        <SvgPlayButtonOrange className="absolute ml-[410px]" width={35} height={35}/>
                    </div>
                </div>
            </div>
    )
}