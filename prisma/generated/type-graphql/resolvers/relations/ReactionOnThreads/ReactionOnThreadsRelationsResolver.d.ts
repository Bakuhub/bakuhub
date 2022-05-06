import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { Thread } from "../../../models/Thread";
import { User } from "../../../models/User";
export declare class ReactionOnThreadsRelationsResolver {
    user(reactionOnThreads: ReactionOnThreads, ctx: any): Promise<User>;
    thread(reactionOnThreads: ReactionOnThreads, ctx: any): Promise<Thread>;
}
