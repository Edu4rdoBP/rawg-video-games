export interface ITheme {
    primary: string;
    text: string;
    dark: string;
}

export interface IThemeContextType {
    theme: ITheme;
    toggleTheme: () => void;
}