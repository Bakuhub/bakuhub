import { NestedEnumSubscriptionTypeFilter } from "../inputs/NestedEnumSubscriptionTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumSubscriptionTypeWithAggregatesFilter {
    equals?: "AUTO" | "MANUAL" | undefined;
    in?: Array<"AUTO" | "MANUAL"> | undefined;
    notIn?: Array<"AUTO" | "MANUAL"> | undefined;
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumSubscriptionTypeFilter | undefined;
    _max?: NestedEnumSubscriptionTypeFilter | undefined;
}
