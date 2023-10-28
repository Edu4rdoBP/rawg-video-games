'use client';
import {
  IGameDetailedInfoResponse,
  IGeneralInfo,
  IPlatformListResponse,
} from './raw.type';

import { IGameDetails, IGameInfo, IPlatformList } from '@/@types/Games';

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
        metacritic: item.metacritic,
        platforms: item.platforms,
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
      background_image_additional: input.background_image_additional,
      reactions: input.reactions,
      screenshots_count: input.screenshots_count,
      id: input.id,
      name: input.name,
      released: input.released,
      background_image: input.background_image,
      metacritic: input.metacritic,
      platforms: input.platforms,
      genres: input.genres,
    };
  }

  static parsePlatformsInfo(input: IGeneralInfo): IPlatformList[] {
    const result: IPlatformList[] = [];
    const platformInfo = input.results as IPlatformListResponse[];
    platformInfo.map((item) => {
      result.push({
        id: item.id,
        image: item.image_background,
      });
    });
    console.log('teste', result);

    return result;
  }
}
