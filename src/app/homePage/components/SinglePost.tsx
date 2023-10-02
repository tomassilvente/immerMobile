import Image from "next/image"
import Link from "next/link"

export default function SinglePost({profilePic, eventOrganizer, postLocation, postDate, post, postLikes, postComments, postShareds}:any){
    return(
        <div className="m-8">
            <div className="grid grid-cols-12">
                <Link className="border-primary rounded-full border-[4px] col-start-1 col-end-3 mr-7" href='/'>
                    <Image className="border-white border-[3px] rounded-full" src={profilePic} width={60} height={50} alt={'...'} />
                </Link>
                <div className=" text-lg col-start-3 col-end-11">
                    <p>{eventOrganizer}</p>
                    <span className="text-regular font-light text-[#767676]">{postLocation}</span>
                </div>
                <span className="font-light text-[#767676] col-start-11">{postDate}</span>
            </div>
            <p className="mt-6 font-light text-lg text-[#767676]">{post}</p>
            <div className="flex mt-6">
                <Image src={'../../assets/likeButton-orange.svg'} alt={'...'} width={22} height={22}/>
                <p className="font-light ml-3">{postLikes}</p>
                <Image className="ml-20" src={'../../assets/commentButton.svg'} alt={'...'} width={22} height={22}/>
                <p className="font-light ml-3">{postComments}</p>
                <Image className="ml-20" src={'../../assets/shareButton.svg'} alt={'...'} width={22} height={22}/>
                <p className="font-light ml-3">{postShareds}</p>
            </div>
        </div>
)}