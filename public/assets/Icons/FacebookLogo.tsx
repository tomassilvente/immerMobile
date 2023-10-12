import * as React from "react"
import type { SVGProps } from "react";
const SvgFacebookLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.262 17.425C5.7 16.787 3 13.712 3 10c0-4.125 3.375-7.5 7.5-7.5S18 5.875 18 10c0 3.712-2.7 6.787-6.262 7.425l-.413-.338h-1.65l-.413.338Z"
    />
    <path
      fill="#fff"
      d="m13.425 12.1.337-2.1h-1.987V8.538c0-.6.225-1.05 1.125-1.05h.975V5.575c-.525-.075-1.125-.15-1.65-.15C10.5 5.425 9.3 6.475 9.3 8.35V10H7.425v2.1H9.3v5.287a6.904 6.904 0 0 0 2.475 0V12.1h1.65Z"
    />
  </svg>
)
export default SvgFacebookLogo
