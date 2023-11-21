import * as React from "react"
import type { SVGProps } from "react";
const SvgPauseOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox="0 0 30 30"
  {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#F71" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3}
      d="M11 9v12.829M18.617 9v12.829"
    />
  </svg>
)
export default SvgPauseOrange
