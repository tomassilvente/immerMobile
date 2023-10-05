import * as React from "react";
import type { SVGProps } from "react";
const SvgBackButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <rect width={26} height={26} fill="#fff" fillOpacity={0.38} rx={10} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 18-5-5 5-5"
    />
    <rect
      width={25}
      height={25}
      x={0.5}
      y={0.5}
      stroke="#fff"
      strokeOpacity={0.2}
      rx={9.5}
    />
  </svg>
);
export default SvgBackButton;
