import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';
import { IBadgeProps } from './type';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultBadge: StoryObj<typeof Badge> = {};

DefaultBadge.args = {
  bgcolor: 'primary',
  color: 'white',
  size: 'big',
  label: 'Badge',
};
