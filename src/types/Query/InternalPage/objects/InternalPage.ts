import type { ActivityUnion, NotificationUnion } from "../../../Union";
import type { AiringSchedule } from "../../AiringSchedule";
import type { Character } from "../../Character";
import type { Media } from "../../Media";
import type { PageInfo } from "../../Page";
import type { User } from "../../User";
import type {
  CharacterSubmission,
  StaffSubmission,
  MediaSubmission,
  Report,
  RevisionHistory,
} from "../";
import type { MediaTrend } from "../../MediaTrend";
import type { MediaList } from "../../MediaList";
import type { ModAction } from "../../Mod";
import type { Recommendation } from "../../Recommendation";
import type { Review } from "../../Review";
import type { Studio } from "../../Studio";
import type { Staff } from "../../Staff";
import type { ThreadComment } from "../../ThreadComment";
import type { Thread } from "../../Thread";

export type InternalPage = {
  activities: ActivityUnion[];
  airingSchedules: AiringSchedule[];
  characterSubmissions: CharacterSubmission[];
  characters: Character[];
  followers: User[];
  following: User[];
  likes: User[];
  media: Media[];
  mediaList: MediaList[];
  mediaSubmissions: MediaSubmission[];
  mediaTrends: MediaTrend[];
  modActions: ModAction[];
  notifications: NotificationUnion[];
  pageInfo: PageInfo;
  recommendations: Recommendation[];
  reports: Report[];
  reviews: Review[];
  revisionHistory: RevisionHistory[];
  staff: Staff[];
  staffSubmissions: StaffSubmission[];
  studios: Studio[];
  threadComments: ThreadComment[];
  threads: Thread[];
  userBlockSearch: User[];
  users: User[];
};
