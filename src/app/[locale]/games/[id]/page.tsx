'use client';
import { ListGamesDLCs } from '@/templates/ListGamesDLCs';
import { Main } from '@/styles/main';
import { ScreenshotList } from '@/templates/ScreenshotList';
import { DetailedGameInfo } from '@/templates/DetailedGameInfo';

interface pageProps {
  params: { id: string };
}

//Game details screen
export default function DetailGame({ params }: pageProps) {
  return (
    <Main>
      <DetailedGameInfo id={params.id} />
      <ScreenshotList id={params.id} />
      <ListGamesDLCs id={params.id} />
    </Main>
  );
}
