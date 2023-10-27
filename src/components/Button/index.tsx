import * as S from './style';
import { IButtonProps } from './type';
import { useTheme } from 'styled-components';

export default function Button({ children, onClick, type }: IButtonProps) {
  const { theme } = useTheme();
  const allButtons: { [key: string]: JSX.Element } = {
    default: <S.Button onClick={onClick}>{children}</S.Button>,
    customButton: (
      <S.CustomButton theme={theme} onClick={onClick}>
        {children}
      </S.CustomButton>
    ),
  };

  return <>{type ? allButtons[type] : allButtons['default']}</>;
}
