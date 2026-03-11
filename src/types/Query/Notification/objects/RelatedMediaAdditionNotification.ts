import type { Media } from "../../Media";
import type { Common } from "./Common";

export type RelatedMediaAdditionNotification = Omit<
  Common,
  "activity" | "activityId" | "user" | "userId"
> & {
  media: Media;
  mediaId: number;
};
