import { IGameInfo } from '@/@types/Games';
import Link from 'next/link';
import Skeleton from '../Skeleton';
import * as S from './style';

interface IProps {
  games: IGameInfo[] | undefined;
  loading: boolean;
}
export function ListView({ games, loading }: IProps) {
  return (
    <S.ListViewWrapper>
      <div className='games-search-list-view'>
        {loading ? (
          <Skeleton />
        ) : (
          games?.map((item) => {
            return (
              <div key={`item-card-${item.id}`} className='game-list-item'>
                <img src={item.background_image} />
                <Link href={`/games/${item.id}`}>{item.name}</Link>
              </div>
            );
          })
        )}
      </div>
    </S.ListViewWrapper>
  );
}
