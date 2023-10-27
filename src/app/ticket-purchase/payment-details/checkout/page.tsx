import SvgBackButtonBlack from "../../../../../public/assets/Icons/BackButtonBlack";
import SvgCloseButton from "../../../../../public/assets/Icons/CloseButton";
import { MobileLayout } from "../../../../components/MobileLayout";

export default function checkout() {
  return (
    <MobileLayout>
    {/* <div className=" bg-white text-black sm:invisible overflow-scroll"> */}
      <div className="grid grid-cols-12 m-5">
        <SvgBackButtonBlack
          height={35}
          width={35}
          className="col-start-1 col-end-3 ml-3"
        />
        <div className="text-center col-start-4 col-end-10">
          <p className="text-xl">Checkout</p>
          <p className="text-sm font-light">Time left 11:28</p>
        </div>
        <SvgCloseButton height={30} width={25} className="col-start-12 mt-3" />
      </div>
      <div className="border border-primary bg-[#fdf5f0] py-5 shadow-xl rounded-3xl mx-5 my-16 text-center">
        <p className="text-xl font-semibold mb-3"> Brooks Davis Live</p>
        <hr />
        <p className="text-sm font-light mt-3">Payment Amount: 408 USD</p>
      </div>
      <hr />
      <div className="m-5">
        <form>
          <label className="text-xl font-semibold">Billing Information</label>
          <div className="flex">
            <input
              className="w-[50%] border rounded-lg p-3 mt-4 mr-2"
              name="first-name"
              type="text"
              id="first-name"
              placeholder="First Name"
            />
            <input
              className="w-[50%] border rounded-lg p-3 mt-4 ml-2"
              name="last-name"
              type="text"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <input
            className="w-[100%] border rounded-lg p-3 my-5"
            name="email"
            type="email"
            id="email"
            placeholder="Email Adress"
          />
          <label className="text-xl font-semibold ">Card details</label>
          <input
            className="w-[100%] border rounded-lg p-3 mt-5"
            name="cardNumber"
            type="text"
            id="cardNumber"
            placeholder="Card number"
          />
          <div className="flex">
            <input
              className="w-[50%] border rounded-lg p-3 mt-4 mr-2"
              name="expiration"
              type="text"
              id="expiration"
              placeholder="Expiration Date"
            />
            <input
              className="w-[50%] border rounded-lg p-3 mt-4 ml-2"
              name="cvv"
              type="text"
              id="cvv"
              placeholder="CVV"
            />
          </div>
          <input
            className="w-[100%] border rounded-lg p-3 mt-5"
            name="zip"
            type="email"
            id="zip"
            placeholder="Zip code"
          />
          <button
            type="submit"
            className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12 mb-10 py-5 rounded-full"
          >
            Place Order
          </button>
        </form>
      </div>
    {/* </div> */}
    </MobileLayout>
  );
}
