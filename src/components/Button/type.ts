import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonPropsLayout {
  color?: string;
}

export interface IButtonProps extends IButtonPropsLayout {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
