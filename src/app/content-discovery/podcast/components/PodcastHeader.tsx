import Link from "next/link"
//Icons
import SvgMoreButton from "../../../../../public/assets/Icons/MoreButton"
import SvgBackButton from "../../../../../public/assets/Icons/BackButton"


export default function PodcastHeader({eventImg, eventTitle, listeners, category}: any){
    return(
        <div className="h-[350px] grid grid-cols-12 place-items-end content-start"
            style={{
                backgroundImage: `url(${eventImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <Link href='/content-discovery' className="col-start-2 mr-5"> <SvgBackButton height={45} width={45}/> </Link>
                <Link href='/' className="col-start-12 mt-4 mr-2 "><SvgMoreButton width={40} height={40}/></Link>
                <div className="col-start-1 col-end-6 mt-[220px]  text-white">
                    <p className="text-3xl">{eventTitle}</p>
                    <p className="text-sm">{listeners} listeners | {category}</p>
                </div>
                
                <button  className="text-sm col-start-10 col-end-12 w-[100%] text-center  bg-primary text-white p-2 rounded-md"> Follow  </button>
            </div>
    )
}