import * as React from "react"
import type { SVGProps } from "react";
const SvgLessButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    {...props}
  >
    <rect width={29} height={29} x={0.5} y={1} fill="#fff" rx={14.5} />
    <rect width={29} height={29} x={0.5} y={1} stroke="#505050" rx={14.5} />
  </svg>
)
export default SvgLessButton
