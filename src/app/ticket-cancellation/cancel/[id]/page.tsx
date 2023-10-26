import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MobileLayout } from '../../../../components/MobileLayout';
import CancelTicket from '../CancelTicket';

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
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M13 15.947L9 11.947L13 7.94702" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="0.5" y="1.44702" width="21" height="21" rx="9.5" stroke="#555555"/>
                    </svg>
                </span> 
            </Link>
            <h1 className="font-bold text-lg">Cancel Ticket</h1>
            </div>
            <CancelTicket id={id} />
        </section>
    </MobileLayout>
  )
}

export default Page;
