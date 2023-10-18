import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="#979797"
      d="M11.82 4.28a1.672 1.672 0 0 0-1.65-1.682 1.672 1.672 0 0 0-1.684 1.65 1.672 1.672 0 0 0 1.65 1.683 1.672 1.672 0 0 0 1.684-1.65Zm-.114 11.666a1.672 1.672 0 0 0-1.65-1.682 1.672 1.672 0 0 0-1.683 1.65 1.672 1.672 0 0 0 1.65 1.683 1.672 1.672 0 0 0 1.683-1.65Zm.057-5.833a1.672 1.672 0 0 0-1.65-1.682 1.672 1.672 0 0 0-1.683 1.65 1.672 1.672 0 0 0 1.65 1.683 1.672 1.672 0 0 0 1.683-1.65Z"
    />
  </svg>
);
export default SvgMoreButton;
