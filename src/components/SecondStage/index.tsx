import { UseFormRegister, FieldErrors, } from 'react-hook-form';
import { motion } from 'framer-motion';

import { useFormContext } from '@/context/FormContext';

import Input from '../Input';
import { IUser } from '@/types/types';

interface ISecondStage {
  clearErrors: () => void
  users: IUser
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
}

const SecondStage: React.FC<ISecondStage> = ({ clearErrors, users, register, errors }) => {
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
        transition={{ ...transition }}
      >
        <Input
          error={errors.firstName}
          register={register}
          name="firstName"
          type="text"
          placeholder="First name"
          defaultValue={users.firstName}
          onChange={(e) => {
            handleInputChange(e, clearErrors());
          }}
        />
      </motion.div>

      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.2, ...transition }}
      >
        <Input
          error={errors.lastName}
          register={register}
          name="lastName"
          type="text"
          placeholder="Last name"
          defaultValue={users.lastName}
          onChange={(e) => {
            handleInputChange(e, clearErrors());
          }}
        />
      </motion.div>

      <motion.div
        initial={initialAnimation}
        animate={scaleIn}
        exit={scaleOut}
        transition={{ delay: 0.3, ...transition }}
      >
        <Input
          error={errors.email}
          register={register}
          name="email"
          type="email"
          placeholder="Email"
          defaultValue={users.email}
          onChange={(e) => {
            handleInputChange(e, clearErrors());
          }}
        />
      </motion.div>


    </>
  );
};

export default SecondStage;
