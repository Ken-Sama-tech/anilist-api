import type { Character, CharacterRole } from "../../Character";
import type { Media, MediaExternalLink } from "../../Media";
import type { Staff } from "../../Staff";
import type { Studio } from "../../Studio";

export type MediaSubmissionEdge = {
  character: Character;
  characterName: string;
  characterRole: CharacterRole;
  characterSubmission: Character;
  dubGroup: string;
  externalLink: MediaExternalLink;
  id: number;
  isMain: boolean;
  media: Media;
  roleNotes: string;
  staff: Staff;
  staffRole: string;
  staffSubmission: Staff;
  studio: Studio;
  voiceActor: Staff;
  voiceActorSubmission: Staff;
};
