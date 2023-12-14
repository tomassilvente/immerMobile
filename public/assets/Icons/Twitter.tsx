import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox="8 6 32 32"
  {...props}
>
    <rect width={46} height={46} x={0.5} fill="#000" rx={20} />
    <path
      fill="#fff"
      d="M30.205 13.25h3.308l-7.227 8.26 8.502 11.24H28.13l-5.214-6.817-5.966 6.817h-3.31l7.73-8.835-8.155-10.665h6.825l4.713 6.231 5.45-6.231h.002Zm-1.161 17.52h1.833L19.045 15.126h-1.967L29.044 30.77Z"
    />
  </svg>
)
export default SvgTwitter
