export interface IHeaderProps {
  type?: 'home' | 'default';
}

export interface IHeadersLayoutProps {
  onClick: (argument?: any) => void;
  t: (key: string) => string;
}
