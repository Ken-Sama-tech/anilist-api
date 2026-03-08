import type { MediaList, MediaListGroup } from "../../MediaList";
import type { User } from "../../User";

export type MediaListCollection = {
  /**@deprecated (reason: Not GraphQL spec compliant, use lists field instead.)*/
  customLists: MediaList[][];
  hasNextChunk: boolean;
  list: MediaListGroup[];
  /**@deprecated(reason: Not GraphQL spec compliant, use lists field instead.)*/
  statusLists: MediaList[][];
  user: User;
};
