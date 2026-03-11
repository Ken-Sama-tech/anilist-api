import type { SubmissionStatus } from "..";
import type { User } from "../../User";

export type Common = {
  assignee: User;
  createdAt: number;
  id: number;
  locked: boolean;
  notes: string;
  source: string;
  status: SubmissionStatus;
  submitter: User;
};
