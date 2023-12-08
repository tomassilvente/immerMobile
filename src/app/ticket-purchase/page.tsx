import React from 'react'
import { MobileLayout } from '../../components/MobileLayout'
import Header from './components/Header'
import TicketSelection from './components/TicketSelection'

export default function Discovery (): JSX.Element {
  return (
    <MobileLayout>
      <div className="h-screen bg-black">
        <Header eventImg={'./assets/stadium.png'} />
        <TicketSelection />
      </div>
    </MobileLayout>
  )
}
