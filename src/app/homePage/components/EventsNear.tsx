import EventsNearCards from "./EventsNearCards";
import DemoData from "../../../../public/data/DemoData.json"

export default function EventsNear(){
    return(
        <div className="mt-">
            <p className="text-2xl font-semibold mt-5 ml-5">Events Near You</p>
            <div className="p-5 mb-12">
                <EventsNearCards eventImg={DemoData.eventImg} eventOrganizer={DemoData.eventOrganizer} eventDay={DemoData.eventDay} eventLocation={DemoData.eventLocation} eventTime={DemoData.eventTime} eventPrice={DemoData.eventPrice}/>
                <EventsNearCards eventImg={DemoData.eventImg} eventOrganizer={DemoData.eventOrganizer} eventDay={DemoData.eventDay} eventLocation={DemoData.eventLocation} eventTime={DemoData.eventTime} eventPrice={DemoData.eventPrice}/>
                <EventsNearCards eventImg={DemoData.eventImg} eventOrganizer={DemoData.eventOrganizer} eventDay={DemoData.eventDay} eventLocation={DemoData.eventLocation} eventTime={DemoData.eventTime} eventPrice={DemoData.eventPrice}/>
            </div>
        </div>
)}