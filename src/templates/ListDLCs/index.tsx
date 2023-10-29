'use client';
import { GameCard } from '@/components/GameCard';
import { useFindDLCs } from '@/hooks/useFindDlc';
import { useEffect } from 'react';
import * as S from './style';
import { Tag } from '@/components/Tag';
import { useTranslations } from 'use-intl';

interface IpageProps {
  id: string;
}

export function ListGamesDLCs({ id }: IpageProps) {
  const { gameDLCs, fetchDLCs, loading } = useFindDLCs();
  const t = useTranslations('Games');

  useEffect(() => {
    if (!gameDLCs && !loading) {
      fetchDLCs({ gamePK: String(id) });
    }
  }, [gameDLCs, fetchDLCs, id, loading]);

  return (
    <S.Wrapper>
      <div className='tag'>
        <Tag color='blur'>
          <h2 className='font-big'>{t('DLC')}</h2>
        </Tag>
      </div>
      <S.Cards>
        {gameDLCs?.map((item) => {
          return (
            <GameCard
              id={item.id}
              backgroundimage={item.background_image}
              genres={item.genres}
              metacritic={item.metacritic}
              name={item.name}
              platforms={item.platforms}
              key={`game-card-${item.id}`}
            />
          );
        })}
      </S.Cards>
    </S.Wrapper>
  );
}
