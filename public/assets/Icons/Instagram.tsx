import * as React from "react"
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="8 6 32 32"
    {...props}
  >
    <rect width={46} height={46} x={0.5} fill="#J123SA" rx={20} />
    <rect width={46} height={46} x={0.5} fill="url(#a)" rx={20} />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00781)" />
      </pattern>
    </defs>
  </svg>
)
export default SvgInstagram
