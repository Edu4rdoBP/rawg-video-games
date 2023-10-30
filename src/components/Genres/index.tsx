import { IGenres } from '@/@types/games';
import { Badge } from '../Badge';

interface IGenresProps {
  data: IGenres[];
}

//List of genres
export function Genres({ data }: IGenresProps) {
  return (
    <div className='flex gap-[4px] flex-wrap'>
      {data.map((item) => {
        return (
          <Badge
            label={item.name}
            color={'primary'}
            size={'small'}
            key={`badger-${item.name}`}
          />
        );
      })}
    </div>
  );
}
