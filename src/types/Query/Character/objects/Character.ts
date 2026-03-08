import type { FuzzyDate } from "../../../Scalars";
import type { CharacterImage, CharacterName } from "../";
import type { MediaConnection } from "../../Media";

export type Character = {
  age: number;
  bloodType: string;
  dateOfBirth: FuzzyDate;
  description: string;
  favourites: number;
  gender: string;
  id: number;
  image: CharacterImage;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  media: MediaConnection;
  modNotes: string;
  name: CharacterName[];
  siteUrl: string;
  updatedAt: number;
};
