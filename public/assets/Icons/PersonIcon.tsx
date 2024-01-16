import * as React from "react"
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={14}
    fill="none"
    {...props}
  >
    <circle cx={5.661} cy={2.692} r={2.692} fill="#D9D9D9" />
    <path
      fill="#D9D9D9"
      d="M10.51 9.69c0-.565-.126-1.125-.37-1.648a4.312 4.312 0 0 0-1.05-1.397c-.45-.4-.984-.718-1.572-.934a5.377 5.377 0 0 0-1.855-.328c-.637 0-1.267.111-1.855.328a4.926 4.926 0 0 0-1.572.934c-.45.4-.807.875-1.05 1.397a3.896 3.896 0 0 0-.37 1.649H10.51Z"
    />
  </svg>
)
export default SvgPerson
