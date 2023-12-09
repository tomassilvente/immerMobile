/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SvgWarningIconBig from '../../../../../public/assets/Icons/WarningIconBig'
import SimpleButton from 'app/signin/components/SimpleButton'

function ModalMessage ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}): JSX.Element {
  const styles = {
    alignItems: isOpen ? 'center' : '',
    display: isOpen ? 'flex' : 'none'
  }

  return (
    <div
      className={'bg-[#000000d8] bottom-0 h-[100vh] left-0 fixed right-0 top-0 w-[100%] z-10'}
      style={styles}
    >
      <div className="bg-white grid content-center place-items-center m-14 p-10 mx-20 rounded-[40px] text-center">
        <SvgWarningIconBig />
        <p className="text-3xl mt-8 font-semibold">No account was found</p>
        <p className="font-light mt-16">
          Check your email and try again or sign up if you don't have an
          account.
        </p>
        <SimpleButton text={'Try again'} onClick={onClose} />
      </div>
    </div>
  )
}

export default ModalMessage
