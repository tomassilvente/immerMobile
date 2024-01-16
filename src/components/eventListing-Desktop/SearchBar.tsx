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
        <div className="flex">
            <div className="ml-2">
                <button className="border-primary shadow-sm w-[85%] mt-1 flex border rounded-md h-[35px] mx-4">
                <p className="ml-3 mt-[9px] text-xs ">Filter By</p>
                <SvgFilterIcon className="ml-[60px] mt-2" height={20} width={20} />
                </button>
            </div>
            <div className="">
                <button className="border-primary shadow-sm w-[85%] mt-1 flex border rounded-md h-[35px] mx-4">
                <p className="ml-3 mt-[9px] text-xs ">Sort By</p>
                <SvgFilterIcon className="ml-[60px] mt-2" height={20} width={20} />
                </button>
            </div>
        </div>
            <div className="ml-3 mt-[1px] h-[40px] flex border border-primary rounded-lg">
                <button className=" bg-primary border-white shadow-sm px-8 border rounded-md text-white">List</button>
                <button className=" border-white shadow-sm border px-3 rounded-md text-primary">Calendar</button>
            </div>
        </div>
)}