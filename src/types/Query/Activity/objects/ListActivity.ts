import type { User } from "../../User";
import type { Media } from "../../Media";

import type { Common } from "./Common";

export type ListActivity = Common & {
  media: Media;
  progress: string;
  status: string;
  user: User;
  userId: number;
};
