import { IInputs } from '@/types/types';
import React from 'react'

const Input: React.FC<IInputs> = ({ placeholder, type }) => {
  console.log(placeholder);

  return (
    <input placeholder={placeholder} type={type} className='border-b  border border-gray-400 py-1 px-2  w-full h-11 focus:outline-none mt-2 pl-4' />
  )
}

export default Input