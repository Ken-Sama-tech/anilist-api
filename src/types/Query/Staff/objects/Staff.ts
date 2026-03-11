import type { FuzzyDate } from "../../../Scalars";
import type { CharacterConnection } from "../../Character";
import type { MediaConnection } from "../../Media";
import type { StaffLanguage, StaffImage, StaffName } from "../";

export type Staff = {
  age: number;
  bloodType: string;
  characterMedia: MediaConnection;
  characters: CharacterConnection;
  dateOfBirth: FuzzyDate;
  dateOfDeath: FuzzyDate;
  description: string;
  favourites: number;
  gender: string;
  homeTown: string;
  id: number;
  image: StaffImage;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  language: StaffLanguage;
  languageV2: string;
  modNotes: string;
  name: StaffName;
  primaryOccupations: string[];
  siteUrl: string;
  staff: Staff;
  staffMedia: MediaConnection;
};
