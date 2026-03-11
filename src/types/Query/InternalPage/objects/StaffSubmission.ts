import type { Staff } from "../../Staff";
import type { Common } from "./Common";

export type StaffSubmission = Common & {
  submission: Staff;
  staff: Staff;
};
