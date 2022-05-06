import { GraphQLResolveInfo } from "graphql";
import { CreateVotesOnTimelineArgs } from "./args/CreateVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class CreateVotesOnTimelineResolver {
    createVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateVotesOnTimelineArgs): Promise<VotesOnTimeline>;
}
