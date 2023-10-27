import * as S from './style';
import { IBadgeProps } from './type';

export function Badge({ isSmall, label, color, icon }: IBadgeProps) {
  return (
    <S.Badge
      color={color}
      className={isSmall ? 'font-tiny' : 'font-big'}
      isSmall={isSmall}
    >
      <div className='flex gap-2 items-center'>
        {icon} {label}
      </div>
    </S.Badge>
  );
}
