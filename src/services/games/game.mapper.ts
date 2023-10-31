import { DateFormatter } from '../../utils/dateFormatter';
import {
  IGameDetailedInfoResponse,
  IGeneralInfo,
  IScreenshotResponse,
} from './raw.type';

import { IGameDetails, IGameInfo, IScreenshot } from '@/@types/games';

export class GameHelper {
  static parseGameInfo(input: IGeneralInfo): IGameInfo[] {
    const result: IGameInfo[] = [];
    const gamesInfo = input.results as IGameDetailedInfoResponse[];
    const { count } = input;
    gamesInfo.map((item) => {
      result.push({
        id: item.id,
        name: item.name,
        released: item.released,
        background_image: item.background_image,
        metacritic: item.metacritic ? item.metacritic : 0,
        platforms: item.parent_platforms,
        count: count,
        genres: item.genres,
      });
    });
    return result;
  }

  static parseGameDetails(input: IGameDetailedInfoResponse): IGameDetails {
    return {
      name_original: input.name_original,
      description: input.description,
      metacritic_url: input.metacritic_url,
      additions_count: input.additions_count,
      metacritic_platforms: input.metacritic_platforms,
      reactions: input.reactions,
      screenshots_count: input.screenshots_count,
      id: input.id,
      distributor: input.publishers,
      name: input.name,
      released: DateFormatter.convertDate(input.released),
      background_image: input.background_image,
      metacritic: input.metacritic ? input.metacritic : 0,
      platforms: input.parent_platforms,
      genres: input.genres,
      developers: input.developers,
    };
  }

  static parseScreenshot(input: IScreenshotResponse[]): IScreenshot[] {
    const result: IScreenshot[] = [];
    input.map((item) => {
      result.push({
        image: item.image,
        id: item.id,
      });
    });
    return result;
  }
}
