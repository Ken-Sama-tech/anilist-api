import type { User } from "../../User";
import type { JSONObj, JSONArr } from "../../../Scalars";

export type AniChartUser = {
  highlights: JSONObj | JSONArr;
  settings: JSONObj | JSONArr;
  user: User;
};
