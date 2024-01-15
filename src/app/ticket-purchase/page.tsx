import React from "react";
import { MobileLayout } from "../../components/MobileLayout";
import Header from "../../components/TicketPurchase/Header";
import TicketSelection from "../../components/TicketPurchase/TicketSelection";

export default function Discovery(): JSX.Element {
  return (
    <MobileLayout>
      <div className="h-screen bg-black">
        <Header eventImg={"./assets/stadium.png"} />
        <TicketSelection />
      </div>
    </MobileLayout>
  );
}
