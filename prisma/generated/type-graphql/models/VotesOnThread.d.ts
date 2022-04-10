import { Thread } from "../models/Thread";
import { User } from "../models/User";
export declare class VotesOnThread {
    user?: User;
    userId: string;
    thread?: Thread;
    threadId: string;
    vote: number;
    createdAt: Date;
}
