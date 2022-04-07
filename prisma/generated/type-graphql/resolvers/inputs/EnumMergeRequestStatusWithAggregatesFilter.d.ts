import { NestedEnumMergeRequestStatusFilter } from "../inputs/NestedEnumMergeRequestStatusFilter";
import { NestedEnumMergeRequestStatusWithAggregatesFilter } from "../inputs/NestedEnumMergeRequestStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumMergeRequestStatusWithAggregatesFilter {
    equals?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    in?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    not?: NestedEnumMergeRequestStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumMergeRequestStatusFilter | undefined;
    _max?: NestedEnumMergeRequestStatusFilter | undefined;
}
