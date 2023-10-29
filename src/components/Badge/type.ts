import { ITheme } from '@/styles/theme';
import { ReactNode } from 'react';

export interface IBadgePropsLayout {
  size?: 'small' | 'big';
  color: ITheme;
  bgcolor?: ITheme;
}

export interface IBadgeProps extends IBadgePropsLayout {
  label: string;
  icon?: ReactNode;
}
