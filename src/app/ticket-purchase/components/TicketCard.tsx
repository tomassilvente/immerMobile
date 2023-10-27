import Link from "next/link";
import SvgNextVector from "../../../../public/assets/Icons/NextVector";

export default function TicketCard({ price, section, location, id }: any) {
  return (
    <div className="w-[100%] shadow-lg my-5 py-3 border rounded-lg  grid grid-cols-12">
      <p className="text-primary text-xl col-start-1 col-end-3 mt-[14px] text-center">
        ${price}
      </p>
      <div className="block col-start-3 col-end-11 text-lg ml-3">
        <p>{section}</p>
        <p className="text-regular font-light text-[#767676]">{location}</p>
      </div>
      <Link href={`ticket-purchase/order-details`}>
        <SvgNextVector className="col-start-12 mt-4 ml-5" height={20} />
      </Link>
    </div>
  );
}
