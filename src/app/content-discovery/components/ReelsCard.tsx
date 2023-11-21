import SvgPlayButton from "../../../../public/assets/Icons/PlayIcon"

type CardProps ={
    image:String,
    views: string
}

export default function ReelsCards({image, views}: CardProps){
    return(
        <div className="h-[280px] w-[140px] mb-1 flex place-items-end content-start text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            
            <SvgPlayButton width={15} className="mb-2 ml-3"/>
           <p className="font-light mb-[4px] ml-1">{views}</p>
        </div>
    )
}