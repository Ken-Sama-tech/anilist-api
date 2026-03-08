import type { Character, CharacterRole } from "../../Character";
import type { Staff, StaffRoleType } from "../../Staff";
import type { MediaRelation, Media } from "../";

export type MediaEdge = {
  characterName: string;
  characterRole: CharacterRole;
  characters: Character[];
  dubGroup: string;
  favouriteOrder: number;
  id: number;
  isMainStudio: boolean;
  node: Media;
  relationType: MediaRelation;
  roleNotes: String;
  staffRole: string;
  voiceActorRoles: StaffRoleType[];
  voiceActors: Staff[];
};
