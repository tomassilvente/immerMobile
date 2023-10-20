import Image from 'next/image'
import React from 'react'
import SvgCalendar from '../../../../public/assets/Icons/Calendar'
import SvgClockBlack from '../../../../public/assets/Icons/ClockBlack'

const AttendedEventCard = () => {
  return (
    <div className='flex gap-3 bg-[#F8F8F8] rounded-lg shadow px-2 py-3'>
        <Image className='h-full w-[30%]' src='./assets/attended-event.png' width={0} height={0} alt='attended'/>
        <div className='flex flex-col gap-3 text-xs text-[#666666]'>
            <p className='text-[#333] text-sm font-bold'>Brooks Davis Live</p>
            <p className='flexed gap-1'><SvgCalendar /> Sat, 15 June, 2023</p>
            <p className='flexed gap-1'><SvgClockBlack /> 6:25pm - 10:00pm</p>
        </div>
        <span className='ml-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M11.8207 4.33245C11.8296 3.41583 11.0869 2.65855 10.1703 2.6496C9.2537 2.64066 8.49642 3.3833 8.48748 4.29993C8.47853 5.21655 9.22118 5.97383 10.1378 5.98278C11.0544 5.99172 11.8117 5.24907 11.8207 4.33245ZM11.7068 15.9986C11.7158 15.0819 10.9731 14.3247 10.0565 14.3157C9.13987 14.3068 8.38259 15.0494 8.37364 15.966C8.3647 16.8827 9.10734 17.6399 10.024 17.6489C10.9406 17.6578 11.6979 16.9152 11.7068 15.9986ZM11.7637 10.1655C11.7727 9.24888 11.03 8.4916 10.1134 8.48266C9.19679 8.47371 8.4395 9.21636 8.43056 10.133C8.42162 11.0496 9.16426 11.8069 10.0809 11.8158C10.9975 11.8248 11.7548 11.0821 11.7637 10.1655Z" fill="#979797"/>
            </svg>
        </span>
    </div>
  )
}

export default AttendedEventCard