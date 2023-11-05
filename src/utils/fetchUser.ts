import { IUser } from "@/types/types";

export const fetchUser = (): Promise<{ data: IUser }> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: {
          firstName: "Pippo",
          lastName: "Inzaghi",
          email: "",
          phone: "+352 123 456 789",
          address: "",
          city: "",
          postcode: "",
          country: "Luxembourg",
          accountType: "",
          termsAccepted: "",
        },
      });
    }, 1000);
  });
};
