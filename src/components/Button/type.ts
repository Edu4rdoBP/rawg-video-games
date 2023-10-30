import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonPropsLayout {
  color?: string;
}

export interface IButtonProps extends IButtonPropsLayout {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
