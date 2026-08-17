import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter ao menos 3 caracteres'),

  email: z.email('Informe um e-mail válido'),

  message: z.string().min(20, 'A mensagem deve ter ao menos 20 caracteres'),

  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
