import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect width={28} height={28} fill="#fff" fillOpacity={0.3} rx={14} />
    <g clipPath="url(#notification_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.25 19.25a1.5 1.5 0 0 1-1.387 1.496l-.112.004h-1.5a1.5 1.5 0 0 1-1.497-1.387l-.003-.113h4.5ZM14 6.5a5.25 5.25 0 0 1 5.248 5.07l.003.18v2.823l1.366 2.733a.824.824 0 0 1-.652 1.19l-.086.004H8.122a.826.826 0 0 1-.772-1.115l.034-.079 1.367-2.733V11.75A5.25 5.25 0 0 1 14 6.5ZM14 8a3.75 3.75 0 0 0-3.746 3.587l-.003.163v2.823c0 .186-.035.37-.102.544l-.057.127L9.215 17h9.572l-.877-1.757a1.503 1.503 0 0 1-.153-.531l-.006-.139V11.75A3.75 3.75 0 0 0 14 8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="notification_svg__a">
        <path fill="#fff" d="M5 5h18v18H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotification;
