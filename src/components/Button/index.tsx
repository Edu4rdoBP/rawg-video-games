import { IButtonProps } from '@/@types/Button';
import * as S from '@/styles/components/Button';

export default function Button({ children, onClick, type }: IButtonProps) {
  const allButtons: { [key: string]: JSX.Element } = {
    default: <S.Button onClick={onClick}>{children}</S.Button>,
    customButton: <S.CustomButton onClick={onClick}>{children}</S.CustomButton>,
  };

  return <>{type ? allButtons[type] : allButtons['default']}</>;
}
