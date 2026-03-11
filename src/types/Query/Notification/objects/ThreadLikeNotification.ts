import type { Common } from "./Common";
import type { ThreadComment } from "../../ThreadComment";
import type { Thread } from "../../Thread";

export type ThreadLikeNotification = Omit<Common, "activity" | "activityId"> & {
  comment: ThreadComment;
  thread: Thread;
  threadId: number;
};
