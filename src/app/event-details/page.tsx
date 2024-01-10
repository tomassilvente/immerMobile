"use client";
import Link from "next/link";
import Location from "../../components/EventDetails/Location";
import Organized from "../../components/EventDetails/Organizer";
import AboutEvent from "../../components/EventDetails/AboutEvent";
import EventDetails from "../../components/EventDetails/EventDetails";
import EventHeader from "../../components/_common/components/EventHeader";
import data from "../../../public/data/DemoData.json"; // All this data should come as params, including the links or the actions that every button should do
import { MobileLayout } from "../../components/MobileLayout";
import { DesktopLayout } from "../../components/DesktopLayout/SideNavbarAttendee";
import { useState } from "react";
import Share from "../../components/EventDetails/Share";

export default function eventDetail(): JSX.Element {
  const [ShareOpen, setShareOpen] = useState(false);

  function openShare() {
    setShareOpen(!ShareOpen);
  }
  return (
    <DesktopLayout>
      <EventHeader openShare={openShare} eventImg={data.eventImg} />
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
      {/* I've been having some trouble with making this button sticked on the screen */}
      <Link
        style={{ position: "sticky" }}
        href="/ticket-purchase"
        className="grid shadow-2xl text-center text-2xl bg-primary text-white mt-12 mx-8 py-5 mb-16 rounded-full"
      >
        Book Now
      </Link>
      {ShareOpen && (
        <div className="bg-[#000000d8]">
          <Share openShare={openShare} />
        </div>
      )}
    </DesktopLayout>
  );
}
