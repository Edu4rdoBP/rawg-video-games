'use client';
import { IGameDetailedInfoResponse, IGameInfoResponse } from './raw.type';

import { IGameDetails, IGameInfo } from '@/@types/Games';

export class GameHelper {
  static parseGameInfo(input: IGameInfoResponse[]): IGameInfo[] {
    const result: IGameInfo[] = [];
    input.map((item) => {
      result.push({
        id: item.id,
        slug: item.slug,
        name: item.name,
        released: item.released,
        background_image: item.background_image,
        metacritic: item.metacritic,
        updated: item.updated,
        platforms: item.platforms,
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
      slug: input.slug,
      name: input.name,
      released: input.released,
      background_image: input.background_image,
      metacritic: input.metacritic,
      updated: input.updated,
      platforms: input.platforms,
    };
  }
}
