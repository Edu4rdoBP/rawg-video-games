"use client";
import { useTheme } from '@/contexts/Theme';
import * as S from '@/styles/components/Footer'
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Header');
  const { theme } = useTheme();

  return (
    <S.Footer theme={theme}>
      <div>teste</div>
    </S.Footer>
  )
}