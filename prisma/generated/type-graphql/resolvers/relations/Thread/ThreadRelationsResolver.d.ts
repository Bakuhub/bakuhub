import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { Thread } from "../../../models/Thread";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { User } from "../../../models/User";
import { ThreadChildThreadsArgs } from "./args/ThreadChildThreadsArgs";
import { ThreadReactionOnThreadsArgs } from "./args/ThreadReactionOnThreadsArgs";
export declare class ThreadRelationsResolver {
    author(thread: Thread, ctx: any): Promise<User | null>;
    parentThread(thread: Thread, ctx: any): Promise<Thread | null>;
    childThreads(thread: Thread, ctx: any, args: ThreadChildThreadsArgs): Promise<Thread[]>;
    threadsOnPremise(thread: Thread, ctx: any): Promise<ThreadsOnPremise | null>;
    threadsOnTimeline(thread: Thread, ctx: any): Promise<ThreadsOnTimeline | null>;
    threadsOnVision(thread: Thread, ctx: any): Promise<ThreadsOnVision | null>;
    threadsOnMergeRequest(thread: Thread, ctx: any): Promise<ThreadsOnMergeRequest | null>;
    ReactionOnThreads(thread: Thread, ctx: any, args: ThreadReactionOnThreadsArgs): Promise<ReactionOnThreads[]>;
}
