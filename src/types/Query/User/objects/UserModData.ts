import type { JSONArr, JSONObj } from "../../../Scalars";
import type { User } from "./User";

export type UserModData = {
  alts: User[];
  bans: JSONArr;
  counts: JSONArr | JSONObj;
  email: string;
  ip: JSONArr | JSONObj;
  privacy: number;
};
