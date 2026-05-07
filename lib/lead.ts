import { z } from 'zod'

/**
 * Lead form contract — used on both client (RHF resolver) and server (API route).
 * Mirrors the field set the user defined: Full Name, Phone, Email, Address, Service Type.
 * `consent` and `honeypot` (`_company`) are added for compliance + bot mitigation.
 */
export const SERVICE_OPTIONS = [
  'ACM Installation',
  'Metal Cladding',
  'Exterior Facade Systems',
  'Commercial',
  'Residential',
  'Industrial',
  'Other / Not sure yet',
] as const

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(80, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(32, 'Phone number is too long.')
    .regex(/^[+()0-9\s-]+$/, 'Phone number contains invalid characters.'),
  address: z.string().trim().min(3, 'Please share the project address or city.').max(160),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: 'Please choose a service.' }),
  }),
  message: z.string().trim().max(2000, 'Message is too long.').optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((v) => v === true, 'Please agree to be contacted about your project.'),
  // Honeypot — must be empty
  _company: z.string().max(0).optional().or(z.literal('')),
})

export type LeadInput = z.infer<typeof leadSchema>
