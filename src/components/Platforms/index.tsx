import { IPlatformByGame } from '@/@types/Games';
interface IPlatformsProps {
  data: IPlatformByGame[];
}

export function Platforms({ data }: IPlatformsProps) {
  return (
    <div className='flex gap-[4px]'>
      {data.map((item) => {
        return <></>;
      })}
    </div>
  );
}
