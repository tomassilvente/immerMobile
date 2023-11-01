import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MobileLayout } from '../../../../components/MobileLayout';
import CancelTicket from '../CancelTicket';
import BackButton from '../../../../common/buttons/BackButton';

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

const Page = ({params}: {params: {id: string}}) => {
    const {id} = params;
    

  return (
    <MobileLayout>
        <section>
            <div className="relative flex px-[14px] gap-5 items-center py-5">
            <Link href='/ticket-cancellation/' className="action-button">
                <BackButton />
            </Link>
            <h1 className="font-bold text-lg">Cancel Ticket</h1>
            </div>
            <CancelTicket id={id} />
        </section>
    </MobileLayout>
  )
}

export default Page;
