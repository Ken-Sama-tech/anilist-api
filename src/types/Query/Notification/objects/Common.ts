import type { ActivityUnion } from "../../../Union";
import type { NotificationType } from "../";
import type { User } from "../../User";

export type Common = {
  activity: ActivityUnion; //incomplete
  activityId: number;
  context: string;
  createdAt: number;
  id: number;
  type: NotificationType;
  user: User; //incomplete
  userId: number;
};
