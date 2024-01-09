import React from 'react'
import Image from 'next/image'
import SvgPauseButton from '../../../public/assets/Icons/PauseButton'
import Link from 'next/link'
import SvgOptions from '../../../public/assets/Icons/Options'

interface CardProps {
  creator: string
  description: string
  title: string
  image: string
  link: string
  play: boolean
  release: string
}

export default function HorizontalMusicCard ({ image, title, creator, play, link, release }: CardProps): JSX.Element {
  return (
        <Link href={`${link}`}>
        <div className="rounded-xl mr-5 shadow-sm mb-[5px] w-[100%] h-[100px] flex">
                <Image className="ml-[10px] h-[80px] mt-[10px] rounded-xl mb-3" width={80} height={1} src={`${image}`} alt={`${title}`}/>
                    <div className="my-2 px-5 mt-[23px]">
                        <p className="text-lg ">{title}</p>
                        <p className="text-sm font-light text-gray-600">{creator}</p>
                    </div>
                    {
                        play
                          ? <SvgPauseButton />
                          : <SvgOptions className="ml-[210px] mt-[40px]" height={25} width={25} />
                    }
        </div>
        </Link>
  )
}
