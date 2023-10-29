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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchGameById = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchGameById(id);

      const backgroundimage = response.background_image
        ? response.background_image
        : 'url(../../public/img/background2.jpg)';

      if (typeof window !== 'undefined') {
        const rootStyles = document.documentElement.style;
        rootStyles.setProperty('--background-image', `url(${backgroundimage})`);
      }

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
