'use client';
import { useEffect } from 'react';

import { useFindGames } from '@/hooks/useFindGame';
import { ListGamesDLCs } from '@/templates/ListDLCs';
import { Main } from '@/styles/main';
import { GameCover } from '@/components/GameCover';

interface pageProps {
  params: { id: string };
}

export default function DetailGame({ params }: pageProps) {
  const { gameDetail, fetchGameById } = useFindGames();
  useEffect(() => {
    if (!gameDetail) {
      fetchGameById(Number(params.id));
    }
  }, [gameDetail, fetchGameById, params.id]);

  return (
    <Main>
      <h1>{gameDetail?.name}</h1>
      <p>{gameDetail?.description}</p>
      <GameCover image={gameDetail?.background_image} />
      <br></br>
      <br></br>
      <ListGamesDLCs id={params.id} />
    </Main>
  );
}
