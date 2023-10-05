import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#7C7C7C"
      d="M5.917.5a5.417 5.417 0 0 1 5.416 5.417 5.43 5.43 0 0 1-1.3 3.525l.225.225h.659l4.166 4.166-1.25 1.25-4.166-4.166v-.659l-.225-.225a5.43 5.43 0 0 1-3.525 1.3A5.416 5.416 0 1 1 5.917.5Zm0 1.667a3.734 3.734 0 0 0-3.75 3.75 3.734 3.734 0 0 0 3.75 3.75 3.734 3.734 0 0 0 3.75-3.75 3.734 3.734 0 0 0-3.75-3.75Z"
    />
  </svg>
);
export default SvgMagnify;
