import * as React from "react";
import type { SVGProps } from "react";
export default function SVGShare(props: SVGProps<SVGSVGElement>){
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <g
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)"
    >
      <path d="M2.666 8.5v5.333a1.333 1.333 0 0 0 1.333 1.334h8a1.333 1.333 0 0 0 1.334-1.334V8.5M10.667 4.5 8.001 1.833 5.334 4.5M8 1.833V10.5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
}