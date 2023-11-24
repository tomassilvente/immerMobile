import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 23"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.9}
      d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
    />
  </svg>
)
export default SvgBookmark
