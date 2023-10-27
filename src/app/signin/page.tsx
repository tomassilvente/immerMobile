import Link from "next/link";
//Icons
import SvgAppleLogo from "../../../public/assets/Icons/AppleLogo";
import SvgImmerIconOrange from "../../../public/assets/Icons/ImmerIconOrange";
import SvgOrLine from "../../../public/assets/Icons/OrLine";
import SvgGoogleLogo from "../../../public/assets/Icons/GoogleLogo";
import SvgFacebookLogo from "../../../public/assets/Icons/FacebookLogo";
import SvgMailLogo from "../../../public/assets/Icons/MailLogo";

export default function signIn() {
  return (
    <div className="font-Inter relative max-w-[480px] m-auto">
    <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll">
      <SvgImmerIconOrange width={50} height={50} className="mx-[45%]" />
      <p className="text-4xl mt-8 font-semibold">Welcome back!</p>
      <p className="text-lg font-light text-[#767676] mt-3">
        Login to your account
      </p>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-16 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-1 col-end-6">
          <SvgAppleLogo height={35} width={35} className="mt-1 mr-5" />
          <p className="mt-[5px] ">Sign In with Apple</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-1 col-end-6">
          <SvgGoogleLogo height={35} width={35} className="mt-1 " />
          <p className="mt-[4px] ml-4">Sign In with Google</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-1 col-end-6">
          <SvgFacebookLogo height={35} width={35} className="mt-1 ml-5" />
          <p className="mt-[4px] ml-4">Sign In with Facebook</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-3 border-black rounded-full"
        href="/signin/email"
      >
        <div className="flex col-start-1 col-end-6">
          <SvgMailLogo height={35} width={35} className="mt-1" />
          <p className="mt-[2px] ml-4">Sign In with Email</p>
        </div>
      </Link>
    </div>
    </div>
  );
}
