import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeClose = (props: SVGProps<SVGSVGElement>) => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#ABABAB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="m4.926 4.147 15 16.5M14.949 15.172a3.75 3.75 0 0 1-5.046-5.55M13.133 8.714a3.75 3.75 0 0 1 3.028 3.33" />
      <path d="M19.984 16.25c2.044-1.83 2.943-3.852 2.943-3.852s-3-6.75-10.5-6.75c-.65-.001-1.298.051-1.939.157M7.363 6.829c-3.822 1.935-5.437 5.568-5.437 5.568s3 6.75 10.5 6.75a11.069 11.069 0 0 0 5.062-1.18" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgEyeClose
