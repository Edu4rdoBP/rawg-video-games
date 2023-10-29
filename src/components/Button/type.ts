import { ITheme } from '@/styles/theme';
import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonPropsLayout {
  color?: ITheme;
}

export interface IButtonProps extends IButtonPropsLayout {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
