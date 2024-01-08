'use client'
import React from 'react'
import SvgCopyLink from "../../../public/assets/Icons/CopyLink";
import SvgWhatsApp from "../../../public/assets/Icons/WhatsApp";
import SvgTwitter from "../../../public/assets/Icons/Twitter";
import Image from "next/image";

function AppOptions (): JSX.Element {
  return (
    <div className="inline-flex justify-between py-[15px] items-center">
                <div className="pl-[16px] flex flex-col items-center">
                    <SvgCopyLink
                        className="rounded-[20px] bg-[#ABABAB] p-[10px]"
                        width={46}
                        height={46}
                    />
                    <p className="text-[#ABABAB] text-sm">Copy Link</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <SvgWhatsApp
                        className="rounded-[20px] bg-gradient-to-t from-[#1FAF38] from-0% to-[#60D669] to-100% p-[10px]"
                        width={46}
                        height={46}
                    />
                    <p className="text-[#ABABAB] text-sm">WhatsApp</p>
                </div>
                <div className="pl-[15px] flex flex-col items-center">
                    <SvgTwitter
                        className="bg-black rounded-[20px] p-[10px]"
                        width={46}
                        height={46}
                    />
                    <p className="text-[#ABABAB] text-sm">Twitter</p>
                </div>
                <div>
                    <Image
                        alt= ''
                        src='/assets/instagram.png'
                        className="rounded-[20px]"
                        width={46}
                        height={46}
                       
                    />
                    <p className="text-[#ABABAB] text-sm">Instagram</p>
                </div>
    </div>
  )
}

export default AppOptions
