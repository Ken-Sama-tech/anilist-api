import type { PageInfo } from "../../Page";
import type { Review, ReviewEdge } from "../";

export type ReviewConnection = {
  edges: ReviewEdge[];
  nodes: Review[];
  pageInfo: PageInfo;
};
