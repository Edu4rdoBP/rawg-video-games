'use client';
import { Pagination } from '@/components/Pagination';
export function ListGames() {
  return (
    // {gameList?.map((item) => {
    //     return (
    //       <div key={`item-card-${item.id}`}>
    //         <Link href={`/games/${item.id}`}>{item.name}</Link>
    //       </div>
    //     );
    //   })}
    <Pagination></Pagination>
  );
}
