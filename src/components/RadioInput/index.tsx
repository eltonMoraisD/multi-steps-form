import React from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { IUser } from '@/types/types';
import { useFormContext } from '@/context/FormContext';

interface IRadioInput {
  clearErrors?: any
  users?: IUser
  register: UseFormRegister<IUser>;
  value: string;
  name: string;
  label: string;
}
const RadioInput: React.FC<IRadioInput> = ({ register, label, value, name, clearErrors }) => {
  const { handleInputChange } = useFormContext();
  return (
    <div>
      <label className="mr-4 inline-flex items-center">
        <input
          {...register("accountType")}
          type="radio"
          value={value}
          name={name}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />

        <span className="ml-2  text-gray-700">{label}</span>
      </label>

    </div>
  )
}

export default RadioInput