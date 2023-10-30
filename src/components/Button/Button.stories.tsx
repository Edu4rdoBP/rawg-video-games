import { Meta } from '@storybook/react';
import { Button } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/theme';
import { IButtonProps } from './type';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => <ThemeProvider theme={defaultTheme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const DefaultButton = (args: IButtonProps) => <Button {...args} />;

DefaultButton.args = {
  color: 'primary',
  children: 'Button',
};
