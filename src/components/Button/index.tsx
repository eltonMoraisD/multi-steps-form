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
      className='bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-gray-400 ring-inset  hover:bg-gray-50'
    >
      {children}
    </button>
  )
}
export default Button;