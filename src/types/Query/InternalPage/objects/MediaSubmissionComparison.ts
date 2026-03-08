import type { MediaCharacter, MediaExternalLink } from "../../Media";
import type { MediaSubmissionEdge } from "../";
import type { StaffEdge } from "../../Staff";
import type { StudioEdge } from "../../Studio";

export type MediaSubmissionComparison = {
  character: MediaCharacter;
  externalLink: MediaExternalLink;
  staff: StaffEdge;
  studio: StudioEdge;
  submission: MediaSubmissionEdge;
};
