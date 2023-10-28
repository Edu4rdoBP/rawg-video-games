import { useContext, useState } from 'react';

import { IPlatformsInput, IPlatformList } from '@/@types/Games';
import { GameService } from '@/services/games/game.service';
import { PlatformContext } from '@/contexts/Games/platform';

export const usePlatformsList = (): {
  platforms: IPlatformList[] | undefined;
  loading: boolean;
  error: Error | null;
  fetchPlatforms: (input?: IPlatformsInput) => void;
} => {
  const { platforms, setPlatforms } = useContext(PlatformContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchPlatforms = async (input?: IPlatformsInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchPlatforms(input);
      setPlatforms(response);
    } catch (error) {
      setPlatforms(undefined);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    platforms,
    loading,
    error,
    fetchPlatforms,
  };
};
