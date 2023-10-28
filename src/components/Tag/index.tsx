import * as S from './style';
import { ITagProps } from './type';

export function Tag({ children }: ITagProps) {
  return <S.Content>{children}</S.Content>;
}
