import type { Staff } from "../../Staff";

export type UserVoiceActorStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  voiceActor: Staff;
};
