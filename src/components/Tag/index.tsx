import * as S from './style';
import { ITagProps } from './type';

//It is a component that tags sessions
export function Tag({ children, color }: ITagProps) {
  return <S.Content color={color}>{children}</S.Content>;
}
