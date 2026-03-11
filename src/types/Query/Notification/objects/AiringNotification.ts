import type { Media } from "../../Media";
import type { NotificationType } from "../";

export type AiringNotification = {
  animeId: number;
  contexts: string[];
  createdAt: number;
  episode: number;
  id: number;
  media: Media;
  type: NotificationType;
};
