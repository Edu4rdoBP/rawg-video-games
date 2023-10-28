'use client';
import * as S from './style';
import LazyLoad from 'react-lazy-load';
import Image from 'next/image';

import Link from 'next/link';
import { getMenuItems } from './_constants';

export const SocialNetworks = () => {
  const menuItems = getMenuItems();

  return (
    <S.SocialNetworks>
      {menuItems.map((item) => (
        <Link href={item.href} target='_blank' key={item.title}>
          <LazyLoad offset={700}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.size}
              height={item.size}
              loading='lazy'
            />
          </LazyLoad>
        </Link>
      ))}
    </S.SocialNetworks>
  );
};
