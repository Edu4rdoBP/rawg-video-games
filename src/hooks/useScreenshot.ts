import { useState } from 'react';

import { IScreenshot, IScreenshotInput } from '@/@types/games';
import { GameService } from '@/services/games/game.service';

export const useScreenshot = (): {
  screenshot: IScreenshot[] | undefined;
  loading: boolean;
  error: Error | null;
  fetchScreenshot: (input: IScreenshotInput) => Promise<void>;
} => {
  const [screenshot, setScreenshot] = useState<IScreenshot[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchScreenshot = async (input: IScreenshotInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchScreenshot(input);
      setScreenshot(response);
    } catch (error) {
      setScreenshot([]);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    screenshot,
    loading,
    error,
    fetchScreenshot,
  };
};
