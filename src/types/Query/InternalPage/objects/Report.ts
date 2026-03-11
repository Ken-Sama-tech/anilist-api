import type { User } from "../../User";

export type Report = {
  cleared: boolean;
  createdAt: number;
  id: number;
  reason: string;
  reported: User;
  reporter: User;
};
