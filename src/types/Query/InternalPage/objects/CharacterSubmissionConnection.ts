import type { PageInfo } from "../../Page";
import type { CharacterSubmissionEdge, CharacterSubmission } from "../";

export type CharacterSubmissionConnection = {
  edges: CharacterSubmissionEdge;
  nodes: CharacterSubmission;
  pageInfo: PageInfo;
};
