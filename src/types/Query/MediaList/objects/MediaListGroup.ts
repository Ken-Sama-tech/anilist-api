import type { MediaList, MediaListStatus } from "../";

export type MediaListGroup = {
  entries: MediaList[];
  isCustomList: Boolean;
  isSplitCompletedList: boolean;
  name: string;
  status: MediaListStatus;
};
