'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface ContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
}

interface ActionsProviderProps {
  children: ReactNode;
}

const FontSizeContext = createContext<ContextProps>({
  fontSize: 16,
  setFontSize: () => {},
});

export const FontSizeProvider: React.FC<ActionsProviderProps> = ({
  children,
}: ActionsProviderProps) => {
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSizeContext = () => useContext(FontSizeContext);
