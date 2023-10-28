import { IGameInfo } from '@/@types/Games';
import Link from 'next/link';
import Skeleton from '../Skeleton';
import * as S from './style';
import { ITranslateProps } from '@/@types/Globals';
import Image from 'next/image';

interface IProps extends ITranslateProps {
  games: IGameInfo[] | undefined;
  loading: boolean;
}
export function ListView({ games, loading, t }: IProps) {
  return (
    <S.ListViewWrapper>
      <div className='games-search-list-view'>
        {loading ? (
          <Skeleton />
        ) : games && games.length > 0 ? (
          games?.map((item) => {
            return (
              <div key={`item-card-${item.id}`} className='game-list-item'>
                <Image
                  loader={() => item.background_image || ``}
                  src={item.background_image || ``}
                  width={20}
                  height={20}
                  alt={''}
                />
                <Link href={`/games/${item.id}`}>{item.name}</Link>
              </div>
            );
          })
        ) : (
          <div>
            <p>{t('noGameFound')}</p>
          </div>
        )}
      </div>
    </S.ListViewWrapper>
  );
}
