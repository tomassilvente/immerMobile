import React from 'react'
import SvgCheckBoxUnaccepted from '../../../public/assets/Icons/CheckBoxUnaccepted'
import SvgCheckBoxAccepted from '../../../public/assets/Icons/CheckoxAccepted'
import { type CheckboxAgreementProps } from '../../types/signup.interfaces'

export const CheckboxAgreement: React.FC<CheckboxAgreementProps> = ({
  accepted,
  toggleAccepted
}) => (
  <div className="flex mt-8" onClick={toggleAccepted}>
    {accepted
      ? (
      <SvgCheckBoxAccepted height={25} width={25} className="ml-1" />
        )
      : (
      <SvgCheckBoxUnaccepted height={25} width={25} className="ml-1" />
        )}
    <label className="ml-2 mt-[1px] text-sm font-light text-[#767676]">
      I agree to Immer Terms of Service and Privacy Policy by creating my
      account.
    </label>
  </div>
)
