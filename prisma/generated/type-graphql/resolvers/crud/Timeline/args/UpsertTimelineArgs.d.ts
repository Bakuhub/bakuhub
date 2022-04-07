import { TimelineCreateInput } from "../../../inputs/TimelineCreateInput";
import { TimelineUpdateInput } from "../../../inputs/TimelineUpdateInput";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";
export declare class UpsertTimelineArgs {
    where: TimelineWhereUniqueInput;
    create: TimelineCreateInput;
    update: TimelineUpdateInput;
}
