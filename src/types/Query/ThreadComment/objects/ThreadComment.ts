import type { JSONArr, JSONObj } from "../../../Scalars";
import type { Thread } from "../../Thread/objects/Thread";
import type { User } from "../../User";

export type ThreadComment = {
  childComments: JSONObj | JSONArr;
  comment: string;
  createdAt: string;
  id: number;
  isLiked: boolean;
  isLocked: boolean;
  likeCount: number;
  likes: User[];
  siteUrl: string;
  thread: Thread;
  threadId: number;
  updatedAt: number;
  user: User;
  userId: number;
};
