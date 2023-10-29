'use client';
import * as S from './style';
import { IGameCover } from './type';

//Game cover layout
export function GameCover({ image, direction }: IGameCover) {
  const allCards: { [key: string]: JSX.Element } = {
    vertical: <S.VerticalCard image={image}></S.VerticalCard>,
    horizontal: <S.HorizontalCard image={image}></S.HorizontalCard>,
  };
  return <>{direction ? allCards[direction] : allCards['vertical']}</>;
}
