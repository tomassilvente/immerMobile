"use client";
import { useState } from "react";
import SvgDropDownIcon from "../../../../public/assets/Icons/DropDownIcon";
import SvgFilterIcon from "../../../../public/assets/Icons/FilterIcon";
import DemoData from "../../../../public/data/DemoData.json";
import TicketCard from "./TicketCard";

export default function TicketSelection() {
  const [tickets, setTickets] = useState(1);

  function ticketQuant(value: number) {
    setTickets(value);
  }

  return (
    <div className="bg-white text-black rounded-t-[50px] mt-4 p-5 overflow-scroll ">
      <SvgDropDownIcon className="ml-[45%] " />
      <p className="text-2xl font-semibold my-5">Select your tickets</p>
      <div className="flex">
        <select
          onChange={(e) => ticketQuant(Number(e.target.value))}
          className="border-primary shadow-sm flex border w-[60%] h-[30px] rounded-md"
          name="tickets"
          id="tickets"
        >
          <option
            className="ml-3 mt-1 text-xs font-semibold"
            value={1}
            selected
          >
            1 Ticket
          </option>
          <option value={2}>2 Tickets</option>
          <option value={3}>3 Tickets</option>
          <option value={4}>4 Tickets</option>
          <option value={5}>5 Tickets</option>
          <option value={6}>6 Tickets</option>
        </select>
        <button className="border-primary shadow-sm flex border rounded-md ml-[20%]">
          <p className="ml-3 mt-[4px] text-sm font-semibold">Filters</p>
          <SvgFilterIcon className="ml-3 mt-[3px]" height={20} width={20} />
        </button>
      </div>
      {DemoData.ticketDetails.map((ticket) => (
        <TicketCard
          price={ticket.price * tickets}
          location={ticket.location}
          section={ticket.section}
          key={ticket.id}
        />
      ))}
    </div>
  );
}
