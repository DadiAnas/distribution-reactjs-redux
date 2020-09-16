import React from "react";

function PlusButton({ showModal }: any) {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="btn"
      onClick={() => showModal()}
    >
      <g filter="url(#filter0_ddd)">
        <circle cx="50.5" cy="49.5" r="40.5" fill="url(#paint0_linear)" />
      </g>
      <path
        d="M66.75 52.25H53.25V65.75H48.75V52.25H35.25V47.75H48.75V34.25H53.25V47.75H66.75V52.25Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_ddd"
          x="0"
          y="0"
          width="101"
          height="101"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="50.5"
          y1="9"
          x2="50.5"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DF8634" />
          <stop offset="1" stop-color="#E8501D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlusButton;
