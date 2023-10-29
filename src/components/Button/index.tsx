import * as S from './style';
import { IButtonProps } from './type';

export function Button({ color, children, onClick }: IButtonProps) {
  return (
    <S.Button onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
}
