import * as React from "react"
import type { SVGProps } from "react";
const SvgShareButtonOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={38}
    fill="none"
    {...props}
  >
    <rect width={47} height={36} x={0.5} y={1} fill="#fff" rx={4.5} />
    <rect width={47} height={36} x={0.5} y={1} stroke="#F71" rx={4.5} />
    <path
      fill="#F71"
      d="M28.5 26.5a2.17 2.17 0 0 1-1.594-.656 2.17 2.17 0 0 1-.656-1.594c0-.087.006-.178.019-.272.012-.094.031-.179.056-.253l-5.287-3.075c-.213.188-.45.335-.713.441-.262.107-.537.16-.825.159a2.17 2.17 0 0 1-1.594-.656A2.17 2.17 0 0 1 17.25 19c0-.625.219-1.156.656-1.594a2.17 2.17 0 0 1 1.594-.656c.288 0 .563.053.825.16.262.106.5.253.713.44l5.287-3.075a1.379 1.379 0 0 1-.056-.253 2.052 2.052 0 0 1-.019-.272c0-.625.219-1.156.656-1.594A2.17 2.17 0 0 1 28.5 11.5a2.17 2.17 0 0 1 1.594.656c.437.438.656.969.656 1.594a2.17 2.17 0 0 1-.656 1.594A2.17 2.17 0 0 1 28.5 16c-.288 0-.563-.053-.825-.159a2.455 2.455 0 0 1-.713-.441l-5.287 3.075c.025.075.044.16.056.253a2.06 2.06 0 0 1 0 .544 1.359 1.359 0 0 1-.056.253l5.287 3.075c.213-.188.45-.334.713-.44.262-.106.537-.16.825-.16a2.17 2.17 0 0 1 1.594.656c.437.438.656.969.656 1.594a2.17 2.17 0 0 1-.656 1.594 2.17 2.17 0 0 1-1.594.656Zm0-12c.212 0 .39-.072.535-.216a.723.723 0 0 0 .215-.534.726.726 0 0 0-.216-.535A.723.723 0 0 0 28.5 13a.726.726 0 0 0-.535.216.723.723 0 0 0-.215.534c0 .213.072.39.216.535a.723.723 0 0 0 .534.215Zm-9 5.25c.212 0 .39-.072.535-.216A.723.723 0 0 0 20.25 19a.726.726 0 0 0-.216-.535.722.722 0 0 0-.534-.215.726.726 0 0 0-.535.216.723.723 0 0 0-.215.534c0 .212.072.39.216.535a.722.722 0 0 0 .534.215Zm9 5.25c.212 0 .39-.072.535-.216a.723.723 0 0 0 .215-.534.726.726 0 0 0-.216-.535.723.723 0 0 0-.534-.215.726.726 0 0 0-.535.216.723.723 0 0 0-.215.534c0 .212.072.39.216.535A.723.723 0 0 0 28.5 25Z"
    />
  </svg>
)
export default SvgShareButtonOrange
