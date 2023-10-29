import { DateFormatter } from '@/utils/dateFormatter';
import axiosClient from '../api';
import {
  IGameDetailedInfoResponse,
  IGeneralInfo,
  IScreenshotResponse,
} from './raw.type';

import { IDLCsInput, IGameInput, IScreenshotInput } from '@/@types/games';

export class GameClient {
  async getGameById(id: number): Promise<IGameDetailedInfoResponse> {
    const response = await axiosClient.get(`/api/games/${id}`);
    return response.data;
  }

  async getListGames(input?: IGameInput): Promise<IGeneralInfo> {
    const response = await axiosClient.get(`/api/games`, {
      params: {
        dates: `2023-01-01,${DateFormatter.getFullDate()}`,
        ordering: '-rating',
        ...input,
      },
    });
    return response.data;
  }

  async getDLCs(input: IDLCsInput): Promise<IGeneralInfo> {
    const response = await axiosClient.get(
      `/api/games/${input.gamePK}/additions`,
      {
        params: input,
      },
    );
    return response.data;
  }

  async getScreenshots(
    input: IScreenshotInput,
  ): Promise<IScreenshotResponse[]> {
    const response = await axiosClient.get(
      `api/games/${input.gamePK}/screenshots`,
      {
        params: input,
      },
    );
    return response.data.results;
  }
}
