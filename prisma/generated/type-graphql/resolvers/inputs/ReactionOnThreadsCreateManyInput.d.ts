export declare class ReactionOnThreadsCreateManyInput {
    userId: string;
    threadId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
