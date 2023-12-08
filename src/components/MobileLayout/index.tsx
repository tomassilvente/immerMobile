/* eslint-disable no-tabs */
import React from 'react'
import { BottomNav } from './BottomNav'

export const MobileLayout = ({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element => {
  return (
		<main className={'font-Inter relative max-w-[480px] m-auto'}>
			<div className={`${className} min-h-screen`}>
				{children}
			</div>
			<BottomNav />
		</main>
  )
}
