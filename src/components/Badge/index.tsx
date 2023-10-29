import * as S from './style';
import { IBadgeProps } from './type';

export function Badge({ size, label, color, icon, bgColor }: IBadgeProps) {
  return (
    <S.Badge
      color={color}
      className={size ? 'font-tiny' : 'font-moderate'}
      size={size}
      bgColor={bgColor}
    >
      <div className='flex gap-2 items-center'>
        {icon} {label}
      </div>
    </S.Badge>
  );
}
