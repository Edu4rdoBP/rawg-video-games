'use client';
import * as S from './style';
import { IGameCover } from './type';

export function GameCover({ image }: IGameCover) {
  return <S.Card image={image}></S.Card>;
}
