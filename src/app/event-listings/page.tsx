//Layout
import { DesktopLayout } from "../../components/DesktopLayout/SideNavbarAttendee";
//Icons
import SvgBackVector from "../../../public/assets/Icons/BackVector";
import SvgDownloadOrange from "../../../public/assets/Icons/DownloadOrange";
import SvgNewEventButton from "../../../public/assets/Icons/NewEventButton";
import SvgNextVector from "../../../public/assets/Icons/NextVector";
import SvgNotification1 from "../../../public/assets/Icons/Notification1";
import SvgShareButtonOrange from "../../../public/assets/Icons/ShareButtonOrange";
//Components
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
                <div className="flex mx-5 space-x-[3%]">
                    <StatsCard description="Tickets Sold" quantity={'11,294'} upgrade={false} percentaje={0.1} period={true}/>
                    <StatsCard description="Total Revenue" quantity={'$100,672'} upgrade={true} percentaje={1.6} period={true}/>
                    <StatsCard description="Events Page Views" quantity={'10,230,294'} upgrade={false} percentaje={0.8} period={true}/>
                    <StatsCard description="Upcoming Events" quantity={'5'} upgrade={null} percentaje={0} period={false}/>
                    <StatsCard description="Past Events" quantity={'4'} upgrade={null} percentaje={0} period={false}/>
                </div>
                <SearchBar />
                <EventDisplay />
                <div className="flex mx-5">
                    <div className="flex w-[15%]">
                        <p className="text-sm font-light text-gray-500 mt-2">Events per page</p>
                        <select className="border border-primary ml-[15px] h-[40px] bg-white font-light text-primary">
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div className="flex ml-[25%] w-[28%] mr-[25%]">
                        <SvgBackVector height={14} width={14} className="mt-4 mr-[3%]"/>
                        <div className="flex text-gray-500 font-semibold ">
                            <button className="bg-primary text-white w-[35px] pt-1 text-center rounded-lg">1</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">2</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">3</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">4</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">5</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">...</button>
                            <button className=" w-[35px] pt-1 text-center rounded-lg">8</button>
                        </div>
                        <SvgNextVector height={12} width={12} className="mt-4 ml-[3%]"/>
                    </div>
                    <SvgDownloadOrange width={14} height={14} className="mt-3"/>
                    <p className="font-light text-primary text-xs mt-3 ml-2">CVS Export</p>
                </div>
            </div>
        </DesktopLayout>
)}