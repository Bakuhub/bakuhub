import { ReactionOnThreads } from "../models/ReactionOnThreads";
import { ThreadsOnMergeRequest } from "../models/ThreadsOnMergeRequest";
import { ThreadsOnPremise } from "../models/ThreadsOnPremise";
import { ThreadsOnTimeline } from "../models/ThreadsOnTimeline";
import { ThreadsOnVision } from "../models/ThreadsOnVision";
import { User } from "../models/User";
import { ThreadCount } from "../resolvers/outputs/ThreadCount";
export declare class Thread {
    id: string;
    title: string;
    activityDate?: Date | null;
    description?: string | null;
    createdAt: Date;
    reference?: string | null;
    author?: User | null;
    authorId?: string | null;
    parentThreadId?: string | null;
    parentThread?: Thread | null;
    childThreads?: Thread[];
    threadsOnPremise?: ThreadsOnPremise | null;
    threadsOnTimeline?: ThreadsOnTimeline | null;
    threadsOnVision?: ThreadsOnVision | null;
    threadsOnMergeRequest?: ThreadsOnMergeRequest | null;
    ReactionOnThreads?: ReactionOnThreads[];
    _count?: ThreadCount | null;
}
