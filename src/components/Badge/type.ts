import { ReactNode } from 'react';

export interface IBadgePropsLayout {
  isSmall?: boolean;
  color: string;
  bgColor?: string;
}

export interface IBadgeProps extends IBadgePropsLayout {
  label: string;
  icon?: ReactNode;
}
