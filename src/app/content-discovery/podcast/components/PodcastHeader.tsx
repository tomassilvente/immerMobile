import Link from "next/link"
//Icons
import SvgOptionsHorizontal from "../../../../../public/assets/Icons/OptionsHorizontal"
import SvgBackVectorWhite from "../../../../../public/assets/Icons/BackVectorWhite"


export default function PodcastHeader({eventImg, eventTitle, listeners, category}: any): JSX.Element{
    return(
        <div className="h-[350px] grid grid-cols-12 place-items-end content-start"
            style={{
                backgroundImage: `url(${eventImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <Link href='/content-discovery' className="col-start-2 mr-9"> <SvgBackVectorWhite height={52} width={30}/> </Link>
                <Link href='/' className="col-start-12 mt-6 mr-4 "><SvgOptionsHorizontal width={35} height={40}/></Link>
                <div className="col-start-1 col-end-6 mt-[220px]  text-white">
                    <p className="text-3xl">{eventTitle}</p>
                    <p className="text-sm">{listeners} listeners | {category}</p>
                </div>
                <button  className="text-sm col-start-10 col-end-12 w-[100%] text-center  bg-primary text-white p-2 rounded-md"> Follow  </button>
            </div>
    )
}