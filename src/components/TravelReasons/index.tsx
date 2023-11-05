import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { useFormContext } from '@/context/FormContext';

import { IUser } from '@/types/types';
import Input from '../Input';

interface ITravelReasons {
  clearErrors?: any
  users?: IUser
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
}

const TravelReasons: React.FC<ITravelReasons> = ({ errors, clearErrors, users, register }) => {
  const { handleInputChange, userApi } = useFormContext();

  return (
    <div className="flex items-center flex-col justify-center">
      <p>Travel Reasons</p>
      <div className="flex text-center justify-center items-center mt-2 ">
        <div className=''>
          <label className="  inline-flex items-center mr-2">
            <Input
              register={register}
              error={errors}
              type="radio"
              value="personal"
              name='accountType'
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />

            <span className="ml-2 mt-2 text-gray-700">Personal</span>
          </label>
          <label className="inline-flex items-center">
            <Input
              error={errors}
              type="radio"
              value="business"
              register={register}
              name='accountType'
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <span className="ml-2 mt-2 text-gray-700">Business</span>

          </label>
          {errors && <p className='text-red-500  text-xs'>{errors?.accountType?.message}</p>}
        </div>
      </div>
      <div>
        <label className="inline-flex mt-3 items-center">
          <input
            type="checkbox"
            className="form-checkbox text-red-500"
            {...register("termsAccepted")}
            name='termsAccepted'
            onChange={(e) => { handleInputChange(e, clearErrors()) }}
            value={userApi.termsAccepted as string}
          />
          <span className="ml-2 text-gray-700">I accept the terms and conditions</span>
        </label>
        {errors && !users?.termsAccepted && <p className='text-red-500 mt text-xs'>{errors?.termsAccepted?.message}</p>}
      </div>
    </div>

  );
}
export default TravelReasons