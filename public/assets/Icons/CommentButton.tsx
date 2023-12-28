import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      stroke="#333232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M14 8.167a5.587 5.587 0 0 1-.6 2.533 5.666 5.666 0 0 1-5.067 3.133 5.588 5.588 0 0 1-2.533-.6L2 14.5l1.267-3.8a5.586 5.586 0 0 1-.6-2.533A5.667 5.667 0 0 1 5.8 3.1a5.587 5.587 0 0 1 2.533-.6h.334A5.654 5.654 0 0 1 14 7.833v.334Z"
    />
  </svg>
);
export default SvgCommentButton;
