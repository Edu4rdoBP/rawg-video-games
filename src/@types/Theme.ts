export interface ITheme {
  primary: string;
  secondary: string;
  textMuted: string;
  label: string;
}

export interface IThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}
