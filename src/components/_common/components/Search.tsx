// Icons
import React from 'react'
import SvgMagnify from '../../../../public/assets/Icons/Magnify'

export default function Search ({ hold }: any): JSX.Element {
  return (
        <div className="border flex rounded-3xl h-[40px]  mr-8 mt-10 pl-[20px]">
            <SvgMagnify className="mt-2" width={15} height={20} />
            <input className="text-sm pl-5 w-[100%]" placeholder={hold} />
        </div>
  )
}
