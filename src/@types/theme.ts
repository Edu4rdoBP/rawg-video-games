import { ITheme } from '@/styles/theme';

export interface IThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}
