import type { Thread } from "../../Thread";
import type { ThreadComment } from "../../ThreadComment";
import type { Common } from "./Common";

export type ThreadCommentMentionNotification = Omit<
  Common,
  "activity" | "activityId"
> & {
  comment: ThreadComment;
  commentId: number;
  thread: Thread;
};
