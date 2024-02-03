import { z } from 'zod'

const evnSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = evnSchema.parse(import.meta.env)
