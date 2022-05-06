import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class VotesOnTimelineRelationsResolver {
    user(votesOnTimeline: VotesOnTimeline, ctx: any): Promise<User>;
    timeline(votesOnTimeline: VotesOnTimeline, ctx: any): Promise<Timeline>;
}
