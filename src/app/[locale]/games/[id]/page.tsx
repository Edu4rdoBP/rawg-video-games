'use client';
import { ListGamesDLCs } from '@/templates/ListDLCs';
import { Main } from '@/styles/main';
import { DetailedGameInfo } from '@/templates/DetailedGameInfo';

interface pageProps {
  params: { id: string };
}

export default function DetailGame({ params }: pageProps) {
  return (
    <Main>
      <DetailedGameInfo id={params.id} />
      <ListGamesDLCs id={params.id} />
    </Main>
  );
}
