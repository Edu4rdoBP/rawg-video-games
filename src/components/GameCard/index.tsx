'use client';
import { IGenres, IPlatformInfo } from "@/@types/Games"
import Link from "next/link";
import * as S from './style';
import Image from "next/image";
import { useTranslations } from "next-intl";

interface IGameCard {
  id: number;
  name: string;
  backgroundImage: string;
  genders: IGenres[];
  platforms: IPlatformInfo[];
  metacritic: number;
}
export function GameCard({ id, name, backgroundImage, genders, platforms, metacritic }: IGameCard) {
  const t = useTranslations("Game");
  console.log('backgroundb', backgroundImage);
  return (
    <Link href={`/games/${id}`}>
      <S.GameCard>
        <div><Image loader={() => backgroundImage} src={backgroundImage} width={100} height={200} alt={t('altImage', { name: name })} /></div>
        <div>
          {name}
          <div>{genders.map((item) => {
            return item.name
          })}</div>
        </div>

      </S.GameCard>
    </Link>
  )
}