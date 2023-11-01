import { IUser } from "@/types/IUser";

export const fetchUser = (): Promise<IUser> => {
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
          state: "",
          postcode: "",
          country: "Luxembourg",
        },
      });
    }, 1000);
  });
};
