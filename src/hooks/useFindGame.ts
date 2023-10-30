import { useState } from 'react';

import { IGameDetails } from '@/@types/games';
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

  const setBackgroundImage = (response: IGameDetails) => {
    const backgroundimage = response.background_image
      ? response.background_image
      : 'url(../../public/img/background2.jpg)';

    if (typeof window !== 'undefined') {
      const rootStyles = document.documentElement.style;
      rootStyles.setProperty('--background-image', `url(${backgroundimage})`);
    }
  }

  const fetchGameById = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchGameById(id);

      //this method change background image after request
      setBackgroundImage(response);

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
