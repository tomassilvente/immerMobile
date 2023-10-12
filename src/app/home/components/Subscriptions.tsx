import Image from "next/image"
import Link from "next/link"

export default function Subscriptions({stories}:any){
    return(
    <div className="mt-10">
                <p className="text-2xl font-semibold ml-5">Subscriptions</p>
                <div className="mt-8 flex overflow-y-scroll px-5">
                    {stories.map(story =>(
                        <Link className="relative text-center border-primary flex-none rounded-full border-[4px] mr-5 mb-20" href='/'>
                            <p style={{
                                        display:
                                            story.live
                                            ? "absolute"
                                            : "none"
                                    }}
                                className="absolute mt-24 ml-5 text-center px-5 bg-primary text-white rounded-full z-10" >
                                LIVE
                            </p>
                            <Image className={`border-white border-[8px] rounded-full h-[110px]`} alt={'...'} src={story.profilePic} width={110} height={50} />
                            <p className="absolute mt-5 ml-2">{story.user}</p>
                        </Link>
                        
                    ))}
                </div>
            </div>
)}