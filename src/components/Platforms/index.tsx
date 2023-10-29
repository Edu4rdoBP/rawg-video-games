'use client';
import { IPlatformByGame } from '@/@types/games';
import { platformsIcons } from '../../constants/platforms';
import Image from 'next/image';
import * as S from './style';
import { ITranslateProps } from '@/@types/globals';
interface IPlatformsProps extends ITranslateProps {
  data?: IPlatformByGame[];
}

//Returns the icons for the platforms the game is available on
export function Platforms({ data, t }: IPlatformsProps) {
  const getPlatformIcon = (slug: string) => {
    const platform = platformsIcons.find((platform) =>
      slug.match(platform.name),
    );
    if (platform) {
      return (
        <S.Icon key={slug}>
          <Image
            src={platform.path}
            width={10}
            height={10}
            alt={t('altImage')}
          />
        </S.Icon>
      );
    }
    return null;
  };

  return (
    <S.Wrapper className='font-small'>
      <div>
        <p>{t('info.plataforms')}</p>
        {data?.map((item) => {
          const { slug } = item.platform;
          return getPlatformIcon(slug);
        })}
      </div>
    </S.Wrapper>
  );
}
