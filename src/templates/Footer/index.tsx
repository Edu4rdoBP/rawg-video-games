"use client";
import * as S from './Footer';
import { Main } from '@/styles/main';

import { useTheme } from 'styled-components';
import { Logo } from '@/components/Logo';
import { SocialNetworks } from '../../components/SocialNetwork';
import { Button } from '@/components/Button';


export default function Footer() {

  return (
    <Main>
      <S.Row>
        <div>
          <Logo></Logo>
          <p>&copy; Get Over Here 2023 Todos os direitos reservados.</p>
        </div>
        <SocialNetworks></SocialNetworks>
      </S.Row>
    </Main>
  );
}