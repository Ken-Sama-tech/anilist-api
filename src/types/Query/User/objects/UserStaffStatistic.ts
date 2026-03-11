import type { Staff } from "../../Staff";

export type UserStaffStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  staff: Staff;
};
