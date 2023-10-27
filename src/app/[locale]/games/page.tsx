import { Pagination } from '@/components/Pagination';
import { useGameList } from '@/hooks/useGameList';
import Link from 'next/link';
export function ListGames() {
  const { gameList, fetchGames, loading } = useGameList();
  return (

    <Pagination data={gameList} fetchData={fetchGames} loading={loading}>
      {gameList?.map((item) => {
        return (
          <div key={`item-card-${item.id}`}>
            <Link href={`/games/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </Pagination>
  );
}
