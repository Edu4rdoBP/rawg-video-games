export interface ITheme {
  primary: string;
  secondary: string;
  textMuted: string;
  label: string;
  badge: string;
  white: string;
  black: string;
  spaceGray: string;
  yellow: string;
  blur: string;
}

export const defaultTheme: ITheme = {
  primary: '#712FFF',
  secondary: '#030303',
  textMuted: '#848586',
  label: '#A074FF',
  badge: '#242424',
  white: '#FFFFFF',
  black: '#0F0F0F',
  spaceGray: '#282431',
  yellow: '#CCE235',
  blur: 'rgba(255, 255, 255, 0.05)',
};

export const contrastTheme: ITheme = {
  primary: '#030923',
  secondary: '#030303',
  textMuted: '#848586',
  label: '#A074FF',
  badge: '#242424',
  white: '#FFFFFF',
  black: '#0F0F0F',
  spaceGray: '#282431',
  yellow: '#CCE235',
  blur: 'rgba(0, 0, 0, 0.2)',
};
