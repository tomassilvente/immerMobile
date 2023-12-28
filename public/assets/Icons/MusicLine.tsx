import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 200 9"
      {...props}
  >
    <path
      stroke="#FFC9A0"
      strokeLinecap="round"
      strokeWidth={4}
      d="M2.8 2h205.201"
    />
    <path
      stroke="#FF6C00"
      strokeLinecap="round"
      strokeWidth={4}
      d="M2 2h120.2"
    />
  </svg>
)
export default SvgMusicLine
