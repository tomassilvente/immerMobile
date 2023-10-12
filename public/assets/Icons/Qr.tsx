import * as React from "react";
import type { SVGProps } from "react";
const SvgQr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect width={28} height={28} fill="#fff" fillOpacity={0.3} rx={14} />
    <g clipPath="url(#qr_svg__a)">
      <path
        fill="#fff"
        d="M8 8h4.5v4.5H8V8Zm12 0v4.5h-4.5V8H20Zm-4.5 8.25H17v-1.5h-1.5v-1.5H17v1.5h1.5v-1.5H20v1.5h-1.5v1.5H20v2.25h-1.5V20H17v-1.5h-2.25V20h-1.5v-3h2.25v-.75Zm1.5 0v2.25h1.5v-2.25H17ZM8 20v-4.5h4.5V20H8ZM9.5 9.5V11H11V9.5H9.5Zm7.5 0V11h1.5V9.5H17ZM9.5 17v1.5H11V17H9.5ZM8 13.25h1.5v1.5H8v-1.5Zm3.75 0h3v3h-1.5v-1.5h-1.5v-1.5Zm1.5-3.75h1.5v3h-1.5v-3Zm-6.75-3v3H5v-3A1.5 1.5 0 0 1 6.5 5h3v1.5h-3Zm15-1.5A1.5 1.5 0 0 1 23 6.5v3h-1.5v-3h-3V5h3Zm-15 13.5v3h3V23h-3A1.5 1.5 0 0 1 5 21.5v-3h1.5Zm15 3v-3H23v3a1.5 1.5 0 0 1-1.5 1.5h-3v-1.5h3Z"
      />
    </g>
    <defs>
      <clipPath id="qr_svg__a">
        <path fill="#fff" d="M5 5h18v18H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQr;
