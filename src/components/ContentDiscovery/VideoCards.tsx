import Image from "next/image"
type CardProps ={
    title: String,
    days: Number,
    image:String,
    views: string
}

export default function VideoCards({title, image, days, views}:CardProps){
    return(
        <div className="h-[250px] w-[220px] rounded-2xl mr-5 flex-none border shadow-lg mb-3">
            <Image className="rounded-t-2xl h-[150px]" src={`${image}`} width={240} height={0} alt={'...'}/>
                <div className="mt-4 ml-4">
                    <p className="text-lg">{title}</p>
                    <p className="font-light text-gray-500 text-sm mt-3">{views} | {`${days}`} days ago</p>
                </div>
        </div>
    )
}