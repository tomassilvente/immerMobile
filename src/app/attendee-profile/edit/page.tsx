import React from 'react'
import { MobileLayout } from '../../../components/MobileLayout'
import Link from 'next/link'
import ProfileImage from './components/ProfileImage'
import InputField from './components/InputField'
import BackButton from '../../../common/buttons/BackButton'

const EditProfile: React.FC = () => {
  const inputFields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'text', placeholder: 'Username' },
    { type: 'number', placeholder: 'Phone number' },
    { type: 'text', placeholder: 'Date of birth' },
    { type: 'text', placeholder: 'Country' },
    { type: 'text', placeholder: 'State' },
    { type: 'text', placeholder: 'City' },
    { type: 'text', placeholder: 'Interests' }
  ]

  return (
    <MobileLayout>
      <div>
        <div className="relative flex px-[14px] gap-5 items-center py-5">
          <Link href="">
            <BackButton />
          </Link>
          <h1 className="font-bold text-lg">Edit Profile</h1>
        </div>

        <ProfileImage
          headerImgSrc="/assets/header-img.png"
          avatarImgSrc="/assets/user-avatar.png"
        />

        <div className="px-[14px]">
          <form className="flex flex-col gap-3 my-4">
            {inputFields.map((field, index) => (
              <InputField key={index} type={field.type} placeholder={field.placeholder} />
            ))}
          </form>
        </div>
      </div>
    </MobileLayout>
  )
}

export default EditProfile
