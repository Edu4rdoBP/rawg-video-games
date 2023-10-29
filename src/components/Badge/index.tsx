import * as S from './style';
import { IBadgeProps } from './type';

//Field to demonstrate any data
export function Badge({ size, label, color, icon, bgcolor }: IBadgeProps) {
  return (
    <S.Badge
      color={color}
      className={size ? 'font-tiny' : 'font-moderate'}
      size={size}
      bgcolor={bgcolor}
    >
      <div className='flex gap-2 items-center'>
        {icon} {label}
      </div>
    </S.Badge>
  );
}
