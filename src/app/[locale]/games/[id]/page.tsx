'use client';
import { useEffect } from 'react';

import { useFindGames } from '@/hooks/useFindGame';
import { useFindDLCs } from '@/hooks/useFindDlc';

interface pageProps {
  params: { id: string };
}

export default function DetailGame({ params }: pageProps) {
  const { gameDetail, fetchGameById } = useFindGames();
  const { gameDLCs, fetchDLCs } = useFindDLCs();

  useEffect(() => {
    if (!gameDetail) {
      fetchGameById(Number(params.id));
    }
  }, [gameDetail, fetchGameById, params.id]);

  useEffect(() => {
    if (!gameDLCs) {
      fetchDLCs({ gamePK: params.id });
    }
  }, [gameDLCs, fetchDLCs, params.id]);

  return (
    <div>
      <h1>{gameDetail?.name}</h1>
      <p>{gameDetail?.description}</p>
      <br></br>
      <br></br>
      {gameDLCs?.map((DLC) => {
        return (
          <div key={`dlc-item-${DLC.id}`}>
            <h2>{DLC.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
