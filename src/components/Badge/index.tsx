import * as S from './style';
import { IBadgeProps } from './type';

export function Badge({ issmall, label, color, icon, bgColor }: IBadgeProps) {
  return (
    <S.Badge
      color={color}
      className={issmall ? 'font-tiny' : 'font-moderate'}
      issmall={issmall}
      bgColor={bgColor}
    >
      <div className='flex gap-2 items-center'>
        {icon} {label}
      </div>
    </S.Badge>
  );
}
