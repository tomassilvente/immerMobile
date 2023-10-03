// styles
import styles from "./styles.module.css";

// components
import { MobileLayout } from "../../components/MobileLayout";
import Image from "next/image";

//data
import { ticketData } from "./ticketData";

function Home() {
    return (
        <MobileLayout className="bg-bgTicket px-2 text-[#333]">
            <div>
                <div className="flex justify-between items-center py-5">
                    <button className="action-button">
                       <img src="./assets/chevron-left.svg" alt="back" /> 
                    </button>
                    <h1 className="font-bold text-lg">Your Ticket</h1>
                    <button className="action-button">
                        <img src="./assets/share.svg" alt="share" />
                    </button>
                </div>
                <div className="bg-[#fff] rounded-lg py-5">
                    <div id="barcode">
                        <Image className="h-full w-full px-5" src={ticketData.ticketDetails.barcode} alt="barcode" width={0} height={0} />
                    </div>
                    <div id="details" className="py-5 text-sm px-5">
                        <h2 className="font-semibold text-lg">{ticketData.ticketDetails.eventName}</h2>
                        <p className="text-sm">{ticketData.ticketDetails.location}</p>
                        <div className="subdetail-1 flexed gap-5 pt-3">
                            <div className="flexed">
                                <img src="./assets/calendar.svg" alt="calendar" />
                                <span>{ticketData.ticketDetails.date}</span>
                            </div>
                            <div className="flexed">
                                <img src="./assets/Ticket.svg" alt="ticket" />
                                <span>Row {ticketData.ticketDetails.row}</span>
                            </div>
                        </div>
                        <div className="subdetail-2 flexed gap-5 pb-3">
                            <div className="flexed">
                                <img src="./assets/clock.svg" alt="clock" />
                                <span>{ticketData.ticketDetails.time}</span>
                            </div>
                            <div className="flexed">
                                <img src="./assets/Profile-icon.svg" alt="profile" />
                                <span>Seat {ticketData.ticketDetails.seat}</span>
                            </div>
                        </div>
                        <div>
                            <span className="opacity-50">Organizer</span>
                            <p>{ticketData.ticketDetails.organizer}</p>
                        </div>
                        <div className="name-details flexed justify-between py-2">
                            <div>
                                <span className="opacity-50">Full Name</span>
                                <p>{ticketData.ticketDetails.fullName}</p>
                            </div>
                            <div>
                                <span className="opacity-50">Email</span>
                                <p>{ticketData.ticketDetails.email}</p>
                             </div>
                        </div>
                </div>
                <span className="flex w-full justify-between items-center m-auto py-5 ">
                    <span className="bg-bgTicket relative right-2 w-5 h-5 flex rounded-full"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="242" height="2" viewBox="0 0 242 2" fill="none">
                    <path opacity="0.5" d="M0.0078125 0.904175H241.293" stroke="#ABABAB" stroke-width="0.849596" stroke-dasharray="4.25 4.25"/>
                    </svg>
                    <span className="bg-bgTicket relative left-2 w-5 h-5 flex  rounded-full"></span>
                </span>
                <div className="w-full px-5">
                    <button className="rounded-3xl text-white font-bold bg-[#FF6C00] w-full px-8 py-3">
                        Download Ticket
                    </button>
                </div>
            </div>
            </div>
        </MobileLayout>
    )
};

export default Home;