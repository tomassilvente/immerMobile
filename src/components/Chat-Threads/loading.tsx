import TelegramLoading from './TelegramLoading'
import React from 'react'

function loading (): JSX.Element {
  return (
      <div className="min-h-screen w-full flex justify-center items-center">
          <TelegramLoading/>
      </div>

  )
}

export default loading
