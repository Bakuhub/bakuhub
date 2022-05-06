import { VotesOnThreadAvgAggregate } from "../outputs/VotesOnThreadAvgAggregate";
import { VotesOnThreadCountAggregate } from "../outputs/VotesOnThreadCountAggregate";
import { VotesOnThreadMaxAggregate } from "../outputs/VotesOnThreadMaxAggregate";
import { VotesOnThreadMinAggregate } from "../outputs/VotesOnThreadMinAggregate";
import { VotesOnThreadSumAggregate } from "../outputs/VotesOnThreadSumAggregate";
export declare class VotesOnThreadGroupBy {
    userId: string;
    threadId: string;
    vote: number;
    createdAt: Date;
    updatedAt: Date;
    _count: VotesOnThreadCountAggregate | null;
    _avg: VotesOnThreadAvgAggregate | null;
    _sum: VotesOnThreadSumAggregate | null;
    _min: VotesOnThreadMinAggregate | null;
    _max: VotesOnThreadMaxAggregate | null;
}
