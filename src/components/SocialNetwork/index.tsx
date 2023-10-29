'use client';
import * as S from './style';
import Image from 'next/image';

import Link from 'next/link';
import { getMenuItems } from './_constants';

export const SocialNetworks = () => {
  const menuItems = getMenuItems();

  return (
    <S.SocialNetworks>
      {menuItems.map((item) => (
        <Link href={item.href} target='_blank' key={`item-logo-${item.title}`}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.size}
            height={item.size}
          />
        </Link>
      ))}
    </S.SocialNetworks>
  );
};
