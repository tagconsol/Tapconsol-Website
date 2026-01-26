import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="'Inter', sans-serif"
        fontSize="40"
        fontWeight="600"
        fill="currentColor"
        className="text-primary"
      >
        Tap Consol
      </text>
    </svg>
  );
}
