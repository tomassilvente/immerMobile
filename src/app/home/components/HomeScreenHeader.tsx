//Icons
import SvgLocationLight from "../../../../public/assets/Icons/LocationLight"
import SvgNotification1 from "../../../../public/assets/Icons/Notification1"
import SvgMagnify from "../../../../public/assets/Icons/Magnify"

type homeScreenProps ={
    location: string
}

const notifications = 2

export default function HomeScreenHeader({location}:homeScreenProps){
    return(
        <>
            <div className="grid grid-cols-6 m-5 mt-10">
                <div className="col-start-1 col-end-4 flex">
                    <SvgLocationLight width={25} height={25}/>
                    <p className="ml-2">{location}</p>
                </div>
                <div className="col-start-6 ml-12">
                    <div className="relative">
                        <p style={{
                            display:
                                notifications>0
                                ? 'absolute'
                                : 'none'
                        }}
                        className="bg-[#ff2a2a] absolute text-center rounded-full ml-3 h-[16px] w-[16px] text-xs text-white">
                            {notifications}
                        </p>
                        <SvgNotification1 width={25} height={25}/>
                    </div>
                </div>
            </div>
            <div className="border flex rounded-3xl h-[40px] m-5 mr-8 mt-10 pl-[20px]">
                <SvgMagnify className="mt-2" width={15} height={20} />
                <input className="text-sm pl-5 w-[100%]" placeholder={'Search for arttistts, venues and evens'} />
		    </div>
        </>
)}