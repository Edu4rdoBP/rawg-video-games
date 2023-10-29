import { ITranslateProps } from '../../@types/globals';

export interface IHeaderProps {
  type?: 'home' | 'default';
}

export interface IHeadersLayoutProps extends ITranslateProps {
  onClick?: (argument?: unknown) => void;
}
