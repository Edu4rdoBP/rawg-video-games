interface IPageInput {
  page?: number;
  page_size?: number
}
export interface IPlataformInput extends IPageInput {
  ordering?: string;
}

export interface IDLCsInput extends IPageInput {
  gamePK: string;
}

export interface IGameInput extends IPageInput {
  search?: string;
  search_precise?: boolean;
  search_exact?: boolean;
  parent_platforms?: string;
  platforms?: string;
  stores?: string;
  developers?: string;
  publishers?: string;
  genres?: string;
  tags?: string;
  creators?: string;
  dates?: string;
  updated?: string;
  platforms_count?: number;
  metacritic?: string;
  exclude_collection?: number;
  exclude_additions?: boolean;
  exclude_parents?: boolean;
  exclude_game_series?: boolean;
  exclude_stores?: string;
  ordering?: string;
}

export interface IGameInfo {
  id: number;
  name: string;
  released: string;
  background_image: string;
  metacritic: number;
  platforms: IPlatformByGame[];
  count?: number;
  genres: IGenres[];
}

interface IRequirements {
  minimum: string;
  recommended: string;
}

export interface IGenres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface IPlatformByGame {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: IRequirements;
}
export interface IMetacriticPlatform {
  metascore: number;
  url: string;
}

export interface IGameDetails extends IGameInfo {
  name_original: string;
  description: string;
  metacritic_url: string;
  additions_count: number;
  metacritic_platforms: IMetacriticPlatform[];
  background_image_additional: string;
  reactions: Record<string, unknown>;
  screenshots_count: number;
}

export interface IPlatformList {
  id: number;
  image?: string | null;
}
