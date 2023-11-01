type CardProps ={
    title: String,
    price: Number,
    image:String
}

export default function VerticalCards({title, price, image}:CardProps){
    return(
        <div className="h-[250px] w-[120px] rounded-2xl mr-5 flex-none"
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "15%",
                backgroundSize: "cover",
            }}>
                <div className="text-white text-xs ml-2 mt-[175%]">
                    <p >{title}</p>
                    <p>${price}</p>
                </div>
        </div>
    )
}