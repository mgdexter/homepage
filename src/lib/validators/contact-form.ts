import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const ContactFormSchema = () => {
  const t = useTranslations('Shared');
  return z.object({
    name: z
      .string()
      .min(1, { message: t('nameIsrRequired') })
      .min(2, { message: t('mustBeAtLeast2') }),
    email: z
      .string()
      .min(1, { message: t('emailIsRequired') })
      .email(t('emailIsInvalid')),
    message: z.string().min(1, { message: t('messageIsRequired') }),
  });
};

export type TContactFormSchema = z.infer<ReturnType<typeof ContactFormSchema>>;
