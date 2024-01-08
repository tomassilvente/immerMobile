import * as React from "react"
import type { SVGProps } from "react";
const SvgPauseOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox="0 0 23 23"
  {...props}
  >
    <circle cx={11} cy={11.313} r={11} fill="#F71" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3}
      d="M8.3 6v10.829M13.817 6v10.829"
    />
  </svg>
)
export default SvgPauseOrange
