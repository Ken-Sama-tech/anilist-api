import type { Media } from "../../Media";
import type { User } from "../../User";
import type { ThreadCategory } from "../";

export type Thread = {
  body: string;
  categories: ThreadCategory[];
  createdAt: number;
  id: number;
  isLiked: boolean;
  isLocked: boolean;
  isSticky: boolean;
  isSubscribed: boolean;
  likeCount: number;
  likes: User[];
  mediaCategories: Media[];
  repliedAt: number;
  replyCommentId: number;
  replyCount: number;
  replyUser: User;
  replyUserId: number;
  siteUrl: string;
  title: string;
  updatedAt: number;
  user: User;
  userId: number;
  viewCount: number;
};
