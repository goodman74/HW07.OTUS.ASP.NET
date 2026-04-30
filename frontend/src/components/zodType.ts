import { z } from "zod";

export const CustomerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  preferences: z.array(
    z.object({
      name: z.string(),
    })
  ),
  promoCodes: z.array(
    z.object({
      code: z.string(),
    })
  ),
});
