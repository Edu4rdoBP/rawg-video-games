import { useState } from 'react';

import { IGameDetails } from '@/@types/Games';
import { GameService } from '@/services/games/game.service';

export const useFindGames = (): {
  gameDetail: IGameDetails | undefined;
  loading: boolean;
  error: Error | null;
  fetchGameById: (id: number) => void;
} => {
  const [gameDetail, setGameDetail] = useState<IGameDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchGameById = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchGameById(id);
      setGameDetail(response);
    } catch (error) {
      setGameDetail(undefined);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { gameDetail, loading, error, fetchGameById };
};
