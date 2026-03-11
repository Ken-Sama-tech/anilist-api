import type { CharacterRole } from "../../Character";
import type { Staff } from "../../Staff";
import type { CharacterSubmission, StaffSubmission } from "../";

export type CharacterSubmissionEdge = {
  node: CharacterSubmission;
  role: CharacterRole;
  submittedVoiceActors: StaffSubmission;
  voiceActors: Staff[];
};
