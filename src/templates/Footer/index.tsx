import * as S from './Footer';

import { useTheme } from '@/contexts/Theme';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <S.Footer theme={theme}>
      <div>teste</div>
    </S.Footer>
  );
}
