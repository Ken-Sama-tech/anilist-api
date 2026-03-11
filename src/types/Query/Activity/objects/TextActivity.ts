import type { User } from "../../User";
import type { Common } from "./Common";

export type TextActivity = Common & {
  text: string;
  user: User;
  userId: number;
};
