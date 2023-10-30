import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultLogo: StoryObj<typeof Logo> = {};

DefaultLogo.args = {
  color: '#000000',
};
