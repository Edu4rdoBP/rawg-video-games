import { Lato, Poppins, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '100', '300', '700', '900'],
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '100', '300', '700', '900'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '100', '300', '700', '900'],
});
