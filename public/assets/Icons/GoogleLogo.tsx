import * as React from "react"
import type { SVGProps } from "react";
const SvgGoogleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      fill="#000"
      d="M18 10.174c0-.543-.049-1.064-.14-1.565h-7.207v2.964h4.119a3.53 3.53 0 0 1-1.538 2.303v1.927h2.484C17.165 14.467 18 12.505 18 10.174Z"
    />
    <path
      fill="#000"
      d="M10.653 17.653c2.066 0 3.799-.681 5.065-1.85l-2.484-1.928c-.682.46-1.551.738-2.58.738-1.99 0-3.681-1.343-4.287-3.152H3.821v1.976a7.646 7.646 0 0 0 6.832 4.216Z"
    />
    <path
      fill="#000"
      d="M6.367 11.454A4.586 4.586 0 0 1 6.124 10c0-.508.09-.995.243-1.454V6.57H3.821A7.559 7.559 0 0 0 3 10c0 1.239.3 2.4.821 3.43l1.983-1.544.563-.432Z"
    />
    <path
      fill="#000"
      d="M10.653 5.394c1.127 0 2.129.39 2.93 1.141l2.19-2.191c-1.328-1.238-3.054-1.997-5.12-1.997A7.64 7.64 0 0 0 3.821 6.57l2.546 1.976c.606-1.809 2.296-3.152 4.286-3.152Z"
    />
  </svg>
)
export default SvgGoogleLogo
