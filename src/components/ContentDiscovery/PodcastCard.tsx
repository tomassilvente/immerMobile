import React from 'react'
import Image from 'next/image'
import SvgMoreButton from '../../../public/assets/Icons/MoreButton'
import SvgShareCircles from '../../../public/assets/Icons/ShareCircles'
import SvgDownload from '../../../public/assets/Icons/Download'
import SvgPlayButtonOrange from '../../../public/assets/Icons/PlayButtonOrange'

interface CardProps {
  creator: string
  description: string
  title: string
  image: string
  release: string
  duration: number
}

export default function PodcastCards ({ image, title, description, creator, release, duration }: CardProps): JSX.Element {
  return (
        <div className="rounded-xl mr-5 shadow-lg mb-5 w-[320px] flex-none">
            <Image className="h-[225px] rounded-t-xl mb-3" width={320} height={1} src={`${image}`} alt={`${title}`}/>
                <div className="my-2 px-5">
                    <p className="text-2xl ">{title}</p>
                    <p className="text-lg font-light text-gray-600">{creator}</p>
                    <p className="text-xs font-light text-gray-600 mt-2">{description}</p>
                </div>
                <div className="flex ml-5 my-3">
                    <SvgShareCircles height={25} width={25}/>
                    <SvgDownload className="mx-3" height={30} width={30}/>
                    <SvgMoreButton height={25} width={25} />
                    <p className="text-xs font-light mt-1 ml-12"> {release} {duration} min</p>
                    <SvgPlayButtonOrange className="ml-2" height={25} width={30}/>
                </div>
        </div>
  )
}
