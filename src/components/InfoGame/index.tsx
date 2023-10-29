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
  detailed: boolean;
}

export function InfoGame({ game, detailed }: InfoGameProps) {
  const theme = useTheme();
  const t = useTranslations('Games');
  return (
    <S.Wrapper>
      <S.Description
        dangerouslySetInnerHTML={{ __html: game.description }}
        className='font-moderate'
      />
      <S.InfoData>
        <div className='uppercase mb-2'>
          {t('info.release', { date: game.released })}
        </div>
        <Info label='developer' t={t} data={game.developers} />
        <Info label='distributor' t={t} data={game.distributor} />
      </S.InfoData>
      <S.Statistics>
        <Genres data={game.genres}></Genres>
        {!detailed && (
          <Badge
            label={String(game.metacritic)}
            issmall={true}
            color='white'
            icon={<AiFillStar fill={theme.yellow} />}
          />
        )}
      </S.Statistics>
      <S.Media>
        <Platforms t={t} data={game.platforms} />
        {!detailed && <Link href={`/games/${game.id}`}>{t('seeMore')}</Link>}
      </S.Media>
    </S.Wrapper>
  );
}
