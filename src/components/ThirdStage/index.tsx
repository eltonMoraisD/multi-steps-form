import { UseFormRegister, FieldErrors, } from 'react-hook-form';
import { motion } from 'framer-motion';

import { useFormContext } from '@/context/FormContext';

import { IUser } from '@/types/types';
import Input from '../Input';
import Combobox from '../Combobox';


interface IThirdStage {
  clearErrors: () => void
  users: IUser
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
}

const ThirdStage: React.FC<IThirdStage> = ({ clearErrors, users, register, errors }) => {
  const { handleInputChange } = useFormContext();

  const initialAnimation = { scale: 0, opacity: 0 };
  const scaleIn = { scale: 1, opacity: 1 };
  const scaleOut = { scale: 0, opacity: 0 };
  const transition = { duration: 0.6, ease: 'easeInOut' };

  return (
    <>
      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.1, ...transition }}
      >
        <Input
          error={errors.address}
          register={register}
          name="address"
          type="text"
          placeholder="Address"
          defaultValue={users.address}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />
      </motion.div>
      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.2, ...transition }}
      >
        <Input
          error={errors.city}
          register={register}
          name="city"
          type="text"
          placeholder="City"
          defaultValue={users.city}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />
      </motion.div>

      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.3, ...transition }}
      >
        <Input
          error={errors.postcode}
          register={register}
          name="postcode"
          type="text"
          placeholder="Postcode"
          defaultValue={users.postcode}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />
      </motion.div>


      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.4, ...transition }}
      >
        <Combobox
          error={errors.country}
          register={register}
          name="country"
          type="text"
          placeholder="Country"
          defaultValue={"Luxembourg"}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />
      </motion.div>

      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.5, ...transition }}
      >
        <Input
          error={errors.phone}
          register={register}
          name="phone"
          type="text"
          placeholder="Phone"
          defaultValue={users.phone}
          onChange={(e) => { handleInputChange(e, clearErrors()) }}
        />
      </motion.div>


    </>

  );
};

export default ThirdStage;
