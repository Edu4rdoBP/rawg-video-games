import { GameClient } from './game.client';
import { GameHelper } from './game.mapper';
import { IGameService } from './game.service.interface';

import {
  IDLCsInput,
  IGameDetails,
  IGameInfo,
  IGameInput,
  IPlataformInput,
  IPlatformList,
} from '@/@types/Games';

export class GameService implements IGameService {
  private _client: GameClient;

  constructor() {
    this._client = new GameClient();
  }

  async fetchGameById(id: number): Promise<IGameDetails> {
    const response = await this._client.getGameById(id);
    return GameHelper.parseGameDetails(response);
  }

  async fetchGames(input?: IGameInput): Promise<IGameInfo[]> {
    const response = await this._client.getListGames(input);
    return GameHelper.parseGameInfo(response);
  }

  async fetchDLCs(input: IDLCsInput): Promise<IGameInfo[]> {
    const response = await this._client.getDLCs(input);
    return GameHelper.parseGameInfo(response);
  }

  async fetchPlatforms(input: IPlataformInput): Promise<IPlatformList[]> {
    const response = await this._client.getPlataforms(input);
    return GameHelper.parsePlataformsInfo(response);
  }
}
