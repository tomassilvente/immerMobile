import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={320}
    height={2}
    fill="none"
    {...props}
  >
    <path
      stroke="#ABABAB"
      strokeDasharray="4.25 4.25"
      strokeWidth={0.85}
      d="M.008.904h241.285"
      opacity={1}
    />
  </svg>
)
export default SvgTicketLine
