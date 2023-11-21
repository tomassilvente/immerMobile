import Link from "next/link"

type CardProps ={
    title: String,
    image:String,
    views: number,
    link: any
}

export default function VideoCards({title, image, views, link}:CardProps){
    return(
        <Link href={`${link}`} className="h-[140px] w-[140px] rounded-2xl mr-5 flex-none"
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "15%",
                backgroundSize: "cover",
            }}>
                
                    {
                        views
                        ? <p className="text-white text-xs ml-2 mt-[72%]">{title}</p>
                        : <p className="text-white ml-2 mt-[80%]">{title}</p>
                    }
                    {
                        views
                        ? <p className="text-white text-xs ml-2">{views} Views</p>
                        : ''
                    }
           
        </Link>
    )
}