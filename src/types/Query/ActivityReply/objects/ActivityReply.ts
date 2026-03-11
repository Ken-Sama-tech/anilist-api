import type { User } from "../../User";

export type ActivityReply = {
  activityId: number;
  createdAt: number;
  id: number;
  isLiked: boolean;
  likeCount: number;
  likes: User[];
  text: string;
  user: User;
  userId: number;
};
