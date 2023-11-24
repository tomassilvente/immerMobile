"use client"
import Image from "next/image";
import link from "../../../../public/assets/link-2.svg"
import telegram from '../../../../public/assets/telegram.svg'
import whatsapp from '../../../../public/assets/whatsapp.svg'
import twitter from '../../../../public/assets/twitter.svg'
import instagram from '../../../../public/assets/instagram.svg'

function AppOptions() {
  return (
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
  )
}

export default AppOptions
