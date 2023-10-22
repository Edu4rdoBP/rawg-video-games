import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'default' | 'customButton';
}
