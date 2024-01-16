/* eslint-disable no-tabs */
import React from "react";
import { SideNavbarAttendee } from "./SideNavbarAttendee";

export const DesktopLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <main className={"font-Inter absolute m-auto w-screen"}>
      <SideNavbarAttendee />
      <div className={`${className} ml-[200px] flex-1`}>{children}</div>
    </main>
  );
};
