import { MergeRequest } from "../models/MergeRequest";
import { Thread } from "../models/Thread";
export declare class ThreadsOnMergeRequest {
    thread?: Thread;
    threadId: string;
    mergeRequest?: MergeRequest;
    mergeRequestId: string;
    assignedAt: Date;
}
