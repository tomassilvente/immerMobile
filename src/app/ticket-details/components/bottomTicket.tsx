import Link from "next/link"
//Icons
import SvgElipseLeft from "../../../../public/assets/Icons/ElipseLeft"
import SvgElipseRigth from "../../../../public/assets/Icons/ElipseRigth"
import SvgTicketLine from "../../../../public/assets/Icons/ticketLine"
export default function BottomTicket(){
    return(
        <>
            <div className="flex">
                <SvgElipseLeft />
                <SvgTicketLine className="mt-6" />
                <SvgTicketLine className="mt-6" />
                <SvgElipseRigth />
            </div>
            <Link
                href='/' 
                className="grid text-center text-2xl bg-primary text-white mx-8 py-5 rounded-full" 
            >
                Download Ticket
            </Link>    
        </>
)}