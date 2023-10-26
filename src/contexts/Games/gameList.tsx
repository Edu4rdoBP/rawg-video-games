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
  gameList: IGameInfo[] | undefined;
  setGameList: Dispatch<SetStateAction<IGameInfo[] | undefined>>;
}

interface ActionsProviderProps {
  children: ReactNode;
}

const GameListContext = createContext<IContextProps>({
  gameList: undefined,
  setGameList: () => {},
});

export const GameListProvider: React.FC<ActionsProviderProps> = ({
  children,
}: ActionsProviderProps) => {
  const [gameList, setGameList] = useState<IGameInfo[] | undefined>(undefined);

  return (
    <GameListContext.Provider value={{ gameList, setGameList }}>
      {children}
    </GameListContext.Provider>
  );
};

export const useGameListContext = () => useContext(GameListContext);
