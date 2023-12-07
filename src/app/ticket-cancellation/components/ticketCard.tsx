import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Props {
  id: string | number
  event: string
  date: string
  time: string
  price: string
  img: string
  tab?: string
}

const TicketCard = ({ id, event, date, time, price, img, tab }: Props): JSX.Element => {
  return (
    <div className='flex gap-4 font-Inter p-3 rounded-[6px] bg-[#FFF0E50D]/5 overflow-hidden border border-[#FFD6B899]/60 shadow-[0px_2px_4px_0px_rgba(255,240,229,0.08)]'>
        <Image className='w-[6rem] h-[6rem] rounded-lg' src={img} height={0} width={0} alt='event' />
        <div className='w-full'>
            <div className='flex flex-col gap-1 py-2 px-2 w-full text-xs text-[#666666]'>
                <p className='text-[#333333] font-semibold'>{event}</p>
                <p className='flex justify-between'><span>{date}</span><span>{time}</span></p>
                <p className='text-[#FF7711] font-semibold'>Price: {price}</p>
            </div>
            {tab === 'upcoming' && <div className='flex gap-4 text-xs'>
                <Link
                    href={{
                      pathname: `/ticket-cancellation/cancel/${id}`
                    }}
                    className='border border-[#FF6C00] rounded py-1 px-5 text-[#666]'
                >
                    Cancel
                </Link>
                <button className='bg-[#FF6C00] py-1 px-5 rounded text-white'>View details</button>
            </div>}
            {tab === 'attended' && <div className='flex gap-4 text-xs'>
                <button className='border border-[#FF6C00] rounded py-1 px-5 text-[#666]'>View details</button>
                <button className='bg-[#FF6C00] py-1 px-5 rounded text-white'>Leave a review</button>
            </div>}
            {tab === 'cancelled' && <div className='w-full flex'>
                <button className='ml-auto text-xs text-[#E03616] border border-[#E03616] rounded py-1 px-5' disabled>
                    Cancelled
                </button>
            </div>}
        </div>
    </div>
  )
}

export default TicketCard
