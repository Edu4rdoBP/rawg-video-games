'use client';

import { useTranslations } from 'next-intl';
import CollapseHeader from './CollpseHeader';
import { useRouter } from 'next/navigation';
import { IHeaderProps } from '@/@types/Header';
import AccessibleHeader from './AccessibleHeader';
import StaticHeader from './StaticHeader';

export default function Header({ type }: IHeaderProps) {
  const t = useTranslations('Header');
  const { push } = useRouter();
  const pushToHome = () => {
    push('/');
  };

  const headerProps = {
    onClick: pushToHome,
    t: t,
  };

  const allHeaders: { [key: string]: JSX.Element } = {
    default: <CollapseHeader {...headerProps} />,
    home: (
      <>
        <AccessibleHeader /> <StaticHeader {...headerProps} />
      </>
    ),
  };

  return <>{type ? allHeaders[type] : allHeaders['default']}</>;
}
