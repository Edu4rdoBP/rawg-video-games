'use client';
import * as S from './style';
import { Main } from '@/styles/main';

import { Logo } from '@/components/Logo';
import { SocialNetworks } from '../../components/SocialNetwork';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <Main>
      <S.Row>
        <div>
          <Logo></Logo>
          <p>&copy; {t('disclaimer')}</p>
        </div>
        <SocialNetworks></SocialNetworks>
      </S.Row>
    </Main>
  );
}
