import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface IUser {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  address: String;
  city: String;
  postcode: String;
  country: String;
  accountType: String;
  termsAccepted: String;
}
export interface IInputs {
  placeholder?: string;
  type: string;
  name: string;
  defaultValue?: String;
  value?: string;
  error: any;
  register: UseFormRegister<string | FieldValues | any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormContext {
  userApi: IUser;
  setUsersApi: Dispatch<SetStateAction<IUser>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  updateUser: (updatedUserData: IUser) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    clear?: any
  ) => void;
}

export interface IStepsContext {
  previousStep: number;
  currentStep: number;
  moveToNextStep: () => void;
  moveToPreviousStep: () => void;
}
