'use client';
import { useFindGames } from '@/hooks/useFindGame';
import { useEffect } from 'react';
import * as S from './style';
import { GameCover } from '@/components/GameCover';
import { InfoGame } from '@/components/InfoGame';
import { Badge } from '@/components/Badge';
import { AiFillStar } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Button } from '@/components/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';

interface IDetailedGameInfo {
  id: string;
}

export function DetailedGameInfo({ id }: IDetailedGameInfo) {
  const { gameDetail, fetchGameById } = useFindGames();
  const theme = useTheme();
  const t = useTranslations('Games');
  const router = useRouter();

  const GoBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!gameDetail) {
      fetchGameById(Number(id));
    }
  }, [gameDetail, fetchGameById, id]);
  return (
    gameDetail && (
      <S.Wrapper>
        <Button color={theme.primary} onClick={GoBack}>
          <BsArrowLeft />
          {t('textButtonReturn')}
        </Button>
        <S.Container>
          <GameCover image={gameDetail.background_image} />
          <S.Content>
            <div className='title'>
              <h1 className='font-xlarge m-0'>{gameDetail.name}</h1>
              <Badge
                label={String(gameDetail.metacritic)}
                color={theme.white}
                bgColor={theme.blur}
                icon={<AiFillStar fill={theme.yellow} />}
              />
            </div>
            <InfoGame game={gameDetail} detailed />
          </S.Content>
        </S.Container>
      </S.Wrapper>
    )
  );
}
