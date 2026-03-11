import type { Media } from "../../Media";
import type { User } from "../../User";
import type { RecommendationRating } from "../";

export type Recommendation = {
  id: number;
  media: Media;
  mediaRecommendation: Media;
  rating: number;
  user: User;
  userRating: RecommendationRating;
};
