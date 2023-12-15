import * as React from "react";
import type { SVGProps } from "react";
const SvgOptionsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={5}
    fill="none"
    {...props}
  >
    <circle
      cx={17.692}
      cy={2.308}
      r={2.308}
      fill="#fff"
      transform="rotate(90 17.692 2.308)"
    />
    <circle
      cx={9.997}
      cy={2.308}
      r={2.308}
      fill="#fff"
      transform="rotate(90 9.997 2.308)"
    />
    <circle
      cx={2.309}
      cy={2.308}
      r={2.308}
      fill="#fff"
      transform="rotate(90 2.31 2.308)"
    />
  </svg>
)
export default SvgOptionsHorizontal
