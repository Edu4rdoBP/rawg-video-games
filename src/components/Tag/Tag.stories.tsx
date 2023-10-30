import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultTag: StoryObj = {};
