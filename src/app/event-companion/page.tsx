import CompanionHeader from "../../components/EventCompanion/CompanionHeader";
import CompanionDetails from "../../components/EventCompanion/CompanionDetails";
import CompanionRecomendaions from "../../components/EventCompanion/CompanionRecomendations";
//data
import data from "../../../public/data/DemoData.json" // All this data should come as params, including the links or the actions that every button should do
import { MobileLayout } from "../../components/MobileLayout";

const eventCompanion = (): JSX.Element =>{
    return(
        <MobileLayout>
            <CompanionHeader eventImg={data.companionImg}/>
            <CompanionDetails 
                eventDay={data.eventDay} 
                eventName={data.eventCompanionName} 
                eventTime={data.eventTime} 
                eventDescription={data.eventDescription} 
                eventOrganizer={data.eventCompanionOrganizer} 
            />
            <CompanionRecomendaions events={data.events} />
        </MobileLayout>
    )
}
export default eventCompanion
