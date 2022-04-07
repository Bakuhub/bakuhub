import { ThreadsOnMergeRequest } from "../models/ThreadsOnMergeRequest";
import { Vision } from "../models/Vision";
import { MergeRequestCount } from "../resolvers/outputs/MergeRequestCount";
export declare class MergeRequest {
    id: string;
    title: string;
    description?: string | null;
    status: "OPEN" | "CLOSE" | "MERGED";
    vision?: Vision;
    visionId: string;
    threadsOnMergeRequest?: ThreadsOnMergeRequest[];
    _count?: MergeRequestCount | null;
}
