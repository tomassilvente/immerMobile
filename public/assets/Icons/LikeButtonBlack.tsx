import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeButtonBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <rect
      width={27}
      height={27}
      x={0.5}
      y={0.5}
      fill="#fff"
      fillOpacity={0.3}
      rx={13.5}
    />
    <path
      stroke="#333232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.63 8.457a4.125 4.125 0 0 0-5.835 0L14 9.252l-.795-.795a4.126 4.126 0 0 0-5.835 5.835l.795.795L14 20.922l5.835-5.835.795-.795a4.126 4.126 0 0 0 0-5.835Z"
    />
    <rect width={27} height={27} x={0.5} y={0.5} stroke="#333232" rx={13.5} />
  </svg>
)
export default SvgLikeButtonBlack
