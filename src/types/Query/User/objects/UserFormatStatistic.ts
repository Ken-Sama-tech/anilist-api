import type { MediaFormat } from "../../Media";

export type UserFormatStatistic = {
  chaptersRead: number;
  count: number;
  format: MediaFormat;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
};
