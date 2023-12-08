import React from 'react'
import SvgAlertIcon from '../../../../../public/assets/Icons/AlertIcon'

function ErrorMessage ({ show, message }: { show: boolean, message: string }): JSX.Element | null {
  if (!show) return null

  return (
    <div className="flex text-start text-white bg-[#ff3030] mt-8 rounded-md">
      <SvgAlertIcon className="mx-2" width={50} height={50} />
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
