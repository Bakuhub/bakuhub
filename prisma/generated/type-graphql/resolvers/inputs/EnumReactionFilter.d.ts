import { NestedEnumReactionFilter } from "../inputs/NestedEnumReactionFilter";
export declare class EnumReactionFilter {
    equals?: "LIKE" | "UPVOTE" | "DOWNVOTE" | undefined;
    in?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    notIn?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    not?: NestedEnumReactionFilter | undefined;
}
