import { IGenres } from '@/@types/Games';
import { Badge } from '../Badge';

interface IGenresProps {
  data: IGenres[];
}

export function Genres({ data }: IGenresProps) {
  return (
    <div className='flex gap-[4px]'>
      {data.map((item) => {
        return (
          <Badge
            label={item.name}
            color='primary'
            isSmall
            key={`badger-${item.name}`}
          />
        );
      })}
    </div>
  );
}
