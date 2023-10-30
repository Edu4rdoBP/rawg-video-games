import { IGenres, IPlatformByGame } from '@/@types/games';

export interface IGameCard {
  id: number;
  name: string;
  backgroundimage?: string;
  genres: IGenres[];
  platforms?: IPlatformByGame[];
  metacritic: number;
  route?: string;
}
