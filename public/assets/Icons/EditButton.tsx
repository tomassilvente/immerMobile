import * as React from "react";
import type { SVGProps } from "react";
const SvgEditButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#FF6C00"
      stroke="#FF6C00"
      strokeMiterlimit={10}
      strokeWidth={0.1}
      d="m2.264 15.332 2.78-.626 9.804-9.47-2.16-2.087-9.799 9.467-.625 2.716Zm14.1-11.656a1.903 1.903 0 0 1 .457 2.118 1.903 1.903 0 0 1-.43.632l-9.595 9.267a2 2 0 0 1-.959.513l-3.521.763a1.596 1.596 0 0 1-1.407-.402 1.466 1.466 0 0 1-.43-1.354l.755-3.436c.079-.362.263-.692.531-.948l9.596-9.27a2.06 2.06 0 0 1 2.854.03l2.148 2.087Z"
    />
    <path
      fill="#FF6C00"
      stroke="#FF6C00"
      strokeMiterlimit={10}
      strokeWidth={0.1}
      d="M10.164 4 13.8 7.534l-1.442 1.415-3.64-3.537L10.165 4Zm-.427 10.999h7.21a.994.994 0 0 1 .97.604 1.006 1.006 0 0 1-.572 1.336.996.996 0 0 1-.398.06h-7.21A1.014 1.014 0 0 1 8.707 16a1.02 1.02 0 0 1 1.03-1.001Z"
    />
  </svg>
)
export default SvgEditButton
