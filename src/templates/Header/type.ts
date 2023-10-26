import { ITranslateProps } from '../../@types/Globals';

export interface IHeaderProps {
  type?: 'home' | 'default';
}

export interface IHeadersLayoutProps extends ITranslateProps {
  onClick?: (argument?: unknown) => void;
}
