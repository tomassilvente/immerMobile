import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeButtonWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 22"
    {...props}
>
  <path
    stroke="#FFF"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    d="M7.5 4A5.5 5.5 0 0 0 2 9.5C2 15 8.5 20 12 21.163 15.5 20 22 15 22 9.5a5.5 5.5 0 0 0-10-3.163A5.494 5.494 0 0 0 7.5 4Z"
  />
</svg>
)
export default SvgLikeButtonWhite
