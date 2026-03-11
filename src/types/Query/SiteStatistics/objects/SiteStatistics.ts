import type { SiteTrendConnection } from "./SiteTrendConnection";

type Keys =
  | "anime"
  | "characters"
  | "manga"
  | "reviews"
  | "staff"
  | "studios"
  | "users";

export type SiteStatistics = Record<Keys, SiteTrendConnection>;
