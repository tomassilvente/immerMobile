import * as React from "react"
import type { SVGProps } from "react";
const SvgBackVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.5 11.5-5-5 5-5"
    />
  </svg>
)
export default SvgBackVector
