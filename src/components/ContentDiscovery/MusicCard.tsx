import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  image: string
  views: number
  link: any
}

export default function VideoCards ({ title, image, views, link }: CardProps): JSX.Element {
  return (
        <Link href={`${link}`} className="h-[140px] w-[145px] rounded-2xl mr-5 flex-none"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '15%',
              backgroundSize: 'cover'
            }}>

                    {
                        (views !== 0)
                          ? <p className="text-white text-xs ml-2 mt-[72%]">{title}</p>
                          : <p className="text-white ml-2 mt-[80%]">{title}</p>
                    }
                    {
                        (views !== 0)
                          ? <p className="text-white text-xs ml-2">{views} Views</p>
                          : ''
                    }

        </Link>
  )
}
