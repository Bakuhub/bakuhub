import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnTimelineArgs } from "./args/UpdateVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class UpdateVotesOnTimelineResolver {
    updateVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateVotesOnTimelineArgs): Promise<VotesOnTimeline | null>;
}
