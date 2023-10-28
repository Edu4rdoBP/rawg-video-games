'use client';
import { GameCard } from '@/components/GameCard';
import { useFindDLCs } from '@/hooks/useFindDlc';
import { Main } from '@/styles/main';
import * as S from './style';
import { useEffect } from 'react';

interface IpageProps {
  id: string;
}

export function ListGamesDLCs({ id }: IpageProps) {
  const { gameDLCs, fetchDLCs, loading } = useFindDLCs();

  useEffect(() => {
    if (!gameDLCs && !loading) {
      fetchDLCs({ gamePK: id });
    }
  }, [gameDLCs, fetchDLCs, id, loading]);

  return (
    <Main>
      <S.DLCContainer>
        {gameDLCs?.map((item) => {
          return (
            <GameCard
              id={item.id}
              backgroundImage={item.background_image}
              genres={item.genres}
              metacritic={item.metacritic}
              name={item.name}
              platforms={item.platforms}
              key={`game-card-${item.id}`}
            />
          );
        })}
      </S.DLCContainer>
    </Main>
  );
}
