import React from "react";

function CardBg({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1320"
      height="475"
      fill="none"
      viewBox="0 0 1320 475"
      className={className}
    >
      <mask
        id="mask0_2804_20366"
        style={{ maskType: "alpha" }}
        width="1320"
        height="475"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#9CA7B5"
          d="M0 .204h1320v473.917H90c-49.706 0-90-40.295-90-90V.204z"
        ></path>
      </mask>
      <g mask="url(#mask0_2804_20366)">
        <ellipse
          cx="1026.33"
          cy="319.699"
          fill="#FFF1EB"
          rx="410.326"
          ry="348.284"
        ></ellipse>
        <rect
          width="630.652"
          height="700.348"
          fill="#fff"
          rx="210"
          transform="matrix(.4815 -.87645 .92982 .36802 506.917 141.341)"
        ></rect>
        <rect
          width="807.912"
          height="897.197"
          fill="#FFF1EB"
          rx="269.026"
          transform="matrix(.4815 -.87645 .92982 .36802 -587.583 229.786)"
        ></rect>
      </g>
    </svg>
  );
}

export default CardBg;
