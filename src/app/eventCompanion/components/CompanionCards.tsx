import Link from "next/link"

type CategoryCardsProps ={
    img: string,
    social:string,
    link:string,
    w:number,
    h:number,
}

export default function CompanionCards({img, w, h, social, link} : CategoryCardsProps) {

    return(
    <Link href={`${link}`}>
        <div key={social}
        className="rounded-xl text-center mx-2 grid content-end rounded-b-xl"
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <p className="text-white text-xl bg-black bg-opacity-40  rounded-b-xl">{social}</p>
        </div>
    </Link>
)}