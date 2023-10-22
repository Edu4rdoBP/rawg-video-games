import { IButtonProps } from '@/@types/Button';
import * as S from '@/styles/button';

export default function AccessibleItems({ children, onClick, type }: IButtonProps) {
  const allButtons: { [key: string]: JSX.Element } = {
    default: <button onClick={onClick}>{children}</button>,
    customButton: <S.CustomButton onClick={onClick}>{children}</S.CustomButton>,
  };

  return <>{type ? allButtons[type] : allButtons['default']}</>;
}
