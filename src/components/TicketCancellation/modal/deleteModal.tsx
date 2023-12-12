'use client'

import React, { useState } from 'react'
import ModalContent from './ModalContent'
import { type DeleteModalProps } from '../../../types/ticketcancellation.interfaces'

const DeleteModal = ({ close }: DeleteModalProps): JSX.Element => {
  const [cancelled, setCancelled] = useState<string>('pending')

  return (
    <div
        onClick={close}
        className="max-w-[480px] m-auto fixed inset-0 text-text-05 bg-[rgba(0,0,0,0.5)] flex-center justify-center"
    >
        <div
            onClick={(e) => { e.stopPropagation() }}
            className="max-w-[85%] py-6 px-3 h-[50%] flex m-auto mt-[40%] bg-white rounded-md"
        >
            {cancelled === 'pending' && <ModalContent img='/assets/cancel-ticket.svg' text='Your Ticket to Brooks Davis Live will be cancelled. Do you still want to continue?' btnText='Continue' btnAction={() => { setCancelled('cancelled') }} />}
            {cancelled === 'cancelled' && <ModalContent img='/assets/cancel-done.svg' text='Your Ticket to Brooks Davis have been cancelled, you’re no longer attending this event' btnText='Okay' btnAction={close} />}
            {cancelled === 'contact-support' && <ModalContent img='/assets/contact-support.svg' text='You can no longer cancel this ticket as the event date is too close. Please contact support  for further assistance.' btnText='Contact Support' />}
        </div>
    </div>
  )
}

export default DeleteModal
