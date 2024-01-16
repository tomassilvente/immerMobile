import SvgBackVector from "../../../public/assets/Icons/BackVector";
import SvgNewEventButton from "../../../public/assets/Icons/NewEventButton";
import SvgNotification1 from "../../../public/assets/Icons/Notification1";
import SvgShareButtonOrange from "../../../public/assets/Icons/ShareButtonOrange";

import { DesktopLayout } from "../../components/DesktopLayout/SideNavbarAttendee";
import EventDisplay from "../../components/eventListing-Desktop/EventsDisplay";
import SearchBar from "../../components/eventListing-Desktop/SearchBar";
import StatsCard from "../../components/eventListing-Desktop/StatsCard";


export default function eventListing (): JSX.Element {
    return (
        <DesktopLayout>
            <div className="bg-gray-100 pb-10">
                <div className="p-5">
                    <div className="flex">
                        <div className="w-[85%]">
                            <SvgBackVector />
                        </div>
                        <div className="flex ">
                            <SvgNotification1 height={20} width={20} className="ml-8 mt-[1px]"/>
                            <p className="text-primary ml-4 text-l font-semibold"> Notifications</p>
                        </div>
                        
                    </div>
                    <div className="flex mt-8">
                        <p className="w-[88%] font-bold text-xl text-gray-500">My Events</p>
                        <div className="flex ">
                            <SvgShareButtonOrange className="mr-4"/>
                            <SvgNewEventButton />
                        </div>
                    </div>
                </div>
                <div className="m-5 h-[60px]  bg-white rounded-lg">
                    <p className="font-semibold text-lg pt-4 pl-5">Analytics Overview</p>
                </div>
                <div className="flex">
                    <StatsCard description="Tickets Sold" quantity={'11,294'} upgrade={false} percentaje={0.1} period={true}/>
                    <StatsCard description="Total Revenue" quantity={'$100,672'} upgrade={true} percentaje={1.6} period={true}/>
                    <StatsCard description="Events Page Views" quantity={'10,230,294'} upgrade={false} percentaje={0.8} period={true}/>
                    <StatsCard description="Upcoming Events" quantity={'5'} upgrade={null} percentaje={0} period={false}/>
                    <StatsCard description="Past Events" quantity={'4'} upgrade={null} percentaje={0} period={false}/>
                </div>
                <SearchBar />
                <EventDisplay />
            </div>
        </DesktopLayout>
)}