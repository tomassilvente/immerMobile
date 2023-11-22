import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 14"
    {...props}
  >
    <path
      fill="#EDEEF1"
      fillRule="evenodd"
      d="M15.667 12c.184 0 .333.15.333.333v1.334c0 .184-.15.333-.333.333H.333A.333.333 0 0 1 0 13.667v-1.334C0 12.15.15 12 .333 12h15.334Zm0-5c.184 0 .333.15.333.333v1.334c0 .184-.15.333-.333.333H.333A.333.333 0 0 1 0 8.667V7.333C0 7.15.15 7 .333 7h15.334ZM.357 0c.056 0 .111.013.161.038L5.802 2.68a.358.358 0 0 1 0 .64L.518 5.962A.358.358 0 0 1 0 5.642V.358C0 .16.16 0 .358 0Zm15.31 2c.184 0 .333.15.333.333v1.334c0 .184-.15.333-.333.333H8.333A.333.333 0 0 1 8 3.667V2.333C8 2.15 8.15 2 8.333 2h7.334Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgList
