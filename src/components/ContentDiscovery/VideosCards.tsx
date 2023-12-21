import Image from "next/image";
import SvgMoreButton from "../../../public/assets/Icons/MoreButton";
import Link from "next/link";
import SvgOptions from "../../../public/assets/Icons/Options";

type CardProps ={
    userImage: string,
    title: String,
    price: number,
    image:String,
    views:string,
    days: number
}

export default function VideosCards({image, title, views, days}: CardProps){
    return(
        <Link href={'/content-discovery/video'}>
            <div className="rounded-xl mr-5 shadow-lg mb-5 w-[350px] flex-none">
                <Image className="h-[225px] rounded-t-xl mb-3" width={350} height={1} src={image} alt={title}/>
                <div className="ml-5 flex">
                    <div>
                        <div className="flex"> 
                            <p className="text-xl font-light">{title}</p>
                            <SvgOptions className="ml-[190px] mt-2" height={20} width={20} />
                        </div>
                        <div className="flex my-3">    
                            <p className="font-light text-gray-500">{views} views | {days} days ago</p>
                            <p className="text-primary ml-12">★ ★ ★ ★ ★ </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}