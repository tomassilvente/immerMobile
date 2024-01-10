/* eslint-disable no-tabs */
import React from "react";
import { SideNavbarOrganizer } from "./SideNavbarOrganizer";

export const DesktopLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <main className={"font-Inter relative m-auto"}>
      <SideNavbarOrganizer />
      <div className={`${className} flex-1`}>{children}</div>
    </main>
  );
};
