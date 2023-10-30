import { ReactNode } from 'react';

export interface IBadgePropsLayout {
  size?: 'small' | 'big';
  color: string;
  bgcolor?: string;
}

export interface IBadgeProps extends IBadgePropsLayout {
  label: string;
  icon?: ReactNode;
}
