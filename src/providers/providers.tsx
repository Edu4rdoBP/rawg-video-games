'use client';
import { FontSizeProvider } from '@/contexts/font';
import { defaultTheme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface IProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: IProviderProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <FontSizeProvider>{children}</FontSizeProvider>
      </ThemeProvider>
    </>
  );
}
