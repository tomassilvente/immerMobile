import Link from "next/link";

export default function Checkout({ ticketPrice, quantity, taxes }: any) {
  return (
    <div className="bg-[#FFF0E5] mt-16 p-10 rounded-t-xl">
      <div className="grid grid-cols-4 text-2xl">
        <p className="font-light col-start-1 col-end-4">Ticket Price:</p>
        <p className="font-semibold col-start-4">
          ${ticketPrice} x {quantity}
        </p>
      </div>
      <div className="grid grid-cols-4 text-2xl mt-4 mb-3">
        <p className="font-light col-start-1 col-end-4">Taxes and fees:</p>
        <p className="font-semibold col-start-4">${taxes}</p>
      </div>
      <hr />
      <div className="grid grid-cols-4 text-2xl mt-4">
        <p className="font-semibold col-start-1 col-end-4">Total:</p>
        <p className="font-semibold col-start-4 text-primary">
          ${ticketPrice * quantity + taxes}
        </p>
      </div>
      <Link
        href="/ticket-purchase/payment-details/checkout"
        className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12 mb-10 py-5 rounded-full"
      >
        Checkout
      </Link>
    </div>
  );
}
