// ! Well, I changed the name of the folder, its neccesary to check what is happening

import React from 'react'
import Link from 'next/link'
import { MobileLayout } from '../../../../components/MobileLayout'
import CancelTicket from '../CancelTicket'
import BackButton from '../../../../common/buttons/BackButton'

const generateStaticParams = (): JSX.Element[] => {
  const ids = [1, 2, 3, 4]
  return ids.map((id) => (
    <div key={id} id="a">
      {/* Generate static content based on the id */}
    </div>
  ))
}

const Page = ({ params }: { params: { id: string } }): JSX.Element => {
  const { id } = params

  return (
    <MobileLayout>
      <section>
        <div className="relative flex px-[14px] gap-5 items-center py-5">
          <Link href="/ticket-cancellation/" className="action-button">
            <BackButton />
          </Link>
          <h1 className="font-bold text-lg">Cancel Ticket</h1>
        </div>
        <CancelTicket id={id} />
      </section>
    </MobileLayout>
  )
}

export { generateStaticParams }
export default Page
