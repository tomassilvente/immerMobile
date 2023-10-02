import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <rect width={26} height={26} fill="#fff" fillOpacity={0.38} rx={10} />
    <g clipPath="url(#likeButton_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.894 8.073a3.667 3.667 0 0 0-5.187 0l-.706.707-.707-.707a3.668 3.668 0 0 0-5.187 5.187l.707.707 5.187 5.186 5.186-5.186.707-.707a3.666 3.666 0 0 0 0-5.187Z"
      />
    </g>
    <rect
      width={25}
      height={25}
      x={0.5}
      y={0.5}
      stroke="#fff"
      strokeOpacity={0.2}
      rx={9.5}
    />
    <defs>
      <clipPath id="likeButton_svg__a">
        <path fill="#fff" d="M5 5h16v16H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLikeButton;
