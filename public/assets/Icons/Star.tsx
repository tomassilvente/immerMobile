import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#EDEEF1"
      d="M12.258 16.842 12 16.686l-.258.156-5.166 3.118 1.37-5.876.07-.294-.229-.198-4.564-3.954 6.01-.51.3-.025.117-.278L12 3.281l2.35 5.544.117.278.3.025 6.01.51-4.564 3.954-.229.198.07.294 1.37 5.876-5.166-3.118Z"
    />
  </svg>
)
export default SvgStar
