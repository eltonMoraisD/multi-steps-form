import { IUser } from "@/types/types";
import { ZodType, z } from "zod";

const phoneRegex = new RegExp(/^\+\d{3}\s\d{9}$/);

export const formSchema: ZodType<IUser> = z.object({
  firstName: z.string().min(1, "Type your first name").max(30),
  lastName: z.string().min(1, "Type your last name").max(30),
  email: z.string().min(1, "Type your e-mail").email("Invalid email"),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  address: z.string().min(1, "Type your address"),
  city: z.string().min(1, "Type your city"),
  state: z.string().min(1, "Type your state"),
  postcode: z.string().min(1, "Type your code"),
  country: z.string().min(1, "Type your country"),
});
