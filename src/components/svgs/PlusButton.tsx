import React from 'react'

function PlusButton({showModal}:any) {
    return (
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn" onClick={() => showModal()}>
             <g filter="url(#filter0_ddd)">
             <circle cx="41" cy="40" r="31" fill="url(#paint0_linear)"/>
             </g>
             <path d="M56.75 42.25H43.25V55.75H38.75V42.25H25.25V37.75H38.75V24.25H43.25V37.75H56.75V42.25Z" fill="white"/>
             <defs>
             <filter id="filter0_ddd" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
             <feOffset dy="2"/>
             <feGaussianBlur stdDeviation="2"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
             <feOffset dy="4"/>
             <feGaussianBlur stdDeviation="2.5"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
             <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
             <feOffset dy="1"/>
             <feGaussianBlur stdDeviation="5"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
             <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
             </filter>
             <linearGradient id="paint0_linear" x1="41" y1="9" x2="41" y2="71" gradientUnits="userSpaceOnUse">
             <stop stopColor="#7C3DB7"/>
             <stop offset="1" stopColor="#DE67A2"/>
             </linearGradient>
             </defs>
             </svg>
    )
}

export default PlusButton
