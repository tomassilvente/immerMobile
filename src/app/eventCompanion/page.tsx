import CompanionHeader from "./components/CompanionHeader";
import CompanionDetails from "./components/CompaionDetails";
import CompanionRecomendaions from "./components/CompanionRecomendations";
import data from "../../../public/data/DemoData.json" // All this data should come as params, including the links or the actions that every button should do

const eventCompanion = () =>{
    return(
        <div className="h-screen bg-white text-black sm:invisible overflow-scroll">
            <CompanionHeader eventImg={data.companionImg}/>
            <CompanionDetails eventDay={data.eventDay} eventName={data.eventCompanionName} eventTime={data.eventTime} eventDescription={data.eventDescription} eventOrganizer={data.eventCompanionOrganizer} />
            <CompanionRecomendaions events={data.events} />
        </div>
    )
}
export default eventCompanion