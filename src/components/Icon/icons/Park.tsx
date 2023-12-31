import React from 'react'

import { IconProps } from '../Icon'

const Park: React.FC<IconProps> = ({ color, size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill={color}
  >
    <path d="M20,19a1,1,0,0,0,0-2V16a1,1,0,0,0,0-2V13a1,1,0,0,0-2,0v1H12V13a1,1,0,0,0-2,0v1a1,1,0,0,0,0,2v1a1,1,0,0,0,0,2v1H7V12a.979.979,0,0,0-.027-.133A3.992,3.992,0,0,0,10,8V6A4,4,0,0,0,2,6V8a3.992,3.992,0,0,0,3.027,3.867A.979.979,0,0,0,5,12v8H2v2H22V20H20Zm-2,1H12V19h6Zm0-3H12V16h6Z"/>
  </svg>
)

export default Park