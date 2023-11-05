import { motion } from 'framer-motion';
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

  const initialAnimation = { scale: 0, opacity: 0 };
  const scaleIn = { scale: 1, opacity: 1 };
  const scaleOut = { scale: 0, opacity: 0 };
  const transition = { duration: 0.6, ease: 'easeInOut' };

  return (

    <div className="flex items-center flex-col justify-center">
      <p>Travel Reasons</p>
      <div className="flex text-center justify-center items-center mt-2 ">
        <motion.div
          initial={initialAnimation}
          animate={scaleIn}
          exit={scaleOut}
          transition={transition}
        >
          <label className="  inline-flex items-center mr-2">
            <input
              {...register("accountType")}
              // error={errors}
              type="radio"
              value="personal"
              name='accountType'
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />

            <span className="ml-2 mt-2 text-gray-700">Personal</span>
          </label>
          <label className="inline-flex items-center">
            <input
              // error={errors}
              type="radio"
              value="business"
              {...register("accountType")}
              name='accountType'
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <span className="ml-2 mt-2 text-gray-700">Business</span>

          </label>
          {errors.accountType && <p className='text-red-500  text-xs'>{errors?.accountType?.message}</p>}
        </motion.div>
      </div>
      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <label className="inline-flex mt-3 items-center">
          <input
            type="checkbox"
            className="form-checkbox text-red-500"
            {...register("termsAccepted")}
            name='termsAccepted'
            onChange={(e) => { handleInputChange(e, clearErrors()) }}
            value={userApi.termsAccepted as string}
          />
          <span className="ml-2 text-gray-700">Accecpt terms and conditions</span>
        </label>
        {errors.termsAccepted && !users?.termsAccepted && <p className='text-red-500 mt text-xs'>{errors?.termsAccepted?.message}</p>}
      </motion.div>
    </div>

  );
}
export default TravelReasons