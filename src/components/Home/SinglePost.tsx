import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Icons
import SVGShare from '../../../public/assets/Icons/shareButton'
import SvgCommentButton from '../../../public/assets/Icons/CommentButton'
import SvgLikeButtonOrange from '../../../public/assets/Icons/LikeButtonOrange'

export default function SinglePost ({
  profilePic,
  eventOrganizer,
  postLocation,
  postDate,
  post,
  postLikes,
  postComments,
  postShareds
}: any): JSX.Element {
  return (
    <div className="m-4">
      <div className="grid grid-cols-12">
        <Link
          className="border-primary rounded-full border-[3px] col-start-1 col-end-3 ml-2 mr-4"
          href="/"
        >
          <Image
            className="border-white border-[2px] rounded-full"
            src={profilePic}
            width={50}
            height={50}
            alt={'...'}
          />
        </Link>
        <div className=" text- col-start-3 col-end-11 ml-3">
          <p>{eventOrganizer}</p>
          <span className="text-regular font-light text-[#767676]">
            {postLocation}
          </span>
        </div>
        <span className="font-light text-[#767676] col-start-11">
          {postDate}
        </span>
      </div>
      <p className="mt-6 font-light mx-4 text-[#767676]">{post}</p>
      <div className="flex font-light mx-5 mt-6">
        <SvgLikeButtonOrange width={20} height={20} />
        <p className=" ml-3">{postLikes}</p>
        <SvgCommentButton className="ml-20" width={20} height={20} />
        <p className="ml-3">{postComments}</p>
        <SVGShare className="ml-20" width={28} height={28}/>
        <p className=" ml-3">{postShareds}</p>
      </div>
    </div>
  )
}
