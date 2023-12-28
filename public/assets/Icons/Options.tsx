import * as React from "react";
import type { SVGProps } from "react";
const SvgOptions = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 26"
    {...props}
  >
    <circle cx={23} cy={3} r={3} fill="#7C7C7C" transform="rotate(90 23 3)" />
    <circle cx={13} cy={3} r={3} fill="#7C7C7C" transform="rotate(90 13 3)" />
    <circle cx={3} cy={3} r={3} fill="#7C7C7C" transform="rotate(90 3 3)" />
  </svg>
)
export default SvgOptions
