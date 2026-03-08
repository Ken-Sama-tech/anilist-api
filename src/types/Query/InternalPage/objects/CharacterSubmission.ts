import type { Common } from "./Common";
import type { Character } from "../../Character";

export type CharacterSubmission = Common & {
  submission: Character;
  character: Character;
};
