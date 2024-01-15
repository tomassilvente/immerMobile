import React from 'react'
import { MobileLayout } from '../../../../components/MobileLayout'

export default function gender(): JSX.Element {
  return (
    <MobileLayout>
      <div className="h-[150px] place-items-end content-start"
        style={{
          backgroundImage: `url(${'/assets/laugh.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}>
        <p className="pt-[100px] text-3xl text-white text-center"> COMEDY PODCASTS</p>
      </div>
    </MobileLayout>
  )
}
