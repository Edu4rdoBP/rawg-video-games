'use client';
import { IGenres, IPlatformByGame } from '@/@types/games';
import Link from 'next/link';
import * as S from './style';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '../../components/Badge';
import { AiFillStar } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Genres } from '../../components/Genres';
import { Platforms } from '../../components/Platforms';

interface IGameCard {
  id: number;
  name: string;
  backgroundimage?: string;
  genres: IGenres[];
  platforms?: IPlatformByGame[];
  metacritic: number;
  route?: string;
}

//Game Card Layout
export function GameCard({
  id,
  name,
  backgroundimage,
  genres,
  platforms,
  metacritic,
  route = `/games/${id}`,
}: IGameCard) {
  const t = useTranslations('Games');
  const theme = useTheme();
  return (
    <S.GameCard>
      <Link href={route}>
        <Image
          loader={() => backgroundimage || ``}
          src={backgroundimage || ``}
          width={100}
          height={200}
          alt={t('altImage')}
        />

        <S.ContentCard>
          <div>
            <h3>{name}</h3>
            <div className='flex justify-between'>
              <Genres data={genres} />
              <Badge
                label={String(metacritic)}
                size={'small'}
                color={theme.white}
                icon={<AiFillStar fill={theme.yellow} />}
              />
            </div>
          </div>
          <S.Media>
            <Platforms t={t} data={platforms} />
            <span>{t('seeMore')}</span>
          </S.Media>
        </S.ContentCard>
      </Link>
    </S.GameCard>
  );
}
