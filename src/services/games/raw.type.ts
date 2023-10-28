import {
  IAuthors,
  IGenres,
  IMetacriticPlatform,
  IPlatformByGame,
} from '@/@types/Games';

interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}

interface IGameInfoResponse {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, unknown>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: ESRBRating;
  platforms: IPlatformByGame[];
  parent_platforms?: IPlatformByGame[];
  genres: IGenres[];
}

export interface IGeneralInfo {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: IGameInfoResponse[] | IPlatformListResponse[];
}

export interface IGameDetailedInfoResponse extends IGameInfoResponse {
  name_original: string;
  description: string;
  description_raw: string;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  alternative_names: string[];
  metacritic_url: string;
  developers?: IAuthors[];
  publishers?: IAuthors[];
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  metacritic_platforms: IMetacriticPlatform[];
  background_image_additional: string;
  website: string;
  reactions: Record<string, unknown>;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
}

export interface IPlatformListResponse {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: string | null;
  year_start?: number | null;
  year_end?: number | null;
}
