import { useFindGames } from '@/hooks/useFindGame';
import { useEffect } from 'react';
import * as S from './style';
import Skeleton from '../../components/Skeleton';
import { Tag } from '../../components/Tag';
import { InfoGame } from '../../components/GameMetadata';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';

interface IDetailedGameCardProps {
  id: number;
  ishome?: boolean;
}

export function DetailedGameCard({ id, ishome }: IDetailedGameCardProps) {
  const { gameDetail, fetchGameById, loading } = useFindGames();
  const router = useRouter();
  const t = useTranslations('Games');

  useEffect(() => {
    if (!gameDetail && !loading) {
      fetchGameById(id);
    }
  }, [fetchGameById, gameDetail, id, loading]);

  const RenderButton = ({ ishome }: IDetailedGameCardProps) => {
    return ishome ? (
      <div className='w-60 mb-[25px]'>
        <Tag color='blur'>{t('highlighted')}</Tag>
      </div>
    ) : (
      <Button onClick={() => router.back()} color={'primary'}>
        <BsArrowLeft /> {t('textButtonReturn')}
      </Button>
    );
  };

  return gameDetail ? (
    <div accessKey='1' className='my-[40px]'>
      <RenderButton ishome={ishome} id={id} />
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
