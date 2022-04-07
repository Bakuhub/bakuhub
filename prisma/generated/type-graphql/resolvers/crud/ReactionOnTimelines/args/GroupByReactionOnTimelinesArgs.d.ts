import { ReactionOnTimelinesOrderByWithAggregationInput } from "../../../inputs/ReactionOnTimelinesOrderByWithAggregationInput";
import { ReactionOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnTimelinesScalarWhereWithAggregatesInput";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";
export declare class GroupByReactionOnTimelinesArgs {
    where?: ReactionOnTimelinesWhereInput | undefined;
    orderBy?: ReactionOnTimelinesOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "timelineId" | "reaction" | "createdAt">;
    having?: ReactionOnTimelinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
