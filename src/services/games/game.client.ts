import { DateFormatter } from '@/utils/dateFormatter';
import axiosClient from '../api';
import { IGameDetailedInfoResponse, IGeneralInfo } from './raw.type';

import { IDLCsInput, IGameInput } from '@/@types/Games';

export class GameClient {
  async getGameById(id: number): Promise<IGameDetailedInfoResponse> {
    const response = await axiosClient.get(`/api/games/${id}`);
    return response.data;
  }

  async getListGames(input?: IGameInput): Promise<IGeneralInfo> {
    const response = await axiosClient.get(`/api/games`, {
      params: { dates: `2023-01-01.${DateFormatter.getFullDate()}`, ...input },
    });
    return response.data;
  }

  async getDLCs(input: IDLCsInput): Promise<IGeneralInfo> {
    const response = await axiosClient.get(
      `/api/games/${input.gamePK}/additions`,
      {
        params: {
          page: input.page,
          page_size: input.page_size,
        },
      },
    );
    return response.data;
  }
}
