import { ITheme } from '@/styles/theme';
import { ReactNode } from 'react';

export interface IBadgePropsLayout {
  size?: 'small' | 'big';
  color: ITheme;
  bgColor?: ITheme;
}

export interface IBadgeProps extends IBadgePropsLayout {
  label: string;
  icon?: ReactNode;
}
