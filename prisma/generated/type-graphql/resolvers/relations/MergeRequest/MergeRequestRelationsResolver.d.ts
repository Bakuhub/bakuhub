import { MergeRequest } from "../../../models/MergeRequest";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { Vision } from "../../../models/Vision";
import { MergeRequestThreadsOnMergeRequestArgs } from "./args/MergeRequestThreadsOnMergeRequestArgs";
export declare class MergeRequestRelationsResolver {
    vision(mergeRequest: MergeRequest, ctx: any): Promise<Vision>;
    threadsOnMergeRequest(mergeRequest: MergeRequest, ctx: any, args: MergeRequestThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest[]>;
}
