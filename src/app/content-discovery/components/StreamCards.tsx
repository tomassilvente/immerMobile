import Image from "next/image";
import SvgMoreButton from "../../../../public/assets/Icons/MoreButton";
import Link from "next/link";

type CardProps ={
    userImage: string,
    title: String,
    price: number,
    image:String,
    type:string
}

export default function StreamCards({userImage, image, title, type}: CardProps){
    return(
        <Link href={'/content-discovery/live-stream'}>
            <div className="rounded-xl mr-5 shadow-lg mb-5 w-[320px] flex-none">
                <Image className="h-[225px] rounded-t-xl mb-3" width={320} height={1} src={image} alt={title}/>
                <div className="ml-5 flex">
                    <Image className="h-[45px] w-[45px] mt-3 mr-5" height={45} width={45} src={userImage} alt='..'/>
                    <div>
                        <p className="text-xl font-semibold">{title}</p>
                        <p className="font-light mt-1 mb-4"> LIVE: {type} </p>
                    </div>
                    <SvgMoreButton height={35} width={35} />
                </div>
            </div>
        </Link>
    )
}