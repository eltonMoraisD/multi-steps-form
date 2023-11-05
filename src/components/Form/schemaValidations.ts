import { z } from "zod";

const phoneRegex = new RegExp(/^\+\d{3}\d{3}\d{3}\d{3}$/);

export const userSchema = z.object({
  firstName: z.string().min(1, "*required").max(30),
  lastName: z.string().min(1, "*required").max(30),
  email: z.string().min(1, "*required").email("*Invalid email !"),
  address: z.string().min(1, "*required"),
  city: z.string().min(1, "*required"),
  postcode: z.string().min(1, "*required"),
  country: z.string().min(1, "*required"),
  phone: z.string().regex(phoneRegex, "Invalid country Number"),
  accountType: z
    .string()
    .refine((value) => value === "personal" || value === "business", {
      message: "Please select an account type: 'personal' or 'business'",
    }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions." }),
  }),
});
