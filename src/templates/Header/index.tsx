'use client';
import Link from 'next/link';

import * as S from './style';

import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar';
import { Avatar } from '@/components/Avatar';

export function Header() {
  return (
    <S.Wrapper>
      <div className='order-2 md:order-1'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div className='w-[60%] order-3 md:order-2'>
        <SearchBar />
      </div>
      <div className='order-1 md:order-3'>
        <Avatar />
      </div>
    </S.Wrapper>
  );
}
