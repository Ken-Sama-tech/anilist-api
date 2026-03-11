import type { JSONObj } from "../../../Scalars";
import type { Character } from "../../Character";
import type { Media, MediaExternalLink } from "../../Media";
import type { Staff } from "../../Staff";
import type { Studio } from "../../Studio";
import type { User } from "../../User";
import type { RevisionHistoryAction } from "../";

export type RevisionHistory = {
  action: RevisionHistoryAction;
  changes: JSONObj;
  character: Character;
  createdAt: number;
  externalLink: MediaExternalLink;
  id: number;
  media: Media;
  staff: Staff;
  studio: Studio;
  user: User;
};
