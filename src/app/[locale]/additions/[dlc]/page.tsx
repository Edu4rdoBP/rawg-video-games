'use client';
import { Main } from '@/styles/main';
import { DetailedGameCard } from '@/templates/DetailedGameCard';

interface IDLCScreen {
  params: { dlc: number };
}

//DLC Details screen
export default function DLCGame({ params }: IDLCScreen) {
  return (
    <Main>
      <DetailedGameCard id={params.dlc} />
    </Main>
  );
}
