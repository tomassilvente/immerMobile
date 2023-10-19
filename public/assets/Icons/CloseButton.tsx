import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox="0 0 16 17"
  {...props}
  >
    <path
      stroke="#333232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.758 11.243 6 6l5.243 5.243m0-10.486L6 6 .758.757"
    />
  </svg>
)
export default SvgCloseButton