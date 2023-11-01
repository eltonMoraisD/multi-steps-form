import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface IUser {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  address: String;
  city: String;
  state: String;
  postcode: String;
  country: String;
}

export interface IInputs {
  placeholder: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  error: any;
}

export interface IButtons {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}
