'use client';
import { IPlatformByGame } from '@/@types/games';
import { platformsIcons } from '@/constants/platforms';
import Image from 'next/image';
import * as S from './style';
import { ITranslateProps } from '@/@types/globals';
interface IPlatformsProps extends ITranslateProps {
  data?: IPlatformByGame[];
}
export function Platforms({ data, t }: IPlatformsProps) {
  return (
    <S.Wrapper className='font-small'>
      <div>
        <p>{t('info.availableIn')}</p>
        {data?.map((item) => {
          const { slug } = item.platform;
          return platformsIcons.map((platform) => {
            if (slug.match(platform.name)) {
              return (
                <S.Icon key={item.platform.slug}>
                  <Image src={platform.path} width={10} height={10} alt='' />
                </S.Icon>
              );
            }
          });
        })}
      </div>
    </S.Wrapper>
  );
}
