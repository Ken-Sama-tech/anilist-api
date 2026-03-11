import type { Media } from "../../Media";
import type { NotificationType } from "../";

export type MediaDataChangeNotification = {
  context: string;
  createdAt: number;
  id: number;
  media: Media;
  mediaId: number;
  reason: string;
  type: NotificationType;
};
