import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g
      stroke="#FF6C00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#location-orange_svg__a)"
    >
      <path d="M12.25 5.833c0 4.084-5.25 7.584-5.25 7.584s-5.25-3.5-5.25-7.584a5.25 5.25 0 0 1 10.5 0Z" />
      <path d="M7 7.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    </g>
    <defs>
      <clipPath id="location-orange_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationOrange;
