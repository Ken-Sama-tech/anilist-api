import type { MediaTrend, MediaTrendEdge } from "../";
import type { PageInfo } from "../../Page";

export type MediaTrendConnection = {
  edges: MediaTrendEdge[];
  nodes: MediaTrend[];
  pageInfo: PageInfo;
};
