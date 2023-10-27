interface Requirements {
  minimum: string;
  recommended: string;
}

export interface PlatformInfo {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: Requirements;
}
export interface IMetacriticPlatform {
  metascore: number;
  url: string;
}

export interface IGameInput {
  page?: number;
  page_size?: number;
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

export interface IDLCsInput {
  page?: number;
  page_size?: number;
  gamePK: string;
}

export interface IGameInfo {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  metacritic: number;
  updated: string;
  platforms: PlatformInfo[];
  count?: number;
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
