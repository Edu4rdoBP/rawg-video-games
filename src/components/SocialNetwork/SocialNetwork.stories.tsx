import { Meta, StoryObj } from '@storybook/react';
import { SocialNetworks } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export default {
  title: 'Components/SocialNetworks',
  component: SocialNetworks,
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultSocialNetworks: StoryObj = {};
