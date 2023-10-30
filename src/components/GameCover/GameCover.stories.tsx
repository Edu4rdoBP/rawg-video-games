import { Meta, StoryObj } from '@storybook/react';
import { GameCover } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/GameCover',
  component: GameCover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultGameCover: StoryObj<typeof GameCover> = {};

DefaultGameCover.args = {
  url: 'https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg',
  direction: 'horizontal',
};
