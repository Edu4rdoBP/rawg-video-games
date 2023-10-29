import {
  IDLCsInput,
  IGameDetails,
  IGameInfo,
  IGameInput,
  IScreenshot,
  IScreenshotInput,
} from '@/@types/games';

export interface IGameService {
  fetchGameById(id: number): Promise<IGameDetails>;
  fetchGames(input: IGameInput): Promise<IGameInfo[]>;
  fetchDLCs(input: IDLCsInput): Promise<IGameInfo[]>;
  fetchScreenshot(input: IScreenshotInput): Promise<IScreenshot[]>;
}
