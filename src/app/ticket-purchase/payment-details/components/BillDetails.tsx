//Icons
import SvgApplePayIcon from "../../../../../public/assets/Icons/ApplePayIcon";
import SvgCardIcon from "../../../../../public/assets/Icons/CardIcon";
import SvgGPayIcon from "../../../../../public/assets/Icons/GPayIcon";
import SvgNextVector from "../../../../../public/assets/Icons/NextVector";

export default function BillDetails() {
  return (
    <div className="m-2 mt-28 ">
      <div className="flex">
        <p className="text-lg">Contact Details</p>
        <p className="text-sm underline text-primary ml-[245px]">Edit</p>
      </div>
      <p className="font-light">John Doe</p>
      <p className="font-light">John.doe@gmail.com</p>
      <p className="font-light">765-822-9130</p>
      <div className="mt-8 p-3 border border-primary rounded-xl shadow-2xl bg-[#fdf5f0]">
        <p className="text-xl  ml-1">Choose Payment Method</p>
        <div className="grid grid-cols-12 mt-4">
          <SvgGPayIcon height={40} width={50} className="ml-3 mt-1 col-end-2" />
          <p className="col-start-3 col-end-11 text-xl font-light">
            Google Pay
          </p>
          <SvgNextVector className="mt-2 col-start-12" />
        </div>
        <hr />
        <div className="grid grid-cols-12 mt-5">
          <SvgApplePayIcon height={40} width={40} className="ml-3 col-end-2" />
          <p className="col-start-3 col-end-11 text-xl font-light">Apple Pay</p>
          <SvgNextVector className="mt-2 col-start-12" />
        </div>
        <hr />
        <div className="grid grid-cols-12 mt-5">
          <SvgCardIcon height={40} width={50} className="ml-3 mt-1 col-end-2" />
          <p className="col-start-3 col-end-11 text-xl font-light">
            Debit/Credit Card
          </p>
          <SvgNextVector className="mt-2 col-start-12" />
        </div>
      </div>
    </div>
  );
}
