import type { AiringSchedule, AiringScheduleEdge } from "../";
import type { PageInfo } from "../../Page";

export type AiringScheduleConnection = {
  edges: AiringScheduleEdge[];
  nodes: AiringSchedule[];
  pageInfo: PageInfo;
};
