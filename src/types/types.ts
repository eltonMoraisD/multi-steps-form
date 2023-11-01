export interface IUser {
  data: {
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    address: String;
    city: String;
    state: String;
    postcode: String;
    country: String;
  };
}

export interface IInputs {
  placeholder: string;
  type: string;
}

export interface IButtons {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}
