import type { Studio, StudioEdge } from "../";
import type { PageInfo } from "../../Page";

export type StudioConnection = {
  edges: StudioEdge[];
  nodes: Studio[];
  pageInfo: PageInfo;
};
