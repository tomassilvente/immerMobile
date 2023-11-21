import * as React from "react"
import type { SVGProps } from "react";
const SvgPauseButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF6C00"
      strokeLinecap="round"
      strokeWidth={5}
      d="M3 3v16M12.5 3v16"
    />
  </svg>
)
export default SvgPauseButton
