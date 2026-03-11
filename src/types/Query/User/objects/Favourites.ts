import type { CharacterConnection } from "../../Character";
import type { MediaConnection } from "../../Media";
import type { StudioConnection } from "../../Studio";
import type { StaffConnection } from "../../Staff";

export type Favourites = {
  anime: MediaConnection;
  characters: CharacterConnection;
  manga: MediaConnection;
  staff: StaffConnection;
  studios: StudioConnection;
};
