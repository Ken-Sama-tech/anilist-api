import type { JSONArr } from "../../../Scalars";
import type { ScoreFormat } from "../enums/ScoreFormat";
import type { MediaListTypeOptions } from "./MediaListTypeOptions";

export type MediaListOptions = {
  animeList: MediaListTypeOptions;
  mangaList: MediaListTypeOptions;
  rowOrder: string;
  scoreFormat: ScoreFormat;
  /**@deprecated reason: No longer used */
  sharedTheme: JSONArr;
  /**@deprecated reason: No longer used */
  sharedThemeEnabled: boolean;
  /**@deprecated reason: No longer used */
  useLegacyLists: boolean;
};
