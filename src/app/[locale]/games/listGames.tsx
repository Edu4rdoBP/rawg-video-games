'use client';
import { GameCard } from '@/components/GameCard';
import { Pagination } from '@/components/Pagination';
import { useGameList } from '@/hooks/useGameList';

export function ListGames() {
  const { gameList, fetchGames, loading } = useGameList();
  return (
    <Pagination games={gameList} fetchGame={fetchGames} loading={loading}>
      {gameList?.map((item) => {
        return (
          <GameCard
            id={item.id}
            backgroundImage={item.background_image}
            genres={item.genres}
            metacritic={item.metacritic}
            name={item.name}
            platforms={item.platforms}
            key={`game-card-${item.id}`}
          />
        );
      })}
    </Pagination>
  );
}
