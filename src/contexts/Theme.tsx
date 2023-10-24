'use client';

import { ITheme } from '@/@types/Theme';
import { defaultTheme, contrastTheme } from '@/styles/theme';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme: ITheme) => (prevTheme === contrastTheme ? defaultTheme : contrastTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
