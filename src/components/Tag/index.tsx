import * as S from './style';
import { ITagProps } from './type';

export function Tag({ children, color }: ITagProps) {
  return <S.Content color={color}>{children}</S.Content>;
}
