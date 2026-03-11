import type { StaffEdge, Staff } from "../";
import type { PageInfo } from "../../Page";

export type StaffConnection = {
  edges: StaffEdge[];
  nodes: Staff[];
  pageInfo: PageInfo;
};
