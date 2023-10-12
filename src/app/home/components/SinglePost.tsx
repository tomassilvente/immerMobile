import Image from "next/image"
import Link from "next/link"

//Icons
import SVGShare from "../../../../public/assets/Icons/shareButton"
import SvgCommentButton from "../../../../public/assets/Icons/CommentButton"
import SvgLikeButtonOrange from "../../../../public/assets/Icons/LikeButtonOrange"

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
                <SvgLikeButtonOrange width={25} height={25}/>
                <p className="font-light ml-3">{postLikes}</p>
                <SvgCommentButton className="ml-20" width={25} height={25}/>
                <p className="font-light ml-3">{postComments}</p>
                <SVGShare className="ml-20"/>
                <p className="font-light ml-3">{postShareds}</p>
            </div>
        </div>
)}