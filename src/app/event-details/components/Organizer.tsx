import Image from "next/image"
import Link from "next/link"
//Icons
import SvgFollowButton from "../../../../public/assets/Icons/FollowButton"
import SvgMessageButton from "../../../../public/assets/Icons/MessageButton"

export default function Organized({eventOrganizer} : any) {

    return(
        <div className="bg-gray-100 py-5 px-3 grid grid-cols-6">
            <h1 className="text-2xl col-start-1 col-end-6">Organized by</h1>
            <Link href='/' className="mt-5 ml-2 col-start-1"><Image className="rounded-full h-[60px] border-[3px] border-primary " alt={'...'} src={'../assets/profilePicExample.jpeg'} width={60} height={20} /></Link>
            <div className="mt-5 text-lg col-start-2 col-end-4">
                <p>{eventOrganizer}</p>
                <span className="text-sm font-light text-[#767676]">Posted on 12 No 2023</span>
            </div>
            <Link href='/' className="col-start-5 mt-6"><SvgFollowButton width={100} height={46}/></Link>
            <Link href='/' className="col-start-6 mt-6 ml-6"><SvgMessageButton width={44} height={46}/></Link>
        </div>
)}
