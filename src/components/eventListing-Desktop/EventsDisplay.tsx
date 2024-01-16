import EventCard from "./EventCard";

export default function EventDisplay (): JSX.Element {
    return (
        <div>
            <div className="flex bg-white h-[60px] m-5 p-5 rounded-lg">
                <input className="w-[20%] mt-1 ml-2" type="checkbox" />
                <p className="w-[35%]">Event</p>
                <p className="w-[35%]">Tickets Sold</p>
                <p className="w-[20%]">Revenue</p>
                <p className="">Status</p>
            </div>
            <EventCard name='Blue Music Festival' time=" --- " place=" --- " ticketsSold={0} totalTickets={20000} price={0} publishment="Unpublished" people={3} pic={null} date={null}/>
            <EventCard name='Blue Music Festival' time=" Friday, 6:00PM - 11:00PM " place=" 9PM Venue, Houston TX " ticketsSold={50} totalTickets={500} price={485} publishment="OnGoing" people={0} pic={null} date={'NOV 15'}/>
            <EventCard name='Festival of Art Print' time=" Friday, 10:00AM - 5:00PM " place=" TBD Park, Houston TX " ticketsSold={9500} totalTickets={10000} price={59234} publishment="Published" people={0} pic={null} date={null}/>
            <EventCard name='Blue Music Festival' time=" Friday, 6:00PM - 11:00PM" place=" TBD Park, Houston TX " ticketsSold={3000} totalTickets={20000} price={95000} publishment="Done" people={3} pic={null} date={null}/>
        </div>
)}