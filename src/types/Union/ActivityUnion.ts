import type {
  TextActivity,
  ListActivity,
  MessageActivity,
} from "../Query/Activity";

export type ActivityUnion = TextActivity | ListActivity | MessageActivity;
