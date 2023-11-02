import Image from "next/image";

type CardProps ={
    title: String,
    price: number,
    image:String,
    stars: number, 
    type:string
}

export default function EventCards({image, title, price, stars, type}: CardProps){
    return(
        <div className="rounded-xl shadow-xl mb-5 w-[220px] flex-none">
            <Image className="h-[175px] rounded-t-xl mb-3" width={220} height={1} src={image} alt={title}/>
            <div className="ml-5">
                <p className="text-primary text-xs">
                    {
                       stars == 1
                       ? '★'
                       : stars == 2
                            ? '★ ★'
                            : stars == 3
                                ? '★ ★ ★'
                                : stars == 4
                                    ? '★ ★ ★ ★'
                                    : stars == 5
                                        ? '★ ★ ★ ★ ★'
                                        : ''
                    }
                </p>
                    <p className="font-light mt-3">{type}</p>
                    <p className="text-xl font-semibold mt-2">{title}</p>
                    <p className="text-xl font-light my-3">${price}</p>
                </div>
        </div>
    )
}