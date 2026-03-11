import type { Media, MediaType } from "../../Media";
import type { User } from "../../User";
import type { ReviewRating } from "../";

export type Review = {
  body: string;
  createdAt: number;
  id: number;
  media: Media;
  mediaId: number;
  mediaType: MediaType;
  private: boolean;
  rating: number;
  ratingAmount: number;
  score: number;
  siteUrl: string;
  summary: string;
  updatedAt: number;
  user: User;
  userId: number;
  userRating: ReviewRating;
};
