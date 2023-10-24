import { ITranslateProps } from "./Globals";

export interface IHeaderProps {
  type?: 'home' | 'default';
}

export interface IHeadersLayoutProps extends ITranslateProps {
  onClick?: (argument?: any) => void;
}
