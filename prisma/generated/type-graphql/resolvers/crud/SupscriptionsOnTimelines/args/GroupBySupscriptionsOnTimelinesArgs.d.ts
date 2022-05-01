import { SupscriptionsOnTimelinesOrderByWithAggregationInput } from "../../../inputs/SupscriptionsOnTimelinesOrderByWithAggregationInput";
import { SupscriptionsOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/SupscriptionsOnTimelinesScalarWhereWithAggregatesInput";
import { SupscriptionsOnTimelinesWhereInput } from "../../../inputs/SupscriptionsOnTimelinesWhereInput";
export declare class GroupBySupscriptionsOnTimelinesArgs {
    where?: SupscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SupscriptionsOnTimelinesOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "timelineId" | "type" | "createdAt" | "updatedAt">;
    having?: SupscriptionsOnTimelinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
