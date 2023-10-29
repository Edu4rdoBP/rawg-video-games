'use client';
import { GameCover } from '@/components/GameCover';
import { useScreenshot } from '@/hooks/useScreenshot';
import { useEffect } from 'react';
import * as S from './style';
import { Tag } from '@/components/Tag';
import { useTranslations } from 'use-intl';

interface IpageProps {
  id: string;
}

export function ScreenshotList({ id }: IpageProps) {
  const { screenshot, fetchScreenshot, loading } = useScreenshot();
  const t = useTranslations('Games');
  useEffect(() => {
    if (!screenshot && !loading) {
      fetchScreenshot({ gamePK: id });
    }
  }, [screenshot, fetchScreenshot, id, loading]);

  return (
    <S.Wrapper>
      <div className='tag'>
        <Tag color='blur'>
          <h2 className='font-big'>{t('screenshots')}</h2>
        </Tag>
      </div>
      <S.Shots>
        {screenshot?.map((item) => {
          return (
            <GameCover
              direction='horizontal'
              image={item.image}
              key={`game-card-${item.id}`}
            />
          );
        })}
      </S.Shots>
    </S.Wrapper>
  );
}
