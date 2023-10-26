'use client';
import Link from 'next/link';

import * as S from './style';

import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar';
import { Avatar } from '@/components/Avatar';

export function Header() {
  return (
    <S.Wrapper>
      <Link href='/'>
        <Logo />
      </Link>

      <SearchBar />
      <Avatar />
    </S.Wrapper>
  );
}
