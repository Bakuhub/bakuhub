export declare class NestedEnumReactionFilter {
    equals?: "LIKE" | "UPVOTE" | "DOWNVOTE" | undefined;
    in?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    notIn?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;
    not?: NestedEnumReactionFilter | undefined;
}
