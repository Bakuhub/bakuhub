import { NestedEnumReactionFilter } from "../inputs/NestedEnumReactionFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumReactionWithAggregatesFilter {
    equals?: "LIKE" | "UPVOTE" | "DOWNVOTE" | undefined;
    in?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    notIn?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    not?: NestedEnumReactionWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumReactionFilter | undefined;
    _max?: NestedEnumReactionFilter | undefined;
}