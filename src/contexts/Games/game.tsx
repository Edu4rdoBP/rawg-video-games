'use client';

import { IGameInfo } from '@/@types/Games';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface IContextProps {
  games: IGameInfo[] | undefined;
  setGames: Dispatch<SetStateAction<IGameInfo[] | undefined>>;
}

interface ActionsProviderProps {
  children: ReactNode;
}

const GameContext = createContext<IContextProps>({
  games: undefined,
  setGames: () => {},
});

export const GameListProvider: React.FC<ActionsProviderProps> = ({
  children,
}: ActionsProviderProps) => {
  const [games, setGames] = useState<IGameInfo[] | undefined>(undefined);

  return (
    <GameContext.Provider value={{ games, setGames }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameListContext = () => useContext(GameContext);
