import { SubscriptionsOnTimelinesOrderByWithAggregationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithAggregationInput";
import { SubscriptionsOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/SubscriptionsOnTimelinesScalarWhereWithAggregatesInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
export declare class GroupBySubscriptionsOnTimelinesArgs {
    where?: SubscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SubscriptionsOnTimelinesOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "timelineId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt">;
    having?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
