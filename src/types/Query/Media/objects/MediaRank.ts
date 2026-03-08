import type { MediaFormat, MediaRankType, MediaSeason } from "../";

export type MediaRank = {
  allTime: boolean;
  context: string;
  format: MediaFormat;
  id: number;
  rank: number;
  season: MediaSeason;
  type: MediaRankType;
  year: number;
};
