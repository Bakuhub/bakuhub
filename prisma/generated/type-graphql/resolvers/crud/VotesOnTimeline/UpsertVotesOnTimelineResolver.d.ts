import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnTimelineArgs } from "./args/UpsertVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class UpsertVotesOnTimelineResolver {
    upsertVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpsertVotesOnTimelineArgs): Promise<VotesOnTimeline>;
}
