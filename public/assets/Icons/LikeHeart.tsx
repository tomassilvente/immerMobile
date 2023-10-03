import * as React from "react"
import type { SVGProps } from "react";
const SvgLikeHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#FF6C00"
      d="M15.497 3.391a4.033 4.033 0 0 0-5.705 0l-.777.777-.777-.777a4.034 4.034 0 0 0-5.705 5.705l.777.777 5.705 5.704 5.704-5.704.778-.777a4.033 4.033 0 0 0 0-5.705Z"
    />
  </svg>
)
export default SvgLikeHeart
