import type { User } from "../../User";
import type { ModActionType } from "../";

export type ModAction = {
  createdAt: number;
  data: string;
  id: number;
  mod: User;
  objectId: number;
  objectType: string;
  type: ModActionType;
  user: User;
};
