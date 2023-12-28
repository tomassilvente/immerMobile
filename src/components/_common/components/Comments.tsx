"use client"
import Image from 'next/image'
import DemoData from '../../../../public/data/DemoData.json'
import { useState } from 'react'

function Comments({openComments}:any){

    const [message, setMessage] = useState('')

    const comments = DemoData.comments

    return(
        <div className="h-[80%] align-bottom absolute bottom-0 bg-white w-full overflow-x-hidden">
            <div onClick={openComments} className="w-[26px] h-[3px] rounded-[2.5px] bg-[#ABABAB] mx-auto my-[16px]"></div>
            <h1 className="text-black font-semibold text-xl pl-4 pt-5 pb-3">Comments</h1>
            <div>
                {comments.map(comment =>(
                    <div className='flex mt-5'>
                        <Image className='w-[40px] h-[40px] rounded-full mt-1' src={comment.pic} alt='pic' width={40} height={40} />
                        <div className='ml-5 w-[300px]'>
                            <p className='text-lg font-bold'>{comment.user}</p>
                            <p className='font-light'>{comment.comment}</p>
                        </div>
                        <p className='ml-5 font-light text-sm'>{comment.time}</p>
                    </div>
                ))}
            </div>
            <hr className='bg-black mt-5'/>
            <div className='absolute flex w-[100%]'>
                <Image className='w-[40px] h-[40px] rounded-full mt-6' src={'/assets/randomProfile4.png'} alt='pic' width={40} height={40} />
                <div className="border flex rounded-3xl w-[100%] h-[50px] m-5 mr-8 mt-5 mb-6 pl-[10px]">
                    <input onChange={e => setMessage(e.target.value)} value={message} className=" pl-5 w-[100%] text-black" placeholder={'Add a Comment'} />
                    <p onClick={() => setMessage('')} className='text-end mr-3 text-primary text-sm mt-3'>POST</p>
                </div>
            </div>
        </div>
)}
export default Comments;