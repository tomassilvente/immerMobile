import * as React from "react"
import type { SVGProps } from "react";
const SvgCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 5 30 26"
    {...props}
  >
    <path
      stroke="#F71"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.858 6.786h14.285c.632 0 1.237.24 1.684.67a2.24 2.24 0 0 1 .697 1.615v8a2.24 2.24 0 0 1-.697 1.617 2.432 2.432 0 0 1-1.684.67H5.858c-.632 0-1.238-.242-1.684-.67a2.24 2.24 0 0 1-.697-1.616v-8c0-.607.25-1.188.697-1.617a2.432 2.432 0 0 1 1.684-.67Z"
      clipRule="evenodd"
    />
    <path
      fill="#F71"
      fillRule="evenodd"
      d="M2.88 10.786H23.12v2.286H2.881v-2.286Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCardIcon
