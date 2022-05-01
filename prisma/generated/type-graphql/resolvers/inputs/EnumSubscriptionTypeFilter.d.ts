import { NestedEnumSubscriptionTypeFilter } from "../inputs/NestedEnumSubscriptionTypeFilter";
export declare class EnumSubscriptionTypeFilter {
    equals?: "AUTO" | "MANUAL" | undefined;
    in?: Array<"AUTO" | "MANUAL"> | undefined;
    notIn?: Array<"AUTO" | "MANUAL"> | undefined;
    not?: NestedEnumSubscriptionTypeFilter | undefined;
}
