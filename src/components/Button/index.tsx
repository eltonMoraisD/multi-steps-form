import React from 'react'

interface IButtons {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

const Button: React.FC<IButtons> = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className='bg-white px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-gray-400 ring-inset  hover:bg-gray-50'
    >
      {children}
    </button>
  )
}
export default Button;