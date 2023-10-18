//Icons
import SvgBackButton from "../../../../public/assets/Icons/BackButton"
import SvgLikeButton from "../../../../public/assets/Icons/LikeButton"
import SVGShare from "../../../../public/assets/Icons/shareButton"
import DemoData from "../../../../public/data/DemoData.json"

export default function EventHeader({eventImg, setShareOpen}: any){
    return(
        <>
        <div className="h-[40%] m-5 grid grid-cols-12 place-items-end content-start "
                style={{
                    backgroundImage: `url(${eventImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                    <SvgBackButton className="col-start-2 mr-10 "  width={45} height={45}/>
                    <p className="text-center font-semibold text-xl col-start-4 col-end-9 mb-3 mr-6" >{DemoData.eventName}</p>
                   <SvgLikeButton className="col-start-11 mt-4 mr-10 " width={45} height={45} />
                   <SVGShare className="col-start-12 mr-5 " width={45} height={45} onClick={setShareOpen}/>
        <div className="col-start-2 mt-[375%]">
            {
                DemoData.DemoTicketLocation.map(ticket=>(
                    <div className="flex ml-14">
                        <div className="h-[10px] w-[20px] mb-3"
                            style={{backgroundColor: ticket.Color}}> 
                        </div>
                        <p className="ml-1 text-xs">
                            {ticket.Location}
                        </p>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}