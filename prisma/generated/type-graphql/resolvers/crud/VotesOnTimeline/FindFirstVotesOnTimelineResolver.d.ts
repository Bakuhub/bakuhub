import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnTimelineArgs } from "./args/FindFirstVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class FindFirstVotesOnTimelineResolver {
    findFirstVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: FindFirstVotesOnTimelineArgs): Promise<VotesOnTimeline | null>;
}
