// components
import React from "react";
import PaymentHeader from "../../../components/TicketPurchase/PaymentDetails/paymentHeader";
import Checkout from "../../../components/TicketPurchase/PaymentDetails/Checkout";
import BillDetails from "../../../components/TicketPurchase/PaymentDetails/BillDetails";
import { MobileLayout } from "../../../components/MobileLayout";

export default function PaymentDetails(): JSX.Element {
  return (
    <MobileLayout>
      <PaymentHeader />
      <BillDetails />
      <Checkout ticketPrice={198} quantity={2} taxes={12} />
    </MobileLayout>
  );
}
