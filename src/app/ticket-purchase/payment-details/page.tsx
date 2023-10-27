//components
import PaymentHeader from "./components/paymentHeader";
import Checkout from "./components/Checkout";
import BillDetails from "./components/BillDetails";
import { MobileLayout } from "../../../components/MobileLayout";

export default function PaymentDetails() {
  return (
    <MobileLayout>
      {/* <div className="h-screen bg-white text-black sm:invisible overflow-scroll"> */}
        <PaymentHeader />
        <BillDetails />
        <Checkout ticketPrice={198} quantity={2} taxes={12} />
      {/* </div> */}
    </MobileLayout>
  );
}
