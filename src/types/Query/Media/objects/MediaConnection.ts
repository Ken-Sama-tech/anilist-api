import type { Media, MediaEdge } from "../";
import type { PageInfo } from "../../Page";

export type MediaConnection = {
  edges: MediaEdge[];
  nodes: Media[];
  pageInfo: PageInfo;
};
