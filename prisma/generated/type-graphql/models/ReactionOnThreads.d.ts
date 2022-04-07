import { Thread } from "../models/Thread";
import { User } from "../models/User";
export declare class ReactionOnThreads {
    user?: User;
    userId: string;
    thread?: Thread;
    threadId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
}
