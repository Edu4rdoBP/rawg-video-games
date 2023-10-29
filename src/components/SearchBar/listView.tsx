import { IGameInfo } from '@/@types/games';
import Link from 'next/link';
import Skeleton from '../Skeleton';
import * as S from './style';
import { ITranslateProps } from '@/@types/globals';
import Image from 'next/image';

interface IProps extends ITranslateProps {
  games: IGameInfo[] | undefined;
  loading: boolean;
}

//Renders the options generated when accessing the searchBar
export function ListView({ games, loading, t }: IProps) {
  return (
    <S.ListViewWrapper>
      <div className='games-search-list-view'>
        {loading ? (
          <Skeleton />
        ) : (
          <SearchBarResult games={games} t={t} loading={loading} />
        )}
      </div>
    </S.ListViewWrapper>
  );
}

//Displays data to the user
const SearchBarResult = ({ games, t }: IProps) => {
  return games && games.length > 0 ? (
    games.map((item) => (
      <div key={`item-card-${item.id}`} className='game-list-item'>
        <Image
          loader={() => item.background_image || ''}
          src={item.background_image || ''}
          width={20}
          height={20}
          alt={t('altImage')}
        />
        <Link href={`/games/${item.id}`}>{item.name}</Link>
      </div>
    ))
  ) : (
    <p>{t('noGameFound')}</p>
  );
};
