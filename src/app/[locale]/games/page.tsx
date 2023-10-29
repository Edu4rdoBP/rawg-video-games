'use client';
import * as S from '@/styles/main';
import { ListGames } from '../../../templates/ListGames/listGames';
import { DetailedGameCard } from '@/components/DetailedGameCard';

export function InitialPage() {
  return (
    <S.Main>
      <DetailedGameCard id={960873} />
      <ListGames />
    </S.Main>
  );
}
