import { VotesOnVisionAvgAggregate } from "../outputs/VotesOnVisionAvgAggregate";
import { VotesOnVisionCountAggregate } from "../outputs/VotesOnVisionCountAggregate";
import { VotesOnVisionMaxAggregate } from "../outputs/VotesOnVisionMaxAggregate";
import { VotesOnVisionMinAggregate } from "../outputs/VotesOnVisionMinAggregate";
import { VotesOnVisionSumAggregate } from "../outputs/VotesOnVisionSumAggregate";
export declare class VotesOnVisionGroupBy {
    userId: string;
    visionId: string;
    vote: number;
    createdAt: Date;
    _count: VotesOnVisionCountAggregate | null;
    _avg: VotesOnVisionAvgAggregate | null;
    _sum: VotesOnVisionSumAggregate | null;
    _min: VotesOnVisionMinAggregate | null;
    _max: VotesOnVisionMaxAggregate | null;
}
