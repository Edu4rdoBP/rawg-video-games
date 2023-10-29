import { useState } from 'react';

import { IDLCsInput, IGameInfo } from '@/@types/games';
import { GameService } from '@/services/games/game.service';

export const useFindDLCs = (): {
  gameDLCs: IGameInfo[] | undefined;
  loading: boolean;
  error: Error | null;
  fetchDLCs: (input: IDLCsInput) => void;
} => {
  const [gameDLCs, setGameDLCs] = useState<IGameInfo[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const service: GameService = new GameService();

  const fetchDLCs = async (input: IDLCsInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await service.fetchDLCs(input);
      setGameDLCs(response);
    } catch (error) {
      setGameDLCs([]);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    gameDLCs,
    loading,
    error,
    fetchDLCs,
  };
};
