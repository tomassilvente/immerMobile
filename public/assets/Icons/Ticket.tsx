import * as React from "react";
import type { SVGProps } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#333"
      strokeWidth={1.14}
      d="M.861 4.038c0-.506.41-.917.917-.917h9.86c.506 0 .916.41.916.917V6.588h-.002a4.32 4.32 0 0 0-.308.071c-.219.06-.512.169-.752.406-.257.256-.396.604-.396 1.028 0 .424.139.773.4 1.027.24.236.536.34.753.398.111.03.22.051.305.068V11.565c0 .506-.41.916-.916.916h-9.86a.917.917 0 0 1-.917-.916v-1.456c0-.22.156-.407.37-.448 1.73-.33 1.73-2.806 0-3.136a.456.456 0 0 1-.37-.448V4.038Zm11.917 5.598h-.002.002Z"
    />
    <path
      fill="#333"
      d="M7.305 4.885a.57.57 0 0 0 1.14 0h-1.14Zm0-1.75v1.75h1.14v-1.75h-1.14ZM8.446 10.71a.57.57 0 1 0-1.14.017l1.14-.016Zm.025 1.75-.025-1.75-1.14.017.025 1.75 1.14-.017Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={1.14}
      d="M7.875 7.219v1.166"
    />
  </svg>
)
export default SvgTicket
