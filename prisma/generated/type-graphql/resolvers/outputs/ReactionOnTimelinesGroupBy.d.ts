import { ReactionOnTimelinesCountAggregate } from "../outputs/ReactionOnTimelinesCountAggregate";
import { ReactionOnTimelinesMaxAggregate } from "../outputs/ReactionOnTimelinesMaxAggregate";
import { ReactionOnTimelinesMinAggregate } from "../outputs/ReactionOnTimelinesMinAggregate";
export declare class ReactionOnTimelinesGroupBy {
    userId: string;
    timelineId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
    _count: ReactionOnTimelinesCountAggregate | null;
    _min: ReactionOnTimelinesMinAggregate | null;
    _max: ReactionOnTimelinesMaxAggregate | null;
}
