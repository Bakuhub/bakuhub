import { PremisesOnTimelinesOrderByWithAggregationInput } from "../../../inputs/PremisesOnTimelinesOrderByWithAggregationInput";
import { PremisesOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/PremisesOnTimelinesScalarWhereWithAggregatesInput";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";
export declare class GroupByPremisesOnTimelinesArgs {
    where?: PremisesOnTimelinesWhereInput | undefined;
    orderBy?: PremisesOnTimelinesOrderByWithAggregationInput[] | undefined;
    by: Array<"timelineId" | "premiseId" | "assignedAt">;
    having?: PremisesOnTimelinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
