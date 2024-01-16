import * as React from "react"
import type { SVGProps } from "react";
const SvgDecreace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="#FD5839"
      d="M8.324 1.272a.856.856 0 0 0-.75-.428H1.425a.856.856 0 0 0-.863.845c0 .147.04.29.113.417l3.074 5.34a.87.87 0 0 0 1.501 0l3.075-5.34a.827.827 0 0 0-.001-.834Z"
    />
  </svg>
)
export default SvgDecreace
