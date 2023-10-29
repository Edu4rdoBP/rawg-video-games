export interface IGameCover extends IGameLayout {
  image?: string;
}

export interface IGameLayout {
  direction?: 'vertical' | 'horizontal';
}
