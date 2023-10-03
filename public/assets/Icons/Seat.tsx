import * as React from "react";
import type { SVGProps } from "react";
const SvgSeat = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.036}
      d="M3.625 2.926c0-.667.541-1.208 1.208-1.208h4.834c.667 0 1.208.541 1.208 1.208v9.667h-7.25V2.926Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={1.036}
      d="M3.625 8.364c0-.667.541-1.208 1.208-1.208h4.834c.667 0 1.208.54 1.208 1.208v2.416h-7.25V8.364ZM10.875 5.948h1.813v8.458h-1.813z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={1.036}
      d="M1.813 5.948h1.813v8.458H1.813z"
    />
  </svg>
)
export default SvgSeat
