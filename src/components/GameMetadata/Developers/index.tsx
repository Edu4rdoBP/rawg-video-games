import { IAuthors } from '@/@types/games';
import * as S from '../style';
import { ITranslateProps } from '@/@types/globals';

interface IInfoProps extends ITranslateProps {
  data?: IAuthors[];
  label: string;
}

export function Info({ data, t, label }: IInfoProps) {
  return (
    <div className='infos'>
      <span className='uppercase'>{t(`info.${label}`)}</span>
      <div className='flex gap-[15px]'>
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <S.Info key={`Info-item-${label}-${item.id}`}>{item.name}</S.Info>
            );
          })}
      </div>
    </div>
  );
}
