import React from 'react'
import data, { type shareDataType } from './ShareData'
import Send from './Send'
import App from './AppOptions'
import { type GetStaticPaths } from 'next'
import SvgMagnify from '../../../public/assets/Icons/Magnify'

function Contacts (SendData: shareDataType): JSX.Element {
  return (
        <Send
            key={SendData.id} profilePic={SendData.profilePic} name={SendData.name} />
  )
}

function Share ({openShare}:any): JSX.Element {
  return (
    <div className="h-[80%] align-bottom absolute bottom-0 bg-white w-full overflow-x-hidden">
    <div onClick={openShare} className="w-[26px] h-[3px] rounded-[2.5px] bg-[#ABABAB] mx-auto my-[16px]"></div>
    <h1 className="text-black font-semibold text-xl pl-4 pt-5 pb-3">Share to</h1>
    <hr />
    <App />
    <hr/>
    <div className="border flex rounded-3xl h-[35px] m-5 mr-8 mt-8 mb-6 pl-[16px]">
            <SvgMagnify
                className="mt-2"
                width={16}
                height={16}
            />
        <input className="text-sm pl-5 w-[100%] text-black" placeholder={'Search '} />
</div>
    <div>
        {data.map(Contacts)}
    </div>
</div>
  )
}

// ! This is only a momentary function, but it should be work diferently.
export const getStaticPaths: GetStaticPaths = async () => {
  const eventIds = ['1', '2', '3']

  const paths = eventIds.map((id) => ({
    params: { id: id.toString() }
  }))

  return { paths, fallback: true }
}

export default Share
