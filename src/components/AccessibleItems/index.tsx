import { useEffect } from 'react';
import { MdContrast } from 'react-icons/md';

import { ITranslateProps } from '@/@types/globals';
import * as S from '@/components/AccessibleItems/AccessibleItems';
import { Button } from '@/components/Button';
import { useGlobalContext } from '@/contexts/Font';

export default function AccessibleItems({ t }: ITranslateProps) {
  const { fontSize, setFontSize } = useGlobalContext();
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
