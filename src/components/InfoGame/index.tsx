import { IGameDetails } from '@/@types/Games';
import { Genres } from '../Genres';
import { Badge } from '../Badge';
import { useTheme } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { Info } from './Developers';
import { useTranslations } from 'next-intl';
import * as S from './style';
import { Platforms } from '../Platforms';
import Link from 'next/link';

interface InfoGameProps {
  game: IGameDetails;
}

export function InfoGame({ game }: InfoGameProps) {
  const theme = useTheme();
  const t = useTranslations('Games');
  console.log(game);
  return (
    <S.Wrapper>
      <S.Description>{game.description}</S.Description>
      <div>
        <div className='uppercase'>
          {t('info.release', { date: game.released })}
        </div>
        <Info label='developer' t={t} data={game.developers} />
        <Info label='distributor' t={t} data={game.distributor} />
      </div>
      <S.Statistics>
        <Genres data={game.genres}></Genres>
        <Badge
          label={String(game.metacritic)}
          isSmall={true}
          color='white'
          icon={<AiFillStar fill={theme.yellow} />}
        />
      </S.Statistics>
      <div className='flex justify-between align-center mt-4'>
        <Platforms t={t} data={game.platforms} />
        <Link href={`/games/${game.id}`}>{t('seeMore')}</Link>
      </div>
    </S.Wrapper>
  );
}
