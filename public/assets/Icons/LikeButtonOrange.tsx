import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeButtonOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <g clipPath="url(#likeButton-orange_svg__a)">
      <path
        stroke="#F71"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4.667 7.833 2.667-6a2 2 0 0 1 2 2V6.5h3.773a1.334 1.334 0 0 1 1.334 1.533l-.92 6a1.334 1.334 0 0 1-1.334 1.134h-7.52m0-7.334v7.334m0-7.334h-2a1.333 1.333 0 0 0-1.333 1.334v4.666a1.333 1.333 0 0 0 1.333 1.334h2"
      />
    </g>
    <defs>
      <clipPath id="likeButton-orange_svg__a">
        <path fill="#fff" d="M0 .5h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLikeButtonOrange;
