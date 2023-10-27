'use client';
import { defaultTheme } from '@/styles/theme';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface IProviderProps {
  children: ReactNode;
  locale: string;
}

export default async function Provider({ children, locale }: IProviderProps) {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
}
