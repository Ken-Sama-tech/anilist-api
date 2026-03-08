import type { JSONArr, JSONObj } from "../../../Scalars";
import type { Media, MediaEdge } from "../../Media";
import type { Common } from "./Common";
import type { MediaSubmissionComparison } from "../";

export type MediaSubmission = Common & {
  changes: string[];
  characters: MediaSubmissionComparison[];
  externalLinks: MediaSubmissionComparison[];
  relations: MediaEdge;
  staff: MediaSubmissionComparison[];
  studios: MediaSubmissionComparison[];
  submission: Media;
  submitterStats: JSONObj | JSONArr;
};
