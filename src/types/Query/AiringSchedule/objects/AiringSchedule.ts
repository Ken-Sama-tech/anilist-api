import type { Media } from "../../Media";

type Keys = "airingAt" | "episode" | "id" | "mediaId" | "timeUntilAiring";

export type AiringSchedule = Record<Keys, number> & {
  media: Omit<Media, "airingSchedule">;
};
