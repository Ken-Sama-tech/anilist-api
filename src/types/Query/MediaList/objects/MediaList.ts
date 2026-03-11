import type { FuzzyDate, JSONArr, JSONObj } from "../../../Scalars";
import type { Media } from "../../Media/";
import type { User } from "../../User";
import type { MediaListStatus } from "../";

export type MediaList = {
  advancedScores: JSONObj;
  completedAt: FuzzyDate;
  createdAt: number;
  customLists: JSONArr;
  hiddenFromStatusLists: boolean;
  id: number;
  media: Omit<Media, "mediaListEntry">;
  mediaId: number;
  notes: string;
  priority: number;
  private: boolean;
  progress: number;
  progressVolumes: number;
  repeat: number;
  score: number;
  startedAt: FuzzyDate;
  status: MediaListStatus;
  updatedAt: number;
  user: User;
  userId: number;
};
