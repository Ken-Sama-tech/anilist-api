import type { User } from "../../User";
import type { Common } from "./Common";

export type MessageActivity = Common & {
  message: string;
  messenger: User;
  messengerId: number;
  recipient: User;
  recipientId: number;
};
