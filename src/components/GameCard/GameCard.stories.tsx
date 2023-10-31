import { Meta, StoryObj } from '@storybook/react';
import { GameCard } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';
import { NextIntlClientProvider } from 'next-intl';

export default {
  title: 'Components/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <NextIntlClientProvider locale='en'>{Story()}</NextIntlClientProvider>
      </ThemeProvider>
    ),
  ],
} as Meta;

export const DefaultGameCard: StoryObj<typeof GameCard> = {};

DefaultGameCard.args = {
  backgroundimage:
    'https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg',
  id: 0,
  metacritic: 94,
  name: 'Resident Evil 4',
  genres: [
    {
      name: 'Tiro',
    },
  ],
  platforms: [
    {
      platform: {
        slug: 'xbox',
      },
    },
  ],
};
