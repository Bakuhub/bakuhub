import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
export declare class ReactionOnTimelinesRelationsResolver {
    user(reactionOnTimelines: ReactionOnTimelines, ctx: any): Promise<User>;
    timeline(reactionOnTimelines: ReactionOnTimelines, ctx: any): Promise<Timeline>;
}
