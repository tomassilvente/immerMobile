import * as React from "react"
import type { SVGProps } from "react";
const SvgShareButtonBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <rect width={26} height={26} fill="#fff" fillOpacity={0.38} rx={10} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.666 13v5.333a1.333 1.333 0 0 0 1.333 1.334h8a1.333 1.333 0 0 0 1.334-1.334V13M15.667 9l-2.666-2.667L10.334 9M13 6.333V15"
    />
    <rect
      width={25}
      height={25}
      x={0.5}
      y={0.5}
      stroke="#fff"
      strokeOpacity={0.2}
      rx={9.5}
    />
  </svg>
)
export default SvgShareButtonBlack
