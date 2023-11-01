import { IInputs } from '@/types/types';
import React from 'react'

const Input: React.FC<IInputs> = ({ placeholder, type, name, register, error }) => {
  return (
    <>
      <input
        {...register(name)}
        name={name}
        placeholder={placeholder}
        type={type}
        className='w-full border-b border border-gray-400 py-1 px-2 focus:outline-blue-900   h-11 mt-2 pl-4'
      />
      {(() => {
        switch (error) {
          case error?.firstName?.message:
            return <p className='mt-2 text-sm text-red-400'>{error?.firstName.message}</p>;
          case error?.lastName?.message:
            return <p className='mt-2 text-sm text-red-400'>{error?.lastName.message}</p>;
          case error?.email?.message:
            return <p className='mt-2 text-sm text-red-400'>{error?.email.message}</p>;
          default:
            return "";
        }
      })()}
    </>
  )
}

export default Input