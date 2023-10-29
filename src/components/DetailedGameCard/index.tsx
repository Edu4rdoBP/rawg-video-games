import { useFindGames } from '@/hooks/useFindGame';
import { useEffect } from 'react';
import * as S from './style';
import Skeleton from '../../components/Skeleton';
import { Tag } from '../../components/Tag';
import { InfoGame } from '../../components/InfoGame';

interface IDetailedGameCardProps {
  id: number;
}

export function DetailedGameCard({ id }: IDetailedGameCardProps) {
  const { gameDetail, fetchGameById, loading } = useFindGames();

  useEffect(() => {
    if (!gameDetail && !loading) {
      fetchGameById(id);
    }
  }, [fetchGameById, gameDetail, id, loading]);

  return gameDetail ? (
    <div accessKey='1'>
      <div className='w-60 mb-[25px]'>
        <Tag color='blur'>Jogo em destaque</Tag>
      </div>
      <S.Card>
        <S.BackgroundImage backgroundimage={gameDetail.background_image} />
        <S.Content>
          <h2 className='font-large'>{gameDetail.name}</h2>
          <InfoGame game={gameDetail} />
        </S.Content>
      </S.Card>
    </div>
  ) : (
    <Skeleton type='detailedCard' />
  );
}
