import Link from "next/link"
import Image from "next/image"

export default function EventHeader({eventImg}: any){
    return(
        <div className="h-[40%] grid grid-cols-12 place-items-end content-start"
                style={{
                    backgroundImage: `url(${eventImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <Link href='/' className="col-start-2 mr-10  w-[45px]"><Image alt={'...'}  src={'../../assets/mobile/mobile-icons/backButton.svg'} width={45} height={45}/></Link>
                    <Link href='/' className="col-start-11 mt-4 mr-10 w-[45px]"><Image alt={'...'}  src={'../../assets/mobile/mobile-icons/likeButton.svg'} width={45} height={45}/></Link>
                    <Link href='/' className="col-start-12 mr-8 w-[45px]"><Image alt={'...'}  src={'../../assets/mobile/mobile-icons/shareButton.svg'} width={45} height={45}/></Link>
            </div>
    )
}