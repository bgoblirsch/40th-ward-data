import React from 'react'

import { IconProps } from '../Icon'

const Target: React.FC<IconProps> = ({ color, size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 16 16"
    width={size}
    fill={color}
  >
    <path d="M0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm2 0c0 3.307 2.686 6 6 6 3.307 0 6-2.686 6-6 0-3.307-2.686-6-6-6-3.307 0-6 2.686-6 6zm2 0c0-2.21 1.795-4 4-4 2.21 0 4 1.795 4 4 0 2.21-1.795 4-4 4-2.21 0-4-1.795-4-4zm2 0c0 1.112.895 2 2 2 1.112 0 2-.895 2-2 0-1.112-.895-2-2-2-1.112 0-2 .895-2 2z" fill-rule="evenodd"/>
  </svg>
)

export default Target