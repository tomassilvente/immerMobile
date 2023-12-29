import Image from "next/image"
import SvgShareCircles from "../../../../../public/assets/Icons/ShareCircles"
import SvgDownload from "../../../../../public/assets/Icons/Download"
import SvgMoreButton from "../../../../../public/assets/Icons/MoreButton"
import SvgPlayButtonOrange from "../../../../../public/assets/Icons/PlayButtonOrange"
import Link from "next/link"

type EpisodeProps = {
    title :string,
    image :string,
    releaseDay :string,
    duration : number,
    about :string,
    openShare: any
}

export default function Episodes({title, image, duration, releaseDay, about, openShare}: EpisodeProps): JSX.Element{
return(
    <div>
    <Link href='/content-discovery/podcast/single-episode'>
        <div className="mt-5 flex">
            <Image className="rounded-md " src={image} width={70} height={70} alt={'...'} />
            <div className="ml-5">
                <p className="text-lg">{title}</p>
                <p className="font-light text-xs">{about}</p>
            </div>
        </div>
        <p className="font-light text-sm text-gray-500 mt-3">{releaseDay} | {duration}min</p>
    </Link>
        <div className="flex mt-4">
            <SvgShareCircles onClick={openShare} width={25} height={25}/>
            <SvgDownload className="ml-2" width={26} height={26}/>
            <SvgMoreButton className="ml-2" width={22} height={22}/>
            <SvgPlayButtonOrange className="ml-[320px]" width={23} height={23}/>
        </div>
        <hr className="mt-3"/>
    </div>
)
}