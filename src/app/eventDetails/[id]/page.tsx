
import Link from "next/link"
//components
import Location from "./components/Location"
import Organized from "./components/Organizer"
import AboutEvent from "./components/AboutEvent"
import EventDetails from "./components/EventDetails"
import EventHeader from "./components/EventHeader"
//Demo Data
import data from "../../../../public/data/DemoData.json" // All this data should come as params, including the links or the actions that every button should do

export default function eventDetail(){ 
    return (
        <div className="h-screen bg-white text-black sm:invisible overflow-scroll">
            <EventHeader eventImg={data.eventImg} />
            <EventDetails eventName={data.eventName} eventDay={data.eventDay} eventPrice={data.eventPrice} eventTime={data.eventTime} eventAvailability={data.eventAvailability}/>
            <Organized eventOrganizer={data.eventOrganizer}/>          
            <AboutEvent profiles={data.profiles} eventDescription={data.eventDescription}/>
            <Location eventLocation={data.eventLocation}/>
            {/* I've been having some trouble with making this button sticked on the screen */}
            <Link
                style={{position: "sticky"}}
                href='/' 
                className="grid shadow-2xl text-center text-2xl bg-primary text-white mt-12 mx-8 py-5 mb-16 rounded-full" 
            >
                Book Now
            </Link>        
        </div>
)}

// ! This is only a momentary function, but it should be work diferently.
export async function getStaticPaths() {
    const eventIds = ["1", "2", "3"]; 

    const paths = eventIds.map((id) => ({
        params: { id: id.toString() },
    }));

    return { paths, fallback: true }; 
}