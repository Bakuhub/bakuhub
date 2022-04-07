import { NestedEnumMergeRequestStatusFilter } from "../inputs/NestedEnumMergeRequestStatusFilter";
export declare class EnumMergeRequestStatusFilter {
    equals?: "OPEN" | "CLOSE" | "MERGED" | undefined;
    in?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;
    not?: NestedEnumMergeRequestStatusFilter | undefined;
}
