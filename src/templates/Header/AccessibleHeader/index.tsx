'use client';

import { ITranslateProps } from '@/@types/Globals';
import AccessibleItems from '@/components/AccessibleItems';
import Select from '@/components/Select';
import { useTheme } from '@/contexts/Theme';
import * as S from '@/styles/components/Header';
import { useLocale } from 'next-intl';
import { lang } from '@/constants/Lang';

export default function AccessibleHeader({ t }: ITranslateProps) {
  const { theme } = useTheme();
  const locale = useLocale()

  return (
    <S.AccessibleHeader theme={theme}>
      <AccessibleItems t={t} />
      <Select type='selectLanguage' data={lang} defaultData={locale} />
    </S.AccessibleHeader>);
}
