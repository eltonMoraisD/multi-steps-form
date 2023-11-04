import { UseFormRegister, FieldErrors, } from 'react-hook-form';

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

  return (
    <>
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
    </>
  );
};

export default SecondStage;
