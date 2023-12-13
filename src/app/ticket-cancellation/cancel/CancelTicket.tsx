'use client'

import React, { useState, useEffect } from 'react'
import DeleteModal from '../../../components/TicketCancellation/modal/DeleteModal'

interface Props {
  id: string
}

const cancelReasons = [
  'I`ll not be available',
  'The price is not reasonable',
  'I just want to cancel',
  'I`m sick'
]

const CancelTicket = ({ id }: Props): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [otherReason, setOtherReason] = useState<string>('')
  const [reasons, setReasons] = useState<string[]>([])

  const handleModal = (): void => {
    setModal((prev) => !prev)
  }

  const addReason = (_reason: string): void => {
    if (_reason !== '' && !reasons.includes(_reason)) {
      setReasons([...reasons, _reason.trim()])
    } else {
      const newReasons = reasons.filter((reason) => reason !== _reason)
      setReasons([...newReasons])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const form = e.target as HTMLFormElement
    e.preventDefault()
    addReason(otherReason)
    if (reasons.length > 0) {
      handleModal()
      setReasons([])
      form.reset()
    }
  }

  useEffect(() => {
    if (reasons.length > 0 || otherReason.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [reasons, otherReason])

  // console.log(reasons)

  return (
    <div>
        <div className='px-[14px]'>
                <p className='text-sm text-[#757575]'>Please select the reason(s) for cancellation.</p>
                <form onSubmit={(e) => { handleSubmit(e) }} className='flex flex-col text-[#373737] gap-6 py-10'>
                    {cancelReasons.map((reason, index) => (
                        <label key={index} onChange={() => { addReason(reason) }} className='font-semibold flex items-center gap-3 accent-[#FF6C00]'>
                            <input className='h-5 w-5' type="checkbox" />
                            {reason}
                        </label>
                    ))}
                    <label className='flex flex-col mt-5 font-semibold gap-3'>
                        Others
                        <input onChange={(e) => { setOtherReason(e.target.value) }} className='w-full rounded-lg bg-[#EDEEF1] px-2 py-3 focus:outline-none' type="text" name="others" placeholder='other reasons' />
                    </label>
                    <input disabled={disabled} className='bg-[#FF6C00] mt-24 text-white rounded-3xl w-full py-3 disabled:opacity-50' type="submit" value="Submit" />
                </form>
            </div>
            {modal && <DeleteModal close={handleModal} />}
    </div>
  )
}

export default CancelTicket
