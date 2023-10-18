import Header from "./components/Header"
import TicketSelection from "./components/TicketSelection"

export default function discovery(){

    return(
        <div className="h-screen bg-black text-white sm:invisible overflow-scroll">
            <Header eventImg={'./assets/stadium.png'}/>
            <TicketSelection />
        </div>
    )}
