import { Meta, StoryObj } from '@storybook/react';
import { GameCover } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/GameCover',
  component: GameCover,
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultGameCover: StoryObj = {};
