import { z } from "zod";

export type CustomerDto = z.infer<typeof CustomerSchema>;
export type PartnerDto = z.infer<typeof PartnerSchema>;

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

export const PartnerSchema = z.object({
  name: z.string(),
  isActive: z.boolean(),
  partnerLimits: z.array(
    z.object({
      id: z.string(),
      createdAt: z.coerce.date(),
      endAt: z.coerce.date(),
      limit: z.number(),
      issuedCount: z.number(),
    })
  ),
});

