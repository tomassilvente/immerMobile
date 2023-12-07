import React from 'react'

const CommentInput = ({ placeholder }): JSX.Element => {
  return (
        <div className="bg-[#F5F6F7] p-2 w-full rounded-md">
            {
                placeholder === 'Message*'
                  ? <textarea placeholder="Message" className="w-full outline-none bg-[#F5F6F7] p-4" name="" id="" cols="30" rows="10"></textarea>
                  : <input type="text" className="bg-[#F5F6F7] h-10 w-full outline-none px-4" placeholder={placeholder} />
            }
        </div>
  )
}

export default CommentInput
