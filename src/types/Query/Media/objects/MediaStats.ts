import type { AiringProgression } from "../../AiringSchedule";
import type { ScoreDistribution, StatusDistribution } from "../../User";

export type MediaStats = {
  /**@deprecated reason: Replaced by MediaTrends*/
  airingProgression: AiringProgression[];
  scoreDistribution: ScoreDistribution[];
  statusDistribution: StatusDistribution[];
};
