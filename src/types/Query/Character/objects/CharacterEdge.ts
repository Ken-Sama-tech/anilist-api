import type { Media } from "../../Media";
import type { Character, CharacterRole } from "../";
import type { StaffRoleType } from "../../Staff";

export type CharacterEdge = {
  favouriteOrder: number;
  id: number;
  media: Omit<Media, "characters">[];
  name: string;
  node: Character;
  role: CharacterRole;
  voiceActorRoles: StaffRoleType[];
};
