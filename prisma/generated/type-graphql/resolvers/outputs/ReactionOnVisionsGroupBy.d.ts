import { ReactionOnVisionsCountAggregate } from "../outputs/ReactionOnVisionsCountAggregate";
import { ReactionOnVisionsMaxAggregate } from "../outputs/ReactionOnVisionsMaxAggregate";
import { ReactionOnVisionsMinAggregate } from "../outputs/ReactionOnVisionsMinAggregate";
export declare class ReactionOnVisionsGroupBy {
    userId: string;
    visionId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
    _count: ReactionOnVisionsCountAggregate | null;
    _min: ReactionOnVisionsMinAggregate | null;
    _max: ReactionOnVisionsMaxAggregate | null;
}
