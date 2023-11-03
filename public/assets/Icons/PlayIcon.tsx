import * as React from "react"
import type { SVGProps } from "react";
const SvgPlayButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M2.497 0c-.34 0-.68.12-1.002.277-.068.05-.003.003 0 0-.017.017-.424.258-.442.275C.425 1.036.017 1.762 0 2.522l.017 11.715L0 15.464v.017c.017.864.459 1.71 1.257 2.178.764.466 1.698.432 2.429.035l11.04-6.48a.583.583 0 0 0 .204-.208v-.017C15.541 10.522 16 9.83 16 9.002c0-.933-.51-1.746-1.257-2.195L3.703.327h-.018A2.365 2.365 0 0 0 2.497 0Z"
    />
  </svg>
)
export default SvgPlayButton
