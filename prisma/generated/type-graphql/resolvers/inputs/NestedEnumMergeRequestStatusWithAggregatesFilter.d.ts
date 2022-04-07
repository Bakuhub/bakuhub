import { NestedEnumMergeRequestStatusFilter } from "../inputs/NestedEnumMergeRequestStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumMergeRequestStatusWithAggregatesFilter {
    equals?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    in?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    not?: NestedEnumMergeRequestStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumMergeRequestStatusFilter | undefined;
    _max?: NestedEnumMergeRequestStatusFilter | undefined;
}
