import { z } from "zod";

export const uploadSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.any().optional(),
  // images: z.array(z.instanceof(File)).min(1, "At least one image is required").max(10, "You can upload up to 10 images"),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
