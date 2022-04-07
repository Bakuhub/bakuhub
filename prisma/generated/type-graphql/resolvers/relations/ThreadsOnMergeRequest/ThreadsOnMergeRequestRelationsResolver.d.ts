import { MergeRequest } from "../../../models/MergeRequest";
import { Thread } from "../../../models/Thread";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class ThreadsOnMergeRequestRelationsResolver {
    thread(threadsOnMergeRequest: ThreadsOnMergeRequest, ctx: any): Promise<Thread>;
    mergeRequest(threadsOnMergeRequest: ThreadsOnMergeRequest, ctx: any): Promise<MergeRequest>;
}
