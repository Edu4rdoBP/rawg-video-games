import {
  IDLCsInput,
  IGameDetails,
  IGameInfo,
  IGameInput,
} from '@/@types/Games';

export interface IGameService {
  fetchGameById(id: number): Promise<IGameDetails>;
  fetchGames(input: IGameInput): Promise<IGameInfo[]>;
  fetchDLCs(input: IDLCsInput): Promise<IGameInfo[]>;
}
