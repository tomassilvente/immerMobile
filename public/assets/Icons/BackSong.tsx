import * as React from "react"
import type { SVGProps } from "react";
const SvgBackSong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#EDEEF1"
      d="M4.852 22.233c-1.334-.77-1.334-2.694 0-3.464l24.75-14.29c1.333-.77 3 .193 3 1.733V34.79c0 1.54-1.667 2.502-3 1.732L4.852 22.233Z"
    />
    <path
      stroke="#EDEEF1"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 37.586V3.419"
    />
  </svg>
)
export default SvgBackSong
