import * as S from './style';
import { IBadgeProps } from './type';

export function Badge({ isPrimary, label }: IBadgeProps) {
  return (
    <S.Badge
      className={isPrimary ? 'font-medium' : 'font-big'}
      isPrimary={isPrimary}
    >
      {label}
    </S.Badge>
  );
}
