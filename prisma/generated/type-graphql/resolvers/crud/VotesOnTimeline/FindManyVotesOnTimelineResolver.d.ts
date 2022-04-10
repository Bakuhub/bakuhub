import { GraphQLResolveInfo } from "graphql";
import { FindManyVotesOnTimelineArgs } from "./args/FindManyVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class FindManyVotesOnTimelineResolver {
    votesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyVotesOnTimelineArgs): Promise<VotesOnTimeline[]>;
}
