import { IGenres } from '@/@types/games';
import { Badge } from '../Badge';
import { useTheme } from 'styled-components';

interface IGenresProps {
  data: IGenres[];
}

export function Genres({ data }: IGenresProps) {
  const theme = useTheme();
  return (
    <div className='flex gap-[4px] flex-wrap'>
      {data.map((item) => {
        return (
          <Badge
            label={item.name}
            color={theme.primary}
            size={'small'}
            key={`badger-${item.name}`}
          />
        );
      })}
    </div>
  );
}
