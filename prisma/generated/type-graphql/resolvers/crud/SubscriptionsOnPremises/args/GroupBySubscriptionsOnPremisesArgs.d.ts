import { SubscriptionsOnPremisesOrderByWithAggregationInput } from "../../../inputs/SubscriptionsOnPremisesOrderByWithAggregationInput";
import { SubscriptionsOnPremisesScalarWhereWithAggregatesInput } from "../../../inputs/SubscriptionsOnPremisesScalarWhereWithAggregatesInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";
export declare class GroupBySubscriptionsOnPremisesArgs {
    where?: SubscriptionsOnPremisesWhereInput | undefined;
    orderBy?: SubscriptionsOnPremisesOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "premiseId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt">;
    having?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
