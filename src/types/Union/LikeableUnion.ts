import type {
  ListActivity,
  MessageActivity,
  TextActivity,
} from "../Query/Activity";
import type { ActivityReply } from "../Query/ActivityReply";
import type { Thread } from "../Query/Thread";
import type { ThreadComment } from "../Query/ThreadComment";

export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment;
