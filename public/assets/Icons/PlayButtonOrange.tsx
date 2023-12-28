import * as React from "react"
import type { SVGProps } from "react";
const SvgPlayButtonOrange = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#fff"
      d="M16.278 10.904a1 1 0 0 1 0 1.732l-7.584 4.378a1 1 0 0 1-1.5-.866V7.391a1 1 0 0 1 1.5-.866l7.584 4.379Z"
    />
  </svg>
)
export default SvgPlayButtonOrange
