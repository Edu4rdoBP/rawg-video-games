'use client';

import { IPlatformList } from '@/@types/Games';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface IContextProps {
  platforms: IPlatformList[] | undefined;
  setPlatforms: Dispatch<SetStateAction<IPlatformList[] | undefined>>;
}

interface ActionsProviderProps {
  children: ReactNode;
}

export const PlatformContext = createContext<IContextProps>({
  platforms: undefined,
  setPlatforms: () => {},
});

export const PlatformProvider: React.FC<ActionsProviderProps> = ({
  children,
}: ActionsProviderProps) => {
  const [platforms, setPlatforms] = useState<IPlatformList[] | undefined>(
    undefined,
  );

  return (
    <PlatformContext.Provider value={{ platforms, setPlatforms }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlataforms = () => useContext(PlatformContext);
