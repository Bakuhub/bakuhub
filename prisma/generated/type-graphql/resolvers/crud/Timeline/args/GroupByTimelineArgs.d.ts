import { TimelineOrderByWithAggregationInput } from "../../../inputs/TimelineOrderByWithAggregationInput";
import { TimelineScalarWhereWithAggregatesInput } from "../../../inputs/TimelineScalarWhereWithAggregatesInput";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";
export declare class GroupByTimelineArgs {
    where?: TimelineWhereInput | undefined;
    orderBy?: TimelineOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "status" | "authorId">;
    having?: TimelineScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
