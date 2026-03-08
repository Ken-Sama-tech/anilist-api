import type { NotificationType } from "../";

export type MediaDeletionNotification = {
  context: string;
  createdAt: number;
  deletedMediaTitle: string;
  id: number;
  reason: string;
  type: NotificationType;
};
