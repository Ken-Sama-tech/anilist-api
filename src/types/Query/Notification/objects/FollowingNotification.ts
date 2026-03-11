import type { Common } from "./Common";

export type FollowingNotification = Omit<Common, "activity" | "activityId">;
