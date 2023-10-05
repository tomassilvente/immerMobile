import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g
      stroke="#FF6C00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#calendar-orange_svg__a)"
    >
      <path d="M11.083 2.333H2.917c-.645 0-1.167.523-1.167 1.167v8.167c0 .644.522 1.166 1.167 1.166h8.166c.645 0 1.167-.522 1.167-1.166V3.5c0-.644-.522-1.167-1.167-1.167ZM9.334 1.167V3.5M4.666 1.167V3.5M1.75 5.833h10.5" />
    </g>
    <defs>
      <clipPath id="calendar-orange_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarOrange;
