import { Meta, StoryObj } from '@storybook/react';
import Skeleton from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultSkeleton: StoryObj = {};
