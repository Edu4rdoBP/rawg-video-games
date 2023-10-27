'use client';
import { IGameDetailedInfoResponse, IGeneralInfo, IPlatformListResponse } from './raw.type';

import { IGameDetails, IGameInfo, IPlatformList } from '@/@types/Games';

export class GameHelper {
  static parseGameInfo(input: IGeneralInfo): IGameInfo[] {
    const result: IGameInfo[] = [];
    const { count } = input;
    input.results.map((item) => {
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
      genres: input.genres
    };
  }

  static parsePlataformsInfo(input: IPlatformListResponse[]): IPlatformList[] {
    const result: IPlatformList[] = [];
    input.map((item) => {
      result.push({
        id: item.id,
        image: item.image,
      });
    });
    return result;
  }
}
