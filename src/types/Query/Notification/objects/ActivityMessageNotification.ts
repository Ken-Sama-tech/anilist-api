import type { Common } from "./Common";
import type { MessageActivity } from "../../Activity";

export type ActivityMessageNotification = Common & {
  message: MessageActivity;
};
