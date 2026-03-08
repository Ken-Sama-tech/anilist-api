import type { User } from "../../User";
import type { ActivityReply } from "../../ActivityReply";
import type { ActivityType } from "../";

export type Common = {
  createdAt: number;
  id: number;
  isLiked: boolean;
  isLocked: boolean;
  isPinned: boolean;
  isSubscribed: boolean;
  likeCount: number;
  likes: User[];
  replies: ActivityReply[];
  replyCount: number;
  siteUrl: string;
  type: ActivityType;
};
