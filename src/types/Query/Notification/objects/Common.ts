import type { ActivityUnion } from "../../../Union";
import type { NotificationType } from "../";
import type { User } from "../../User";

export type Common = {
  activity: ActivityUnion;
  activityId: number;
  context: string;
  createdAt: number;
  id: number;
  type: NotificationType;
  user: User;
  userId: number;
};
