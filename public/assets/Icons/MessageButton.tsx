import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 32"
    {...props}
  >
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 16a5.916 5.916 0 0 1-.635 2.682A6 6 0 0 1 15.5 22a5.916 5.916 0 0 1-2.682-.635L9.5 22l.635-3.318A5.915 5.915 0 0 1 9.5 16a6 6 0 0 1 3.318-5.365A5.916 5.916 0 0 1 15.5 10h.353a5.986 5.986 0 0 1 5.647 5.647V16Z"
    />
    <path
      fill="#666"
      d="M12.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <rect width={30} height={30} x={0.5} y={1} stroke="#666" rx={3.5} />
  </svg>
);
export default SvgMessageButton;
