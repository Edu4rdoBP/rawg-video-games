import { DateFormatter } from '@/utils/dateFormatter';
import { IGameDetailedInfoResponse, IGeneralInfo } from './raw.type';

import { IGameDetails, IGameInfo } from '@/@types/Games';

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
        metacritic: item.rating,
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
      description: input.description_raw,
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
      metacritic: input.rating,
      platforms: input.platforms,
      genres: input.genres,
      developers: input.developers,
    };
  }
}
