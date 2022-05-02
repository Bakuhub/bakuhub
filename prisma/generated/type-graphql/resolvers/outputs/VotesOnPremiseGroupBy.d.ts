import { VotesOnPremiseAvgAggregate } from "../outputs/VotesOnPremiseAvgAggregate";
import { VotesOnPremiseCountAggregate } from "../outputs/VotesOnPremiseCountAggregate";
import { VotesOnPremiseMaxAggregate } from "../outputs/VotesOnPremiseMaxAggregate";
import { VotesOnPremiseMinAggregate } from "../outputs/VotesOnPremiseMinAggregate";
import { VotesOnPremiseSumAggregate } from "../outputs/VotesOnPremiseSumAggregate";
export declare class VotesOnPremiseGroupBy {
    userId: string;
    premiseId: string;
    vote: number;
    createdAt: Date;
    updatedAt: Date;
    _count: VotesOnPremiseCountAggregate | null;
    _avg: VotesOnPremiseAvgAggregate | null;
    _sum: VotesOnPremiseSumAggregate | null;
    _min: VotesOnPremiseMinAggregate | null;
    _max: VotesOnPremiseMaxAggregate | null;
}