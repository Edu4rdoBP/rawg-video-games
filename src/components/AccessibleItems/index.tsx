import { useEffect } from 'react';
import { MdContrast } from 'react-icons/md';

import * as S from './style';
import { Button } from '../Button';
import { useFontSizeContext } from '../../contexts/font';
import { useTranslations } from 'next-intl';

export default function AccessibleItems() {
  const { fontSize, setFontSize } = useFontSizeContext();
  const t = useTranslations('Header');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--font-size', `${fontSize}px`);
    }
  }, [fontSize]);

  const handleFontSize = (value: number) => {
    const newFont = fontSize + value;
    if (newFont >= 16 && newFont < 32) {
      setFontSize(newFont);
    }
  };
  return (
    <S.AccessibleItems className='font-medium'>
      <div>
        <Button onClick={() => handleFontSize(4)}>{t('increaseFont')}</Button>
        {' | '}
        <Button onClick={() => handleFontSize(-4)}>{t('decreaseFont')}</Button>
      </div>
      <div>
        <Button onClick={() => {}}>
          <MdContrast />
          {t('contrast')}
        </Button>
      </div>
    </S.AccessibleItems>
  );
}
