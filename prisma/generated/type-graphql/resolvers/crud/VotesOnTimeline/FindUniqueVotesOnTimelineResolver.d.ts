import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnTimelineArgs } from "./args/FindUniqueVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class FindUniqueVotesOnTimelineResolver {
    votesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVotesOnTimelineArgs): Promise<VotesOnTimeline | null>;
}
