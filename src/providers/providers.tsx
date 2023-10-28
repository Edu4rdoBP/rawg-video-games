'use client';
import { defaultTheme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface IProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: IProviderProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  );
}
