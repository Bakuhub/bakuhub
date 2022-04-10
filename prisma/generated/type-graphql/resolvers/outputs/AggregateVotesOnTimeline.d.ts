import { VotesOnTimelineAvgAggregate } from "../outputs/VotesOnTimelineAvgAggregate";
import { VotesOnTimelineCountAggregate } from "../outputs/VotesOnTimelineCountAggregate";
import { VotesOnTimelineMaxAggregate } from "../outputs/VotesOnTimelineMaxAggregate";
import { VotesOnTimelineMinAggregate } from "../outputs/VotesOnTimelineMinAggregate";
import { VotesOnTimelineSumAggregate } from "../outputs/VotesOnTimelineSumAggregate";
export declare class AggregateVotesOnTimeline {
    _count: VotesOnTimelineCountAggregate | null;
    _avg: VotesOnTimelineAvgAggregate | null;
    _sum: VotesOnTimelineSumAggregate | null;
    _min: VotesOnTimelineMinAggregate | null;
    _max: VotesOnTimelineMaxAggregate | null;
}
