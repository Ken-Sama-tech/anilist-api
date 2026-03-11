import type { PageInfo } from "../../Page";
import type { SiteTrend, SiteTrendEdge } from "../";

export type SiteTrendConnection = {
  edges: SiteTrendEdge[];
  nodes: SiteTrend[];
  pageInfo: PageInfo;
};
