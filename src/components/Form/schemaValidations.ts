import { z } from "zod";

const phoneRegex = new RegExp(/^\+\d{3} \d{3} \d{3} \d{3}$/);

export const userSchema = z.object({
  firstName: z.string().min(1, "Type your first name").max(30),
  lastName: z.string().min(1, "Type your last name").max(30),
  email: z.string().min(1, "Type your e-mail").email("Invalid email"),
  address: z.string().min(1, "Type your address"),
  city: z.string().min(1, "Type your city"),
  postcode: z.string().min(1, "Type your code"),
  country: z.string().min(1, "Type your country"),
  phone: z.string().regex(phoneRegex, "Invalid country Number"),
});
