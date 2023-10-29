'use client';

import { defaultTheme, contrastTheme, ITheme } from '@/styles/theme';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContrastContextType {
  theme: ITheme;
  toggleTheme: () => void;
}

const ContrastContext = createContext<ContrastContextType | undefined>(
  undefined,
);

interface ContrastProviderProps {
  children: ReactNode;
}

export const ContrastProvider: React.FC<ContrastProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ITheme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme: ITheme) =>
      prevTheme === contrastTheme ? defaultTheme : contrastTheme,
    );
  };

  return (
    <ContrastContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContrastContext.Provider>
  );
};

export const useContrast = () => {
  const context = useContext(ContrastContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
