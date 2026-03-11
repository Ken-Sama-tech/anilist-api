import type { MediaTag } from "../../Media";

export type TagStats = {
  amount: number;
  meanScore: number;
  tag: MediaTag;
  timeWatched: number;
};
