import type { MediaConnection } from "../../Media";

export type Studio = {
  favourites: number;
  id: number;
  isAnimationStudio: boolean;
  isFavourite: boolean;
  media: MediaConnection;
};
