import React from 'react'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutEvent ({ profiles, eventDescription }: any): JSX.Element {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl pt-4">About</h1>
        <p className=" mt-3 font-light text-[#767676]">
          {' '}
          {eventDescription}{' '}
          <Link className=" text-primary" href="/">
            {' '}
            Read more{' '}
          </Link>
        </p>
      </div>
      <div className="pl-6 py-3 flex">
        <div className="relative">
          {profiles.map(
            (profile: { id: number, pic: string | StaticImport }) => (
              <Link href="/" key={profile.id}>
                <Image
                  style={{ marginLeft: 25 * profile.id }}
                  className={'absolute border-white border-[3px] rounded-full h-[45px] '}
                  alt={'...'}
                  src={profile.pic}
                  width={45}
                  height={40}
                />
              </Link>
            )
          )}
          <p className=" ml-[150px] mt-2 font-light text-[#767676]">
            +10k have booked
          </p>
        </div>
      </div>
    </div>
  )
}
