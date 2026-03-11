import type { Character, CharacterRole } from "../../Character";
import type { Staff } from "../../Staff";

export type MediaCharacter = {
  character: Character;
  characterName: string;
  dubGroup: string;
  id: number;
  role: CharacterRole;
  roleNotes: string;
  voiceActor: Staff;
};
