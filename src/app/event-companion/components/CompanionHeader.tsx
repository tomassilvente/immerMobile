import Link from "next/link"
//Icons
import SvgQr from "../../../../public/assets/Icons/Qr"
import SvgNotification from "../../../../public/assets/Icons/Notification"

export default function CompanionHeader({eventImg}: any){
    return(
        <div className="h-[40%] grid grid-cols-12 place-items-end content-start"
            style={{
                backgroundImage: `url(${eventImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <Link href='/' className="col-start-11 mt-4 mr-6 "><SvgQr width={45} height={45}/></Link>
                <Link href='/' className="col-start-12 mr-5 "><SvgNotification width={45} height={45}/></Link>
            </div>
    )
}