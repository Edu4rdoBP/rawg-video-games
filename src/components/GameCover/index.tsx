'use client';
import * as S from './style';
import { IGameCover } from './type';

//Game cover layout
export function GameCover({ url, direction }: IGameCover) {
  const allCards: { [key: string]: JSX.Element } = {
    vertical: <S.VerticalCard url={url}></S.VerticalCard>,
    horizontal: <S.HorizontalCard url={url}></S.HorizontalCard>,
  };
  return <>{direction ? allCards[direction] : allCards['vertical']}</>;
}
