import React from "react";
import { MobileLayout } from "../../../components/MobileLayout";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "./components/ProfileImage";
import InputField from "./components/InputField";
import BackButton from "../../../common/buttons/BackButton";

const EditProfile: React.FC = () => (
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
          <InputField type="text" placeholder="Name" />
          <InputField type="text" placeholder="Username" />
          <InputField type="number" placeholder="Phone number" />
          <InputField type="text" placeholder="Date of birth" />
          <InputField type="text" placeholder="Country" />
          <InputField type="text" placeholder="State" />
          <InputField type="text" placeholder="City" />
          <InputField type="text" placeholder="Interests" />
        </form>
      </div>
    </div>
  </MobileLayout>
);

export default EditProfile;
