import type { CountryCode } from "../../../Scalars";

export type UserCountryStatistic = {
  chaptersRead: number;
  count: number;
  country: CountryCode;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
};
