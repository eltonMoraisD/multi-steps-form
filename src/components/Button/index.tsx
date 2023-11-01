import { IButtons } from '@/types/types';
import React from 'react'

const Button: React.FC<IButtons> = ({ children, type }) => {
  return (
    <button
      type={type}
      className='bg-white px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-gray-400 ring-inset  hover:bg-gray-50'
    >
      {children}
    </button>
  )
}
export default Button;