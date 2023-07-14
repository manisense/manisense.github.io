import React from 'react'

const PriceLine = ({text}) => {
  return (
    <li class="mb-4 flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="mr-4 h-5 w-5 text-primary dark:text-primary-400"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
    {text}
  </li>
  )
}

export default PriceLine
