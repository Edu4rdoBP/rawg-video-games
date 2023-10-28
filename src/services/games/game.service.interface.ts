import {
  IDLCsInput,
  IGameDetails,
  IGameInfo,
  IGameInput,
  IPlatformsInput,
  IPlatformList,
} from '@/@types/Games';

export interface IGameService {
  fetchGameById(id: number): Promise<IGameDetails>;
  fetchGames(input: IGameInput): Promise<IGameInfo[]>;
  fetchDLCs(input: IDLCsInput): Promise<IGameInfo[]>;
  fetchPlatforms(input: IPlatformsInput): Promise<IPlatformList[]>;
}
