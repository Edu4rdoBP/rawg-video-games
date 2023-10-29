import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/globals.css';

import { lato, poppins } from '@/fonts';
import { Header } from '@/templates/Header';
import Provider from '../../providers/providers';
import Footer from '@/templates/Footer';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { AccessibleHeader } from '@/templates/AccessibleHeader';
interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: 'Get Over Here',
  description: 'Games Plataform',
};

export default async function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${lato.variable} ${poppins.variable} wrapper`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <header>
              <AccessibleHeader />
              <Header />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
