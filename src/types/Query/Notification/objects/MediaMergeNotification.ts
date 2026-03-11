import type { Media } from "../../Media";
import type { NotificationType } from "../";

export type MediaMergeNotification = {
  context: string;
  createdAt: number;
  deletedMediaTitles: string[];
  id: number;
  media: Media;
  mediaId: number;
  reason: string;
  type: NotificationType;
};
