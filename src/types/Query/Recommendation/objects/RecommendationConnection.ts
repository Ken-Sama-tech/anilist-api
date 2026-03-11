import type { Recommendation, RecommendationEdge } from "../";
import type { PageInfo } from "../../Page";

export type RecommendationConnection = {
  edges: RecommendationEdge[];
  nodes: Recommendation[];
  page: PageInfo;
};
