interface IButtons {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
  onClick: () => void;
}

const Button: React.FC<IButtons> = ({ children, disabled, type, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className='bg-white 
        disabled:cursor-not-allowed 
        px-4 py-2 text-sm 
        font-semibold shadow-sm 
        ring-1 ring-gray-400 
        ring-inset transition 
        duration-300 ease-in-out 
        active:bg-blue-200 active:text-gray-800
        hover:bg-blue-50 text-gray-600'
    >
      {children}
    </button>
  )
}
export default Button;