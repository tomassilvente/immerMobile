import DemoData from '../../../../public/data/DemoData.json'
import RecommendedCards from "./RecommendedCards"

export default function HomePageHeader(){
return(
    <div className="">
        <p className="text-2xl my-5 font-semibold ml-5">Recommended</p>
        <div className="flex overflow-y-scroll p-5">
            <RecommendedCards eventDay={DemoData.eventDay} eventLocation={DemoData.eventLocation} eventTime={DemoData.eventTime} eventImg={DemoData.eventImg} />
            <RecommendedCards eventDay={DemoData.eventDay} eventLocation={DemoData.eventLocation} eventTime={DemoData.eventTime} eventImg={DemoData.eventImg} />
        </div>
    </div>
)}