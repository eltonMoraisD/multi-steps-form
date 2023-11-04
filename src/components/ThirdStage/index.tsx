import { UseFormRegister, FieldErrors, } from 'react-hook-form';

import { useFormContext } from '@/context/FormContext';

import Input from '../Input';
import { IUser } from '@/types/types';
import Combobox from '../Combobox';


interface IThirdStage {
  clearErrors: () => void
  users: IUser
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
}

const ThirdStage: React.FC<IThirdStage> = ({ clearErrors, users, register, errors }) => {
  const { handleInputChange } = useFormContext();

  return (
    <>
      <Input
        error={errors.address}
        register={register}
        name="address"
        type="text"
        placeholder="Address"
        defaultValue={users.address}
        onChange={(e) => { handleInputChange(e, clearErrors()) }}
      />
      <Input
        error={errors.city}
        register={register}
        name="city"
        type="text"
        placeholder="City"
        defaultValue={users.city}
        onChange={(e) => { handleInputChange(e, clearErrors()) }}
      />
      <Input
        error={errors.postcode}
        register={register}
        name="postcode"
        type="text"
        placeholder="Postcode"
        defaultValue={users.postcode}
        onChange={(e) => { handleInputChange(e, clearErrors()) }}
      />

      <Combobox
        error={errors.country}
        register={register}
        name="country"
        type="text"
        placeholder="Country"
        defaultValue={users.country}
        onChange={(e) => { handleInputChange(e, clearErrors()) }}
      />
      <Input
        error={errors.phone}
        register={register}
        name="phone"
        type="text"
        placeholder="Phone"
        defaultValue={users.phone}
        onChange={(e) => { handleInputChange(e, clearErrors()) }}
      />
    </>

  );
};

export default ThirdStage;
