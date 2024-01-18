import SvgFilterIcon from "../../../public/assets/Icons/FilterIcon";
import SvgMagnify from "../../../public/assets/Icons/Magnify";

export default function SearchBar (): JSX.Element {
    return (
        <div className="flex bg-white m-5 h-[60px] rounded-xl pl-4 pt-2">
            <div className="w-[18%]">
                <p className="text-lg font-semibold">Event Listing</p>
                <p className="text-xs font-light text-gray-500"> 5 Events </p>
            </div>
            <div className="border flex rounded-md mt-1 h-[35px] w-[35%]">
                <SvgMagnify className="mt-2 ml-[10px] " width={15} height={20} />
                <input className="text-sm pl-5 w-[100%]" placeholder='Search for an event..' />
            </div>
            <div className="flex w-[34%] space-x-[5%]">
                <div className="ml-2 w-[40%]">
                    <button className="border-primary shadow-sm w-[100%] mt-1 flex border rounded-md h-[35px] mx-4">
                    <p className=" mt-[9px] text-xs w-[70%] text-start ml-[5%]">Filter By</p>
                    <SvgFilterIcon className="w-[25%] mt-2" height={20} width={20} />
                    </button>
                </div>
                <div className="w-[40%]">
                    <button className="border-primary shadow-sm w-[100%] mt-1 flex border rounded-md h-[35px] mx-4">
                    <p className="mt-[9px] text-xs w-[70%] text-start ml-[5%]">Sort By</p>
                    <SvgFilterIcon className="w-[25%] mt-2" height={20} width={20} />
                    </button>
                </div>
            </div>
            <div className="ml-3 mt-[1px] h-[40px] flex border border-primary rounded-lg mr-2">
                <button className=" bg-primary border-white shadow-sm px-8 border rounded-md text-white">List</button>
                <button className=" border-white shadow-sm border px-3 rounded-md text-primary">Calendar</button>
            </div>
        </div>
)}