import { useState } from 'react';

import { IGameInfo, IGameInput } from '@/@types/games';
import { GameService } from '@/services/games/game.service';

export const useGameList = (): {
  gameList: IGameInfo[] | undefined;
  loading: boolean;
  error: Error | null;
  fetchGames: (input?: IGameInput) => Promise<void>;
} => {
  const [gameList, setGameList] = useState<IGameInfo[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchGames = async (input?: IGameInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchGames(input);
      setGameList(response);
    } catch (error) {
      setGameList([]);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    gameList,
    loading,
    error,
    fetchGames,
  };
};
