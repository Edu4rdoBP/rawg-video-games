export interface ITheme {
  primary: string;
  secondary: string;
}

export interface IThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}
