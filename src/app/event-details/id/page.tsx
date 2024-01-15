"use client";

import React, { useState } from "react";
import Link from "next/link";
import Location from "../../../components/EventDetails/Location";
import Organized from "../../../components/EventDetails/Organizer";
import AboutEvent from "../../../components/EventDetails/AboutEvent";
import EventDetails from "../../../components/EventDetails/EventDetails";
import EventHeader from "../../../components/TicketPurchase/Header";
import Share from "../../../components/EventDetails/Share";
import data from "../../../../public/data/DemoData.json";

export default function EventDetail() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const setShareOpen = () => {
    setIsShareOpen(true);
  };
  const setShareClose = () => {
    setIsShareOpen(false);
  };

  return (
    <div className="h-screen bg-white text-black sm:invisible overflow-scroll">
      <EventHeader eventImg={data.eventImg} setShareOpen={setShareOpen} />
      <div style={{ display: isShareOpen ? "absolute" : "none" }}>
        <Share />
      </div>
      <EventDetails
        eventName={data.eventName}
        eventDay={data.eventDay}
        eventPrice={data.eventPrice}
        eventTime={data.eventTime}
        eventAvailability={data.eventAvailability}
      />
      <Organized eventOrganizer={data.eventOrganizer} />
      <AboutEvent
        profiles={data.profiles}
        eventDescription={data.eventDescription}
      />
      <Location eventLocation={data.eventLocation} />
      <Link
        href="/"
        className="grid shadow-2xl text-center text-2xl bg-primary text-white mt-12 mx-8 py-5 mb-16 rounded-full"
      ></Link>
    </div>
  );
}
