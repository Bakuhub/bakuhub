import { ReactionOnThreadsCountAggregate } from "../outputs/ReactionOnThreadsCountAggregate";
import { ReactionOnThreadsMaxAggregate } from "../outputs/ReactionOnThreadsMaxAggregate";
import { ReactionOnThreadsMinAggregate } from "../outputs/ReactionOnThreadsMinAggregate";
export declare class ReactionOnThreadsGroupBy {
    userId: string;
    threadId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
    _count: ReactionOnThreadsCountAggregate | null;
    _min: ReactionOnThreadsMinAggregate | null;
    _max: ReactionOnThreadsMaxAggregate | null;
}
