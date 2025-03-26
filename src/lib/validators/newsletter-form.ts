import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const NewsletterFormSchema = () => {
  const t = useTranslations('Shared');
  return z.object({
    email: z
      .string()
      .min(1, { message: t('emailIsRequired') })
      .email(t('emailIsInvalid')),
  });
};

export type TNewsletterFormSchema = z.infer<
  ReturnType<typeof NewsletterFormSchema>
>;
