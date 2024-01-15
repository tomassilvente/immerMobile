'use client'
import Link from 'next/link'
import { MobileLayout } from '../../../components/MobileLayout'
import Image from 'next/image'
import DemoData from '../../../../public/data/DemoData.json'
import React, { useState } from 'react'
import SvgRedHeart from '../../../../public/assets/Icons/RedHeart'
import SvgWhiteCommentButton from '../../../../public/assets/Icons/WhiteCommentButton'
import SvgLikeButtonWhite from '../../../../public/assets/Icons/LikeButtonWhite'
import SvgShareCirclesWhite from '../../../../public/assets/Icons/ShareCirclesWhite'
import Share from '../../../components/EventDetails/Share'
import Comments from '../../../components/_common/components/Comments'
import SvgBackVectorWhite from '../../../../public/assets/Icons/BackVectorWhite'
import SvgFollowedButton from '../../../../public/assets/Icons/FollowedButton'
import SvgMagnify from '../../../../public/assets/Icons/Magnify'
import SvgMoreButton from '../../../../public/assets/Icons/MoreButton'
import Settings from '../../../components/_common/components/Settings'
import { State } from '../../../types/content-discovery.interfaces'

export default function Reels(): JSX.Element {
  const [state, setState] = useState<State>({
    commentOpen: false,
    shareOpen: false,
    likeButton: false,
    follow: false,
    settingsOpen: false
  });

  const toggleState = (key: string) => {
    setState(prevState => ({ ...prevState, [key]: !prevState[key] }));
  }


  return (
    <MobileLayout>
      <div className="absolute flex mt-14 ">
        <Link href={'/content-discovery'}><SvgBackVectorWhite width={35} height={35} className="ml-2" /></Link>
        <p className="text-white text-xl font-light ml-[140px]">Takes/Reels</p>
        <SvgMagnify width={20} height={25} className="ml-[120px]" />
        <SvgMoreButton onClick={() => toggleState('settingsOpen')} width={25} height={25} className="ml-[15px]" />
      </div>
      <div className="absolute flex mt-[715px] text-white">
        <Link
          className="rounded-full mx-5 mt-[120px]"
          href="/"
        >
          <Image
            className="border-white border-[2px] rounded-full"
            src={DemoData.profiles[0].pic}
            width={50}
            height={50}
            alt={'...'}
          />
        </Link>
        <div className=" mt-[135px]">
          <p>{DemoData.eventOrganizer}</p>
        </div>
        {state.follow
          ? <SvgFollowedButton width={70} height={35} className="hover:cursor-pointer text-sm w-[70px] text-center mt-[130px] ml-[28px]" onClick={() => toggleState('follow')} />
          : <button onClick={() => toggleState('follow')} className="text-sm w-[70px] text-center mt-[130px] h-[35px] bg-primary text-white rounded-md ml-[28px]"> Follow  </button>
        }
        <div className="ml-[140px] text-center">
          <div onClick={() => toggleState('likeButton')}>
            {state.likeButton
              ? <>
                <SvgRedHeart width={40} height={40} />
                <p className="">577</p>
              </>
              : <>
                <SvgLikeButtonWhite width={40} height={40} />
                <p className=""> 576</p>
              </>
            }
          </div>
          <SvgWhiteCommentButton onClick={() => toggleState('commentOpen')} width={40} height={40} />
          <p className="text-center">33</p>
          <SvgShareCirclesWhite className="ml-[4px] mt-[2px]" onClick={() => toggleState('shareOpen')} width={32} height={40} />
        </div>
      </div>
      <div className="bg-[#000000d8]  items-center">
        <video width="480" className="w-[480px] h-[950px]" controls>
          <source
            src="/assets/TB.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {state.shareOpen && (
        <div className="bg-[#000000d8]">
          <Share openShare={() => toggleState('shareOpen')} />
        </div>
      )}
      {state.commentOpen && (
        <div className="bg-[#000000d8]">
          <Comments openComments={() => toggleState('commentOpen')} />
        </div>
      )}
      {state.settingsOpen && (
        <div className="bg-[#000000d8]">
          <Settings openSettings={() => toggleState('settingsOpen')} />
        </div>
      )}
    </MobileLayout>
  )
}