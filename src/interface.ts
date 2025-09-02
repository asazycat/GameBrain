export interface IGame {
  id: number;
  name: string;
  image: string;
  gameplay: string;
  link: string;
  x_url: string;
  rating: IRating;
  description: string;
  short_description: string;
  release_date: string;
  developer: string;
  playtime: IPlaytime;
  platforms: IPlatform[];
  tags: ITags[];
  genres: IGenre[];
  genre: string;
  themes: ITheme[];
  adult_only: boolean;
  play_modes: IPlayMode[];
  screenshots: string[];
  videos: string[];
  offers: IOffer[];
  official_stores: IOfficialStore[];
  micro_trailer: string;
}


export interface IRating {
  mean: number;
  count: number;
  mean_players: number;
  count_players: number;
  mean_critics: number;
  count_critics: number;
}

export interface IPlaytime {
  percentiles: number[];
  min: number;
  median: number;
  max: number;
  mean: number;
  mentions: number;
}

export interface IPlatform {
  value: string;
  name: string;
}

export interface IGenre {
  value: string;
  name: string;
}

export interface ITheme {
  value: string;
  name: string;
}

export interface IPlayMode {
  value: string;
  name: string;
}

export interface IOffer {
  price: IPrice;
  store_name: string;
  platform: string;
  title: string;
  url: string;
}

export interface IPrice {
  currency: string;
  discount_percent: number;
  value: number;
  initial: number;
}

export interface IOfficialStore {
  source: string;
  url: string;
}

export interface ITags {
    value: '',
    name: ''
}