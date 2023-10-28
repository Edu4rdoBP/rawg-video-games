import { IAuthors } from '@/@types/Games';
import * as S from '../style';
import { ITranslateProps } from '@/@types/Globals';

interface IInfoProps extends ITranslateProps {
  data?: IAuthors[];
  label: string;
}

export function Info({ data, t, label }: IInfoProps) {
  return (
    <div className='flex gap-[10px]'>
      <span className='uppercase'>{t(`info.${label}`)}</span>
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <S.Info key={`Info-item-${label}-${item.id}`}>{item.name}</S.Info>
          );
        })}
    </div>
  );
}
