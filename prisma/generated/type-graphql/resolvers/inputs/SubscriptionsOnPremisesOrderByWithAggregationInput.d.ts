import { SubscriptionsOnPremisesCountOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesCountOrderByAggregateInput";
import { SubscriptionsOnPremisesMaxOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesMaxOrderByAggregateInput";
import { SubscriptionsOnPremisesMinOrderByAggregateInput } from "../inputs/SubscriptionsOnPremisesMinOrderByAggregateInput";
export declare class SubscriptionsOnPremisesOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    hasUnreadNotifications?: "asc" | "desc" | undefined;
    lastReadAt?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SubscriptionsOnPremisesCountOrderByAggregateInput | undefined;
    _max?: SubscriptionsOnPremisesMaxOrderByAggregateInput | undefined;
    _min?: SubscriptionsOnPremisesMinOrderByAggregateInput | undefined;
}
