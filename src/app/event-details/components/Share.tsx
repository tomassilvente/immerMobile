import Image from "next/image";
import link from "../../../../public/assets/link-2.svg"
import telegram from '../../../../public/assets/telegram.svg'
import whatsapp from '../../../../public/assets/whatsapp.svg'
import twitter from '../../../../public/assets/twitter.svg'
import instagram from '../../../../public/assets/instagram.svg'
import search from '../../../../public/assets/search.svg'
import data, { shareDataType } from './ShareData'
import Send from './Send'

function contacts(SendData: shareDataType){
    return(
        <Send 
            key={SendData.id} profilePic={SendData.profilePic} name={SendData.name}/>
    )
}

function share(){
    return(
        <div className="h-[60%] align-bottom absolute bottom-0 bg-white w-full overflow-x-hidden">
            <div className="w-[26px] h-[3px] rounded-[2.5px] bg-[#ABABAB] mx-auto my-[16px]"></div>
            <h1 className="text-black font-semibold text-xl pl-4 pt-5 pb-3">Share to</h1>
            <hr />
            <div className="inline-flex justify-between py-[15px] items-center">
                <div className="pl-[16px] flex flex-col items-center">
                    <Image
                        className="rounded-[20px] bg-[#ABABAB] p-[10px]"
                        src={link}
                        alt="copy link"
                        width={46}
                        height={46}
                        priority
                    />
                    <p className="text-[#ABABAB] text-sm">Copy Link</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <Image
                        className="rounded-[20px] bg-gradient-to-t from-[#1FAF38] from-0% to-[#60D669] to-100% p-[10px]"
                        src={whatsapp}
                        alt="copy link"
                        width={46}
                        height={46}
                        priority
                    />
                    <p className="text-[#ABABAB] text-sm">WhatsApp</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <Image
                        className="bg-black rounded-[20px] p-[10px]"
                        src={twitter}
                        alt="Twitter logo"
                        width={46}
                        height={46}
                        priority
                    />
                    <p className="text-[#ABABAB] text-sm">Twitter</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <Image
                        className="rounded-[20px]"
                        src={instagram}
                        alt="Instagram Logo" 
                        width={46}
                        height={46}
                        priority
                    />
                    <p className="text-[#ABABAB] text-sm">Instagram</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <Image
                        className="rounded-[20px]"
                        src={telegram}
                        alt="telegram logo"
                        width={45}
                        height={45}
                        priority
                    />
                    <p className="text-[#ABABAB] text-sm">Telegram</p>
                </div>
                
            </div>
            <hr/>
            <div className="border flex rounded-3xl h-[35px] m-5 mr-8 mt-8 mb-6 pl-[16px]">
                    <Image
                        className=""
                        src={search}
                        alt="copy link"
                        width={16}
                        height={16}
                        priority
                    />
                <input className="text-sm pl-5 w-[100%] text-black" placeholder={'Search '} />
		    </div>
            <div>
                {data.map(contacts)}
            </div>
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
export default share;
