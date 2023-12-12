import React from 'react'
import Image from 'next/image'
import { type ProfileImageProps } from '../../types/attendeeprofile.interfaces'

const ProfileImage: React.FC<ProfileImageProps> = ({
  headerImgSrc,
  avatarImgSrc
}) => (
  <div className="pb-0 px-[14px] mb-[3.5rem] relative flex flex-col items-start">
    <div className="w-full">
      <Image
        className="w-full h-full"
        src={headerImgSrc}
        width={0}
        height={0}
        alt="header"
      />
      <span className="absolute cursor-pointer bottom-5 right-5 bg-[#FFF]/40 rounded p-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 18 19"
          fill="none"
        >
          <g clipPath="url(#clip0_5725_14562)">
            <path
              d="M9.75 15.197C9.75 15.722 9.8475 16.2245 10.0125 16.697H3.75C2.925 16.697 2.25 16.0295 2.25 15.197V4.69702C2.25 3.87202 2.925 3.19702 3.75 3.19702H14.25C15.0825 3.19702 15.75 3.87202 15.75 4.69702V10.9595C15.2775 10.7945 14.775 10.697 14.25 10.697V4.69702H3.75V15.197H9.75ZM10.47 10.1645L8.4075 12.8195L6.9375 11.0495L4.875 13.697H10.0125C10.3125 12.857 10.8525 12.1295 11.55 11.6045L10.47 10.1645ZM15 14.447V12.197H13.5V14.447H11.25V15.947H13.5V18.197H15V15.947H17.25V14.447H15Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5725_14562">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 0.947021)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
    <div className="absolute -bottom-10 left-10">
      <Image
        className="h-20 w-20 border-white border-[5px] rounded-full"
        src={avatarImgSrc}
        alt="avatar"
        width={0}
        height={0}
      />
      <span className="absolute bottom-3 right-0 cursor-pointer bg-[#E4DFDF] rounded p-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.63522 12.3892C8.63522 12.8334 8.71772 13.2586 8.85733 13.6584H3.55829C2.86022 13.6584 2.28906 13.0936 2.28906 12.3892V3.50458C2.28906 2.80651 2.86022 2.23535 3.55829 2.23535H12.4429C13.1473 2.23535 13.7121 2.80651 13.7121 3.50458V8.80362C13.3123 8.66401 12.8871 8.58151 12.4429 8.58151V3.50458H3.55829V12.3892H8.63522ZM9.24445 8.13093L7.49926 10.3775L6.25541 8.87978L4.51022 11.12H8.85733C9.11118 10.4092 9.5681 9.79362 10.1583 9.34939L9.24445 8.13093ZM13.0775 11.7546V9.85074H11.8083V11.7546H9.90445V13.0238H11.8083V14.9277H13.0775V13.0238H14.9814V11.7546H13.0775Z"
            fill="#333232"
          />
        </svg>
      </span>
    </div>
  </div>
)

export default ProfileImage
