import { SubscriptionsOnTimelinesCountOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesCountOrderByAggregateInput";
import { SubscriptionsOnTimelinesMaxOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesMaxOrderByAggregateInput";
import { SubscriptionsOnTimelinesMinOrderByAggregateInput } from "../inputs/SubscriptionsOnTimelinesMinOrderByAggregateInput";
export declare class SubscriptionsOnTimelinesOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    hasUnreadNotifications?: "asc" | "desc" | undefined;
    lastReadAt?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SubscriptionsOnTimelinesCountOrderByAggregateInput | undefined;
    _max?: SubscriptionsOnTimelinesMaxOrderByAggregateInput | undefined;
    _min?: SubscriptionsOnTimelinesMinOrderByAggregateInput | undefined;
}
