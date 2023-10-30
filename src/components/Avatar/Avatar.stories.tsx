import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultAvatar: StoryObj = {};
