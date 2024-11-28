import { z } from 'zod';

export const profileSchema = z.object({
  fullname: z.string(),
  greeting: z.string().optional(),
  avatar: z.any().optional(),
  bestArt: z.any().optional(),
});
export type ProfileSchema = z.infer<typeof profileSchema>;
