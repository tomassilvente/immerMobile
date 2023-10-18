import * as React from "react"
import type { SVGProps } from "react";
const SvgCopyLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 32"
    {...props}
  >
    <rect width={46} height={46} fill="#ABABAB" rx={20} />
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="m22.16 17.796 1.952-1.952a4.599 4.599 0 1 1 6.505 6.506L28.666 24.3m-3.904 3.903-1.951 1.952a4.599 4.599 0 1 1-6.506-6.505l1.952-1.952M20.86 25.602l5.204-5.204" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M7.85 23 23.463 7.387 39.075 23 23.463 38.613z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCopyLink
