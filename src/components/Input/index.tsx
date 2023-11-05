import { IInputs } from '@/types/types';

const Input: React.FC<IInputs> = ({ onChange, register, value, placeholder, type, name, error, defaultValue }) => {
  return (
    <>
      <input
        {...register(name, {
          onChange
        })}
        name={name}
        defaultValue={defaultValue as string}
        placeholder={placeholder}
        type={type}
        value={value}
        className={
          `w-full border-b border  border-gray-400 py-1 px-2 focus:outline-0 h-11 mt-2 pl-4 
          ${error ? "border-red-500 bg-red-200 placeholder:text-white" : "focus:outline-none"}`
        }
      >
      </input >

      {error && (
        <p className='mt-1 text-xs text-red-400'>{error?.message}</p>
      )
      }
    </>
  )
}

export default Input