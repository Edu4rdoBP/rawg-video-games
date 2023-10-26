import { IGameInfo } from '@/@types/Games';
import Link from 'next/link';
import Skeleton from '../Skeleton';

interface IProps {
  games: IGameInfo[] | undefined;
  loading: boolean;
}
export function ListView({ games, loading }: IProps) {
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        games?.map((item) => {
          return (
            <div key={`item-card-${item.id}`}>
              <Link href={`/games/${item.id}`}>{item.name}</Link>
            </div>
          );
        })
      )}
    </div>
  );
}
