import Image from 'next/image'
import React from 'react';

interface Props {
    img: string;
    text: string;
    btnText: string;
    btnAction?: () => void;
}

const ModalContent = ({img, text, btnText, btnAction}: Props) => {
  return (
    <div className='flex flex-col my-auto items-center gap-7'>
        <Image className='h-32 w-32' src={img} width={0} height={0} alt="img" />
        <p className='text-[#7C7C7C] font-medium text-center'>{text}</p>
        <button onClick={btnAction} className='bg-[#FF6C00] text-white rounded-3xl w-full py-3'>{btnText}</button>
    </div>
  )
}

export default ModalContent